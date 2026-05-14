import { siteContent } from "@/lib/content";
import PromptBox from "@/components/PromptBox";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/_core/hooks/useAuth";
import { getLoginUrl } from "@/const";

export default function Home() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const { user, isAuthenticated } = useAuth();

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-50 paper-texture">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white border-b-4 border-black shadow-md">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-black flex items-center justify-center text-white font-bold text-lg">
              ⚙
            </div>
            <h1 className="text-2xl font-bold typewriter tracking-widest">MONTAGEM GRADUAL</h1>
          </div>
          <div className="flex items-center gap-4">
            {isAuthenticated && user ? (
              <>
                <a 
                  href="/files" 
                  className="text-xs typewriter tracking-widest text-gray-600 hover:text-gray-900 transition-colors"
                >
                  ARQUIVOS
                </a>
                <div className="text-xs typewriter tracking-widest text-gray-600">
                  {user.name || user.email}
                </div>
              </>
            ) : (
              <a 
                href={getLoginUrl()} 
                className="text-xs typewriter tracking-widest text-blue-600 hover:text-blue-800"
              >
                LOGIN
              </a>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-white border-b-4 border-black">
        <div className="container max-w-5xl mx-auto text-center animate-fade-in">
          <div className="mb-8">
            <div className="inline-block px-6 py-3 border-4 border-black bg-white mb-6">
              <span className="typewriter text-xs font-bold tracking-widest">EFEITO VISUAL</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-black leading-tight tracking-tight" style={{fontSize: '58px'}}>
              EFEITO<br />MONTAGEM<br />GRADUAL
            </h1>
            
            <p className="text-lg md:text-xl text-gray-800 mb-8 leading-relaxed max-w-3xl mx-auto font-serif">
              {siteContent.hero.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-black text-white font-bold border-3 border-black hover:bg-gray-900 transition-all duration-300 uppercase tracking-wider text-sm">
                Explorar Guia
              </button>
              <button className="px-8 py-3 bg-white text-black font-bold border-3 border-black hover:bg-gray-100 transition-all duration-300 uppercase tracking-wider text-sm">
                Saiba Mais
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Objetivo Section */}
      <section className="py-16 px-4 bg-gray-50 border-b-4 border-black">
        <div className="container max-w-5xl mx-auto">
          <div className="mb-12">
            <h2 className="text-5xl font-bold text-black mb-6 tracking-tight">
              {siteContent.sections.objetivo.title}
            </h2>
            <p className="text-lg text-gray-800 leading-relaxed font-serif">
              {siteContent.sections.objetivo.content}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {siteContent.sections.objetivo.highlights.map((highlight, idx) => (
              <div key={idx} className="p-4 bg-white border-3 border-black">
                <div className="flex items-start gap-3">
                  <span className="text-2xl font-bold text-black flex-shrink-0">▪</span>
                  <p className="text-gray-800 font-serif">{highlight}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ferramentas Section */}
      <section className="py-16 px-4 bg-white border-b-4 border-black">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold text-black mb-12 text-center tracking-tight">
            {siteContent.sections.ferramentas.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {siteContent.sections.ferramentas.tools.map((tool, idx) => (
              <div key={idx} className="bg-gray-50 border-3 border-black p-6">
                <div className="text-5xl mb-4">{tool.icon}</div>
                <h3 className="text-2xl font-bold text-black mb-2 tracking-tight">{tool.name}</h3>
                <p className="text-sm font-bold typewriter tracking-widest mb-3 pb-2 border-b-2 border-black">{tool.role}</p>
                <p className="text-gray-800 text-sm leading-relaxed font-serif">{tool.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Storyboard Section */}
      <section className="py-16 px-4 bg-gray-50 border-b-4 border-black">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold text-black mb-8 tracking-tight">
            {siteContent.sections.storyboard.title}
          </h2>

          <div className="bg-white border-3 border-black p-6 mb-8">
            <p className="text-gray-800 text-lg leading-relaxed font-serif">
              {siteContent.sections.storyboard.whatIs}
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-3xl font-bold text-black mb-6 tracking-tight">Vantagens do Método</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {siteContent.sections.storyboard.advantages.map((adv, idx) => (
                <div key={idx} className="flex gap-3 p-4 bg-white border-2 border-black">
                  <div className="text-black font-bold flex-shrink-0 text-xl">✓</div>
                  <p className="text-gray-800 font-serif">{adv}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-3xl font-bold text-black mb-6 tracking-tight">Estágios da Montagem</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {siteContent.sections.storyboard.stages.map((stage) => (
                <div key={stage.number} className="bg-white border-3 border-black p-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-black text-white flex items-center justify-center flex-shrink-0 font-bold text-lg">
                      {stage.number}
                    </div>
                    <div>
                      <h4 className="font-bold text-black mb-1 tracking-tight">{stage.title}</h4>
                      <p className="text-gray-700 text-sm font-serif">{stage.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border-3 border-black p-6">
            <p className="text-gray-800 leading-relaxed font-serif">
              <span className="font-bold text-black">Intervalo de 6 Segundos: </span>
              {siteContent.sections.storyboard.timing}
            </p>
          </div>
        </div>
      </section>

      {/* Montagem Section */}
      <section className="py-16 px-4 bg-white border-b-4 border-black">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold text-black mb-12 tracking-tight">
            {siteContent.sections.montagem.title}
          </h2>

          <div className="space-y-4">
            {siteContent.sections.montagem.steps.map((step) => (
              <div key={step.number} className="border-3 border-black overflow-hidden">
                <button
                  onClick={() => toggleSection(`step-${step.number}`)}
                  className="w-full flex items-center justify-between p-4 bg-gray-100 hover:bg-gray-200 transition-all duration-300 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-black text-white flex items-center justify-center flex-shrink-0 font-bold text-sm">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="font-bold text-black tracking-tight">{step.title}</h3>
                      <p className="text-sm text-gray-600 font-serif">{step.description}</p>
                    </div>
                  </div>
                  <ChevronDown 
                    className={`w-5 h-5 text-black transition-transform duration-300 flex-shrink-0 ${expandedSection === `step-${step.number}` ? 'rotate-180' : ''}`}
                  />
                </button>

                {expandedSection === `step-${step.number}` && (
                  <div className="p-6 bg-white border-t-3 border-black">
                    {step.prompt && (
                      <PromptBox 
                        prompt={step.prompt}
                        title={`Prompt para ${step.title}`}
                      />
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prompts Section */}
      <section className="py-16 px-4 bg-gray-50 border-b-4 border-black">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold text-black mb-6 tracking-tight">
            {siteContent.sections.prompts.title}
          </h2>
          <p className="text-lg text-gray-800 mb-12 font-serif leading-relaxed">
            {siteContent.sections.prompts.description}
          </p>

          <div className="space-y-6">
            {siteContent.sections.prompts.promptList.map((item) => (
              <div key={item.number} className="border-3 border-black overflow-hidden">
                <div className="p-6 bg-white">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 bg-black text-white flex items-center justify-center flex-shrink-0 font-bold">
                      {item.number}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-black tracking-tight">{item.title}</h3>
                      <p className="text-gray-700 text-sm font-serif">{item.description}</p>
                    </div>
                  </div>
                  
                  <PromptBox 
                    prompt={item.prompt}
                    title={`Prompt ${item.number}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CapCut Section */}
      <section className="py-16 px-4 bg-white border-b-4 border-black">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold text-black mb-6 tracking-tight">
            {siteContent.sections.capcut.title}
          </h2>
          <p className="text-lg text-gray-800 mb-12 font-serif leading-relaxed">
            {siteContent.sections.capcut.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {siteContent.sections.capcut.steps.map((step, idx) => (
              <div key={idx} className="bg-gray-50 border-3 border-black p-6">
                <div className="flex items-start gap-4">
                  <span className="text-3xl flex-shrink-0">🎬</span>
                  <div>
                    <h3 className="font-bold text-black mb-2 tracking-tight">{step.title}</h3>
                    <p className="text-gray-800 text-sm leading-relaxed font-serif">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modo Avançado Section */}
      <section className="py-16 px-4 bg-gray-50 border-b-4 border-black">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold text-black mb-8 tracking-tight">
            {siteContent.sections.modoAvancado.title}
          </h2>
          
          <div className="bg-white border-3 border-black p-6 mb-8">
            <p className="text-gray-800 text-lg leading-relaxed font-serif">
              {siteContent.sections.modoAvancado.introduction}
            </p>
          </div>

          <div className="space-y-6">
            {siteContent.sections.modoAvancado.cenas.map((cena) => (
              <div key={cena.number} className="border-3 border-black overflow-hidden">
                <button
                  onClick={() => toggleSection(`cena-${cena.number}`)}
                  className="w-full flex items-center justify-between p-4 bg-gray-100 hover:bg-gray-200 transition-all duration-300 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-black text-white flex items-center justify-center flex-shrink-0 font-bold text-sm">
                      {cena.number}
                    </div>
                    <div>
                      <h3 className="font-bold text-black tracking-tight">{cena.title}</h3>
                      <p className="text-sm text-gray-600 font-serif">{cena.description}</p>
                    </div>
                  </div>
                  <ChevronDown 
                    className={`w-5 h-5 text-black transition-transform duration-300 flex-shrink-0 ${expandedSection === `cena-${cena.number}` ? 'rotate-180' : ''}`}
                  />
                </button>

                {expandedSection === `cena-${cena.number}` && (
                  <div className="p-6 bg-white border-t-3 border-black">
                    {cena.prompt && (
                      <PromptBox 
                        prompt={cena.prompt}
                        title={`Prompt para ${cena.title}`}
                      />
                    )}
                    {cena.prompts && (
                      <div className="space-y-4">
                        {cena.prompts.map((p, idx) => (
                          <div key={idx}>
                            <h4 className="font-bold text-black mb-2 tracking-tight">Passo {p.step}: {p.title}</h4>
                            <PromptBox 
                              prompt={p.prompt}
                              title={`${cena.title} - Passo ${p.step}`}
                            />
                          </div>
                        ))}
                      </div>
                    )}
                    {cena.examples && (
                      <div className="mt-4 pt-4 border-t-2 border-gray-300">
                        <h4 className="font-bold text-black mb-3 tracking-tight">Exemplos:</h4>
                        <div className="space-y-3">
                          {cena.examples.map((example, idx) => (
                            <PromptBox 
                              key={idx}
                              prompt={example}
                              title={`Exemplo ${idx + 1}`}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vídeos Avançados Section */}
      <section className="py-16 px-4 bg-white border-b-4 border-black">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold text-black mb-6 tracking-tight">
            {siteContent.sections.videosAvancados.title}
          </h2>
          <p className="text-lg text-gray-800 mb-6 font-serif leading-relaxed">
            {siteContent.sections.videosAvancados.description}
          </p>

          <div className="bg-gray-50 border-3 border-black p-6 mb-8">
            <p className="text-gray-800 font-serif leading-relaxed">
              <span className="font-bold text-black">Nota Importante: </span>
              {siteContent.sections.videosAvancados.nota}
            </p>
          </div>

          <div className="space-y-6">
            {siteContent.sections.videosAvancados.cenas.map((cena) => (
              <div key={cena.number} className="border-3 border-black overflow-hidden">
                <button
                  onClick={() => toggleSection(`video-cena-${cena.number}`)}
                  className="w-full flex items-center justify-between p-4 bg-gray-100 hover:bg-gray-200 transition-all duration-300 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-black text-white flex items-center justify-center flex-shrink-0 font-bold text-sm">
                      {cena.number}
                    </div>
                    <div>
                      <h3 className="font-bold text-black tracking-tight">{cena.title}</h3>
                      <p className="text-sm text-gray-600 font-serif">{cena.description}</p>
                    </div>
                  </div>
                  <ChevronDown 
                    className={`w-5 h-5 text-black transition-transform duration-300 flex-shrink-0 ${expandedSection === `video-cena-${cena.number}` ? 'rotate-180' : ''}`}
                  />
                </button>

                {expandedSection === `video-cena-${cena.number}` && (
                  <div className="p-6 bg-white border-t-3 border-black">
                    {cena.dica && (
                      <div className="bg-yellow-50 border-2 border-yellow-200 p-3 mb-4 rounded">
                        <p className="text-sm text-gray-700 font-serif"><span className="font-bold">Dica:</span> {cena.dica}</p>
                      </div>
                    )}
                    <PromptBox 
                      prompt={cena.prompt}
                      title={`Prompt para ${cena.title}`}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-4 border-black py-12 px-4 bg-white">
        <div className="container max-w-5xl mx-auto text-center">
          <p className="text-black font-bold typewriter tracking-widest mb-2">
            GUIA COMPLETO DO EFEITO MONTAGEM GRADUAL
          </p>
          <p className="text-gray-600 text-sm font-serif">
            Criado com IA e tecnologia • 2026
          </p>
        </div>
      </footer>
    </div>
  );
}
