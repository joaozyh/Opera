import { useState, useRef } from "react";
import { trpc } from "@/lib/trpc";
import { Upload, Trash2, Download } from "lucide-react";
import { toast } from "sonner";

interface FileUploaderProps {
  category?: string;
  onUploadSuccess?: () => void;
}

export default function FileUploader({ category, onUploadSuccess }: FileUploaderProps) {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const uploadMutation = trpc.files.upload.useMutation();
  const listQuery = trpc.files.list.useQuery();
  const deleteMutation = trpc.files.delete.useMutation();

  const handleFileSelect = async (file: File) => {
    if (file.size > 50 * 1024 * 1024) {
      toast.error("Arquivo muito grande. Máximo 50MB.");
      return;
    }

    const reader = new FileReader();
    reader.onload = async (e) => {
      const base64 = (e.target?.result as string).split(",")[1];

      try {
        await uploadMutation.mutateAsync({
          fileName: file.name,
          fileData: base64,
          mimeType: file.type,
          category: category,
          isPublic: false,
        });

        toast.success("Arquivo enviado com sucesso!");
        listQuery.refetch();
        onUploadSuccess?.();
      } catch (error) {
        toast.error("Erro ao enviar arquivo");
        console.error(error);
      }
    };

    reader.readAsDataURL(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleDelete = async (fileId: number) => {
    if (confirm("Tem certeza que deseja deletar este arquivo?")) {
      try {
        await deleteMutation.mutateAsync({ fileId });
        toast.success("Arquivo deletado com sucesso!");
        listQuery.refetch();
      } catch (error) {
        toast.error("Erro ao deletar arquivo");
        console.error(error);
      }
    }
  };

  return (
    <div className="space-y-6">
      {/* Upload Area */}
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`border-4 border-dashed border-black p-8 text-center cursor-pointer transition-all ${
          isDragging ? "bg-gray-100" : "bg-white hover:bg-gray-50"
        }`}
      >
        <Upload className="w-12 h-12 mx-auto mb-4 text-black" />
        <h3 className="text-lg font-bold text-black mb-2">Arrastar arquivo aqui</h3>
        <p className="text-gray-600 mb-4 text-sm font-serif">ou clique para selecionar</p>
        <input
          ref={fileInputRef}
          type="file"
          className="hidden"
          onChange={(e) => {
            if (e.target.files?.[0]) {
              handleFileSelect(e.target.files[0]);
            }
          }}
        />
        <button
          onClick={() => fileInputRef.current?.click()}
          className="px-6 py-2 bg-black text-white font-bold border-2 border-black hover:bg-gray-900 transition-all uppercase tracking-wider text-sm"
          disabled={uploadMutation.isPending}
        >
          {uploadMutation.isPending ? "Enviando..." : "Selecionar Arquivo"}
        </button>
      </div>

      {/* Files List */}
      {listQuery.data && listQuery.data.length > 0 && (
        <div className="border-3 border-black p-6 bg-gray-50">
          <h3 className="text-2xl font-bold text-black mb-4 tracking-tight">Meus Arquivos</h3>
          <div className="space-y-3">
            {listQuery.data.map((file) => (
              <div
                key={file.id}
                className="flex items-center justify-between p-4 bg-white border-2 border-black"
              >
                <div className="flex-1">
                  <p className="font-bold text-black">{file.fileName}</p>
                  <p className="text-xs text-gray-600 font-serif">
                    {(file.fileSize / 1024).toFixed(2)} KB • {file.mimeType}
                  </p>
                  {file.description && (
                    <p className="text-sm text-gray-700 mt-1">{file.description}</p>
                  )}
                </div>
                <div className="flex gap-2">
                  <a
                    href={file.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-black text-white hover:bg-gray-900 transition-all"
                    title="Download"
                  >
                    <Download className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => handleDelete(file.id)}
                    className="p-2 bg-red-600 text-white hover:bg-red-700 transition-all"
                    title="Deletar"
                    disabled={deleteMutation.isPending}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Empty State */}
      {listQuery.data && listQuery.data.length === 0 && !uploadMutation.isPending && (
        <div className="text-center p-8 bg-gray-50 border-2 border-black">
          <p className="text-gray-600 font-serif">Nenhum arquivo enviado ainda</p>
        </div>
      )}
    </div>
  );
}
