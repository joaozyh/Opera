import { useAuth } from "@/_core/hooks/useAuth";
import FileUploader from "@/components/FileUploader";
import { getLoginUrl } from "@/const";
import { useLocation } from "wouter";

export default function FileManager() {
  const { isAuthenticated } = useAuth();
  const [, setLocation] = useLocation();

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-50 paper-texture">
        <nav className="sticky top-0 z-50 bg-white border-b-4 border-black shadow-md">
          <div className="container flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-black flex items-center justify-center text-white font-bold text-lg">
                📁
              </div>
              <h1 className="text-2xl font-bold typewriter tracking-widest">GERENCIADOR DE ARQUIVOS</h1>
            </div>
          </div>
        </nav>

        <section className="py-16 px-4 bg-white border-b-4 border-black">
          <div className="container max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-black mb-6 tracking-tight">Acesso Restrito</h2>
            <p className="text-lg text-gray-800 mb-8 font-serif">
              Você precisa fazer login para acessar o gerenciador de arquivos.
            </p>
            <a
              href={getLoginUrl()}
              className="inline-block px-8 py-3 bg-black text-white font-bold border-3 border-black hover:bg-gray-900 transition-all duration-300 uppercase tracking-wider text-sm"
            >
              Fazer Login
            </a>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-50 paper-texture">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white border-b-4 border-black shadow-md">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-black flex items-center justify-center text-white font-bold text-lg">
              📁
            </div>
            <h1 className="text-2xl font-bold typewriter tracking-widest">GERENCIADOR DE ARQUIVOS</h1>
          </div>
          <button
            onClick={() => setLocation("/")}
            className="text-xs typewriter tracking-widest text-gray-600 hover:text-gray-900 transition-colors"
          >
            ← Voltar ao Guia
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <section className="py-16 px-4 bg-white border-b-4 border-black">
        <div className="container max-w-3xl mx-auto">
          <div className="mb-12">
            <h2 className="text-5xl font-bold text-black mb-6 tracking-tight">
              Seus Arquivos
            </h2>
            <p className="text-lg text-gray-800 leading-relaxed font-serif">
              Faça upload de imagens, vídeos e documentos para seus projetos de Efeito Montagem Gradual. 
              Todos os arquivos são armazenados com segurança na nuvem.
            </p>
          </div>

          <FileUploader category="project-files" />
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 px-4 bg-gray-50 border-b-4 border-black">
        <div className="container max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border-3 border-black">
              <h3 className="text-2xl font-bold text-black mb-3 tracking-tight">📤 Upload</h3>
              <p className="text-gray-800 font-serif text-sm leading-relaxed">
                Arraste seus arquivos ou clique para selecionar. Suporte para imagens, vídeos e documentos até 50MB.
              </p>
            </div>

            <div className="p-6 bg-white border-3 border-black">
              <h3 className="text-2xl font-bold text-black mb-3 tracking-tight">🔒 Segurança</h3>
              <p className="text-gray-800 font-serif text-sm leading-relaxed">
                Seus arquivos são privados por padrão. Você controla quem pode acessar cada arquivo.
              </p>
            </div>

            <div className="p-6 bg-white border-3 border-black">
              <h3 className="text-2xl font-bold text-black mb-3 tracking-tight">⚡ Rápido</h3>
              <p className="text-gray-800 font-serif text-sm leading-relaxed">
                Upload e download instantâneos com URLs diretas para compartilhamento fácil.
              </p>
            </div>

            <div className="p-6 bg-white border-3 border-black">
              <h3 className="text-2xl font-bold text-black mb-3 tracking-tight">♾️ Ilimitado</h3>
              <p className="text-gray-800 font-serif text-sm leading-relaxed">
                Armazene quantos arquivos precisar. Perfeito para projetos de qualquer tamanho.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-4 border-black py-12 px-4 bg-white">
        <div className="container max-w-5xl mx-auto text-center">
          <p className="text-black font-bold typewriter tracking-widest mb-2">
            GERENCIADOR DE ARQUIVOS
          </p>
          <p className="text-gray-600 text-sm font-serif">
            Parte do Guia Completo do Efeito Montagem Gradual
          </p>
        </div>
      </footer>
    </div>
  );
}
