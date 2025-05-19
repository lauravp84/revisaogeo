const questions = {
  topic1: [
    {
      id: 1,
      type: "multiple",
      question: "No contexto da administração da produção, qual objetivo de desempenho está relacionado a \"fazer as coisas certas\", evitando erros e retrabalho?",
      options: [
        "Velocidade",
        "Confiabilidade",
        "Qualidade",
        "Flexibilidade",
        "Custo"
      ],
      answer: 2, // índice da opção correta (0-based)
      explanation: "A qualidade está relacionada a 'fazer as coisas certas', evitando erros e retrabalho. Isso garante que os produtos ou serviços atendam às especificações e necessidades dos clientes."
    },
    {
      id: 2,
      type: "multiple",
      question: "Segundo os anexos, qual alternativa melhor exemplifica a importância da velocidade em hospitais?",
      options: [
        "Reduzir o custo dos insumos",
        "Minimizar o tempo entre o pedido de tratamento e sua efetivação",
        "Garantir cortesia dos funcionários",
        "Aumentar a variedade de exames",
        "Diminuir o tempo de permanência nas filas"
      ],
      answer: 1,
      explanation: "A velocidade em hospitais é melhor exemplificada pela minimização do tempo entre o pedido de tratamento e sua efetivação, garantindo atendimento rápido aos pacientes."
    },
    {
      id: 3,
      type: "multiple",
      question: "De acordo com o conceito de confiabilidade nos anexos, qual situação abaixo demonstra esse objetivo em uma empresa de ônibus?",
      options: [
        "Introdução de novas rotas",
        "Cumprimento rigoroso dos horários anunciados",
        "Redução do custo de manutenção",
        "Aumento da variedade de veículos",
        "Implementação de novos serviços digitais"
      ],
      answer: 1,
      explanation: "A confiabilidade em uma empresa de ônibus é demonstrada pelo cumprimento rigoroso dos horários anunciados, garantindo que os serviços sejam prestados conforme prometido."
    },
    {
      id: 4,
      type: "multiple",
      question: "No modelo de transformação apresentado nos anexos, qual alternativa representa corretamente um recurso transformado em uma fábrica de carros?",
      options: [
        "Equipamentos de montagem",
        "Funcionários",
        "Chapas de aço",
        "Sistemas de informação",
        "Layout da fábrica"
      ],
      answer: 2,
      explanation: "As chapas de aço são recursos transformados em uma fábrica de carros, pois são materiais que sofrem alteração durante o processo produtivo para se tornarem parte do produto final."
    },
    {
      id: 5,
      type: "multiple",
      question: "Segundo os anexos, qual das alternativas melhor exemplifica flexibilidade de entrega em supermercados?",
      options: [
        "Ampla variedade de bens estocados",
        "Capacidade de ajustar o número de clientes atendidos",
        "Habilidade de obter itens fora de estoque ocasionalmente",
        "Introdução de novos bens ou promoções",
        "Redução do tempo de permanência nas filas"
      ],
      answer: 2,
      explanation: "A flexibilidade de entrega em supermercados é exemplificada pela habilidade de obter itens fora de estoque ocasionalmente, demonstrando capacidade de adaptação às necessidades dos clientes."
    },
    {
      id: 6,
      type: "truefalse",
      question: "A qualidade é considerada a principal influência na satisfação do cliente.",
      answer: true,
      explanation: "Verdadeiro. A qualidade é considerada a principal influência na satisfação do cliente, pois está diretamente relacionada à percepção de valor e atendimento das expectativas."
    },
    {
      id: 7,
      type: "truefalse",
      question: "A velocidade operacional não tem impacto sobre o nível de estoques nas operações produtivas.",
      answer: false,
      explanation: "Falso. A velocidade operacional tem impacto direto sobre o nível de estoques, pois operações mais rápidas geralmente permitem trabalhar com estoques menores."
    },
    {
      id: 8,
      type: "truefalse",
      question: "Confiabilidade nas operações pode gerar economia de tempo e dinheiro.",
      answer: true,
      explanation: "Verdadeiro. A confiabilidade nas operações gera economia de tempo e dinheiro ao reduzir imprevistos, retrabalhos e necessidade de estoques de segurança."
    },
    {
      id: 9,
      type: "truefalse",
      question: "Flexibilidade de volume refere-se à capacidade de introduzir novos produtos ou serviços em uma operação.",
      answer: false,
      explanation: "Falso. Flexibilidade de volume refere-se à capacidade de alterar os níveis de produção ou serviço, não à introdução de novos produtos ou serviços."
    },
    {
      id: 10,
      type: "truefalse",
      question: "O custo é considerado um objetivo de desempenho porque permite à organização oferecer preços mais competitivos.",
      answer: true,
      explanation: "Verdadeiro. O custo é um objetivo de desempenho importante porque permite à organização oferecer preços mais competitivos, aumentando sua vantagem no mercado."
    },
    {
      id: 11,
      type: "multipleassertive",
      question: "Sobre os objetivos de desempenho da produção, analise as afirmativas:<br>I. Qualidade reduz custos internos ao evitar retrabalho.<br>II. Velocidade operacional pode diminuir riscos associados à previsão de demanda.<br>III. Confiabilidade é menos relevante para a satisfação do cliente do que o custo.<br>IV. Flexibilidade permite adaptação a mudanças nas necessidades dos clientes.",
      options: [
        "Apenas I, II e IV estão corretas",
        "Apenas I e III estão corretas",
        "Apenas II, III e IV estão corretas",
        "I, II, III e IV estão corretas"
      ],
      answer: 0,
      explanation: "A alternativa correta é 'Apenas I, II e IV estão corretas'. A afirmativa III é falsa, pois a confiabilidade é um fator muito relevante para a satisfação do cliente, frequentemente mais importante que o custo."
    },
    {
      id: 12,
      type: "multipleassertive",
      question: "Analise as assertivas sobre o modelo de transformação:<br>I. Recursos transformados incluem materiais, informações e clientes.<br>II. Recursos de transformação são aqueles que sofrem alteração durante o processo.<br>III. O output do processo pode ser um bem físico, um serviço ou ambos.<br>IV. O modelo de transformação é aplicável apenas à indústria manufatureira.",
      options: [
        "Apenas I e III",
        "Apenas II e IV",
        "Apenas I, III e IV",
        "Apenas I, II e III"
      ],
      answer: 0,
      explanation: "A alternativa correta é 'Apenas I e III'. A afirmativa II está incorreta porque recursos de transformação são aqueles que realizam a transformação (como instalações e pessoas), não os que sofrem alteração. A afirmativa IV também está incorreta, pois o modelo de transformação é aplicável a qualquer tipo de operação, não apenas à indústria manufatureira."
    },
    {
      id: 13,
      type: "multipleassertive",
      question: "Sobre os exemplos de flexibilidade apresentados nos anexos, avalie:<br>I. Em hospitais, flexibilidade inclui a introdução de novos tipos de tratamento.<br>II. Em montadoras, flexibilidade de mix refere-se à variedade de opções de veículos.<br>III. Em supermercados, flexibilidade de entrega é a habilidade de obter itens fora de estoque.<br>IV. Em empresas de ônibus, flexibilidade de volume significa ajustar a frequência dos serviços.",
      options: [
        "Apenas I, II e IV",
        "Apenas II e III",
        "Apenas I, II, III e IV",
        "Apenas II, III e IV"
      ],
      answer: 2,
      explanation: "A alternativa correta é 'Apenas I, II, III e IV'. Todas as afirmativas estão corretas, exemplificando diferentes tipos de flexibilidade em diversos contextos operacionais."
    },
    {
      id: 14,
      type: "multipleassertive",
      question: "Analise as afirmativas sobre custo na produção:<br>I. Redução de custos permite preços mais competitivos.<br>II. Custos elevados podem ser compensados por alta confiabilidade.<br>III. O controle de custos é irrelevante para organizações sem fins lucrativos.<br>IV. Custos menores podem resultar de operações com menos erros e desperdícios.",
      options: [
        "Apenas I e IV",
        "Apenas II e III",
        "Apenas I, II e IV",
        "Apenas III e IV"
      ],
      answer: 0,
      explanation: "A alternativa correta é 'Apenas I e IV'. A afirmativa II não é necessariamente verdadeira, pois custos elevados nem sempre são compensados por alta confiabilidade. A afirmativa III é falsa, pois o controle de custos é relevante para qualquer organização, incluindo as sem fins lucrativos."
    },
    {
      id: 15,
      type: "multipleassertive",
      question: "Em relação à gestão estratégica de operações, avalie:<br>I. A administração da produção contribui para a estratégia global da empresa.<br>II. O alinhamento entre produção e intenção estratégica é fundamental.<br>III. A gestão de operações é restrita ao setor industrial.<br>IV. Os objetivos de desempenho devem ser considerados no planejamento operacional.",
      options: [
        "Apenas I, II e IV",
        "Apenas I e III",
        "Apenas II, III e IV",
        "Apenas I, II, III e IV"
      ],
      answer: 0,
      explanation: "A alternativa correta é 'Apenas I, II e IV'. A afirmativa III é falsa, pois a gestão de operações não é restrita ao setor industrial, sendo aplicável a qualquer tipo de organização, incluindo serviços."
    }
  ],
  topic2: [
    {
      id: 16,
      type: "multiple",
      question: "Segundo o anexo, a decisão sobre localização industrial é considerada:",
      options: [
        "Uma decisão operacional de curto prazo",
        "Uma decisão estratégica de planejamento",
        "Uma decisão tática de médio prazo",
        "Uma decisão irrelevante para a administração"
      ],
      answer: 1,
      explanation: "A decisão sobre localização industrial é considerada uma decisão estratégica de planejamento, pois tem impacto de longo prazo e influencia diversos aspectos da operação da empresa."
    },
    {
      id: 17,
      type: "multiple",
      question: "Qual das alternativas abaixo NÃO é uma opção básica para empresas em operação quanto à localização?",
      options: [
        "Expandir uma instalação existente",
        "Adicionar uma nova unidade mantendo as demais",
        "Fechar uma unidade e abrir outra",
        "Ignorar aspectos negativos da localidade"
      ],
      answer: 3,
      explanation: "Ignorar aspectos negativos da localidade não é uma opção básica para empresas em operação quanto à localização. As empresas devem considerar tanto os aspectos positivos quanto os negativos ao tomar decisões de localização."
    },
    {
      id: 18,
      type: "multiple",
      question: "Segundo o anexo, entre os fatores determinantes nas decisões de localização industrial, destaca-se:",
      options: [
        "Políticas de marketing",
        "Materiais-primas",
        "Design do produto",
        "Estratégias de vendas"
      ],
      answer: 1,
      explanation: "Entre os fatores determinantes nas decisões de localização industrial, destacam-se as materiais-primas, pois sua disponibilidade e proximidade podem impactar significativamente os custos e a logística da operação."
    },
    {
      id: 19,
      type: "multiple",
      question: "No método de classificação de fatores para avaliação de alternativas de localização, a escolha final recai sobre:",
      options: [
        "A localidade com menor custo fixo",
        "A localidade com maior pontuação ponderada",
        "A localidade mais próxima do mercado consumidor",
        "A localidade com maior número de funcionários"
      ],
      answer: 1,
      explanation: "No método de classificação de fatores, a escolha final recai sobre a localidade com maior pontuação ponderada, que considera diversos fatores relevantes com seus respectivos pesos de importância."
    },
    {
      id: 20,
      type: "multiple",
      question: "No método de localização de unidades de emergência, a escolha da região ideal é feita:",
      options: [
        "Pela maior população atendida",
        "Pelo menor dos máximos tempos de acesso",
        "Pela proximidade de hospitais",
        "Pelo menor custo de construção"
      ],
      answer: 1,
      explanation: "No método de localização de unidades de emergência, a escolha da região ideal é feita pelo menor dos máximos tempos de acesso, garantindo que o tempo máximo para atender qualquer ponto seja o menor possível."
    },
    {
      id: 21,
      type: "truefalse",
      question: "Segundo o anexo, aspectos negativos de uma localidade devem receber a mesma atenção que os positivos no processo de decisão.",
      answer: true,
      explanation: "Verdadeiro. Os aspectos negativos de uma localidade devem receber a mesma atenção que os positivos no processo de decisão, pois ambos impactam o desempenho da operação."
    },
    {
      id: 22,
      type: "truefalse",
      question: "O sistema de classificação de fatores utiliza apenas critérios quantitativos e ignora avaliações qualitativas.",
      answer: false,
      explanation: "Falso. O sistema de classificação de fatores utiliza tanto critérios quantitativos quanto qualitativos, permitindo uma avaliação mais completa das alternativas de localização."
    },
    {
      id: 23,
      type: "truefalse",
      question: "O fechamento de uma unidade industrial pode ser motivado pela exaustão de matérias-primas ou aumento exagerado dos custos operacionais.",
      answer: true,
      explanation: "Verdadeiro. O fechamento de uma unidade industrial pode ser motivado pela exaustão de matérias-primas ou aumento exagerado dos custos operacionais, tornando a operação inviável naquela localidade."
    },
    {
      id: 24,
      type: "truefalse",
      question: "O método de classificação de fatores considera diversos aspectos, como mão de obra, clima, transportes e comunidade.",
      answer: true,
      explanation: "Verdadeiro. O método de classificação de fatores considera diversos aspectos relevantes para a decisão de localização, incluindo mão de obra, clima, transportes e comunidade."
    },
    {
      id: 25,
      type: "truefalse",
      question: "Segundo o anexo, a escolha do local para instalação de uma unidade deve considerar tanto fatores positivos quanto negativos.",
      answer: true,
      explanation: "Verdadeiro. A escolha do local para instalação de uma unidade deve considerar tanto fatores positivos quanto negativos, permitindo uma avaliação equilibrada das alternativas."
    },
    {
      id: 26,
      type: "multipleassertive",
      question: "Sobre as opções de localização para empresas em operação, analise:<br>I. Expandir uma instalação existente é viável se houver espaço disponível.<br>II. Adicionar uma nova unidade exige avaliação do impacto no sistema total.<br>III. Fechar uma unidade pode ser motivado por mudanças de mercado.<br>IV. A decisão de localização é sempre irreversível.",
      options: [
        "Apenas I, II e III estão corretas",
        "Apenas II e IV estão corretas",
        "Apenas I e IV estão corretas",
        "Apenas III e IV estão corretas"
      ],
      answer: 0,
      explanation: "A alternativa correta é 'Apenas I, II e III estão corretas'. A afirmativa IV é falsa, pois a decisão de localização não é sempre irreversível, podendo ser alterada conforme mudanças no ambiente de negócios."
    },
    {
      id: 27,
      type: "multipleassertive",
      question: "No método de classificação de fatores, considere:<br>I. Cada fator recebe um peso de acordo com sua importância.<br>II. A soma ponderada das notas define a pontuação final da localidade.<br>III. Apenas fatores financeiros são considerados.<br>IV. A localidade escolhida é a que obtém maior pontuação.",
      options: [
        "Apenas I, II e IV estão corretas",
        "Apenas II e III estão corretas",
        "Apenas I e III estão corretas",
        "Apenas III e IV estão corretas"
      ],
      answer: 0,
      explanation: "A alternativa correta é 'Apenas I, II e IV estão corretas'. A afirmativa III é falsa, pois o método considera diversos fatores além dos financeiros, como infraestrutura, mão de obra e comunidade."
    },
    {
      id: 28,
      type: "multipleassertive",
      question: "Sobre fatores determinantes na localização industrial, avalie:<br>I. Materiais-primas são um fator relevante.<br>II. Serviços e infraestrutura devem ser considerados.<br>III. A comunidade local pode influenciar a decisão.<br>IV. O mercado consumidor não é relevante para localização.",
      options: [
        "Apenas I, II e III estão corretas",
        "Apenas II e IV estão corretas",
        "Apenas I e III estão corretas",
        "Apenas III e IV estão corretas"
      ],
      answer: 0,
      explanation: "A alternativa correta é 'Apenas I, II e III estão corretas'. A afirmativa IV é falsa, pois o mercado consumidor é um fator muito relevante para decisões de localização industrial."
    },
    {
      id: 29,
      type: "multipleassertive",
      question: "No sistema de classificação de fatores, analise:<br>I. Cada localidade recebe julgamentos em fatores relevantes.<br>II. O peso de cada fator é atribuído conforme sua importância.<br>III. A localidade com maior soma ponderada é escolhida.<br>IV. Os fatores podem incluir mão de obra, clima e transportes.",
      options: [
        "Apenas I, II, III e IV estão corretas",
        "Apenas II, III e IV estão corretas",
        "Apenas I e III estão corretas",
        "Apenas III e IV estão corretas"
      ],
      answer: 0,
      explanation: "A alternativa correta é 'Apenas I, II, III e IV estão corretas'. Todas as afirmativas estão corretas, descrevendo adequadamente o sistema de classificação de fatores para avaliação de alternativas de localização."
    },
    {
      id: 30,
      type: "multipleassertive",
      question: "Sobre o método de localização de unidades de emergência, considere:<br>I. O modelo busca minimizar o maior tempo de acesso entre regiões.<br>II. É aplicado para postos policiais e ambulâncias.<br>III. A região escolhida é aquela com o menor tempo máximo de acesso.<br>IV. Sempre seleciona a região mais central geograficamente.",
      options: [
        "Apenas I, II e III estão corretas",
        "Apenas II e IV estão corretas",
        "Apenas I e III estão corretas",
        "Apenas III e IV estão corretas"
      ],
      answer: 0,
      explanation: "A alternativa correta é 'Apenas I, II e III estão corretas'. A afirmativa IV é falsa, pois o método não necessariamente seleciona a região mais central geograficamente, mas sim aquela que minimiza o tempo máximo de acesso."
    }
  ],
  topic3: [
    {
      id: 31,
      type: "multiple",
      question: "De acordo com os anexos, qual dos itens abaixo NÃO é um objetivo clássico de um bom arranjo físico?",
      options: [
        "Facilitar a comunicação",
        "Maximizar atrasos no fluxo",
        "Garantir acessibilidade",
        "Uso eficiente do espaço"
      ],
      answer: 1,
      explanation: "Maximizar atrasos no fluxo não é um objetivo clássico de um bom arranjo físico. Pelo contrário, um bom arranjo físico busca minimizar atrasos e otimizar o fluxo de materiais e pessoas."
    },
    {
      id: 32,
      type: "multiple",
      question: "Qual das alternativas caracteriza corretamente o arranjo físico de posição fixa?",
      options: [
        "Os recursos transformados percorrem diferentes rotas conforme suas necessidades",
        "Os recursos de transformação se movem até os recursos transformados, que permanecem no lugar",
        "Todos os recursos de transformação ficam em linha reta",
        "Os recursos transformados seguem um fluxo contínuo e padronizado"
      ],
      answer: 1,
      explanation: "O arranjo físico de posição fixa é caracterizado pelos recursos de transformação (equipamentos, pessoas) se movendo até os recursos transformados (produto), que permanecem fixos no lugar. Exemplos incluem construção de navios e edifícios."
    },
    {
      id: 33,
      type: "multiple",
      question: "No arranjo físico funcional, qual é uma característica marcante?",
      options: [
        "O fluxo é claro e previsível",
        "Os recursos semelhantes estão agrupados e o fluxo é complexo",
        "Cada produto segue sempre o mesmo caminho",
        "Não há flexibilidade para diferentes rotas"
      ],
      answer: 1,
      explanation: "No arranjo físico funcional, uma característica marcante é que os recursos semelhantes estão agrupados (como departamentos ou setores) e o fluxo é complexo, com diferentes produtos seguindo rotas distintas conforme suas necessidades."
    },
    {
      id: 34,
      type: "multiple",
      question: "O arranjo físico em linha (ou por produto) é mais indicado para operações com:",
      options: [
        "Baixo volume e alta variedade",
        "Alto volume e baixa variedade",
        "Baixo volume e fluxo intermitente",
        "Alta variedade e fluxo irregular"
      ],
      answer: 1,
      explanation: "O arranjo físico em linha (ou por produto) é mais indicado para operações com alto volume e baixa variedade, onde os produtos seguem um fluxo linear e padronizado, como em linhas de montagem."
    },
    {
      id: 35,
      type: "multiple",
      question: "Qual das opções abaixo é um exemplo de arranjo físico celular?",
      options: [
        "Linha de montagem de automóveis",
        "Área para produtos de lanches rápidos em um supermercado",
        "Construção de uma rodovia",
        "Laboratório de pesquisa"
      ],
      answer: 1,
      explanation: "A área para produtos de lanches rápidos em um supermercado é um exemplo de arranjo físico celular, onde recursos são agrupados para atender a uma família específica de produtos ou serviços."
    },
    {
      id: 36,
      type: "truefalse",
      question: "O arranjo físico funcional é caracterizado por recursos semelhantes agrupados e diferentes fluxos para diferentes produtos ou clientes.",
      answer: true,
      explanation: "Verdadeiro. O arranjo físico funcional é caracterizado por recursos semelhantes agrupados (como departamentos) e diferentes fluxos para diferentes produtos ou clientes, resultando em rotas variadas."
    },
    {
      id: 37,
      type: "truefalse",
      question: "O arranjo físico em linha é indicado para operações com alta variedade e baixo volume de produção.",
      answer: false,
      explanation: "Falso. O arranjo físico em linha é indicado para operações com baixa variedade e alto volume de produção, onde o fluxo é padronizado e contínuo."
    },
    {
      id: 38,
      type: "truefalse",
      question: "Um bom arranjo físico deve considerar a flexibilidade a longo prazo, permitindo adaptações futuras.",
      answer: true,
      explanation: "Verdadeiro. Um bom arranjo físico deve considerar a flexibilidade a longo prazo, permitindo adaptações futuras conforme mudanças nas necessidades da operação ou do mercado."
    },
    {
      id: 39,
      type: "truefalse",
      question: "No arranjo físico posicional, o produto ou cliente permanece fixo, enquanto equipamentos e pessoas se movimentam conforme necessário.",
      answer: true,
      explanation: "Verdadeiro. No arranjo físico posicional, o produto ou cliente permanece fixo, enquanto equipamentos e pessoas se movimentam conforme necessário, como na construção de navios ou atendimento hospitalar."
    },
    {
      id: 40,
      type: "truefalse",
      question: "O arranjo físico misto combina elementos de diferentes tipos básicos de arranjo físico em uma mesma operação.",
      answer: true,
      explanation: "Verdadeiro. O arranjo físico misto combina elementos de diferentes tipos básicos de arranjo físico (funcional, em linha, celular, posicional) em uma mesma operação, aproveitando as vantagens de cada um."
    },
    {
      id: 41,
      type: "multipleassertive",
      question: "Sobre os objetivos de um bom arranjo físico, analise:<br>I. Facilitar a comunicação e coordenação<br>II. Reduzir o trabalho em andamento<br>III. Minimizar atrasos e riscos<br>IV. Garantir flexibilidade e uso eficiente do capital",
      options: [
        "Apenas I, II e IV estão corretas",
        "Apenas II, III e IV estão corretas",
        "Apenas I, II, III e IV estão corretas",
        "Apenas III e IV estão corretas"
      ],
      answer: 2,
      explanation: "A alternativa correta é 'Apenas I, II, III e IV estão corretas'. Todas as afirmativas representam objetivos válidos de um bom arranjo físico, que deve facilitar a comunicação, reduzir trabalho em andamento, minimizar atrasos e riscos, e garantir flexibilidade e uso eficiente do capital."
    },
    {
      id: 42,
      type: "multipleassertive",
      question: "Em relação aos tipos de arranjo físico, considere:<br>I. O arranjo posicional é adequado para produtos grandes ou delicados<br>II. O arranjo funcional permite rotas variadas para diferentes produtos<br>III. O arranjo em linha é indicado para alto volume e padronização<br>IV. O arranjo celular agrupa recursos para atender famílias de produtos",
      options: [
        "Apenas I, II e III estão corretas",
        "Apenas II, III e IV estão corretas",
        "Apenas I, II, III e IV estão corretas",
        "Apenas I e IV estão corretas"
      ],
      answer: 2,
      explanation: "A alternativa correta é 'Apenas I, II, III e IV estão corretas'. Todas as afirmativas estão corretas, descrevendo adequadamente características dos diferentes tipos de arranjo físico."
    },
    {
      id: 43,
      type: "multipleassertive",
      question: "Sobre arranjo físico funcional, avalie:<br>I. O fluxo é geralmente complexo<br>II. Recursos semelhantes são agrupados<br>III. É indicado para operações com alta variedade<br>IV. O padrão de fluxo é sempre linear",
      options: [
        "Apenas I, II e III estão corretas",
        "Apenas II, III e IV estão corretas",
        "Apenas I e IV estão corretas",
        "Apenas III e IV estão corretas"
      ],
      answer: 0,
      explanation: "A alternativa correta é 'Apenas I, II e III estão corretas'. A afirmativa IV é falsa, pois no arranjo físico funcional o padrão de fluxo não é linear, mas sim complexo e variado, dependendo das necessidades de cada produto."
    },
    {
      id: 44,
      type: "multipleassertive",
      question: "No contexto dos tipos básicos de arranjo físico, analise:<br>I. O arranjo em linha facilita o controle do fluxo<br>II. O arranjo posicional é comum em projetos de engenharia civil<br>III. O arranjo celular busca simplificar fluxos complexos<br>IV. O arranjo funcional é sempre preferível para produção em massa",
      options: [
        "Apenas I, II e III estão corretas",
        "Apenas II, III e IV estão corretas",
        "Apenas I e IV estão corretas",
        "Apenas III e IV estão corretas"
      ],
      answer: 0,
      explanation: "A alternativa correta é 'Apenas I, II e III estão corretas'. A afirmativa IV é falsa, pois o arranjo funcional não é sempre preferível para produção em massa; na verdade, o arranjo em linha é geralmente mais adequado para esse tipo de produção."
    },
    {
      id: 45,
      type: "multipleassertive",
      question: "Sobre as relações entre volume, variedade e tipos de arranjo físico, considere:<br>I. Arranjos posicionais são associados a baixo volume e alta variedade<br>II. Arranjos funcionais e celulares lidam com volume e variedade médios<br>III. Arranjos em linha são típicos de alto volume e baixa variedade<br>IV. Arranjos mistos combinam características de diferentes tipos",
      options: [
        "Apenas I, II e III estão corretas",
        "Apenas II, III e IV estão corretas",
        "Apenas I, II, III e IV estão corretas",
        "Apenas I e IV estão corretas"
      ],
      answer: 2,
      explanation: "A alternativa correta é 'Apenas I, II, III e IV estão corretas'. Todas as afirmativas estão corretas, descrevendo adequadamente as relações entre volume, variedade e os diferentes tipos de arranjo físico."
    }
  ],
  topic4: [
    {
      id: 46,
      type: "multiple",
      question: "Segundo o anexo, o PCP (Planejamento e Controle da Produção) é responsável por:",
      options: [
        "Coordenar apenas o setor de compras",
        "Integrar informações para planejar, programar e controlar a produção",
        "Gerenciar exclusivamente o estoque de produtos acabados",
        "Supervisionar apenas a expedição"
      ],
      answer: 1,
      explanation: "O PCP (Planejamento e Controle da Produção) é responsável por integrar informações para planejar, programar e controlar a produção, coordenando diversos setores e recursos da empresa."
    },
    {
      id: 47,
      type: "multiple",
      question: "Qual das alternativas NÃO corresponde a uma etapa clássica do PCP?",
      options: [
        "Previsão de demanda",
        "Planejamento de capacidade",
        "Pesquisa de satisfação do cliente",
        "Programação da produção"
      ],
      answer: 2,
      explanation: "A pesquisa de satisfação do cliente não é uma etapa clássica do PCP. As etapas típicas incluem previsão de demanda, planejamento de produção, planejamento de capacidade, programação da produção e controle."
    },
    {
      id: 48,
      type: "multiple",
      question: "No PCP, a programação da produção tem como principal objetivo:",
      options: [
        "Definir a ordem, o tempo e os recursos necessários para cada operação",
        "Aumentar o estoque máximo possível",
        "Delegar todas as decisões ao setor financeiro",
        "Ignorar as restrições de capacidade"
      ],
      answer: 0,
      explanation: "Na programação da produção, o principal objetivo é definir a ordem, o tempo e os recursos necessários para cada operação, garantindo o uso eficiente dos recursos e o cumprimento dos prazos."
    },
    {
      id: 49,
      type: "multiple",
      question: "O controle da produção, segundo o anexo, envolve:",
      options: [
        "Apenas o registro dos produtos acabados",
        "Monitorar a execução do plano, identificar desvios e propor ações corretivas",
        "Eliminar a necessidade de acompanhamento dos processos",
        "Focar somente na redução de custos"
      ],
      answer: 1,
      explanation: "O controle da produção envolve monitorar a execução do plano, identificar desvios e propor ações corretivas, garantindo que a produção ocorra conforme planejado ou ajustando o plano quando necessário."
    },
    {
      id: 50,
      type: "multiple",
      question: "O Planejamento Mestre da Produção (PMP) é definido como:",
      options: [
        "Um plano de longo prazo para investimentos em tecnologia",
        "O detalhamento do plano de produção, especificando itens, quantidades e períodos",
        "Uma ferramenta exclusiva do setor de compras",
        "Uma previsão de vendas para o setor comercial"
      ],
      answer: 1,
      explanation: "O Planejamento Mestre da Produção (PMP) é o detalhamento do plano de produção, especificando quais itens serão produzidos, em quais quantidades e em quais períodos, servindo como base para a programação detalhada."
    },
    {
      id: 51,
      type: "truefalse",
      question: "O PCP utiliza informações de vendas, engenharia, estoques e recursos humanos para planejar a produção.",
      answer: true,
      explanation: "Verdadeiro. O PCP utiliza informações de diversos setores, como vendas, engenharia, estoques e recursos humanos, para integrar dados e planejar adequadamente a produção."
    },
    {
      id: 52,
      type: "truefalse",
      question: "O planejamento de capacidade no PCP serve para ajustar os recursos disponíveis à demanda prevista.",
      answer: true,
      explanation: "Verdadeiro. O planejamento de capacidade no PCP serve para ajustar os recursos disponíveis (máquinas, pessoas, instalações) à demanda prevista, evitando ociosidade ou sobrecarga."
    },
    {
      id: 53,
      type: "truefalse",
      question: "O controle da produção é dispensável quando o planejamento é bem feito.",
      answer: false,
      explanation: "Falso. O controle da produção é essencial mesmo com um bom planejamento, pois imprevistos e variações sempre ocorrem, exigindo monitoramento contínuo e ajustes."
    },
    {
      id: 54,
      type: "truefalse",
      question: "O PCP contribui para o equilíbrio entre estoques, prazos e custos na produção.",
      answer: true,
      explanation: "Verdadeiro. O PCP contribui para o equilíbrio entre estoques, prazos e custos na produção, buscando otimizar esses fatores para atender à demanda com eficiência."
    },
    {
      id: 55,
      type: "truefalse",
      question: "O PCP é uma atividade isolada e não depende de integração com outros setores da empresa.",
      answer: false,
      explanation: "Falso. O PCP não é uma atividade isolada; pelo contrário, depende fortemente da integração com outros setores da empresa, como vendas, compras, engenharia e produção."
    },
    {
      id: 56,
      type: "multipleassertive",
      question: "Sobre os pilares do PCP, analise:<br>I. O planejamento define objetivos e estratégias para a produção<br>II. A programação detalha como e quando a produção ocorrerá<br>III. O controle monitora, avalia e corrige desvios do planejado<br>IV. O PCP dispensa o uso de informações de outras áreas",
      options: [
        "Apenas I, II e III estão corretas",
        "Apenas II, III e IV estão corretas",
        "Apenas I e IV estão corretas",
        "Apenas III e IV estão corretas"
      ],
      answer: 0,
      explanation: "A alternativa correta é 'Apenas I, II e III estão corretas'. A afirmativa IV é falsa, pois o PCP não dispensa o uso de informações de outras áreas; pelo contrário, depende dessas informações para funcionar adequadamente."
    },
    {
      id: 57,
      type: "multipleassertive",
      question: "Em relação às etapas do PCP, considere:<br>I. Previsão de demanda<br>II. Planejamento de produção<br>III. Programação da produção<br>IV. Controle e acompanhamento da produção",
      options: [
        "Todas as afirmativas estão corretas",
        "Apenas II, III e IV estão corretas",
        "Apenas I, II e III estão corretas",
        "Apenas III e IV estão corretas"
      ],
      answer: 0,
      explanation: "A alternativa correta é 'Todas as afirmativas estão corretas'. As quatro afirmativas representam as etapas clássicas do PCP, desde a previsão inicial até o controle final."
    },
    {
      id: 58,
      type: "multipleassertive",
      question: "Sobre a importância do PCP, avalie:<br>I. Contribui para o uso eficiente dos recursos produtivos<br>II. Garante o atendimento da demanda com qualidade e prazo<br>III. Elimina a necessidade de monitoramento dos processos<br>IV. Auxilia na redução de custos operacionais",
      options: [
        "Apenas I, II e IV estão corretas",
        "Apenas II, III e IV estão corretas",
        "Apenas I e III estão corretas",
        "Apenas III e IV estão corretas"
      ],
      answer: 0,
      explanation: "A alternativa correta é 'Apenas I, II e IV estão corretas'. A afirmativa III é falsa, pois o PCP não elimina a necessidade de monitoramento dos processos; pelo contrário, o monitoramento é parte essencial do controle da produção."
    },
    {
      id: 59,
      type: "multipleassertive",
      question: "No contexto do PCP, considere:<br>I. O planejamento de capacidade avalia se os recursos são suficientes para a demanda<br>II. O sequenciamento define a ordem das operações na produção<br>III. O controle da produção envolve a identificação de desvios e ações corretivas<br>IV. O PCP atua apenas no curto prazo",
      options: [
        "Apenas I, II e III estão corretas",
        "Apenas II, III e IV estão corretas",
        "Apenas I e IV estão corretas",
        "Apenas III e IV estão corretas"
      ],
      answer: 0,
      explanation: "A alternativa correta é 'Apenas I, II e III estão corretas'. A afirmativa IV é falsa, pois o PCP não atua apenas no curto prazo, mas em diferentes horizontes temporais, desde o longo prazo (planejamento estratégico) até o curto prazo (programação detalhada)."
    },
    {
      id: 60,
      type: "multipleassertive",
      question: "Sobre os fluxos de informação no PCP, analise:<br>I. O PCP depende de informações de vendas, engenharia, compras e recursos humanos<br>II. O fluxo de informações é unidirecional, apenas do PCP para os demais setores<br>III. A integração de dados é fundamental para o sucesso do PCP<br>IV. O PCP pode influenciar decisões estratégicas da empresa",
      options: [
        "Apenas I, III e IV estão corretas",
        "Apenas II, III e IV estão corretas",
        "Apenas I e IV estão corretas",
        "Apenas III e IV estão corretas"
      ],
      answer: 0,
      explanation: "A alternativa correta é 'Apenas I, III e IV estão corretas'. A afirmativa II é falsa, pois o fluxo de informações no PCP não é unidirecional, mas bidirecional, com informações fluindo tanto do PCP para outros setores quanto desses setores para o PCP."
    }
  ],
  topic5: [
    {
      id: 61,
      type: "multiple",
      question: "No Jogo do Barco, qual é a principal função do Mapeamento de Fluxo de Valor (MFV) entre os cenários?",
      options: [
        "Registrar apenas o número de barcos produzidos",
        "Identificar e representar etapas e fluxos de material e informação, facilitando melhorias no processo",
        "Definir o arranjo físico dos postos de trabalho",
        "Determinar a cor do papel a ser utilizado"
      ],
      answer: 1,
      explanation: "A principal função do Mapeamento de Fluxo de Valor (MFV) no Jogo do Barco é identificar e representar as etapas e fluxos de material e informação, facilitando a visualização de desperdícios e oportunidades de melhoria no processo."
    },
    {
      id: 62,
      type: "multiple",
      question: "Qual das alternativas NÃO é considerada um critério de qualidade para os barcos produzidos, segundo o anexo?",
      options: [
        "Não ter desnível entre ponta e ponta",
        "Não ter papel rasgado",
        "Não ter papel riscado",
        "Ser produzido no menor tempo possível"
      ],
      answer: 3,
      explanation: "Ser produzido no menor tempo possível não é um critério de qualidade para os barcos, mas sim um objetivo de desempenho. Os critérios de qualidade referem-se às características físicas do produto, como não ter papel rasgado, riscado, amassado ou desnível."
    },
    {
      id: 63,
      type: "multiple",
      question: "No cenário 2 do Jogo do Barco, qual elemento caracteriza o uso do Sistema de Produção Enxuta?",
      options: [
        "Processamento em grandes lotes",
        "Utilização de posições Kanban entre operadores",
        "Inspeção de qualidade em todas as etapas",
        "Arranjo físico circular"
      ],
      answer: 1,
      explanation: "No cenário 2 do Jogo do Barco, a utilização de posições Kanban entre operadores caracteriza o uso do Sistema de Produção Enxuta, limitando o estoque em processo e criando um sistema puxado."
    },
    {
      id: 64,
      type: "multiple",
      question: "O KPI \"Lead Time\", conforme o material, refere-se a:",
      options: [
        "O tempo total para um produto percorrer todas as etapas do processo até a entrega ao cliente",
        "O tempo máximo disponível para produção",
        "A quantidade de colaboradores envolvidos no processo",
        "O número de produtos acabados sem defeito"
      ],
      answer: 0,
      explanation: "O Lead Time refere-se ao tempo total para um produto percorrer todas as etapas do processo até a entrega ao cliente, incluindo processamento, inspeção, movimentação e espera."
    },
    {
      id: 65,
      type: "multiple",
      question: "Segundo o anexo, no cenário 3, as equipes devem:",
      options: [
        "Repetir exatamente o processo do cenário 1",
        "Planejar livremente o sistema de produção, obrigatoriamente utilizando o MFV",
        "Focar apenas na quantidade produzida, sem considerar qualidade",
        "Ignorar os indicadores de produtividade"
      ],
      answer: 1,
      explanation: "No cenário 3, as equipes devem planejar livremente o sistema de produção, obrigatoriamente utilizando o Mapeamento de Fluxo de Valor (MFV) para identificar melhorias e otimizar o processo."
    },
    {
      id: 66,
      type: "truefalse",
      question: "O arranjo físico da linha de produção deve ser em linha, do almoxarifado ao controle de qualidade, em todos os cenários do Jogo do Barco.",
      answer: false,
      explanation: "Falso. O arranjo físico não precisa ser em linha em todos os cenários. No cenário 3, por exemplo, as equipes podem planejar livremente o layout, podendo optar por arranjos celulares ou outros que considerem mais eficientes."
    },
    {
      id: 67,
      type: "truefalse",
      question: "O KPI \"Work in Process\" representa a quantidade de barcos incompletos na linha ao final do turno de produção.",
      answer: true,
      explanation: "Verdadeiro. O KPI 'Work in Process' (WIP) representa a quantidade de barcos incompletos na linha ao final do turno de produção, indicando o estoque em processo."
    },
    {
      id: 68,
      type: "truefalse",
      question: "A inspeção de qualidade no cenário 1 ocorre somente no produto final.",
      answer: true,
      explanation: "Verdadeiro. No cenário 1 do Jogo do Barco, a inspeção de qualidade ocorre somente no produto final, o que pode resultar em retrabalho ou descarte de produtos que já percorreram todo o processo."
    },
    {
      id: 69,
      type: "truefalse",
      question: "No Sistema de Produção Enxuta, o uso de Kanban ajuda a limitar o estoque em processo entre as etapas.",
      answer: true,
      explanation: "Verdadeiro. No Sistema de Produção Enxuta, o uso de Kanban ajuda a limitar o estoque em processo entre as etapas, criando um sistema puxado e evitando superprodução."
    },
    {
      id: 70,
      type: "truefalse",
      question: "O cálculo do Takt Time é feito dividindo-se o tempo disponível para produção pela demanda do cliente.",
      answer: true,
      explanation: "Verdadeiro. O Takt Time é calculado dividindo-se o tempo disponível para produção pela demanda do cliente, indicando o ritmo necessário para atender à demanda."
    },
    {
      id: 71,
      type: "multipleassertive",
      question: "Sobre os KPIs utilizados no Jogo do Barco, analise:<br>I. Taxa efetiva de produção mede quantos barcos sem defeito são produzidos por unidade de tempo<br>II. Lead Time indica o tempo total do ciclo do produto<br>III. Work in Process refere-se ao estoque de barcos em processo<br>IV. Takt Time mostra o tempo disponível por unidade demandada",
      options: [
        "Apenas I, II e IV estão corretas",
        "Apenas II, III e IV estão corretas",
        "Apenas I, II, III e IV estão corretas",
        "Apenas III e IV estão corretas"
      ],
      answer: 2,
      explanation: "A alternativa correta é 'Apenas I, II, III e IV estão corretas'. Todas as afirmativas descrevem corretamente os KPIs utilizados no Jogo do Barco para medir o desempenho do sistema produtivo."
    },
    {
      id: 72,
      type: "multipleassertive",
      question: "Em relação aos critérios de qualidade dos barcos, considere:<br>I. Não pode haver papel rasgado<br>II. Não pode haver papel riscado<br>III. Não pode haver papel amassado<br>IV. Não pode haver desnível entre ponta e ponta",
      options: [
        "Apenas I, II e III estão corretas",
        "Apenas II, III e IV estão corretas",
        "Apenas I, III e IV estão corretas",
        "Todas as afirmativas estão corretas"
      ],
      answer: 3,
      explanation: "A alternativa correta é 'Todas as afirmativas estão corretas'. Os quatro critérios mencionados são requisitos de qualidade para os barcos produzidos no jogo."
    },
    {
      id: 73,
      type: "multipleassertive",
      question: "No contexto do Jogo do Barco, analise:<br>I. O gerente deve apurar os indicadores de produtividade e qualidade ao final de cada cenário<br>II. A inspeção de qualidade pode ser feita por mais de um supervisor<br>III. O planejamento do cenário 3 deve obrigatoriamente utilizar o MFV<br>IV. Os operadores de produção podem ignorar os critérios de qualidade",
      options: [
        "Apenas I, II e III estão corretas",
        "Apenas II, III e IV estão corretas",
        "Apenas I e IV estão corretas",
        "Apenas III e IV estão corretas"
      ],
      answer: 0,
      explanation: "A alternativa correta é 'Apenas I, II e III estão corretas'. A afirmativa IV é falsa, pois os operadores de produção não podem ignorar os critérios de qualidade; pelo contrário, devem segui-los rigorosamente para evitar retrabalho e desperdícios."
    },
    {
      id: 74,
      type: "multipleassertive",
      question: "Sobre o funcionamento das posições Kanban no cenário 2, avalie:<br>I. Cada operador só pode transferir um barco se houver espaço livre no Kanban<br>II. Se ambos os Kanbans estiverem ocupados, o operador anterior deve aguardar<br>III. O Kanban limita o estoque em processo entre as etapas<br>IV. O Kanban elimina a necessidade de controle de qualidade",
      options: [
        "Apenas I, II e III estão corretas",
        "Apenas II, III e IV estão corretas",
        "Apenas I e IV estão corretas",
        "Apenas III e IV estão corretas"
      ],
      answer: 0,
      explanation: "A alternativa correta é 'Apenas I, II e III estão corretas'. A afirmativa IV é falsa, pois o Kanban não elimina a necessidade de controle de qualidade; ele apenas controla o fluxo e o volume de produção."
    },
    {
      id: 75,
      type: "multipleassertive",
      question: "Em relação ao planejamento do cenário 3, considere:<br>I. A equipe pode definir o tipo de sistema de produção<br>II. O lote de transferência pode ser ajustado<br>III. O layout pode ser planejado livremente<br>IV. O uso do MFV é opcional",
      options: [
        "Apenas I, II e III estão corretas",
        "Apenas II, III e IV estão corretas",
        "Apenas I e IV estão corretas",
        "Apenas III e IV estão corretas"
      ],
      answer: 0,
      explanation: "A alternativa correta é 'Apenas I, II e III estão corretas'. A afirmativa IV é falsa, pois o uso do MFV (Mapeamento de Fluxo de Valor) não é opcional no cenário 3, mas obrigatório para identificar melhorias e planejar o sistema de produção."
    }
  ]
};

// Configurações do quiz
const quizConfig = {
  questionsPerTopic: 15,
  topicNames: {
    topic1: "Tópico 3: Introdução à Gestão Estratégica de Operações",
    topic2: "Tópico 4: Localização Industrial",
    topic3: "Tópico 5: Arranjo Físico",
    topic4: "Tópico 6: Planejamento e Controle da Produção (PCP)",
    topic5: "Tópico 8: Jogo do Barco"
  }
};
