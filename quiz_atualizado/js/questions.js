const questions = {
  topic3: [
    {
      id: 1,
      type: "multiple",
      question: "Segundo os slides do tópico \"Introdução à GEO\", qual afirmação melhor expressa a função estratégica da produção nas organizações?",
      options: [
        "A produção é um setor operacional isolado das decisões de longo prazo",
        "A produção é responsável apenas pela entrega física dos produtos",
        "A função produção define padrões de decisão que moldam a visão estratégica da empresa",
        "A função produção atua exclusivamente com recursos humanos e financeiros"
      ],
      answer: 2,
      explanation: "A função produção define padrões de decisão que moldam a visão estratégica da empresa, demonstrando seu papel estratégico nas organizações."
    },
    {
      id: 2,
      type: "multiple",
      question: "De acordo com o modelo de transformação apresentado no material da disciplina, os recursos transformados incluem:",
      options: [
        "Somente materiais e produtos finais",
        "Equipamentos, instalações e sistemas de controle",
        "Materiais, informações e clientes",
        "Fornecedores, estoques e indicadores de desempenho"
      ],
      answer: 2,
      explanation: "Os recursos transformados incluem materiais, informações e clientes, que são os elementos que sofrem o processo de transformação."
    },
    {
      id: 3,
      type: "multipleassertive",
      question: "Sobre os modelos produtivos apresentados na Introdução à GEO, avalie as seguintes afirmativas:<br>I. O modelo de produção contínua caracteriza-se por volumes elevados e variedade mínima.<br>II. A produção por projeto apresenta baixa padronização e alta customização.<br>III. A produção em massa é mais indicada para produtos artesanais personalizados.<br>IV. O jobbing lida com grandes volumes e processos padronizados.",
      options: [
        "Apenas I e II estão corretas",
        "Apenas III e IV estão corretas",
        "Apenas I, II e IV estão corretas",
        "Todas as afirmativas estão corretas"
      ],
      answer: 0,
      explanation: "Apenas as afirmativas I e II estão corretas. A produção contínua realmente se caracteriza por volumes elevados e variedade mínima, e a produção por projeto apresenta baixa padronização e alta customização. As afirmativas III e IV estão incorretas, pois a produção em massa não é indicada para produtos artesanais personalizados, e o jobbing não lida com grandes volumes e processos padronizados."
    },
    {
      id: 4,
      type: "truefalse",
      question: "A função produção está presente em todas as organizações, pois todas produzem algum tipo de valor, seja tangível ou intangível.",
      answer: true,
      explanation: "Verdadeiro. A função produção está presente em todas as organizações, independentemente do setor, pois todas produzem algum tipo de valor, seja na forma de produtos tangíveis ou serviços intangíveis."
    },
    {
      id: 5,
      type: "truefalse",
      question: "O objetivo de custo, na função produção, está diretamente relacionado à eficiência operacional, pois quanto menor o custo de produção, maior o preço de venda para o cliente.",
      answer: false,
      explanation: "Falso. Embora o objetivo de custo esteja relacionado à eficiência operacional, a relação apresentada está incorreta. Quanto menor o custo de produção, maior a margem potencial ou a possibilidade de oferecer preços mais competitivos, não necessariamente aumentando o preço de venda."
    },
    {
      id: 6,
      type: "multiple",
      question: "Segundo o modelo de transformação descrito por Slack, qual dos seguintes exemplos representa um recurso de transformação em uma operação bancária?",
      options: [
        "Dados de clientes no sistema",
        "Cédulas e moedas depositadas",
        "O caixa responsável pelo atendimento",
        "Os extratos gerados ao final das transações"
      ],
      answer: 2,
      explanation: "O caixa responsável pelo atendimento é um recurso de transformação, pois é um dos elementos que realiza o processo de transformação, não o que é transformado."
    },
    {
      id: 7,
      type: "multiple",
      question: "De acordo com os slides da Introdução à GEO, assinale a afirmativa correta:",
      options: [
        "A estratégia de operações é um plano de ação de curto prazo, voltado para o setor financeiro",
        "As decisões da função produção não afetam a visão estratégica da empresa",
        "A gestão da produção pode contribuir para a vantagem competitiva organizacional",
        "A operação é responsável apenas pela execução de tarefas técnicas"
      ],
      answer: 2,
      explanation: "A gestão da produção pode contribuir para a vantagem competitiva organizacional, pois suas decisões e práticas impactam diretamente na capacidade da empresa de competir no mercado."
    },
    {
      id: 8,
      type: "multipleassertive",
      question: "Sobre os objetivos de desempenho da função produção, assinale as corretas:<br>I. Qualidade está ligada a fazer as coisas certas.<br>II. Confiabilidade é relacionada ao cumprimento de promessas.<br>III. Custo elevado está associado a maior valor percebido.<br>IV. Velocidade influencia o tempo de resposta ao cliente.",
      options: [
        "Apenas I, II e IV estão corretas",
        "Apenas II e III estão corretas",
        "Apenas I e III estão corretas",
        "Todas estão corretas"
      ],
      answer: 0,
      explanation: "As afirmativas I, II e IV estão corretas. Qualidade realmente está ligada a fazer as coisas certas, confiabilidade relaciona-se ao cumprimento de promessas, e velocidade influencia o tempo de resposta ao cliente. A afirmativa III está incorreta, pois custo elevado não está necessariamente associado a maior valor percebido; pelo contrário, custos menores geralmente permitem maior competitividade."
    },
    {
      id: 9,
      type: "truefalse",
      question: "A flexibilidade, como objetivo de desempenho, inclui a capacidade de adaptar a operação a mudanças de mix, volume e prazos.",
      answer: true,
      explanation: "Verdadeiro. A flexibilidade como objetivo de desempenho inclui a capacidade de adaptar a operação a diferentes tipos de mudanças, incluindo alterações no mix de produtos, volumes de produção e prazos de entrega."
    },
    {
      id: 10,
      type: "truefalse",
      question: "De acordo com a literatura apresentada, o modelo de transformação aplica-se exclusivamente ao setor industrial.",
      answer: false,
      explanation: "Falso. O modelo de transformação não se aplica exclusivamente ao setor industrial, mas a qualquer tipo de operação, incluindo serviços, organizações sem fins lucrativos e operações do setor público."
    },
    {
      id: 11,
      type: "multiple",
      question: "Qual dos seguintes exemplos representa corretamente um recurso transformado em um hospital?",
      options: [
        "Médicos e enfermeiros",
        "Equipamentos de diagnóstico",
        "Pacientes",
        "Instalações físicas"
      ],
      answer: 2,
      explanation: "Os pacientes são recursos transformados em um hospital, pois são eles que passam pelo processo de transformação (tratamento) para melhorar sua condição de saúde."
    },
    {
      id: 12,
      type: "multiple",
      question: "Segundo o material da disciplina, qual das alternativas representa corretamente a relação entre qualidade e custos?",
      options: [
        "Maior qualidade sempre implica em maiores custos",
        "Qualidade e custos não possuem relação direta",
        "Melhor qualidade pode reduzir custos ao evitar retrabalho e desperdícios",
        "Reduzir custos é mais importante que manter a qualidade"
      ],
      answer: 2,
      explanation: "Melhor qualidade pode reduzir custos ao evitar retrabalho e desperdícios, demonstrando que investir em qualidade pode resultar em economia de recursos no longo prazo."
    },
    {
      id: 13,
      type: "multipleassertive",
      question: "Sobre a função produção nas organizações, analise:<br>I. Está presente apenas em empresas manufatureiras.<br>II. Transforma inputs em outputs de maior valor.<br>III. Inclui tanto a produção de bens quanto de serviços.<br>IV. É responsável exclusivamente pela fabricação física.",
      options: [
        "Apenas II e III estão corretas",
        "Apenas I e IV estão corretas",
        "Apenas I, II e III estão corretas",
        "Todas estão corretas"
      ],
      answer: 0,
      explanation: "Apenas as afirmativas II e III estão corretas. A função produção transforma inputs em outputs de maior valor e inclui tanto a produção de bens quanto de serviços. As afirmativas I e IV estão incorretas, pois a função produção está presente em todos os tipos de organizações, não apenas manufatureiras, e não é responsável exclusivamente pela fabricação física."
    },
    {
      id: 14,
      type: "truefalse",
      question: "A velocidade como objetivo de desempenho refere-se exclusivamente ao tempo de fabricação do produto.",
      answer: false,
      explanation: "Falso. A velocidade como objetivo de desempenho não se refere exclusivamente ao tempo de fabricação, mas ao tempo total desde o pedido até a entrega, incluindo processamento, espera e transporte."
    },
    {
      id: 15,
      type: "multiple",
      question: "Qual das seguintes afirmativas melhor descreve o conceito de confiabilidade na gestão de operações?",
      options: [
        "Capacidade de produzir em grandes volumes",
        "Habilidade de fazer as coisas no tempo prometido",
        "Flexibilidade para mudar o que está sendo produzido",
        "Velocidade em desenvolver novos produtos"
      ],
      answer: 1,
      explanation: "A confiabilidade na gestão de operações refere-se à habilidade de fazer as coisas no tempo prometido, cumprindo prazos e compromissos assumidos com os clientes."
    },
    {
      id: 16,
      type: "multiple",
      question: "De acordo com o material da disciplina, qual é o principal benefício da flexibilidade nas operações?",
      options: [
        "Redução de custos operacionais",
        "Aumento da padronização dos processos",
        "Capacidade de responder a mudanças imprevistas",
        "Eliminação da necessidade de planejamento"
      ],
      answer: 2,
      explanation: "O principal benefício da flexibilidade nas operações é a capacidade de responder a mudanças imprevistas, permitindo que a organização se adapte rapidamente a novas condições de mercado ou requisitos dos clientes."
    },
    {
      id: 17,
      type: "multipleassertive",
      question: "Sobre os tipos de flexibilidade, analise:<br>I. Flexibilidade de produto refere-se à introdução de novos produtos.<br>II. Flexibilidade de mix relaciona-se à variedade de produtos oferecidos.<br>III. Flexibilidade de volume é a capacidade de alterar níveis de produção.<br>IV. Flexibilidade de entrega relaciona-se apenas ao transporte.",
      options: [
        "Apenas I, II e III estão corretas",
        "Apenas II e IV estão corretas",
        "Apenas I e III estão corretas",
        "Todas estão corretas"
      ],
      answer: 0,
      explanation: "As afirmativas I, II e III estão corretas. Flexibilidade de produto refere-se à capacidade de introduzir novos produtos, flexibilidade de mix relaciona-se à variedade de produtos oferecidos, e flexibilidade de volume é a capacidade de alterar níveis de produção. A afirmativa IV está incorreta, pois flexibilidade de entrega não se relaciona apenas ao transporte, mas à capacidade de alterar prazos e condições de entrega."
    },
    {
      id: 18,
      type: "truefalse",
      question: "Os cinco objetivos de desempenho (qualidade, velocidade, confiabilidade, flexibilidade e custo) têm a mesma importância em todas as operações.",
      answer: false,
      explanation: "Falso. Os cinco objetivos de desempenho não têm a mesma importância em todas as operações. A prioridade dada a cada objetivo varia conforme o tipo de negócio, estratégia competitiva e necessidades dos clientes."
    },
    {
      id: 19,
      type: "multiple",
      question: "Qual dos seguintes exemplos NÃO representa um trade-off comum na gestão de operações?",
      options: [
        "Qualidade versus custo",
        "Flexibilidade versus eficiência",
        "Velocidade versus confiabilidade",
        "Inovação versus padronização"
      ],
      answer: 2,
      explanation: "Velocidade versus confiabilidade não representa um trade-off comum na gestão de operações, pois esses objetivos geralmente são complementares. Operações mais rápidas tendem a ser mais confiáveis por reduzirem a complexidade e oportunidades de erro."
    },
    {
      id: 20,
      type: "multiple",
      question: "Segundo o material da disciplina, qual é o papel da estratégia de operações?",
      options: [
        "Focar exclusivamente na redução de custos",
        "Garantir que as capacidades de operações suportem a estratégia competitiva",
        "Substituir a estratégia de marketing",
        "Eliminar a necessidade de outras áreas funcionais"
      ],
      answer: 1,
      explanation: "O papel da estratégia de operações é garantir que as capacidades de operações suportem a estratégia competitiva da organização, alinhando decisões operacionais com objetivos estratégicos."
    },
    {
      id: 21,
      type: "multipleassertive",
      question: "Sobre a relação entre os objetivos de desempenho e a vantagem competitiva, analise:<br>I. Alta qualidade pode levar à vantagem em diferenciação.<br>II. Baixo custo sempre resulta em maior participação de mercado.<br>III. Flexibilidade pode criar barreiras à entrada de concorrentes.<br>IV. Confiabilidade contribui para a fidelização de clientes.",
      options: [
        "Apenas I, III e IV estão corretas",
        "Apenas II e III estão corretas",
        "Apenas I e IV estão corretas",
        "Todas estão corretas"
      ],
      answer: 0,
      explanation: "As afirmativas I, III e IV estão corretas. Alta qualidade pode levar à vantagem em diferenciação, flexibilidade pode criar barreiras à entrada de concorrentes, e confiabilidade contribui para a fidelização de clientes. A afirmativa II está incorreta, pois baixo custo não garante automaticamente maior participação de mercado, que depende de diversos outros fatores."
    },
    {
      id: 22,
      type: "truefalse",
      question: "A função produção é responsável apenas pela transformação física de materiais em produtos acabados.",
      answer: false,
      explanation: "Falso. A função produção não é responsável apenas pela transformação física de materiais, mas por qualquer processo de transformação, incluindo o processamento de informações e a transformação de estado dos clientes em serviços."
    },
    {
      id: 23,
      type: "multiple",
      question: "Qual dos seguintes fatores NÃO é considerado um input no modelo de transformação?",
      options: [
        "Materiais",
        "Informações",
        "Clientes",
        "Lucro"
      ],
      answer: 3,
      explanation: "Lucro não é considerado um input no modelo de transformação, mas sim um resultado (output) do processo. Os inputs típicos são materiais, informações e clientes."
    },
    {
      id: 24,
      type: "multiple",
      question: "De acordo com o material da disciplina, qual é a principal diferença entre eficiência e eficácia na gestão de operações?",
      options: [
        "Eficiência refere-se a fazer as coisas certas, enquanto eficácia refere-se a fazer certo as coisas",
        "Eficiência relaciona-se ao uso de recursos, enquanto eficácia relaciona-se ao alcance de objetivos",
        "Eficiência é um conceito de longo prazo, enquanto eficácia é de curto prazo",
        "Eficiência aplica-se apenas à manufatura, enquanto eficácia aplica-se apenas a serviços"
      ],
      answer: 1,
      explanation: "A principal diferença é que eficiência relaciona-se ao uso de recursos (fazer certo as coisas, com menos desperdício), enquanto eficácia relaciona-se ao alcance de objetivos (fazer as coisas certas, que atendam às necessidades)."
    },
    {
      id: 25,
      type: "multipleassertive",
      question: "Sobre o papel estratégico da função produção, analise:<br>I. Pode ser fonte de vantagem competitiva sustentável.<br>II. Deve estar alinhado com a estratégia global da organização.<br>III. É irrelevante para empresas de serviços.<br>IV. Influencia diretamente a percepção de valor pelo cliente.",
      options: [
        "Apenas I, II e IV estão corretas",
        "Apenas I e III estão corretas",
        "Apenas II, III e IV estão corretas",
        "Todas estão corretas"
      ],
      answer: 0,
      explanation: "As afirmativas I, II e IV estão corretas. A função produção pode ser fonte de vantagem competitiva sustentável, deve estar alinhada com a estratégia global da organização e influencia diretamente a percepção de valor pelo cliente. A afirmativa III está incorreta, pois a função produção é relevante para todos os tipos de organizações, incluindo empresas de serviços."
    }
  ],
  topic4: [
    {
      id: 26,
      type: "multiple",
      question: "Segundo o material da disciplina, a decisão sobre localização industrial é considerada:",
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
      id: 27,
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
      id: 28,
      type: "multiple",
      question: "Entre os fatores determinantes nas decisões de localização industrial, destaca-se:",
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
      id: 29,
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
      id: 30,
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
      id: 31,
      type: "truefalse",
      question: "Segundo o material da disciplina, aspectos negativos de uma localidade devem receber a mesma atenção que os positivos no processo de decisão.",
      answer: true,
      explanation: "Verdadeiro. Os aspectos negativos de uma localidade devem receber a mesma atenção que os positivos no processo de decisão, pois ambos impactam o desempenho da operação."
    },
    {
      id: 32,
      type: "truefalse",
      question: "O sistema de classificação de fatores utiliza apenas critérios quantitativos e ignora avaliações qualitativas.",
      answer: false,
      explanation: "Falso. O sistema de classificação de fatores utiliza tanto critérios quantitativos quanto qualitativos, permitindo uma avaliação mais completa das alternativas de localização."
    },
    {
      id: 33,
      type: "truefalse",
      question: "O fechamento de uma unidade industrial pode ser motivado pela exaustão de matérias-primas ou aumento exagerado dos custos operacionais.",
      answer: true,
      explanation: "Verdadeiro. O fechamento de uma unidade industrial pode ser motivado pela exaustão de matérias-primas ou aumento exagerado dos custos operacionais, tornando a operação inviável naquela localidade."
    },
    {
      id: 34,
      type: "truefalse",
      question: "O método de classificação de fatores considera diversos aspectos, como mão de obra, clima, transportes e comunidade.",
      answer: true,
      explanation: "Verdadeiro. O método de classificação de fatores considera diversos aspectos relevantes para a decisão de localização, incluindo mão de obra, clima, transportes e comunidade."
    },
    {
      id: 35,
      type: "truefalse",
      question: "Segundo o material da disciplina, a escolha do local para instalação de uma unidade deve considerar tanto fatores positivos quanto negativos.",
      answer: true,
      explanation: "Verdadeiro. A escolha do local para instalação de uma unidade deve considerar tanto fatores positivos quanto negativos, permitindo uma avaliação equilibrada das alternativas."
    },
    {
      id: 36,
      type: "multipleassertive",
      question: "Sobre as opções de localização para empresas em operação, analise:<br>I. Expandir uma instalação existente é viável se houver espaço disponível.<br>II. Adicionar uma nova unidade exige avaliação do impacto no sistema total.<br>III. Fechar uma unidade pode ser motivado por mudanças de mercado.<br>IV. A decisão de localização é sempre irreversível.",
      options: [
        "Apenas I, II e III estão corretas",
        "Apenas II e IV estão corretas",
        "Apenas I e IV estão corretas",
        "Apenas III e IV estão corretas"
      ],
      answer: 0,
      explanation: "As afirmativas I, II e III estão corretas. Expandir uma instalação existente é viável se houver espaço disponível, adicionar uma nova unidade exige avaliação do impacto no sistema total, e fechar uma unidade pode ser motivado por mudanças de mercado. A afirmativa IV está incorreta, pois a decisão de localização não é sempre irreversível, podendo ser alterada conforme mudanças no ambiente de negócios."
    },
    {
      id: 37,
      type: "multipleassertive",
      question: "No método de classificação de fatores, considere:<br>I. Cada fator recebe um peso de acordo com sua importância.<br>II. A soma ponderada das notas define a pontuação final da localidade.<br>III. Apenas fatores financeiros são considerados.<br>IV. A localidade escolhida é a que obtém maior pontuação.",
      options: [
        "Apenas I, II e IV estão corretas",
        "Apenas II e III estão corretas",
        "Apenas I e IV estão corretas",
        "Todas estão corretas"
      ],
      answer: 0,
      explanation: "As afirmativas I, II e IV estão corretas. No método de classificação de fatores, cada fator recebe um peso de acordo com sua importância, a soma ponderada das notas define a pontuação final da localidade, e a localidade escolhida é a que obtém maior pontuação. A afirmativa III está incorreta, pois o método considera diversos fatores, não apenas os financeiros."
    },
    {
      id: 38,
      type: "multiple",
      question: "Qual dos seguintes fatores NÃO é tipicamente considerado na decisão de localização industrial?",
      options: [
        "Disponibilidade de mão de obra",
        "Proximidade de matérias-primas",
        "Infraestrutura de transportes",
        "Preferências pessoais dos acionistas"
      ],
      answer: 3,
      explanation: "Preferências pessoais dos acionistas não é um fator tipicamente considerado na decisão de localização industrial, que deve ser baseada em critérios objetivos relacionados à operação e estratégia da empresa."
    },
    {
      id: 39,
      type: "multiple",
      question: "Qual das seguintes afirmativas melhor descreve a importância da proximidade com o mercado consumidor na decisão de localização?",
      options: [
        "É irrelevante para a maioria das indústrias",
        "É importante apenas para empresas de serviços",
        "Pode reduzir custos de distribuição e melhorar o nível de serviço",
        "Só deve ser considerada após a análise de todos os outros fatores"
      ],
      answer: 2,
      explanation: "A proximidade com o mercado consumidor pode reduzir custos de distribuição e melhorar o nível de serviço, sendo um fator importante na decisão de localização para muitas empresas."
    },
    {
      id: 40,
      type: "multiple",
      question: "Segundo o material da disciplina, qual é a principal vantagem do método de classificação de fatores?",
      options: [
        "Considera apenas fatores quantitativos, facilitando a análise",
        "Permite a inclusão de fatores qualitativos e quantitativos na análise",
        "Elimina a necessidade de julgamento humano no processo decisório",
        "Garante sempre a escolha da localidade de menor custo"
      ],
      answer: 1,
      explanation: "A principal vantagem do método de classificação de fatores é permitir a inclusão de fatores qualitativos e quantitativos na análise, proporcionando uma avaliação mais completa das alternativas."
    },
    {
      id: 41,
      type: "multipleassertive",
      question: "Sobre a relação entre localização e estratégia empresarial, analise:<br>I. A decisão de localização deve estar alinhada com a estratégia competitiva.<br>II. Diferentes estratégias podem levar a diferentes decisões de localização.<br>III. A localização é uma decisão puramente operacional, sem impacto estratégico.<br>IV. Fatores de localização podem criar vantagens competitivas.",
      options: [
        "Apenas I, II e IV estão corretas",
        "Apenas I e III estão corretas",
        "Apenas II e IV estão corretas",
        "Todas estão corretas"
      ],
      answer: 0,
      explanation: "As afirmativas I, II e IV estão corretas. A decisão de localização deve estar alinhada com a estratégia competitiva, diferentes estratégias podem levar a diferentes decisões de localização, e fatores de localização podem criar vantagens competitivas. A afirmativa III está incorreta, pois a localização é uma decisão estratégica, não puramente operacional."
    },
    {
      id: 42,
      type: "truefalse",
      question: "Incentivos fiscais e subsídios governamentais são fatores irrelevantes na decisão de localização industrial.",
      answer: false,
      explanation: "Falso. Incentivos fiscais e subsídios governamentais são fatores relevantes na decisão de localização industrial, podendo reduzir significativamente os custos de instalação e operação."
    },
    {
      id: 43,
      type: "multiple",
      question: "Qual das seguintes alternativas representa corretamente um fator ambiental na decisão de localização?",
      options: [
        "Custo de mão de obra",
        "Disponibilidade de matérias-primas",
        "Legislação ambiental e restrições de poluição",
        "Incentivos fiscais"
      ],
      answer: 2,
      explanation: "Legislação ambiental e restrições de poluição representam corretamente um fator ambiental na decisão de localização, influenciando os custos de conformidade e as possibilidades de operação."
    },
    {
      id: 44,
      type: "multiple",
      question: "De acordo com o material da disciplina, qual é o principal objetivo do método de localização de unidades de emergência?",
      options: [
        "Minimizar o custo total de instalação",
        "Maximizar a cobertura populacional",
        "Minimizar o tempo máximo de resposta a emergências",
        "Reduzir o número de unidades necessárias"
      ],
      answer: 2,
      explanation: "O principal objetivo do método de localização de unidades de emergência é minimizar o tempo máximo de resposta a emergências, garantindo atendimento rápido em situações críticas."
    },
    {
      id: 45,
      type: "multipleassertive",
      question: "Sobre a expansão de instalações existentes, analise:<br>I. É geralmente mais econômica que construir novas unidades.<br>II. Pode ser limitada por restrições físicas do local atual.<br>III. Evita custos de transferência de equipamentos e pessoal.<br>IV. Sempre resulta em economias de escala.",
      options: [
        "Apenas I, II e III estão corretas",
        "Apenas II e IV estão corretas",
        "Apenas I e III estão corretas",
        "Todas estão corretas"
      ],
      answer: 0,
      explanation: "As afirmativas I, II e III estão corretas. A expansão de instalações existentes é geralmente mais econômica que construir novas unidades, pode ser limitada por restrições físicas do local atual, e evita custos de transferência de equipamentos e pessoal. A afirmativa IV está incorreta, pois a expansão não garante automaticamente economias de escala, que dependem de diversos fatores."
    },
    {
      id: 46,
      type: "truefalse",
      question: "A disponibilidade de mão de obra qualificada é um fator irrelevante na decisão de localização de empresas de alta tecnologia.",
      answer: false,
      explanation: "Falso. A disponibilidade de mão de obra qualificada é um fator crucial na decisão de localização de empresas de alta tecnologia, que dependem fortemente de capital humano especializado."
    },
    {
      id: 47,
      type: "multiple",
      question: "Qual das seguintes afirmativas melhor descreve a relação entre custos de transporte e decisão de localização?",
      options: [
        "Custos de transporte são irrelevantes na era digital",
        "Custos de transporte afetam apenas empresas de grande porte",
        "Custos de transporte podem influenciar a decisão entre proximidade de matérias-primas ou mercado consumidor",
        "Custos de transporte são sempre o fator determinante na decisão de localização"
      ],
      answer: 2,
      explanation: "Custos de transporte podem influenciar a decisão entre proximidade de matérias-primas ou mercado consumidor, dependendo de qual opção minimiza os custos totais de logística."
    },
    {
      id: 48,
      type: "multiple",
      question: "Segundo o material da disciplina, qual é a principal desvantagem do método de classificação de fatores?",
      options: [
        "Não considera fatores qualitativos",
        "É excessivamente complexo para aplicação prática",
        "Envolve subjetividade na atribuição de pesos e notas",
        "Ignora completamente os custos operacionais"
      ],
      answer: 2,
      explanation: "A principal desvantagem do método de classificação de fatores é que envolve subjetividade na atribuição de pesos e notas, podendo levar a vieses na avaliação das alternativas."
    },
    {
      id: 49,
      type: "multipleassertive",
      question: "Sobre a relação entre localização e cadeia de suprimentos, analise:<br>I. A localização de fornecedores pode influenciar a decisão de localização da empresa.<br>II. A integração da cadeia de suprimentos é irrelevante para decisões de localização.<br>III. Empresas podem se localizar em clusters para benefícios logísticos.<br>IV. A globalização eliminou a importância da localização na cadeia de suprimentos.",
      options: [
        "Apenas I e III estão corretas",
        "Apenas II e IV estão corretas",
        "Apenas I, II e III estão corretas",
        "Todas estão corretas"
      ],
      answer: 0,
      explanation: "As afirmativas I e III estão corretas. A localização de fornecedores pode influenciar a decisão de localização da empresa, e empresas podem se localizar em clusters para benefícios logísticos. As afirmativas II e IV estão incorretas, pois a integração da cadeia de suprimentos é relevante para decisões de localização, e a globalização não eliminou a importância da localização, apenas a tornou mais complexa."
    },
    {
      id: 50,
      type: "truefalse",
      question: "A decisão de localização industrial tem impacto apenas no curto prazo, sendo facilmente reversível.",
      answer: false,
      explanation: "Falso. A decisão de localização industrial tem impacto de longo prazo e não é facilmente reversível, envolvendo investimentos significativos e afetando diversos aspectos da operação da empresa."
    }
  ],
  topic5: [
    {
      id: 51,
      type: "multiple",
      question: "Segundo o material da disciplina, o que é arranjo físico (layout)?",
      options: [
        "A definição da localização geográfica da empresa",
        "O planejamento e integração dos meios de produção",
        "A decisão sobre como dispor os recursos transformadores no espaço",
        "A escolha dos equipamentos a serem utilizados na produção"
      ],
      answer: 2,
      explanation: "Arranjo físico (layout) é a decisão sobre como dispor os recursos transformadores no espaço, determinando a forma como materiais, informações e clientes fluem pela operação."
    },
    {
      id: 52,
      type: "multiple",
      question: "Qual dos seguintes NÃO é um tipo básico de arranjo físico apresentado no material da disciplina?",
      options: [
        "Arranjo físico posicional",
        "Arranjo físico por processo",
        "Arranjo físico celular",
        "Arranjo físico diagonal"
      ],
      answer: 3,
      explanation: "Arranjo físico diagonal não é um tipo básico de arranjo físico. Os tipos básicos são: posicional, por processo, celular e por produto."
    },
    {
      id: 53,
      type: "multiple",
      question: "No arranjo físico por processo, os recursos são organizados de acordo com:",
      options: [
        "A sequência de atividades da operação",
        "A função que desempenham ou o processo que realizam",
        "A família de produtos a que atendem",
        "A posição fixa do produto transformado"
      ],
      answer: 1,
      explanation: "No arranjo físico por processo, os recursos são organizados de acordo com a função que desempenham ou o processo que realizam, agrupando recursos similares."
    },
    {
      id: 54,
      type: "multiple",
      question: "Qual tipo de arranjo físico é mais adequado para operações que lidam com alta variedade e baixo volume?",
      options: [
        "Arranjo físico por produto",
        "Arranjo físico posicional",
        "Arranjo físico por processo",
        "Arranjo físico celular"
      ],
      answer: 2,
      explanation: "O arranjo físico por processo é mais adequado para operações que lidam com alta variedade e baixo volume, pois oferece flexibilidade para processar diferentes tipos de produtos."
    },
    {
      id: 55,
      type: "multiple",
      question: "No arranjo físico celular, os recursos transformadores são:",
      options: [
        "Organizados em linha de acordo com a sequência de processamento",
        "Agrupados por função ou departamento",
        "Pré-selecionados para processar famílias de produtos com características semelhantes",
        "Dispostos ao redor do produto que permanece estacionário"
      ],
      answer: 2,
      explanation: "No arranjo físico celular, os recursos transformadores são pré-selecionados para processar famílias de produtos com características semelhantes, formando células de manufatura."
    },
    {
      id: 56,
      type: "truefalse",
      question: "O arranjo físico por produto é indicado para operações de alto volume e baixa variedade.",
      answer: true,
      explanation: "Verdadeiro. O arranjo físico por produto é indicado para operações de alto volume e baixa variedade, como linhas de montagem, onde a padronização permite ganhos de eficiência."
    },
    {
      id: 57,
      type: "truefalse",
      question: "No arranjo físico posicional, o produto permanece estacionário enquanto os recursos de transformação se movem ao seu redor.",
      answer: true,
      explanation: "Verdadeiro. No arranjo físico posicional, o produto permanece estacionário enquanto os recursos de transformação se movem ao seu redor, sendo utilizado para produtos grandes, delicados ou difíceis de mover."
    },
    {
      id: 58,
      type: "truefalse",
      question: "O arranjo físico celular combina vantagens do arranjo por processo e do arranjo por produto.",
      answer: true,
      explanation: "Verdadeiro. O arranjo físico celular combina vantagens do arranjo por processo (flexibilidade) e do arranjo por produto (eficiência), sendo uma solução intermediária para operações com variedade moderada."
    },
    {
      id: 59,
      type: "truefalse",
      question: "A escolha do tipo de arranjo físico não afeta o fluxo de materiais e pessoas na operação.",
      answer: false,
      explanation: "Falso. A escolha do tipo de arranjo físico afeta diretamente o fluxo de materiais e pessoas na operação, impactando a eficiência, custos e tempos de processamento."
    },
    {
      id: 60,
      type: "truefalse",
      question: "O arranjo físico por processo geralmente resulta em menores tempos de atravessamento (lead times) que o arranjo por produto.",
      answer: false,
      explanation: "Falso. O arranjo físico por processo geralmente resulta em maiores tempos de atravessamento (lead times) que o arranjo por produto, devido ao fluxo mais complexo e às filas entre departamentos."
    },
    {
      id: 61,
      type: "multipleassertive",
      question: "Sobre o arranjo físico por produto, analise:<br>I. É adequado para produção em massa.<br>II. Os recursos são organizados na sequência específica do processo.<br>III. Oferece alta flexibilidade para mudanças no mix de produtos.<br>IV. Geralmente apresenta alto custo unitário de produção.",
      options: [
        "Apenas I e II estão corretas",
        "Apenas II e III estão corretas",
        "Apenas I, II e IV estão corretas",
        "Todas estão corretas"
      ],
      answer: 0,
      explanation: "As afirmativas I e II estão corretas. O arranjo físico por produto é adequado para produção em massa e os recursos são organizados na sequência específica do processo. As afirmativas III e IV estão incorretas, pois este tipo de arranjo oferece baixa flexibilidade para mudanças no mix de produtos e geralmente apresenta baixo custo unitário de produção."
    },
    {
      id: 62,
      type: "multipleassertive",
      question: "Sobre o arranjo físico por processo, analise:<br>I. Recursos similares são agrupados.<br>II. O fluxo de materiais é complexo e variável.<br>III. É adequado para produção em massa.<br>IV. Oferece flexibilidade de mix e volume.",
      options: [
        "Apenas I, II e IV estão corretas",
        "Apenas I e III estão corretas",
        "Apenas II e IV estão corretas",
        "Todas estão corretas"
      ],
      answer: 0,
      explanation: "As afirmativas I, II e IV estão corretas. No arranjo físico por processo, recursos similares são agrupados, o fluxo de materiais é complexo e variável, e oferece flexibilidade de mix e volume. A afirmativa III está incorreta, pois este tipo de arranjo não é adequado para produção em massa, mas sim para produção em lotes ou sob encomenda."
    },
    {
      id: 63,
      type: "multiple",
      question: "Qual das seguintes alternativas representa corretamente uma vantagem do arranjo físico celular?",
      options: [
        "Máxima utilização de equipamentos especializados",
        "Supervisão mais fácil que no arranjo por processo",
        "Menor investimento em equipamentos que no arranjo por produto",
        "Maior flexibilidade que no arranjo posicional"
      ],
      answer: 1,
      explanation: "Uma vantagem do arranjo físico celular é a supervisão mais fácil que no arranjo por processo, pois as células são unidades mais compactas e autônomas."
    },
    {
      id: 64,
      type: "multiple",
      question: "Segundo o material da disciplina, qual é o principal objetivo do arranjo físico?",
      options: [
        "Minimizar o custo dos equipamentos",
        "Maximizar a utilização do espaço disponível",
        "Organizar o fluxo de materiais, informações e pessoas",
        "Facilitar a supervisão dos funcionários"
      ],
      answer: 2,
      explanation: "O principal objetivo do arranjo físico é organizar o fluxo de materiais, informações e pessoas, de forma a atender às necessidades da operação com eficiência e eficácia."
    },
    {
      id: 65,
      type: "multiple",
      question: "Qual tipo de arranjo físico é mais adequado para a construção de um navio?",
      options: [
        "Arranjo físico por produto",
        "Arranjo físico por processo",
        "Arranjo físico celular",
        "Arranjo físico posicional"
      ],
      answer: 3,
      explanation: "O arranjo físico posicional é mais adequado para a construção de um navio, pois o produto (navio) permanece estacionário enquanto os recursos de transformação (trabalhadores, equipamentos) se movem ao seu redor."
    },
    {
      id: 66,
      type: "multipleassertive",
      question: "Sobre os objetivos do arranjo físico, analise:<br>I. Proporcionar segurança inerente para funcionários e equipamentos.<br>II. Minimizar investimentos em equipamentos.<br>III. Garantir flexibilidade de longo prazo.<br>IV. Permitir alta utilização de mão de obra e equipamentos.",
      options: [
        "Apenas I, III e IV estão corretas",
        "Apenas II e III estão corretas",
        "Apenas I e IV estão corretas",
        "Todas estão corretas"
      ],
      answer: 0,
      explanation: "As afirmativas I, III e IV estão corretas. Os objetivos do arranjo físico incluem proporcionar segurança inerente para funcionários e equipamentos, garantir flexibilidade de longo prazo e permitir alta utilização de mão de obra e equipamentos. A afirmativa II está incorreta, pois o objetivo não é minimizar investimentos em equipamentos, mas sim otimizar seu uso."
    },
    {
      id: 67,
      type: "truefalse",
      question: "O arranjo físico misto combina elementos de dois ou mais tipos básicos de arranjo físico em uma mesma instalação.",
      answer: true,
      explanation: "Verdadeiro. O arranjo físico misto combina elementos de dois ou mais tipos básicos de arranjo físico em uma mesma instalação, adaptando-se às necessidades específicas de diferentes partes da operação."
    },
    {
      id: 68,
      type: "multiple",
      question: "Qual das seguintes alternativas representa corretamente uma característica do arranjo físico por produto?",
      options: [
        "Alta flexibilidade de mix",
        "Fluxo de materiais complexo e variável",
        "Baixa utilização de equipamentos",
        "Baixos níveis de estoque em processo"
      ],
      answer: 3,
      explanation: "Uma característica do arranjo físico por produto é os baixos níveis de estoque em processo, pois o fluxo contínuo e balanceado minimiza a necessidade de estoques intermediários."
    },
    {
      id: 69,
      type: "multiple",
      question: "De acordo com o material da disciplina, qual é a principal desvantagem do arranjo físico por processo?",
      options: [
        "Baixa flexibilidade para mudanças no mix de produtos",
        "Complexidade no controle da produção e alto estoque em processo",
        "Alto investimento em equipamentos especializados",
        "Dificuldade em acomodar produtos personalizados"
      ],
      answer: 1,
      explanation: "A principal desvantagem do arranjo físico por processo é a complexidade no controle da produção e alto estoque em processo, devido ao fluxo complexo e variável entre departamentos."
    },
    {
      id: 70,
      type: "multipleassertive",
      question: "Sobre o arranjo físico posicional, analise:<br>I. É adequado para produtos de grande porte.<br>II. Oferece alta flexibilidade de mix.<br>III. Apresenta baixa movimentação do produto.<br>IV. Geralmente resulta em baixa utilização de equipamentos.",
      options: [
        "Apenas I e III estão corretas",
        "Apenas II e IV estão corretas",
        "Apenas I, III e IV estão corretas",
        "Todas estão corretas"
      ],
      answer: 2,
      explanation: "As afirmativas I, III e IV estão corretas. O arranjo físico posicional é adequado para produtos de grande porte, apresenta baixa movimentação do produto (que permanece estacionário) e geralmente resulta em baixa utilização de equipamentos, que são movidos conforme necessário. A afirmativa II está incorreta, pois este tipo de arranjo não necessariamente oferece alta flexibilidade de mix, sendo mais relacionado ao tamanho e complexidade do produto."
    },
    {
      id: 71,
      type: "truefalse",
      question: "A tecnologia de grupo é um conceito fundamental para o desenvolvimento do arranjo físico celular.",
      answer: true,
      explanation: "Verdadeiro. A tecnologia de grupo é um conceito fundamental para o desenvolvimento do arranjo físico celular, pois permite identificar famílias de produtos com características semelhantes que podem ser processados em uma mesma célula."
    },
    {
      id: 72,
      type: "multiple",
      question: "Qual das seguintes alternativas representa corretamente um exemplo de arranjo físico por processo?",
      options: [
        "Linha de montagem de automóveis",
        "Hospital com departamentos especializados",
        "Construção de um edifício",
        "Célula de manufatura para família de peças"
      ],
      answer: 1,
      explanation: "Um hospital com departamentos especializados representa corretamente um exemplo de arranjo físico por processo, onde recursos similares (especialidades médicas) são agrupados em departamentos."
    },
    {
      id: 73,
      type: "multiple",
      question: "Segundo o material da disciplina, qual fator é mais importante na decisão sobre o tipo de arranjo físico a ser adotado?",
      options: [
        "O custo de implementação",
        "A disponibilidade de espaço",
        "O volume-variedade da operação",
        "A preferência da gerência"
      ],
      answer: 2,
      explanation: "O volume-variedade da operação é o fator mais importante na decisão sobre o tipo de arranjo físico a ser adotado, pois diferentes combinações de volume e variedade são mais adequadas a diferentes tipos de arranjo."
    },
    {
      id: 74,
      type: "multipleassertive",
      question: "Sobre a relação entre arranjo físico e desempenho operacional, analise:<br>I. O arranjo físico afeta diretamente a produtividade da operação.<br>II. A escolha do arranjo físico não impacta os custos operacionais.<br>III. O fluxo de materiais é determinado pelo arranjo físico.<br>IV. A qualidade dos produtos independe do tipo de arranjo físico.",
      options: [
        "Apenas I e III estão corretas",
        "Apenas II e IV estão corretas",
        "Apenas I, II e III estão corretas",
        "Todas estão corretas"
      ],
      answer: 0,
      explanation: "As afirmativas I e III estão corretas. O arranjo físico afeta diretamente a produtividade da operação e o fluxo de materiais é determinado pelo arranjo físico. As afirmativas II e IV estão incorretas, pois a escolha do arranjo físico impacta os custos operacionais e a qualidade dos produtos pode ser influenciada pelo tipo de arranjo físico."
    },
    {
      id: 75,
      type: "truefalse",
      question: "O balanceamento de linha é uma técnica relevante apenas para o arranjo físico por produto.",
      answer: true,
      explanation: "Verdadeiro. O balanceamento de linha é uma técnica relevante principalmente para o arranjo físico por produto, onde é necessário equilibrar a carga de trabalho entre as estações para evitar gargalos e maximizar a eficiência."
    }
  ],
  topic6: [
    {
      id: 76,
      type: "multiple",
      question: "Segundo o material da disciplina, o que é Planejamento e Controle da Produção (PCP)?",
      options: [
        "Um sistema para controle de qualidade dos produtos",
        "Um conjunto de atividades para gerenciar recursos produtivos",
        "Uma técnica para redução de custos operacionais",
        "Um método para seleção de fornecedores"
      ],
      answer: 1,
      explanation: "O Planejamento e Controle da Produção (PCP) é um conjunto de atividades para gerenciar recursos produtivos, garantindo que as operações ocorram eficazmente e produzam produtos e serviços conforme requerido pelos consumidores."
    },
    {
      id: 77,
      type: "multiple",
      question: "Qual das seguintes alternativas representa corretamente uma atividade de planejamento no PCP?",
      options: [
        "Acompanhamento da produção em tempo real",
        "Reprogramação de ordens devido a quebras de máquinas",
        "Definição de quanto e quando produzir no médio prazo",
        "Intervenção imediata para correção de desvios"
      ],
      answer: 2,
      explanation: "A definição de quanto e quando produzir no médio prazo representa corretamente uma atividade de planejamento no PCP, estabelecendo os planos que guiarão a produção futura."
    },
    {
      id: 78,
      type: "multiple",
      question: "No contexto do PCP, o que é o horizonte de planejamento?",
      options: [
        "O tempo máximo permitido para a produção de um item",
        "O período futuro para o qual se estabelecem os planos",
        "O intervalo entre revisões do plano de produção",
        "O tempo de ciclo de um produto na linha de produção"
      ],
      answer: 1,
      explanation: "No contexto do PCP, o horizonte de planejamento é o período futuro para o qual se estabelecem os planos, podendo ser de curto, médio ou longo prazo."
    },
    {
      id: 79,
      type: "multiple",
      question: "Qual das seguintes alternativas representa corretamente uma característica do planejamento de longo prazo?",
      options: [
        "Alto nível de detalhamento das operações",
        "Foco em recursos específicos como máquinas e pessoas",
        "Decisões sobre capacidade produtiva e instalações",
        "Programação diária da produção"
      ],
      answer: 2,
      explanation: "Decisões sobre capacidade produtiva e instalações representam corretamente uma característica do planejamento de longo prazo, que lida com questões estratégicas da operação."
    },
    {
      id: 80,
      type: "multiple",
      question: "No PCP, o que é o Plano Mestre de Produção (PMP)?",
      options: [
        "Um documento que especifica quanto e quando cada produto final será produzido",
        "Um relatório sobre o desempenho histórico da produção",
        "Um sistema para controle de estoques de matérias-primas",
        "Um método para avaliação de fornecedores"
      ],
      answer: 0,
      explanation: "O Plano Mestre de Produção (PMP) é um documento que especifica quanto e quando cada produto final será produzido, servindo como base para o planejamento detalhado de materiais e capacidade."
    },
    {
      id: 81,
      type: "truefalse",
      question: "No PCP, as atividades de planejamento e controle são claramente separadas e realizadas por equipes diferentes.",
      answer: false,
      explanation: "Falso. No PCP, as atividades de planejamento e controle não são claramente separadas, mas formam um continuum, com o planejamento dominando em horizontes mais longos e o controle em horizontes mais curtos."
    },
    {
      id: 82,
      type: "truefalse",
      question: "O MRP (Material Requirements Planning) é um sistema que calcula necessidades de materiais a partir da demanda de produtos finais.",
      answer: true,
      explanation: "Verdadeiro. O MRP (Material Requirements Planning) é um sistema que calcula necessidades de materiais a partir da demanda de produtos finais, considerando a estrutura do produto e os lead times de produção e aquisição."
    },
    {
      id: 83,
      type: "truefalse",
      question: "No sistema Just-in-Time, altos níveis de estoque são mantidos para garantir o atendimento da demanda.",
      answer: false,
      explanation: "Falso. No sistema Just-in-Time, busca-se manter níveis mínimos de estoque, produzindo apenas o necessário, no momento necessário e na quantidade necessária."
    },
    {
      id: 84,
      type: "truefalse",
      question: "O sequenciamento é uma atividade de controle que define a ordem em que as tarefas serão executadas nos recursos.",
      answer: true,
      explanation: "Verdadeiro. O sequenciamento é uma atividade de controle que define a ordem em que as tarefas serão executadas nos recursos, buscando otimizar critérios como tempo de processamento, data de entrega ou setup."
    },
    {
      id: 85,
      type: "truefalse",
      question: "O sistema kanban é uma técnica de controle da produção baseada na reposição do que foi consumido.",
      answer: true,
      explanation: "Verdadeiro. O sistema kanban é uma técnica de controle da produção baseada na reposição do que foi consumido, utilizando cartões ou sinais visuais para autorizar a produção ou movimentação de materiais."
    },
    {
      id: 86,
      type: "multipleassertive",
      question: "Sobre o planejamento hierárquico da produção, analise:<br>I. O nível estratégico define recursos e capacidade de longo prazo.<br>II. O nível tático estabelece planos de produção de médio prazo.<br>III. O nível operacional lida com a programação detalhada da produção.<br>IV. Cada nível opera de forma independente, sem integração.",
      options: [
        "Apenas I, II e III estão corretas",
        "Apenas II e IV estão corretas",
        "Apenas I e III estão corretas",
        "Todas estão corretas"
      ],
      answer: 0,
      explanation: "As afirmativas I, II e III estão corretas. O nível estratégico define recursos e capacidade de longo prazo, o nível tático estabelece planos de produção de médio prazo, e o nível operacional lida com a programação detalhada da produção. A afirmativa IV está incorreta, pois os níveis não operam de forma independente, mas sim de forma integrada, com decisões de níveis superiores restringindo e orientando as de níveis inferiores."
    },
    {
      id: 87,
      type: "multipleassertive",
      question: "Sobre o MRP (Material Requirements Planning), analise:<br>I. Utiliza a estrutura do produto para calcular necessidades de materiais.<br>II. Considera lead times de produção e aquisição.<br>III. Funciona melhor em ambientes de demanda independente.<br>IV. Gera ordens de compra e fabricação.",
      options: [
        "Apenas I, II e IV estão corretas",
        "Apenas I e III estão corretas",
        "Apenas II e IV estão corretas",
        "Todas estão corretas"
      ],
      answer: 0,
      explanation: "As afirmativas I, II e IV estão corretas. O MRP utiliza a estrutura do produto para calcular necessidades de materiais, considera lead times de produção e aquisição, e gera ordens de compra e fabricação. A afirmativa III está incorreta, pois o MRP funciona melhor em ambientes de demanda dependente, não independente."
    },
    {
      id: 88,
      type: "multiple",
      question: "Qual das seguintes alternativas representa corretamente uma característica do sistema Just-in-Time?",
      options: [
        "Produção em grandes lotes para economia de escala",
        "Manutenção de estoques de segurança elevados",
        "Eliminação de desperdícios e produção puxada",
        "Foco na utilização máxima da capacidade instalada"
      ],
      answer: 2,
      explanation: "Eliminação de desperdícios e produção puxada representam corretamente características do sistema Just-in-Time, que busca produzir apenas o necessário, no momento necessário e na quantidade necessária."
    },
    {
      id: 89,
      type: "multiple",
      question: "De acordo com o material da disciplina, qual é a principal diferença entre sistemas de produção empurrada e puxada?",
      options: [
        "A produção empurrada utiliza mais automação que a puxada",
        "A produção puxada é iniciada a partir da demanda real, enquanto a empurrada é baseada em previsões",
        "A produção empurrada é mais adequada para produtos customizados",
        "A produção puxada requer mais estoque que a empurrada"
      ],
      answer: 1,
      explanation: "A principal diferença é que a produção puxada é iniciada a partir da demanda real, enquanto a empurrada é baseada em previsões. Na produção puxada, a produção só ocorre quando há um pedido ou consumo, enquanto na empurrada, a produção é planejada antecipadamente."
    },
    {
      id: 90,
      type: "multiple",
      question: "Qual das seguintes regras de sequenciamento prioriza as tarefas com menor tempo de processamento?",
      options: [
        "FIFO (First In, First Out)",
        "EDD (Earliest Due Date)",
        "SPT (Shortest Processing Time)",
        "CR (Critical Ratio)"
      ],
      answer: 2,
      explanation: "A regra SPT (Shortest Processing Time) prioriza as tarefas com menor tempo de processamento, buscando maximizar o número de tarefas concluídas em um determinado período."
    },
    {
      id: 91,
      type: "multipleassertive",
      question: "Sobre o sistema kanban, analise:<br>I. É um sistema de controle visual da produção.<br>II. Utiliza cartões para autorizar produção ou movimentação.<br>III. Funciona melhor em ambientes de demanda estável.<br>IV. Requer altos níveis de estoque para funcionar adequadamente.",
      options: [
        "Apenas I, II e III estão corretas",
        "Apenas II e IV estão corretas",
        "Apenas I e III estão corretas",
        "Todas estão corretas"
      ],
      answer: 0,
      explanation: "As afirmativas I, II e III estão corretas. O sistema kanban é um sistema de controle visual da produção, utiliza cartões para autorizar produção ou movimentação, e funciona melhor em ambientes de demanda estável. A afirmativa IV está incorreta, pois o kanban busca reduzir, não aumentar, os níveis de estoque."
    },
    {
      id: 92,
      type: "truefalse",
      question: "O conceito de capacidade infinita assume que os recursos produtivos não têm limitações de capacidade no planejamento.",
      answer: true,
      explanation: "Verdadeiro. O conceito de capacidade infinita assume que os recursos produtivos não têm limitações de capacidade no planejamento, simplificando o processo de programação, mas podendo gerar planos irrealistas."
    },
    {
      id: 93,
      type: "multiple",
      question: "Qual das seguintes alternativas representa corretamente uma atividade de controle no PCP?",
      options: [
        "Definição do plano agregado de produção",
        "Elaboração do Plano Mestre de Produção",
        "Monitoramento e intervenção para corrigir desvios na execução",
        "Cálculo das necessidades de materiais"
      ],
      answer: 2,
      explanation: "Monitoramento e intervenção para corrigir desvios na execução representa corretamente uma atividade de controle no PCP, que busca garantir que o plano seja cumprido ou ajustado conforme necessário."
    },
    {
      id: 94,
      type: "multiple",
      question: "De acordo com o material da disciplina, qual é o principal objetivo do Planejamento de Necessidades de Capacidade (CRP)?",
      options: [
        "Determinar a capacidade de longo prazo da empresa",
        "Verificar se há capacidade suficiente para executar o plano de materiais",
        "Definir o número de turnos de trabalho",
        "Calcular a necessidade de matérias-primas"
      ],
      answer: 1,
      explanation: "O principal objetivo do Planejamento de Necessidades de Capacidade (CRP) é verificar se há capacidade suficiente para executar o plano de materiais, identificando possíveis sobrecargas ou ociosidades nos recursos."
    },
    {
      id: 95,
      type: "multipleassertive",
      question: "Sobre o Plano Mestre de Produção (PMP), analise:<br>I. É derivado do plano agregado de produção.<br>II. Especifica produtos finais, não famílias ou grupos.<br>III. Serve como entrada para o MRP.<br>IV. É elaborado apenas para o curto prazo.",
      options: [
        "Apenas I, II e III estão corretas",
        "Apenas II e IV estão corretas",
        "Apenas I e III estão corretas",
        "Todas estão corretas"
      ],
      answer: 0,
      explanation: "As afirmativas I, II e III estão corretas. O PMP é derivado do plano agregado de produção, especifica produtos finais (não famílias ou grupos), e serve como entrada para o MRP. A afirmativa IV está incorreta, pois o PMP é elaborado para o médio prazo, não apenas para o curto prazo."
    },
    {
      id: 96,
      type: "truefalse",
      question: "O conceito de período congelado no PMP significa que nenhuma alteração pode ser feita no plano durante esse período.",
      answer: true,
      explanation: "Verdadeiro. O conceito de período congelado no PMP significa que nenhuma alteração pode ser feita no plano durante esse período, garantindo estabilidade para a produção e aquisição de materiais."
    },
    {
      id: 97,
      type: "multiple",
      question: "Qual das seguintes alternativas representa corretamente uma característica da programação finita?",
      options: [
        "Assume que os recursos têm capacidade ilimitada",
        "Considera as restrições de capacidade dos recursos no sequenciamento",
        "Ignora os tempos de setup entre operações",
        "Prioriza sempre a data de entrega como critério"
      ],
      answer: 1,
      explanation: "A programação finita considera as restrições de capacidade dos recursos no sequenciamento, buscando gerar programas viáveis que respeitem as limitações reais dos recursos."
    },
    {
      id: 98,
      type: "multiple",
      question: "Segundo o material da disciplina, qual é a principal vantagem do sistema MRP II em relação ao MRP?",
      options: [
        "Maior simplicidade de implementação",
        "Menor necessidade de dados precisos",
        "Integração do planejamento de materiais com o de capacidade",
        "Eliminação da necessidade de previsão de demanda"
      ],
      answer: 2,
      explanation: "A principal vantagem do sistema MRP II em relação ao MRP é a integração do planejamento de materiais com o de capacidade, permitindo verificar a viabilidade dos planos de produção em termos de recursos disponíveis."
    },
    {
      id: 99,
      type: "multipleassertive",
      question: "Sobre os sistemas ERP (Enterprise Resource Planning), analise:<br>I. Integram informações de diferentes áreas da empresa.<br>II. Substituem completamente a necessidade de planejamento da produção.<br>III. Utilizam banco de dados único e centralizado.<br>IV. Facilitam a tomada de decisão gerencial.",
      options: [
        "Apenas I, III e IV estão corretas",
        "Apenas II e III estão corretas",
        "Apenas I e IV estão corretas",
        "Todas estão corretas"
      ],
      answer: 0,
      explanation: "As afirmativas I, III e IV estão corretas. Os sistemas ERP integram informações de diferentes áreas da empresa, utilizam banco de dados único e centralizado, e facilitam a tomada de decisão gerencial. A afirmativa II está incorreta, pois os ERPs não substituem completamente a necessidade de planejamento da produção, mas fornecem ferramentas para apoiá-lo."
    },
    {
      id: 100,
      type: "truefalse",
      question: "O conceito de manufatura enxuta (lean manufacturing) busca maximizar a eficiência através da eliminação de desperdícios.",
      answer: true,
      explanation: "Verdadeiro. O conceito de manufatura enxuta (lean manufacturing) busca maximizar a eficiência através da eliminação de desperdícios, como superprodução, espera, transporte desnecessário, processamento inadequado, estoques excessivos, movimentação desnecessária e defeitos."
    }
  ],
  topic8: [
    {
      id: 101,
      type: "multiple",
      question: "No Jogo do Barco, qual é o objetivo principal da simulação?",
      options: [
        "Maximizar a produção de barcos de papel",
        "Minimizar o tempo de ciclo da produção",
        "Otimizar o layout da fábrica",
        "Reduzir o número de operadores"
      ],
      answer: 0,
      explanation: "O objetivo principal da simulação no Jogo do Barco é maximizar a produção de barcos de papel, buscando produzir a maior quantidade possível de barcos que atendam às especificações de qualidade."
    },
    {
      id: 102,
      type: "multiple",
      question: "Qual conceito da produção enxuta é demonstrado quando se reorganiza o layout para aproximar as estações de trabalho no Jogo do Barco?",
      options: [
        "Kanban",
        "Poka-yoke",
        "Redução de desperdício de movimentação",
        "Superprodução"
      ],
      answer: 2,
      explanation: "A reorganização do layout para aproximar as estações de trabalho demonstra o conceito de redução de desperdício de movimentação, um dos sete desperdícios identificados na produção enxuta."
    },
    {
      id: 103,
      type: "multiple",
      question: "No Jogo do Barco, o que representa o estoque de produtos em processo (WIP) entre as estações?",
      options: [
        "Um sinal de eficiência produtiva",
        "Uma forma de garantir a continuidade da produção",
        "Um desperdício a ser minimizado",
        "Uma estratégia para aumentar a capacidade"
      ],
      answer: 2,
      explanation: "No Jogo do Barco, o estoque de produtos em processo (WIP) entre as estações representa um desperdício a ser minimizado, pois indica desequilíbrio no fluxo produtivo e aumenta o lead time total."
    },
    {
      id: 104,
      type: "multiple",
      question: "Qual das seguintes alternativas representa corretamente um benefício do balanceamento de linha no Jogo do Barco?",
      options: [
        "Aumento do estoque em processo",
        "Redução da capacidade produtiva",
        "Equalização da carga de trabalho entre operadores",
        "Aumento do tempo de ciclo"
      ],
      answer: 2,
      explanation: "Um benefício do balanceamento de linha no Jogo do Barco é a equalização da carga de trabalho entre operadores, distribuindo as tarefas de forma mais equilibrada para evitar gargalos e ociosidade."
    },
    {
      id: 105,
      type: "multiple",
      question: "No contexto do Jogo do Barco, o que é um gargalo?",
      options: [
        "A estação com maior capacidade produtiva",
        "A estação que limita a capacidade de todo o sistema",
        "A estação com menor custo operacional",
        "A estação com maior número de operadores"
      ],
      answer: 1,
      explanation: "No contexto do Jogo do Barco, um gargalo é a estação que limita a capacidade de todo o sistema, determinando a taxa máxima de produção que pode ser alcançada."
    },
    {
      id: 106,
      type: "truefalse",
      question: "No Jogo do Barco, a produção em lotes grandes é mais eficiente que a produção unitária ou em pequenos lotes.",
      answer: false,
      explanation: "Falso. No Jogo do Barco, a produção unitária ou em pequenos lotes geralmente é mais eficiente que a produção em lotes grandes, pois reduz o tempo de espera entre estações e permite identificar problemas de qualidade mais rapidamente."
    },
    {
      id: 107,
      type: "truefalse",
      question: "A padronização das operações no Jogo do Barco contribui para a estabilidade e previsibilidade do processo produtivo.",
      answer: true,
      explanation: "Verdadeiro. A padronização das operações no Jogo do Barco contribui para a estabilidade e previsibilidade do processo produtivo, garantindo que as tarefas sejam executadas sempre da mesma forma e com o mesmo tempo."
    },
    {
      id: 108,
      type: "truefalse",
      question: "No Jogo do Barco, o sistema puxado (pull) inicia a produção com base nas ordens dos clientes, não em previsões.",
      answer: true,
      explanation: "Verdadeiro. No Jogo do Barco, o sistema puxado (pull) inicia a produção com base nas ordens dos clientes ou no consumo real, não em previsões, reduzindo estoques e alinhando a produção à demanda real."
    },
    {
      id: 109,
      type: "truefalse",
      question: "A comunicação visual no Jogo do Barco (como sinais, cartões ou marcações) não tem impacto significativo na eficiência do processo.",
      answer: false,
      explanation: "Falso. A comunicação visual no Jogo do Barco (como sinais, cartões ou marcações) tem impacto significativo na eficiência do processo, facilitando a coordenação entre estações e a identificação rápida de problemas ou status da produção."
    },
    {
      id: 110,
      type: "truefalse",
      question: "No Jogo do Barco, a qualidade deve ser verificada apenas no final do processo para não interromper o fluxo produtivo.",
      answer: false,
      explanation: "Falso. No Jogo do Barco, a qualidade deve ser verificada em cada estação (inspeção na fonte), não apenas no final do processo, para evitar o desperdício de processar peças defeituosas e identificar problemas rapidamente."
    },
    {
      id: 111,
      type: "multipleassertive",
      question: "Sobre o conceito de fluxo contínuo no Jogo do Barco, analise:<br>I. Busca eliminar paradas e esperas entre as etapas do processo.<br>II. Requer balanceamento adequado das operações.<br>III. Funciona melhor com grandes lotes de produção.<br>IV. Reduz o lead time total da produção.",
      options: [
        "Apenas I, II e IV estão corretas",
        "Apenas II e III estão corretas",
        "Apenas I e IV estão corretas",
        "Todas estão corretas"
      ],
      answer: 0,
      explanation: "As afirmativas I, II e IV estão corretas. O fluxo contínuo busca eliminar paradas e esperas entre as etapas do processo, requer balanceamento adequado das operações e reduz o lead time total da produção. A afirmativa III está incorreta, pois o fluxo contínuo funciona melhor com pequenos lotes ou produção unitária, não com grandes lotes."
    },
    {
      id: 112,
      type: "multipleassertive",
      question: "Sobre a aplicação do sistema kanban no Jogo do Barco, analise:<br>I. Controla visualmente o fluxo de materiais.<br>II. Limita o estoque em processo entre estações.<br>III. Funciona como um sistema de autorização de produção.<br>IV. Aumenta a necessidade de supervisão direta.",
      options: [
        "Apenas I, II e III estão corretas",
        "Apenas II e IV estão corretas",
        "Apenas I e III estão corretas",
        "Todas estão corretas"
      ],
      answer: 0,
      explanation: "As afirmativas I, II e III estão corretas. O sistema kanban controla visualmente o fluxo de materiais, limita o estoque em processo entre estações e funciona como um sistema de autorização de produção. A afirmativa IV está incorreta, pois o kanban reduz, não aumenta, a necessidade de supervisão direta, por ser um sistema de controle visual e autônomo."
    },
    {
      id: 113,
      type: "multiple",
      question: "Qual das seguintes alternativas representa corretamente um exemplo de desperdício de espera no Jogo do Barco?",
      options: [
        "Operador movimentando-se para buscar material",
        "Estação de trabalho aguardando peças da estação anterior",
        "Produção de barcos além da demanda",
        "Retrabalho de barcos com defeitos"
      ],
      answer: 1,
      explanation: "Um exemplo de desperdício de espera no Jogo do Barco é a estação de trabalho aguardando peças da estação anterior, caracterizando tempo improdutivo que não agrega valor."
    },
    {
      id: 114,
      type: "multiple",
      question: "De acordo com os princípios aplicados no Jogo do Barco, qual é a melhor estratégia para lidar com variações na demanda?",
      options: [
        "Manter altos níveis de estoque para absorver flutuações",
        "Aumentar a velocidade de todas as estações",
        "Desenvolver flexibilidade no sistema produtivo",
        "Focar na maximização da utilização dos recursos"
      ],
      answer: 2,
      explanation: "De acordo com os princípios aplicados no Jogo do Barco, a melhor estratégia para lidar com variações na demanda é desenvolver flexibilidade no sistema produtivo, permitindo ajustes rápidos no volume e mix de produção."
    },
    {
      id: 115,
      type: "multiple",
      question: "No Jogo do Barco, qual é o impacto da redução do tempo de setup (preparação) nas estações de trabalho?",
      options: [
        "Aumento do tamanho dos lotes de produção",
        "Maior flexibilidade para mudanças no mix de produtos",
        "Redução da necessidade de balanceamento de linha",
        "Aumento do estoque em processo"
      ],
      answer: 1,
      explanation: "No Jogo do Barco, a redução do tempo de setup (preparação) nas estações de trabalho resulta em maior flexibilidade para mudanças no mix de produtos, permitindo produzir em lotes menores e responder mais rapidamente às variações na demanda."
    },
    {
      id: 116,
      type: "multipleassertive",
      question: "Sobre a aplicação do conceito de produção puxada no Jogo do Barco, analise:<br>I. A produção é iniciada a partir da demanda real.<br>II. Cada estação produz apenas o que é solicitado pela estação seguinte.<br>III. Requer maior nível de estoque que a produção empurrada.<br>IV. Reduz a superprodução e o estoque em processo.",
      options: [
        "Apenas I, II e IV estão corretas",
        "Apenas II e III estão corretas",
        "Apenas I e IV estão corretas",
        "Todas estão corretas"
      ],
      answer: 0,
      explanation: "As afirmativas I, II e IV estão corretas. Na produção puxada, a produção é iniciada a partir da demanda real, cada estação produz apenas o que é solicitado pela estação seguinte, e isso reduz a superprodução e o estoque em processo. A afirmativa III está incorreta, pois a produção puxada requer menor, não maior, nível de estoque que a produção empurrada."
    },
    {
      id: 117,
      type: "truefalse",
      question: "No Jogo do Barco, a multifuncionalidade dos operadores (capacidade de trabalhar em diferentes estações) reduz a flexibilidade do sistema produtivo.",
      answer: false,
      explanation: "Falso. No Jogo do Barco, a multifuncionalidade dos operadores (capacidade de trabalhar em diferentes estações) aumenta, não reduz, a flexibilidade do sistema produtivo, permitindo realocações conforme necessário para balancear a linha ou lidar com ausências."
    },
    {
      id: 118,
      type: "multiple",
      question: "Qual das seguintes alternativas representa corretamente um exemplo de melhoria contínua (kaizen) no Jogo do Barco?",
      options: [
        "Substituição completa do processo por um novo método",
        "Pequenas modificações incrementais nas operações para aumentar a eficiência",
        "Redução do número de operadores sem alterar o processo",
        "Aumento da produção através de horas extras"
      ],
      answer: 1,
      explanation: "Um exemplo de melhoria contínua (kaizen) no Jogo do Barco são pequenas modificações incrementais nas operações para aumentar a eficiência, como simplificação de movimentos, reorganização de ferramentas ou ajustes no método de trabalho."
    },
    {
      id: 119,
      type: "multiple",
      question: "De acordo com os princípios aplicados no Jogo do Barco, qual é o papel do takt time?",
      options: [
        "Determinar a velocidade máxima de produção possível",
        "Estabelecer o ritmo de produção necessário para atender à demanda",
        "Definir o tempo de ciclo de cada operador",
        "Calcular o lead time total da produção"
      ],
      answer: 1,
      explanation: "De acordo com os princípios aplicados no Jogo do Barco, o papel do takt time é estabelecer o ritmo de produção necessário para atender à demanda, sincronizando a produção com as necessidades do cliente."
    },
    {
      id: 120,
      type: "multipleassertive",
      question: "Sobre a gestão visual no Jogo do Barco, analise:<br>I. Facilita a identificação rápida de problemas.<br>II. Pode incluir marcações de níveis de estoque máximo e mínimo.<br>III. Substitui completamente a necessidade de comunicação verbal.<br>IV. Contribui para a padronização das operações.",
      options: [
        "Apenas I, II e IV estão corretas",
        "Apenas II e III estão corretas",
        "Apenas I e IV estão corretas",
        "Todas estão corretas"
      ],
      answer: 0,
      explanation: "As afirmativas I, II e IV estão corretas. A gestão visual facilita a identificação rápida de problemas, pode incluir marcações de níveis de estoque máximo e mínimo, e contribui para a padronização das operações. A afirmativa III está incorreta, pois a gestão visual complementa, mas não substitui completamente, a necessidade de comunicação verbal."
    },
    {
      id: 121,
      type: "truefalse",
      question: "No Jogo do Barco, a aplicação do conceito de autonomação (jidoka) significa que as máquinas devem operar sem intervenção humana.",
      answer: false,
      explanation: "Falso. No Jogo do Barco, a aplicação do conceito de autonomação (jidoka) não significa que as máquinas devem operar sem intervenção humana, mas sim que o processo deve ser capaz de detectar anormalidades e parar automaticamente quando ocorrem problemas, evitando a produção de defeitos."
    },
    {
      id: 122,
      type: "multiple",
      question: "Qual das seguintes alternativas representa corretamente um benefício da produção em células no Jogo do Barco?",
      options: [
        "Maior especialização dos operadores",
        "Redução da comunicação entre estações",
        "Melhor fluxo de materiais e informações",
        "Aumento do estoque em processo"
      ],
      answer: 2,
      explanation: "Um benefício da produção em células no Jogo do Barco é o melhor fluxo de materiais e informações, aproximando as estações de trabalho e facilitando a coordenação entre elas."
    },
    {
      id: 123,
      type: "multiple",
      question: "De acordo com os princípios aplicados no Jogo do Barco, qual é a melhor abordagem para lidar com problemas de qualidade?",
      options: [
        "Inspecionar rigorosamente os produtos finais",
        "Implementar sistemas de detecção e prevenção de erros (poka-yoke)",
        "Aumentar a velocidade de produção para compensar rejeitos",
        "Criar um departamento especializado em qualidade"
      ],
      answer: 1,
      explanation: "De acordo com os princípios aplicados no Jogo do Barco, a melhor abordagem para lidar com problemas de qualidade é implementar sistemas de detecção e prevenção de erros (poka-yoke), evitando que os defeitos ocorram ou sejam passados adiante."
    },
    {
      id: 124,
      type: "multipleassertive",
      question: "Sobre a aplicação do conceito de trabalho padronizado no Jogo do Barco, analise:<br>I. Define a sequência de operações mais eficiente.<br>II. Estabelece o tempo esperado para cada operação.<br>III. Elimina a necessidade de melhoria contínua.<br>IV. Facilita o treinamento de novos operadores.",
      options: [
        "Apenas I, II e IV estão corretas",
        "Apenas II e III estão corretas",
        "Apenas I e IV estão corretas",
        "Todas estão corretas"
      ],
      answer: 0,
      explanation: "As afirmativas I, II e IV estão corretas. O trabalho padronizado define a sequência de operações mais eficiente, estabelece o tempo esperado para cada operação e facilita o treinamento de novos operadores. A afirmativa III está incorreta, pois o trabalho padronizado não elimina, mas sim serve como base para a melhoria contínua."
    },
    {
      id: 125,
      type: "truefalse",
      question: "No Jogo do Barco, o conceito de valor agregado refere-se a qualquer atividade que transforme o produto ou que o cliente esteja disposto a pagar.",
      answer: true,
      explanation: "Verdadeiro. No Jogo do Barco, o conceito de valor agregado refere-se a qualquer atividade que transforme o produto ou que o cliente esteja disposto a pagar, distinguindo-se das atividades que não agregam valor e devem ser minimizadas ou eliminadas."
    }
  ]
};

// Configuração dos nomes dos tópicos
const quizConfig = {
  topicNames: {
    topic3: "Tópico 3: Introdução à GEO",
    topic4: "Tópico 4: Localização Industrial",
    topic5: "Tópico 5: Arranjo Físico",
    topic6: "Tópico 6: PCP",
    topic8: "Tópico 8: Jogo do Barco"
  }
};
