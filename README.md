# Quiz de Gestão Estratégica de Operações (GEO)

Este é um aplicativo web interativo para estudos e prática de questões sobre Gestão Estratégica de Operações. O sistema permite que os alunos testem seus conhecimentos em diferentes tópicos da disciplina, com correção automática e explicações detalhadas.

## Características

- 75 questões organizadas em 5 tópicos
- Suporte para questões de múltipla escolha, verdadeiro/falso e múltipla assertiva
- Correção automática das respostas
- Explicações detalhadas para cada questão
- Interface responsiva para uso em qualquer dispositivo
- Acesso livre sem necessidade de login

## Como Usar

1. Abra o arquivo `index.html` em qualquer navegador moderno
2. Na tela inicial, escolha um dos 5 tópicos disponíveis
3. Responda às questões selecionando a opção desejada
4. Clique em "Verificar Resposta" para ver se acertou
5. Leia a explicação que aparecerá após verificar a resposta
6. Navegue entre as questões usando os botões "Anterior" e "Próxima"
7. Ao final, você receberá sua pontuação e poderá revisar todas as questões

## Estrutura de Arquivos

- `index.html`: Página principal do aplicativo
- `css/styles.css`: Estilos e formatação visual
- `js/app.js`: Lógica de funcionamento do quiz
- `js/questions.js`: Banco de questões e respostas

## Como Adicionar ou Modificar Questões

Para adicionar ou modificar questões, edite o arquivo `js/questions.js`. As questões estão organizadas por tópicos (topic1, topic2, etc.) e seguem a seguinte estrutura:

### Para questões de múltipla escolha:
```javascript
{
  id: 1,
  type: "multiple",
  question: "Texto da pergunta?",
  options: [
    "Opção A",
    "Opção B",
    "Opção C",
    "Opção D",
    "Opção E"
  ],
  answer: 2, // índice da resposta correta (começando em 0)
  explanation: "Explicação da resposta correta."
}
```

### Para questões de verdadeiro/falso:
```javascript
{
  id: 6,
  type: "truefalse",
  question: "Afirmação para julgar como verdadeira ou falsa.",
  answer: true, // true para verdadeiro, false para falso
  explanation: "Explicação da resposta correta."
}
```

### Para questões de múltipla assertiva:
```javascript
{
  id: 11,
  type: "multipleassertive",
  question: "Sobre o tema X, analise as afirmativas:<br>I. Primeira afirmativa.<br>II. Segunda afirmativa.<br>III. Terceira afirmativa.<br>IV. Quarta afirmativa.",
  options: [
    "Apenas I, II e IV estão corretas",
    "Apenas I e III estão corretas",
    "Apenas II, III e IV estão corretas",
    "I, II, III e IV estão corretas"
  ],
  answer: 0, // índice da resposta correta (começando em 0)
  explanation: "Explicação detalhada da resposta correta."
}
```

## Configurações do Quiz

No final do arquivo `js/questions.js`, você pode modificar as configurações gerais:

```javascript
const quizConfig = {
  questionsPerTopic: 15, // número de questões por tópico
  topicNames: {
    topic1: "Nome do Tópico 1",
    topic2: "Nome do Tópico 2",
    // ...
  }
};
```

## Requisitos Técnicos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Não requer conexão com internet após o download inicial
- Compatível com dispositivos móveis e desktop

## Hospedagem

Para disponibilizar o quiz online, basta fazer o upload de todos os arquivos para qualquer serviço de hospedagem web, mantendo a estrutura de pastas.

---

Desenvolvido como solução educacional gratuita para prática e estudo de Gestão Estratégica de Operações.
