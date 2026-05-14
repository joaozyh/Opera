import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router, protectedProcedure } from "./_core/trpc";
import { z } from "zod";
import { TRPCError } from "@trpc/server";

export const appRouter = router({
  // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  files: router({
    // Upload a file
    upload: protectedProcedure
      .input(
        z.object({
          fileName: z.string().min(1),
          fileData: z.string(), // Base64 encoded file data
          mimeType: z.string(),
          description: z.string().optional(),
          category: z.string().optional(),
          isPublic: z.boolean().default(false),
        })
      )
      .mutation(async ({ input, ctx }) => {
        const { storagePut } = await import("../server/storage");
        const { createFile } = await import("../server/db");

        // Convert base64 to buffer
        const buffer = Buffer.from(input.fileData, "base64");
        const fileSize = buffer.length;

        // Generate unique file key
        const timestamp = Date.now();
        const randomSuffix = Math.random().toString(36).substring(2, 8);
        const fileKey = `files/${ctx.user.id}/${timestamp}-${randomSuffix}-${input.fileName}`;

        // Upload to S3
        const { url } = await storagePut(fileKey, buffer, input.mimeType);

        // Save metadata to database
        const result = await createFile({
          userId: ctx.user.id,
          fileName: input.fileName,
          fileKey,
          fileUrl: url,
          mimeType: input.mimeType,
          fileSize,
          description: input.description,
          category: input.category,
          isPublic: input.isPublic ? 1 : 0,
        });

        return {
          success: true,
          fileUrl: url,
          fileKey,
        };
      }),

    // Get user's files
    list: protectedProcedure.query(async ({ ctx }) => {
      const { getUserFiles } = await import("../server/db");
      return await getUserFiles(ctx.user.id);
    }),

    // Delete a file
    delete: protectedProcedure
      .input(z.object({ fileId: z.number() }))
      .mutation(async ({ input, ctx }) => {
        const { getFileById, deleteFile } = await import("../server/db");

        const file = await getFileById(input.fileId);
        if (!file) {
          throw new TRPCError({ code: "NOT_FOUND", message: "File not found" });
        }

        // Check ownership
        if (file.userId !== ctx.user.id && ctx.user.role !== "admin") {
          throw new TRPCError({
            code: "FORBIDDEN",
            message: "You do not have required permission (10002)",
          });
        }

        await deleteFile(input.fileId);
        return { success: true };
      }),

    // Get file details
    get: protectedProcedure
      .input(z.object({ fileId: z.number() }))
      .query(async ({ input, ctx }) => {
        const { getFileById } = await import("../server/db");

        const file = await getFileById(input.fileId);
        if (!file) {
          throw new TRPCError({ code: "NOT_FOUND", message: "File not found" });
        }

        // Check access
        if (!file.isPublic && file.userId !== ctx.user.id && ctx.user.role !== "admin") {
          throw new TRPCError({
            code: "FORBIDDEN",
            message: "You do not have required permission (10002)",
          });
        }

        return file;
      }),
  }),
});

export type AppRouter = typeof appRouter;
