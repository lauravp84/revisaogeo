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
        "Apenas I e IV estão corretas",
        "Apenas III e IV estão corretas"
      ],
      answer: 0,
      explanation: "A alternativa correta é 'Apenas I, II e IV estão corretas'. A afirmativa III é falsa, pois o método de classificação de fatores considera diversos aspectos, não apenas os financeiros."
    }
  ],
  topic3: [
    {
      id: 28,
      type: "multiple",
      question: "Segundo os slides do tópico \"Introdução à GEO\", qual afirmação melhor expressa a função estratégica da produção nas organizações?",
      options: [
        "A produção é um setor operacional isolado das decisões de longo prazo.",
        "A produção é responsável apenas pela entrega física dos produtos.",
        "A função produção define padrões de decisão que moldam a visão estratégica da empresa.",
        "A função produção atua exclusivamente com recursos humanos e financeiros."
      ],
      answer: 2,
      explanation: "A função produção tem papel estratégico nas organizações, definindo padrões de decisão que moldam a visão estratégica da empresa, não sendo apenas um setor operacional isolado."
    },
    {
      id: 29,
      type: "multiple",
      question: "De acordo com o modelo de transformação apresentado no material da disciplina, os recursos transformados incluem:",
      options: [
        "Somente materiais e produtos finais.",
        "Equipamentos, instalações e sistemas de controle.",
        "Materiais, informações e clientes.",
        "Fornecedores, estoques e indicadores de desempenho."
      ],
      answer: 2,
      explanation: "No modelo de transformação, os recursos transformados são aqueles que sofrem o processo de transformação, incluindo materiais, informações e clientes, enquanto equipamentos e instalações são recursos transformadores."
    },
    {
      id: 30,
      type: "multipleassertive",
      question: "Sobre os modelos produtivos apresentados na Introdução à GEO, avalie as seguintes afirmativas:<br>I. O modelo de produção contínua caracteriza-se por volumes elevados e variedade mínima.<br>II. A produção por projeto apresenta baixa padronização e alta customização.<br>III. A produção em massa é mais indicada para produtos artesanais personalizados.<br>IV. O jobbing lida com grandes volumes e processos padronizados.",
      options: [
        "Apenas I e II estão corretas",
        "Apenas III e IV estão corretas",
        "Apenas I, II e IV estão corretas",
        "Todas as afirmativas estão corretas"
      ],
      answer: 0,
      explanation: "Apenas as afirmativas I e II estão corretas. A produção contínua realmente caracteriza-se por volumes elevados e variedade mínima, e a produção por projeto apresenta baixa padronização e alta customização. As afirmativas III e IV estão incorretas, pois a produção em massa não é indicada para produtos artesanais personalizados, e o jobbing não lida com grandes volumes, mas sim com pequenos lotes customizados."
    },
    {
      id: 31,
      type: "truefalse",
      question: "A função produção está presente em todas as organizações, pois todas produzem algum tipo de valor, seja tangível ou intangível.",
      answer: true,
      explanation: "Verdadeiro. A função produção está presente em todas as organizações, sejam elas de manufatura ou serviços, pois todas produzem algum tipo de valor para seus clientes, seja na forma de bens tangíveis ou serviços intangíveis."
    },
    {
      id: 32,
      type: "truefalse",
      question: "O objetivo de custo, na função produção, está diretamente relacionado à eficiência operacional, pois quanto menor o custo de produção, maior o preço de venda para o cliente.",
      answer: false,
      explanation: "Falso. O objetivo de custo está relacionado à eficiência operacional, mas a relação apresentada está incorreta. Quanto menor o custo de produção, menor pode ser o preço de venda para o cliente (não maior), ou maior pode ser a margem de lucro da empresa."
    },
    {
      id: 33,
      type: "multiple",
      question: "Segundo o modelo de transformação descrito por Slack, qual dos seguintes exemplos representa um recurso de transformação em uma operação bancária?",
      options: [
        "Dados de clientes no sistema",
        "Cédulas e moedas depositadas",
        "O caixa responsável pelo atendimento",
        "Os extratos gerados ao final das transações"
      ],
      answer: 2,
      explanation: "O caixa responsável pelo atendimento é um recurso de transformação, pois é ele quem realiza o processo de transformação. Recursos de transformação são aqueles que agem sobre os recursos transformados (como dados, cédulas e informações)."
    },
    {
      id: 34,
      type: "multiple",
      question: "De acordo com os slides da Introdução à GEO, assinale a afirmativa correta:",
      options: [
        "A estratégia de operações é um plano de ação de curto prazo, voltado para o setor financeiro.",
        "As decisões da função produção não afetam a visão estratégica da empresa.",
        "A gestão da produção pode contribuir para a vantagem competitiva organizacional.",
        "A operação é responsável apenas pela execução de tarefas técnicas."
      ],
      answer: 2,
      explanation: "A gestão da produção pode contribuir para a vantagem competitiva organizacional, pois suas decisões afetam diretamente a capacidade da empresa de competir no mercado através de objetivos como qualidade, velocidade, confiabilidade, flexibilidade e custo."
    },
    {
      id: 35,
      type: "multipleassertive",
      question: "Sobre os objetivos de desempenho da função produção, assinale as corretas:<br>I. Qualidade está ligada a fazer as coisas certas.<br>II. Confiabilidade é relacionada ao cumprimento de promessas.<br>III. Custo elevado está associado a maior valor percebido.<br>IV. Velocidade influencia o tempo de resposta ao cliente.",
      options: [
        "Apenas I, II e IV estão corretas",
        "Apenas II e III estão corretas",
        "Apenas I e III estão corretas",
        "Todas estão corretas"
      ],
      answer: 0,
      explanation: "A alternativa correta é 'Apenas I, II e IV estão corretas'. A afirmativa III está incorreta, pois custo elevado não está associado a maior valor percebido; pelo contrário, a redução de custos geralmente permite oferecer maior valor ao cliente através de preços mais competitivos."
    },
    {
      id: 36,
      type: "truefalse",
      question: "A flexibilidade, como objetivo de desempenho, inclui a capacidade de adaptar a operação a mudanças de mix, volume e prazos.",
      answer: true,
      explanation: "Verdadeiro. A flexibilidade como objetivo de desempenho refere-se à capacidade da operação de se adaptar a diferentes circunstâncias, incluindo mudanças no mix de produtos, volumes de produção e prazos de entrega."
    },
    {
      id: 37,
      type: "truefalse",
      question: "De acordo com a literatura apresentada, o modelo de transformação aplica-se exclusivamente ao setor industrial, não sendo adequado para operações de serviço.",
      answer: false,
      explanation: "Falso. O modelo de transformação é um conceito universal que se aplica tanto ao setor industrial quanto ao de serviços, pois ambos envolvem a transformação de inputs (entradas) em outputs (saídas) que agregam valor."
    }
  ],
  topic4: [
    {
      id: 38,
      type: "multiple",
      question: "Segundo os slides sobre Localização Industrial, qual é o principal motivo pelo qual a decisão de localização é considerada estratégica?",
      options: [
        "Porque influencia diretamente o marketing da empresa.",
        "Porque define os contratos com fornecedores internacionais.",
        "Porque determina onde os produtos ou serviços serão fabricados ou prestados.",
        "Porque garante a certificação ISO necessária para a operação."
      ],
      answer: 2,
      explanation: "A decisão de localização é considerada estratégica principalmente porque determina onde os produtos ou serviços serão fabricados ou prestados, o que impacta diversos aspectos da operação, como custos, logística e acesso a recursos."
    },
    {
      id: 39,
      type: "multiple",
      question: "Com base nos métodos de decisão de localização, o Sistema de Classificação de Fatores (SCF) é utilizado para:",
      options: [
        "Escolher localidades com menor carga tributária.",
        "Avaliar riscos de fornecedores.",
        "Combinar múltiplos critérios qualitativos com pesos atribuídos.",
        "Medir o ponto de equilíbrio financeiro de cada localidade."
      ],
      answer: 2,
      explanation: "O Sistema de Classificação de Fatores (SCF) é utilizado para combinar múltiplos critérios qualitativos com pesos atribuídos, permitindo uma avaliação mais abrangente das alternativas de localização considerando diversos fatores relevantes."
    },
    {
      id: 40,
      type: "multipleassertive",
      question: "Analise as afirmativas sobre localização industrial:<br>I. A exaustão de matérias-primas pode justificar o fechamento de uma unidade.<br>II. Prédios térreos favorecem o arranjo físico e reduzem custos de movimentação.<br>III. A localização é irrelevante em empresas de serviços.<br>IV. Os custos fixos e variáveis são critérios válidos de análise comparativa.",
      options: [
        "Apenas I e II estão corretas",
        "Apenas I, II e IV estão corretas",
        "Apenas III e IV estão corretas",
        "Todas estão corretas"
      ],
      answer: 1,
      explanation: "A alternativa correta é 'Apenas I, II e IV estão corretas'. A afirmativa III está incorreta, pois a localização é extremamente relevante para empresas de serviços, especialmente aquelas que dependem do contato direto com o cliente."
    },
    {
      id: 41,
      type: "truefalse",
      question: "A localização de instalações produtivas pode afetar diretamente os custos de transporte e mão de obra.",
      answer: true,
      explanation: "Verdadeiro. A localização das instalações produtivas afeta diretamente os custos de transporte (tanto de matérias-primas quanto de produtos acabados) e os custos de mão de obra, que podem variar significativamente entre diferentes regiões."
    },
    {
      id: 42,
      type: "truefalse",
      question: "O método de ponto de equilíbrio é inadequado para comparar alternativas de localização com diferentes custos fixos e variáveis.",
      answer: false,
      explanation: "Falso. O método de ponto de equilíbrio é justamente adequado para comparar alternativas de localização com diferentes custos fixos e variáveis, permitindo identificar qual localidade é mais vantajosa para diferentes volumes de produção."
    },
    {
      id: 43,
      type: "multiple",
      question: "Segundo o método de comparação entre custos fixos e variáveis, qual é a melhor localidade se o volume de produção esperado for elevado?",
      options: [
        "A localidade com menor custo fixo, independentemente do variável.",
        "A localidade com menor custo variável, mesmo que o fixo seja maior.",
        "A localidade com maior ponto de equilíbrio.",
        "A localidade com menor número de funcionários."
      ],
      answer: 1,
      explanation: "Para volumes de produção elevados, a melhor localidade é aquela com menor custo variável, mesmo que o custo fixo seja maior, pois o impacto dos custos variáveis se multiplica pelo volume de produção, tornando-se mais significativo no longo prazo."
    },
    {
      id: 44,
      type: "multiple",
      question: "Assinale a alternativa que NÃO é um fator determinante típico nas decisões de localização industrial:",
      options: [
        "Proximidade de matérias-primas.",
        "Existência de mão de obra qualificada.",
        "Nível de endividamento da empresa.",
        "Proximidade do mercado consumidor."
      ],
      answer: 2,
      explanation: "O nível de endividamento da empresa não é um fator determinante típico nas decisões de localização industrial. Embora possa influenciar a capacidade de investimento, não é um critério diretamente relacionado à escolha da localidade em si."
    },
    {
      id: 45,
      type: "multipleassertive",
      question: "Analise as afirmativas a seguir:<br>I. A escolha de uma nova unidade pode manter as existentes em operação.<br>II. O fechamento de unidades pode ser motivado por mudanças de mercado.<br>III. A análise de localização se aplica somente ao setor público.<br>IV. A escolha de localização deve considerar também fatores qualitativos.",
      options: [
        "Apenas I, II e IV estão corretas",
        "Apenas II, III e IV estão corretas",
        "Apenas I e III estão corretas",
        "Todas estão corretas"
      ],
      answer: 0,
      explanation: "A alternativa correta é 'Apenas I, II e IV estão corretas'. A afirmativa III está incorreta, pois a análise de localização se aplica tanto ao setor público quanto ao privado, sendo uma decisão relevante para qualquer tipo de organização."
    },
    {
      id: 46,
      type: "truefalse",
      question: "A decisão de localização é um fator irreversível, que não admite revisão futura mesmo diante de mudanças ambientais.",
      answer: false,
      explanation: "Falso. Embora a decisão de localização seja de longo prazo e envolva investimentos significativos, ela não é irreversível. Empresas podem revisar suas decisões de localização diante de mudanças ambientais, tecnológicas ou de mercado."
    },
    {
      id: 47,
      type: "truefalse",
      question: "A localização de unidades de emergência deve considerar critérios de proximidade e rotas de acesso entre regiões atendidas.",
      answer: true,
      explanation: "Verdadeiro. A localização de unidades de emergência deve considerar critérios de proximidade e rotas de acesso entre regiões atendidas, visando minimizar o tempo de resposta e garantir o atendimento eficiente em situações críticas."
    }
  ],
  topic5: [
    {
      id: 48,
      type: "multiple",
      question: "Segundo os slides do tópico \"Arranjo Físico\", o que caracteriza um arranjo do tipo posicional?",
      options: [
        "Recursos transformados movem-se entre as máquinas.",
        "Recursos transformadores se deslocam até o item a ser processado.",
        "A operação utiliza sistemas de produção contínua.",
        "É mais adequado para produção em massa."
      ],
      answer: 1,
      explanation: "O arranjo físico posicional (ou fixo) caracteriza-se pelo fato de que os recursos transformadores (equipamentos, pessoas) se deslocam até o item a ser processado, que permanece fixo devido a seu tamanho, fragilidade ou outras características."
    },
    {
      id: 49,
      type: "multiple",
      question: "Qual das alternativas representa corretamente uma vantagem de um arranjo físico funcional (por processo)?",
      options: [
        "Fluxo de produção simples e padronizado.",
        "Custos de movimentação muito baixos.",
        "Flexibilidade para atender demandas variadas.",
        "Total previsibilidade no tempo de ciclo."
      ],
      answer: 2,
      explanation: "Uma vantagem do arranjo físico funcional (por processo) é a flexibilidade para atender demandas variadas, pois permite que diferentes produtos sigam rotas distintas conforme suas necessidades específicas de processamento."
    },
    {
      id: 50,
      type: "multipleassertive",
      question: "Analise as afirmativas:<br>I. O arranjo físico por produto é adequado para produção em massa.<br>II. O arranjo celular busca combinar flexibilidade com fluxo contínuo.<br>III. O arranjo funcional é o mais indicado para volumes elevados e variedade mínima.<br>IV. O arranjo posicional favorece produtos grandes e complexos.",
      options: [
        "Apenas I, II e IV estão corretas",
        "Apenas I e III estão corretas",
        "Apenas II e IV estão corretas",
        "Todas estão corretas"
      ],
      answer: 0,
      explanation: "A alternativa correta é 'Apenas I, II e IV estão corretas'. A afirmativa III está incorreta, pois o arranjo funcional não é o mais indicado para volumes elevados e variedade mínima; essa característica se aplica melhor ao arranjo por produto."
    },
    {
      id: 51,
      type: "truefalse",
      question: "No arranjo físico por produto, os recursos transformadores são organizados em sequência lógica de produção.",
      answer: true,
      explanation: "Verdadeiro. No arranjo físico por produto, os recursos transformadores (máquinas, equipamentos, pessoas) são organizados em sequência lógica de acordo com as etapas necessárias para a produção do item, formando uma linha de produção."
    },
    {
      id: 52,
      type: "truefalse",
      question: "Um bom arranjo físico deve minimizar atrasos, reduzir retrabalhos e maximizar o uso do espaço.",
      answer: true,
      explanation: "Verdadeiro. Um bom arranjo físico deve minimizar atrasos no fluxo de produção, reduzir retrabalhos causados por movimentações desnecessárias e maximizar o uso eficiente do espaço disponível."
    },
    {
      id: 53,
      type: "multiple",
      question: "De acordo com os slides, qual dos seguintes ambientes representa melhor um arranjo físico funcional (por processo)?",
      options: [
        "Linha de montagem de automóveis.",
        "Hospital geral com setores especializados.",
        "Construção de uma ponte sobre o rio.",
        "Refeitório com serviço self-service."
      ],
      answer: 1,
      explanation: "Um hospital geral com setores especializados representa bem um arranjo físico funcional (por processo), pois os recursos são agrupados por similaridade de função (cardiologia, ortopedia, etc.), e os pacientes se deslocam entre os departamentos conforme suas necessidades específicas."
    },
    {
      id: 54,
      type: "multiple",
      question: "Qual das afirmações descreve corretamente o arranjo físico em linha (por produto)?",
      options: [
        "O fluxo dos recursos transformados é adaptado individualmente para cada cliente.",
        "Os recursos de transformação são agrupados por similaridade técnica.",
        "O produto segue uma rota fixa e previsível de processamento.",
        "As estações de trabalho são reconfiguradas com frequência."
      ],
      answer: 2,
      explanation: "O arranjo físico em linha (por produto) caracteriza-se pelo fato de que o produto segue uma rota fixa e previsível de processamento, passando sequencialmente por todas as etapas necessárias para sua produção."
    },
    {
      id: 55,
      type: "multipleassertive",
      question: "Analise as afirmativas:<br>I. O arranjo celular busca combinar flexibilidade do funcional com eficiência do arranjo em linha.<br>II. No arranjo funcional, o fluxo é padronizado e previsível.<br>III. No arranjo por produto, cada cliente segue caminhos distintos.<br>IV. No arranjo posicional, o recurso transformado permanece fixo.",
      options: [
        "Apenas I e IV estão corretas",
        "Apenas II e III estão corretas",
        "Apenas I, II e IV estão corretas",
        "Todas estão corretas"
      ],
      answer: 0,
      explanation: "A alternativa correta é 'Apenas I e IV estão corretas'. A afirmativa II está incorreta, pois no arranjo funcional o fluxo não é padronizado nem previsível, variando conforme as necessidades de cada produto. A afirmativa III também está incorreta, pois no arranjo por produto todos os itens seguem o mesmo caminho, não caminhos distintos."
    },
    {
      id: 56,
      type: "truefalse",
      question: "O arranjo celular organiza os recursos em pequenos grupos que processam famílias de produtos semelhantes.",
      answer: true,
      explanation: "Verdadeiro. O arranjo celular organiza os recursos em pequenos grupos (células) dedicados ao processamento de famílias de produtos que compartilham características semelhantes, combinando aspectos de flexibilidade com eficiência."
    },
    {
      id: 57,
      type: "truefalse",
      question: "O arranjo funcional é mais adequado quando há alta repetitividade e previsibilidade no fluxo de produção.",
      answer: false,
      explanation: "Falso. O arranjo funcional não é o mais adequado para situações de alta repetitividade e previsibilidade no fluxo de produção. Nessas condições, o arranjo por produto (em linha) seria mais apropriado."
    }
  ],
  topic6: [
    {
      id: 58,
      type: "multiple",
      question: "Segundo os slides de PCP, o que caracteriza a programação para frente (forward scheduling)?",
      options: [
        "Inicia a produção a partir da data de entrega e calcula para trás.",
        "É usada apenas em ambientes de fluxo contínuo.",
        "Agrega as atividades a partir do momento mais recente possível.",
        "Inicia a alocação das tarefas assim que os recursos estão disponíveis."
      ],
      answer: 3,
      explanation: "A programação para frente (forward scheduling) caracteriza-se por iniciar a alocação das tarefas assim que os recursos estão disponíveis, partindo do momento atual em direção ao futuro, sem considerar inicialmente a data de entrega."
    },
    {
      id: 59,
      type: "multiple",
      question: "Sobre os níveis de decisão no PCP, assinale a alternativa correta:",
      options: [
        "O planejamento mestre da produção é um nível estratégico.",
        "A programação da produção é uma atividade tática.",
        "O planejamento agregado se localiza no nível tático.",
        "O controle da produção ocorre no nível estratégico."
      ],
      answer: 2,
      explanation: "O planejamento agregado se localiza no nível tático do PCP, fazendo a ponte entre as decisões estratégicas de longo prazo e as decisões operacionais de curto prazo, trabalhando com famílias de produtos e horizontes de médio prazo."
    },
    {
      id: 60,
      type: "multipleassertive",
      question: "Analise as afirmativas sobre programação e sequenciamento:<br>I. Programar é definir quando e quanto produzir.<br>II. Sequenciar é definir a ordem de produção das tarefas.<br>III. Programação para trás considera a data final e calcula para trás.<br>IV. Programação para frente é sempre mais eficiente que a para trás.",
      options: [
        "Apenas I, II e III estão corretas",
        "Apenas II e IV estão corretas",
        "Apenas I e IV estão corretas",
        "Todas estão corretas"
      ],
      answer: 0,
      explanation: "A alternativa correta é 'Apenas I, II e III estão corretas'. A afirmativa IV está incorreta, pois a programação para frente não é sempre mais eficiente que a programação para trás; a eficiência de cada método depende do contexto específico da operação."
    },
    {
      id: 61,
      type: "truefalse",
      question: "O PCP é responsável por responder o que, quanto, quando e com que recursos produzir.",
      answer: true,
      explanation: "Verdadeiro. O Planejamento e Controle da Produção (PCP) é responsável por responder questões fundamentais como o que produzir, em que quantidade, quando produzir e com quais recursos, coordenando todas as atividades produtivas."
    },
    {
      id: 62,
      type: "truefalse",
      question: "O sequenciamento do tipo FIFO (first in, first out) prioriza os trabalhos mais curtos para minimizar o tempo de produção.",
      answer: false,
      explanation: "Falso. O sequenciamento FIFO (first in, first out) não prioriza os trabalhos mais curtos, mas sim processa as tarefas na ordem em que chegam ao sistema. A regra que prioriza trabalhos mais curtos é a SPT (Shortest Processing Time)."
    },
    {
      id: 63,
      type: "multiple",
      question: "Qual é a principal diferença entre carregamento finito e carregamento infinito no PCP?",
      options: [
        "O carregamento finito não considera prazos de entrega.",
        "O carregamento infinito ignora limitações de capacidade.",
        "O carregamento finito não admite fila de espera.",
        "O carregamento infinito aplica-se apenas a sistemas contínuos."
      ],
      answer: 1,
      explanation: "A principal diferença é que o carregamento infinito ignora limitações de capacidade, alocando trabalho sem considerar se há recursos disponíveis, enquanto o carregamento finito respeita os limites de capacidade dos recursos."
    },
    {
      id: 64,
      type: "multiple",
      question: "Assinale a alternativa que melhor exemplifica uma situação de produção puxada:",
      options: [
        "Um restaurante prepara todos os pratos antes dos pedidos chegarem.",
        "Uma gráfica imprime panfletos conforme solicitação dos clientes.",
        "Uma fábrica monta veículos com base em metas mensais fixas.",
        "Um hospital realiza agendamentos antecipados sem demanda confirmada."
      ],
      answer: 1,
      explanation: "Uma gráfica que imprime panfletos conforme solicitação dos clientes exemplifica uma situação de produção puxada, pois a produção só é iniciada após a confirmação da demanda real, sendo 'puxada' pelo cliente."
    },
    {
      id: 65,
      type: "multipleassertive",
      question: "Analise as afirmativas sobre controle da produção:<br>I. É responsável por verificar se as atividades estão ocorrendo conforme o planejado.<br>II. Atua apenas após o encerramento da produção.<br>III. É uma função que interage com informações do chão de fábrica.<br>IV. Permite realimentar decisões de planejamento.",
      options: [
        "Apenas I, III e IV estão corretas",
        "Apenas II e III estão corretas",
        "Apenas I e II estão corretas",
        "Todas estão corretas"
      ],
      answer: 0,
      explanation: "A alternativa correta é 'Apenas I, III e IV estão corretas'. A afirmativa II está incorreta, pois o controle da produção não atua apenas após o encerramento da produção, mas sim durante todo o processo produtivo, permitindo ajustes em tempo real."
    },
    {
      id: 66,
      type: "truefalse",
      question: "O carregamento finito é usado quando se deseja garantir que a carga alocada respeite os limites de capacidade da operação.",
      answer: true,
      explanation: "Verdadeiro. O carregamento finito é utilizado quando se deseja garantir que a carga de trabalho alocada respeite os limites de capacidade da operação, evitando sobrecargas e garantindo um planejamento mais realista."
    },
    {
      id: 67,
      type: "truefalse",
      question: "A produção empurrada se baseia em previsões e empurra ordens de produção para os processos seguintes, mesmo sem demanda real.",
      answer: true,
      explanation: "Verdadeiro. A produção empurrada se baseia em previsões de demanda e 'empurra' ordens de produção para os processos seguintes, independentemente da existência de demanda real confirmada, o que pode levar à formação de estoques."
    }
  ],
  topic8: [
    {
      id: 68,
      type: "multiple",
      question: "No contexto do Jogo do Barco, qual das práticas a seguir está diretamente associada à redução de desperdícios no fluxo de valor?",
      options: [
        "Criação de estoques intermediários.",
        "Implantação de planejamento empurrado.",
        "Uso de indicadores de capacidade teórica.",
        "Implantação de um sistema puxado com sinalização visual (Kanban)."
      ],
      answer: 3,
      explanation: "A implantação de um sistema puxado com sinalização visual (Kanban) está diretamente associada à redução de desperdícios no fluxo de valor, pois limita o trabalho em processo e sincroniza a produção com a demanda real."
    },
    {
      id: 69,
      type: "multiple",
      question: "De acordo com os princípios do Lean observados no Jogo do Barco, qual é o papel do takt time?",
      options: [
        "Determinar a eficiência financeira da operação.",
        "Ajustar o ritmo de produção à capacidade da fábrica.",
        "Sincronizar o ritmo de produção com a demanda do cliente.",
        "Medir o tempo total de ciclo entre operações."
      ],
      answer: 2,
      explanation: "O papel do takt time, segundo os princípios do Lean, é sincronizar o ritmo de produção com a demanda do cliente, estabelecendo um ritmo constante que evita tanto a superprodução quanto a subprodução."
    },
    {
      id: 70,
      type: "multipleassertive",
      question: "Analise as afirmativas sobre a dinâmica do Jogo do Barco:<br>I. O sistema puxado promove maior estabilidade no fluxo de produção.<br>II. A ausência de indicadores leva a decisões menos eficazes.<br>III. A visibilidade dos gargalos melhora a tomada de decisão.<br>IV. A produção em lotes grandes reduz desperdícios.",
      options: [
        "Apenas I, II e III estão corretas",
        "Apenas II e IV estão corretas",
        "Apenas I e IV estão corretas",
        "Todas estão corretas"
      ],
      answer: 0,
      explanation: "A alternativa correta é 'Apenas I, II e III estão corretas'. A afirmativa IV está incorreta, pois a produção em lotes grandes geralmente aumenta os desperdícios, como estoques excessivos e tempos de espera, contrariando os princípios do Lean."
    },
    {
      id: 71,
      type: "truefalse",
      question: "No Jogo do Barco, o excesso de WIP (work in process) pode dificultar a identificação de gargalos.",
      answer: true,
      explanation: "Verdadeiro. No Jogo do Barco, o excesso de WIP (trabalho em processo) pode dificultar a identificação de gargalos, pois mascara os problemas reais do sistema ao criar buffers que ocultam as ineficiências do processo."
    },
    {
      id: 72,
      type: "truefalse",
      question: "A produção empurrada observada nas primeiras rodadas do Jogo do Barco evidenciou aumento da eficiência e redução de lead time.",
      answer: false,
      explanation: "Falso. A produção empurrada observada nas primeiras rodadas do Jogo do Barco geralmente evidencia problemas como aumento de estoques intermediários, maior lead time e instabilidade no fluxo, não aumento de eficiência."
    },
    {
      id: 73,
      type: "multiple",
      question: "Qual é a relação entre o lead time e os gargalos produtivos identificada durante o Jogo do Barco?",
      options: [
        "O aumento do lead time revela eliminação de gargalos.",
        "Lead time é constante, independentemente dos gargalos.",
        "Redução de gargalos tende a diminuir o lead time.",
        "Lead time aumenta quando se adota o sistema puxado."
      ],
      answer: 2,
      explanation: "A relação identificada durante o Jogo do Barco é que a redução de gargalos tende a diminuir o lead time, pois elimina restrições que causam esperas e acúmulos de trabalho em processo."
    },
    {
      id: 74,
      type: "multiple",
      question: "Durante o Jogo do Barco, o que se observou quando a produção foi baseada na real demanda do cliente?",
      options: [
        "Aumento de estoques em processo.",
        "Redução de desperdícios e maior fluidez no sistema.",
        "Elevação dos tempos de espera e ociosidade.",
        "Necessidade de buffers de segurança em todas as etapas."
      ],
      answer: 1,
      explanation: "Quando a produção foi baseada na real demanda do cliente durante o Jogo do Barco, observou-se redução de desperdícios e maior fluidez no sistema, com menos estoques intermediários e melhor sincronização entre as etapas."
    },
    {
      id: 75,
      type: "multipleassertive",
      question: "Analise as afirmativas sobre o uso de indicadores no Jogo do Barco:<br>I. Permitem visualização clara de gargalos.<br>II. Auxiliam na realimentação da decisão.<br>III. São desnecessários em ambientes estáveis.<br>IV. Facilitam o alinhamento entre áreas da operação.",
      options: [
        "Apenas I, II e IV estão corretas",
        "Apenas II e III estão corretas",
        "Apenas I e III estão corretas",
        "Todas estão corretas"
      ],
      answer: 0,
      explanation: "A alternativa correta é 'Apenas I, II e IV estão corretas'. A afirmativa III está incorreta, pois os indicadores são necessários mesmo em ambientes estáveis, para manter o controle do processo e identificar oportunidades de melhoria contínua."
    },
    {
      id: 76,
      type: "truefalse",
      question: "A adoção de fluxos contínuos, sincronizados com o takt time, foi mais eficaz do que a produção por empurrar grandes lotes.",
      answer: true,
      explanation: "Verdadeiro. A adoção de fluxos contínuos, sincronizados com o takt time, demonstrou-se mais eficaz do que a produção por empurrar grandes lotes, resultando em menor lead time, menos estoques e maior estabilidade no sistema."
    },
    {
      id: 77,
      type: "truefalse",
      question: "O Kanban, como ferramenta de controle visual, foi utilizado para limitar o excesso de WIP (trabalho em processo).",
      answer: true,
      explanation: "Verdadeiro. O Kanban, como ferramenta de controle visual, foi utilizado para limitar o excesso de WIP (trabalho em processo), estabelecendo limites claros para a quantidade de itens em cada etapa do processo."
    }
  ]
};

// Configuração dos nomes dos tópicos
const quizConfig = {
  topicNames: {
    topic1: "Objetivos de Desempenho",
    topic2: "Localização Industrial",
    topic3: "Introdução à GEO e Objetivos de Desempenho",
    topic4: "Localização Industrial",
    topic5: "Arranjo Físico (Layout)",
    topic6: "Planejamento e Controle da Produção (PCP)",
    topic8: "Jogo do Barco (Lean, MFV, Takt Time, Kanban)"
  }
};
