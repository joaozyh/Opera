// Estrutura de dados para o conteúdo do site
export const siteContent = {
  hero: {
    title: "Efeito Montagem Gradual",
    subtitle: "Um guia completo sobre como criar animações de montagem de carros com IA",
    description: "Aprenda a técnica de montagem gradual usando ChatGPT, Gemini, Hailou.ai e CapCut para criar efeitos visuais impressionantes inspirados em Transformers.",
  },

  sections: {
    objetivo: {
      title: "Objetivo",
      content: "Apresentar aos alunos o efeito visual 'Montagem Gradual', onde as partes do carro surgem e se conectam aos poucos, formando o carro completo. Esse efeito é inspirado pela ideia de transformação, similar ao que vemos nos filmes 'Transformers', mas com um enfoque único, onde o carro é montado peça por peça de forma gradual.",
      highlights: [
        "Animação onde um carro se monta aos poucos",
        "Rodas surgem primeiro, seguidas do chassi",
        "Motor e estrutura aparecem gradualmente",
        "Lataria completa a montagem final",
        "Efeito visual impressionante de construção e transformação"
      ]
    },

    ferramentas: {
      title: "Ferramentas de IA Utilizadas",
      description: "Conheça as ferramentas essenciais para criar o efeito de montagem gradual:",
      tools: [
        {
          name: "ChatGPT",
          role: "Para Gerar Prompts",
          description: "Utilizado para gerar prompts criativos e técnicos que guiam o processo de criação das imagens e animações. Através de prompts detalhados, conseguimos orientar as ferramentas de IA para gerar o conteúdo visual necessário para cada etapa da montagem do carro.",
          icon: "🤖"
        },
        {
          name: "Gemini",
          role: "Para Alterar Imagens e Criar Frames",
          description: "Responsável por alterar imagens existentes e criar frames que não estavam disponíveis inicialmente. A partir de imagens base, o Gemini gera as partes do carro (chassi, motor, lataria) de forma que se encaixem perfeitamente no processo de transformação gradual.",
          icon: "🎨"
        },
        {
          name: "Hailou.ai",
          role: "Para Animar e Transformar em Vídeo",
          description: "Utilizado para animar os frames criados no Gemini e transformar tudo em um vídeo contínuo. Permite a criação de animações fluídas entre as partes do carro, com transições naturais e visuais interessantes.",
          icon: "🎬"
        },
        {
          name: "CapCut",
          role: "Para Unir os Vídeos",
          description: "Após a criação e animação dos vídeos, o CapCut une as diferentes partes e cria o vídeo final. Ajusta a sequência das animações, adiciona transições suaves e refina o ritmo do vídeo.",
          icon: "✂️"
        }
      ]
    },

    storyboard: {
      title: "Método Storyboard",
      description: "O storyboard é uma ferramenta essencial no planejamento de animações. Funciona como um guia visual que descreve, quadro a quadro, os momentos-chave de uma animação.",
      
      whatIs: "O storyboard é uma sequência de imagens que representam cada etapa do processo de montagem gradual. Cada imagem no storyboard representa uma etapa do processo, e o intervalo entre essas imagens é de 6 segundos, dando uma sensação de tempo suficiente para cada parte aparecer e se conectar de forma gradual.",
      
      advantages: [
        "Controle muito maior sobre o resultado final da animação",
        "Possibilidade de ajustar e aperfeiçoar cada etapa antes de passar para a movimentação dos frames",
        "Maior liberdade criativa e evita surpresas no processo de animação final",
        "Controle mais preciso sobre cada transição"
      ],

      stages: [
        {
          number: 1,
          title: "Imagem das 4 rodas",
          description: "Primeira fase - apenas as rodas aparecem na cena"
        },
        {
          number: 2,
          title: "Rodas + Chassi",
          description: "Segunda fase - as rodas e o chassi do carro começam a surgir"
        },
        {
          number: 3,
          title: "Motor + Estrutura",
          description: "Terceira fase - o motor e a estrutura do carro vão se formando"
        },
        {
          number: 4,
          title: "Lataria Completa",
          description: "Quarta fase - a lataria completa a montagem do veículo"
        }
      ],

      timing: "Intervalo de 6 Segundos: Para dar uma sensação de fluidez e um ritmo natural, as imagens são espaçadas por um intervalo de 6 segundos no storyboard. Esse intervalo é suficiente para que cada parte do carro tenha tempo para aparecer e ser integrada à parte anterior de maneira gradual."
    },

    montagem: {
      title: "Montagem do Storyboard no Gemini",
      description: "Processo de criação do storyboard usando o Gemini com a ferramenta Nano Banana para remover partes específicas da imagem.",
      
      steps: [
        {
          number: 1,
          title: "Preparando a Conversa Inicial com o ChatGPT",
          description: "O primeiro passo é fazer o ChatGPT entender que você está começando o processo de criação dos prompts para gerar imagens no Gemini com a ferramenta Nano Banana.",
          prompt: "Oi ChatGPT, eu estou criando uma série de imagens usando a ferramenta Nano Banana do Gemini, e para isso preciso de prompts detalhados para modificar as imagens passo a passo. O objetivo é gerar imagens em que vamos alterar partes específicas, começando com um carro e ajustando sua estrutura. Vamos trabalhar de forma incremental e preciso de sua ajuda para formular os prompts corretamente."
        },
        {
          number: 2,
          title: "Remover o Carro e Deixar Apenas o Fundo",
          description: "Primeiro passo é remover o carro da imagem e deixar apenas o fundo intacto.",
          prompt: "Remover completamente o carro da imagem, deixando apenas o fundo intacto. Certifique-se de que o fundo da imagem, incluindo qualquer detalhe de ambiente (como estrada, paisagem ou outros elementos visuais), permaneça exatamente como está, sem distorções ou alterações. O carro deve desaparecer completamente da cena, sem deixar vestígios, sombras ou qualquer outra marca que sugira sua presença."
        },
        {
          number: 3,
          title: "Manter os Pneus e Remover o Carro",
          description: "Para o próximo passo, manter os pneus na cena, mas remover completamente o carro.",
          prompt: "Remova completamente o carro da imagem, mas mantenha todos os quatro pneus visíveis na cena. Os pneus devem permanecer na mesma posição em que estavam, como se estivessem sozinhos na imagem. O restante do carro, incluindo a carroceria, chassi e outras partes, deve ser completamente removido. Certifique-se de que os pneus estejam posicionados corretamente no espaço, sem alterações nas suas proporções ou alinhamento."
        },
        {
          number: 4,
          title: "Remover a Lataria e Deixar Apenas o Chassi",
          description: "Remover toda a lataria do carro, mantendo o chassi visível.",
          prompt: "Remova toda a lataria do carro (portas, capô, teto e demais partes da carroceria), deixando apenas o chassi inferior exposto e visível. O chassi inferior deve ser o único componente restante, com a parte de baixo do veículo visível, sem incluir o motor, a elétrica ou qualquer outra parte da estrutura interna do carro. A estrutura do carro, incluindo os suportes, suspensão e outros componentes internos, deve permanecer intacta. A lataria deve ser removida completamente, sem deixar rastros ou vestígios de qualquer parte da carroceria. Apenas a parte de baixo que sustenta o carro, ou seja, o chassi inferior, deve ser visível, sem outras partes do carro aparecendo na cena."
        },
        {
          number: 5,
          title: "Adicionar o Motor ao Chassi",
          description: "Adicionar o motor à imagem de forma realista.",
          prompt: "Mantenha o chassi do carro, sem lataria, e adicione o motor na parte de trás do chassi, considerando que o carro é um modelo esportivo. O motor deve ser posicionado de forma precisa, na parte traseira do chassi, como em carros esportivos de motor traseiro. O motor deve ser detalhado, com todas as suas partes visíveis (como o bloco do motor, sistema de escape e outros componentes importantes), mantendo a proporção e perspectiva corretas em relação ao chassi. O motor deve ser ajustado para parecer que foi montado de forma realista, sem parecer deslocado ou fora de lugar."
        },
        {
          number: 6,
          title: "Adicionar a Estrutura do Carro",
          description: "Adicionar a estrutura interna do carro sem a lataria.",
          prompt: "Mantenha o chassi e o motor do carro, e adicione a estrutura do carro (como suportes, armações e outras partes da estrutura interna), mas sem a lataria. A estrutura do carro deve ser posicionada de forma precisa, com todos os componentes estruturais visíveis, como barras de reforço, suportes e outras peças metálicas que fazem parte da base do veículo. A lataria, incluindo portas, capô e outros elementos externos, não deve ser incluída. A estrutura deve parecer integrada ao chassi e ao motor, sem distorções nas proporções ou alinhamento."
        }
      ]
    },

    prompts: {
      title: "Gerando os Prompts para Animação",
      description: "Criar prompts em formato JSON para serem usados no Veo 3 ou Hailou.ai, que animarão os frames e transformarão as imagens estáticas em um vídeo fluído.",
      
      promptList: [
        {
          number: 0,
          title: "Aparecendo o Pneu",
          description: "Animação onde as quatro rodas aparecem gradualmente na cena",
          prompt: `{
  "animation": {
    "start_frame": "image_with_empty_scene",
    "end_frame": "image_with_wheels_in_place",
    "animation_type": "gradual_appearance",
    "camera": "static",
    "description": "Animate the gradual appearance of all four wheels, coming from the same location in the scene, as if they were part of an invisible car. The wheels should roll into view from a central point, one by one, and stop in their correct positions, forming a complete set of wheels. The camera remains static throughout the entire animation, focusing on the wheels as they enter from the same direction and settle in place."
  }
}`
        },
        {
          number: 1,
          title: "Chassi e Pneus",
          description: "Animação onde diversas partes metálicas surgem gradualmente para formar o chassi",
          prompt: `{
  "animation": {
    "start_frame": "image_with_wheel_in_place",
    "end_frame": "image_with_wheel_and_chassis",
    "animation_type": "gradual_appearance",
    "camera": "static",
    "description": "Animate the gradual appearance of various metallic parts coming from inside the wheel, gradually assembling to form a car chassis. The camera remains static while the animation focuses on the gradual emergence and assembly of the chassis components."
  }
}`
        },
        {
          number: 2,
          title: "Adicionando o Motor",
          description: "Animação onde o motor é adicionado gradualmente ao chassi",
          prompt: `{
  "animation": {
    "start_frame": "image_with_wheel_and_chassis",
    "end_frame": "image_with_motor_in_final_position",
    "animation_type": "gradual_appearance",
    "camera": "static",
    "description": "Animate the gradual addition of the motor, ensuring it appears directly in the correct position within the chassis from the start. As the motor parts emerge, the chassis will adjust around it, flexing and reshaping to fit perfectly. The motor will assemble piece by piece, starting at its final position, with the camera remaining static to capture the movement of both the motor and the chassis as it adapts to ensure a proper fit."
  }
}`
        },
        {
          number: 3,
          title: "Adicionando a Estrutura",
          description: "Animação onde os componentes estruturais do carro se montam gradualmente",
          prompt: `{
  "animation": {
    "start_frame": "image_with_motor_in_place",
    "end_frame": "image_with_structure_in_place",
    "animation_type": "gradual_appearance",
    "camera": "static",
    "description": "Animate the gradual assembly of the car's structural components. The structure appears piece by piece, with parts emerging, folding, and fitting into place, creating a technological and robotic appearance. The camera remains static while the structural components assemble."
  }
}`
        },
        {
          number: 4,
          title: "Frame Final - Lataria Completa",
          description: "Transformação final onde a carroceria do carro se monta gradualmente",
          prompt: `{
  "animation": {
    "start_frame": "image_with_structure_in_place",
    "end_frame": "final_image_with_completed_car",
    "animation_type": "gradual_appearance",
    "camera": "static",
    "description": "Animate the final transformation, where the car's body and all its components gradually assemble. The camera remains static while the robotic arms and mechanisms appear, placing the body panels and completing the car assembly."
  }
}`
        }
      ]
    },

    capcut: {
      title: "Unindo os Vídeos com CapCut",
      description: "Processo de unir os vídeos gerados, adicionando transições e ajustes finais para criar o vídeo completo da animação.",
      
      steps: [
        {
          title: "Importando os Vídeos para o CapCut",
          description: "Primeiro, importe todos os vídeos gerados no Veo 3 para o CapCut. Esses vídeos já devem estar com as animações intercaladas entre as imagens principais."
        },
        {
          title: "Organizando os Vídeos na Linha do Tempo",
          description: "Coloque os vídeos gerados na linha do tempo do CapCut, começando pela animação do chassi e pneus, seguida pela adição do motor, estrutura e, finalmente, a lataria. A ordem dos vídeos deve seguir a sequência natural da montagem gradual."
        },
        {
          title: "Ajustar a Duração de Cada Clip",
          description: "Ajuste a duração de cada clip conforme necessário para garantir que cada parte da animação dure os 6 segundos definidos anteriormente."
        },
        {
          title: "Adicionando Transições Suaves",
          description: "Adicione transições suaves entre os vídeos para garantir que as mudanças de uma parte para outra não sejam abruptas. O CapCut oferece várias opções de transições, como desvanecimentos, cortes rápidos e transições fluidas."
        },
        {
          title: "Ajustes Finais no Vídeo",
          description: "Adicione efeitos de áudio (trilha sonora ou efeitos de som), ajustes de cor, brilho, contraste e filtros para harmonizar as imagens e dar um acabamento profissional."
        },
        {
          title: "Exportando o Vídeo Final",
          description: "Após organizar a sequência e ajustar todos os detalhes finais, exporte o vídeo no formato desejado (geralmente em MP4 para alta qualidade)."
        }
      ]
    },

    modoAvancado: {
      title: "Modo Avançado: Trabalhando com Detalhes do Veículo",
      description: "No modo avançado, trabalhamos com a dimensão de profundidade (eixo Z) para aproximar a câmera e destacar detalhes específicos do carro.",
      
      introduction: "No modo avançado, vamos trabalhar com uma dimensão que não foi utilizada no modo básico. Como já é possível perceber, a câmera está montada em um tripé, o que faz com que ela não se mova ao longo do eixo Z, que corresponde à profundidade. Nesse modo, o eixo de profundidade será o principal foco de trabalho e execução. Ao usarmos esse eixo, conseguimos aproximar a câmera do veículo e destacar detalhes ou partes isoladas do carro, algo que é mais difícil de realizar quando a câmera está fixa e mostrando o veículo inteiro.",

      cenas: [
        {
          number: 1,
          title: "Cena 1 - Local Vazio",
          description: "Adicionar a imagem da Cena 1 do efeito básico e gerar um novo ângulo para o cenário.",
          prompt: "Gere uma imagem desse cenário mostrando um novo ângulo, posicione a câmera de forma mais baixa e ampla, aumentando a visibilidade do horizonte."
        },
        {
          number: 2,
          title: "Cena 2 - Aparecendo o Pneu",
          description: "Gerar as quatro rodas no cenário vazio com movimento de aproximação.",
          prompts: [
            {
              step: 1,
              title: "Gerar as Rodas",
              prompt: "Gere uma imagem com as quatro rodas nesse local vazio, posicione-as de maneira que lembre a disposição real de um carro, mantendo o padrão das rodas."
            },
            {
              step: 2,
              title: "Adicionar Zoom In",
              prompt: "Adicione um Zoom in, aproximando mais das rodas no cenário."
            }
          ]
        },
        {
          number: 3,
          title: "Cena 3 - Chassi e Pneus",
          description: "Gerar o chassi e manter a continuidade das cenas com movimento de aproximação.",
          prompts: [
            {
              step: 1,
              title: "Adicionar o Chassi",
              prompt: "Adicione o chassi entre as quatro rodas, mantendo a consistência visual da imagem. Posicione-o de maneira que encaixe perfeitamente."
            },
            {
              step: 2,
              title: "Adicionar Zoom In",
              prompt: "Adicione um Zoom in, aproximando mais do chassi."
            }
          ]
        },
        {
          number: 4,
          title: "Cena 4 - Adicionando o Motor",
          description: "Focar nos detalhes do motor usando Close-up para destacar elementos específicos.",
          prompt: "Gere uma imagem em Close-up mostrando o motor V8 biturbo de 4.0 litros que está dentro do chassi."
        },
        {
          number: 5,
          title: "Cena 5 - Adicionando a Estrutura",
          description: "Mostrar a parte interna da estrutura do carro com detalhes consistentes.",
          prompt: "Gere uma imagem Close-up mostrando a parte inferior da estrutura do carro, com detalhes consistentes com a imagem de referência."
        },
        {
          number: 6,
          title: "Cena 6 - Lataria Completa",
          description: "Usar criatividade para mostrar todos os detalhes desejados da lataria completa.",
          prompt: "Gere uma imagem em Close-up (da parte do carro).",
          examples: [
            "Gere uma imagem mostrando um Close-up do farol.",
            "Gere uma imagem mostrando um Close-up da porta."
          ]
        },
        {
          number: 7,
          title: "Cena 7 - Lataria Completa Traseira",
          description: "Mostrar a parte traseira do carro que não estava visível na versão básica.",
          prompt: "Gere uma imagem da McLaren 720S laranja no campo verde, focando na traseira, como mostrado na imagem de referência."
        }
      ]
    },

    videosAvancados: {
      title: "Criando os Vídeos a Partir das Imagens (Modo Avançado)",
      description: "Usar as imagens geradas para criar vídeos mantendo a lógica do modo básico com ajustes importantes nos prompts de animação.",
      
      nota: "Para facilitar, os prompts de animação podem ser os mesmos do modo básico, com apenas uma alteração: No modo básico, o prompt foi criado com câmera static. Aqui, você vai remover essa informação do prompt, e escolher o movimento de câmera diretamente nos parâmetros do Hailuo (ex.: zoom, dolly etc.).",

      cenas: [
        {
          number: 1,
          title: "Cena: Aparecendo o Pneu",
          description: "Animação em que as quatro rodas aparecem gradualmente na cena.",
          dica: "Como é possível perceber eu apenas removo a linha (\"camera\": \"static\",).",
          prompt: `{
  "animation": {
    "start_frame": "image_with_empty_scene",
    "end_frame": "image_with_wheels_in_place",
    "animation_type": "gradual_appearance",
    "description": "Animate the gradual appearance of all four wheels, emerging from the same general area in the scene as if they were part of an invisible car. The wheels should roll into view one by one and stop in their correct positions, forming a complete set of wheels. Keep the scene consistent with the reference frames; camera movement will be defined using Hailuo parameters."
  }
}`
        },
        {
          number: 2,
          title: "Cena: Chassi e Pneus",
          description: "Animação em que partes metálicas surgem gradualmente para formar o chassi.",
          prompt: `{
  "animation": {
    "start_frame": "image_with_wheel_in_place",
    "end_frame": "image_with_wheel_and_chassis",
    "animation_type": "gradual_appearance",
    "description": "Animate the gradual appearance of metallic components that emerge and assemble to form the car chassis, starting from the wheel setup and building the structure step by step. The parts should align naturally and connect realistically, maintaining visual consistency with the reference frames; camera movement will be defined using Hailuo parameters."
  }
}`
        },
        {
          number: 3,
          title: "Prompt para ChatGPT - Criando Prompts Universais",
          description: "Pergunta para ChatGPT para gerar prompts universais de desmontagem.",
          prompt: "Preciso criar prompts em inglês para serem usados no Hailuo, uma IA geradora de vídeos. O prompt precisa ser universal, funcionando para todas as cenas que envolvem o efeito de montagem gradual das partes de um carro. Eu tenho imagens de referência em close-up de vários detalhes do carro, que serão mostrados ao longo do vídeo completo. Como o vídeo terá várias cenas com diferentes partes do carro, preciso de um prompt de animação de montagem gradual que seja universal, sem citar peças específicas. Além disso, o efeito precisa ser invertido: vou usar a imagem de referência como frame final, mas também vou utilizá-la como frame inicial. Portanto, em vez de montagem gradual, o efeito deve ser de desmontagem gradual (montagem reversa). As peças devem começar a se soltar, desencaixar e se retrair para dentro da estrutura do carro, revelando a parte interna. A lataria deve desaparecer completamente, com movimentos realistas de peças, efeitos de desconexão, encaixes se desfazendo, estrutura se compactando e todos os efeitos visuais relacionados a uma desmontagem mecânica realista. O resultado deve mostrar apenas a estrutura interna do carro, mantendo consistência total com a imagem de referência."
        },
        {
          number: 4,
          title: "Prompt Universal para Close-ups e Desmontagem",
          description: "Prompt universal para serem usados no Hailuo, funcionando para todas as cenas que envolvem o efeito de montagem gradual das partes de um carro.",
          prompt: `"Create an animated sequence that begins with the fully assembled car as shown in the reference frame (close-up). Perform a gradual reverse-assembly disassembly: the visible exterior components should detach with realistic mechanical separation, slight unlocking movements, and smooth retraction inward toward the vehicle's internal frame. Each element should slide, fold, and compact naturally as if being pulled back into the structure. The bodywork must completely disappear, revealing the internal structural elements and core components underneath. Maintain consistent lighting, materials, reflections, and perspective with the reference image, without changing the car model or adding new elements. Emphasize clean, believable disconnection and retraction effects throughout the dismantling process."`
        }
      ]
    }
  }
};

export type SiteContent = typeof siteContent;
