// Variáveis globais
let currentTopic = '';
let currentQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let score = 0;
let reviewMode = false;
let studentName = '';
let loginTime = null;

// Configuração dos tópicos
const quizConfig = {
  topicNames: {
    topic3: "Tópico 3: Introdução à GEO",
    topic4: "Tópico 4: Localização Industrial",
    topic5: "Tópico 5: Arranjo Físico",
    topic6: "Tópico 6: PCP",
    topic8: "Tópico 8: Jogo do Barco"
  }
};

// Função para mostrar uma tela e esconder as outras
function showScreen(screen) {
    console.log("Mostrando tela:", screen.id);
    
    // Esconder todas as telas
    document.querySelectorAll('.screen').forEach(s => {
        s.classList.remove('active');
    });
    
    // Mostrar a tela desejada
    screen.classList.add('active');
}

// Iniciar o quiz com o tópico selecionado
function startQuiz(topic) {
    console.log("Iniciando quiz com tópico:", topic);
    currentTopic = topic;
    currentQuestions = questions[topic];
    currentQuestionIndex = 0;
    userAnswers = Array(currentQuestions.length).fill(null);
    score = 0;
    reviewMode = false;

    // Atualizar título do tópico
    document.getElementById('topic-title').textContent = quizConfig.topicNames[topic];

    // Mostrar a tela do quiz
    showScreen(document.getElementById('quiz-screen'));
    
    // Mostrar a primeira questão
    showQuestion(0);
}

// Mostrar uma questão específica
function showQuestion(index) {
    console.log("Mostrando questão:", index + 1);
    const question = currentQuestions[index];
    
    // Atualizar contador e barra de progresso
    document.getElementById('question-counter').textContent = `Questão ${index + 1} de ${currentQuestions.length}`;
    document.getElementById('progress-bar').style.width = `${((index + 1) / currentQuestions.length) * 100}%`;
    
    // Atualizar texto da questão
    document.getElementById('question-text').innerHTML = question.question;
    
    // Limpar e preencher opções
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    if (question.type === 'multiple') {
        question.options.forEach((option, i) => {
            const optionElement = createMultipleChoiceOption(option, i, index);
            optionsContainer.appendChild(optionElement);
        });
    } else if (question.type === 'truefalse') {
        const trueOption = createTrueFalseOption('Verdadeiro', true, index);
        const falseOption = createTrueFalseOption('Falso', false, index);
        optionsContainer.appendChild(trueOption);
        optionsContainer.appendChild(falseOption);
    } else if (question.type === 'multipleassertive') {
        question.options.forEach((option, i) => {
            const optionElement = createMultipleChoiceOption(option, i, index);
            optionsContainer.appendChild(optionElement);
        });
    }
    
    // Adicionar explicação (inicialmente oculta)
    const explanationDiv = document.createElement('div');
    explanationDiv.className = 'explanation';
    explanationDiv.id = 'explanation';
    explanationDiv.textContent = question.explanation;
    optionsContainer.appendChild(explanationDiv);
    
    // Atualizar estado dos botões de navegação
    document.getElementById('prev-btn').disabled = index === 0;
    document.getElementById('next-btn').disabled = index === currentQuestions.length - 1;
    
    // Se estiver em modo de revisão, mostrar respostas e explicações
    if (reviewMode) {
        showAnswerInReviewMode(index);
    } else {
        // Se o usuário já respondeu esta questão, marcar a resposta selecionada
        if (userAnswers[index] !== null) {
            let selectedOption;
            if (question.type === 'truefalse') {
                selectedOption = document.querySelector(`.option[data-index="${userAnswers[index]}"]`);
            } else {
                selectedOption = document.querySelector(`.option[data-index="${userAnswers[index]}"]`);
            }
            
            if (selectedOption) {
                selectedOption.classList.add('selected');
                // Marcar o input radio também
                const input = selectedOption.querySelector('input');
                if (input) {
                    input.checked = true;
                }
            }
        }
        
        // Configurar botão de verificação
        const submitBtn = document.getElementById('submit-btn');
        submitBtn.textContent = userAnswers[index] !== null ? 'Verificar Novamente' : 'Verificar Resposta';
        
        // Remover todos os event listeners anteriores
        const newSubmitBtn = submitBtn.cloneNode(true);
        submitBtn.parentNode.replaceChild(newSubmitBtn, submitBtn);
        
        // Adicionar novo event listener
        newSubmitBtn.addEventListener('click', checkAnswer);
    }
}

// Criar opção de múltipla escolha
function createMultipleChoiceOption(text, optionIndex, questionIndex) {
    const optionDiv = document.createElement('div');
    optionDiv.className = 'option';
    optionDiv.setAttribute('data-index', optionIndex);
    
    const input = document.createElement('input');
    input.type = 'radio';
    input.name = `question-${questionIndex}`;
    input.id = `option-${questionIndex}-${optionIndex}`;
    input.value = optionIndex;
    
    const label = document.createElement('label');
    label.htmlFor = `option-${questionIndex}-${optionIndex}`;
    label.className = 'option-text';
    label.innerHTML = text;
    
    optionDiv.appendChild(input);
    optionDiv.appendChild(label);
    
    // Adicionar evento de clique
    if (!reviewMode) {
        optionDiv.addEventListener('click', () => {
            console.log("Opção selecionada:", optionIndex);
            // Remover seleção anterior
            const options = document.querySelectorAll('.option');
            options.forEach(opt => {
                opt.classList.remove('selected');
                const radioInput = opt.querySelector('input');
                if (radioInput) {
                    radioInput.checked = false;
                }
            });
            
            // Marcar esta opção como selecionada
            optionDiv.classList.add('selected');
            const radioInput = optionDiv.querySelector('input');
            if (radioInput) {
                radioInput.checked = true;
            }
            
            // Armazenar resposta do usuário
            userAnswers[questionIndex] = optionIndex;
        });
    }
    
    return optionDiv;
}

// Criar opção de verdadeiro/falso
function createTrueFalseOption(text, value, questionIndex) {
    const optionDiv = document.createElement('div');
    optionDiv.className = 'option';
    optionDiv.setAttribute('data-index', value.toString());
    
    const input = document.createElement('input');
    input.type = 'radio';
    input.name = `question-${questionIndex}`;
    input.id = `option-${questionIndex}-${value}`;
    input.value = value;
    
    const label = document.createElement('label');
    label.htmlFor = `option-${questionIndex}-${value}`;
    label.className = 'option-text';
    label.textContent = text;
    
    optionDiv.appendChild(input);
    optionDiv.appendChild(label);
    
    // Adicionar evento de clique
    if (!reviewMode) {
        optionDiv.addEventListener('click', () => {
            console.log("Opção V/F selecionada:", value);
            // Remover seleção anterior
            const options = document.querySelectorAll('.option');
            options.forEach(opt => {
                opt.classList.remove('selected');
                const radioInput = opt.querySelector('input');
                if (radioInput) {
                    radioInput.checked = false;
                }
            });
            
            // Marcar esta opção como selecionada
            optionDiv.classList.add('selected');
            const radioInput = optionDiv.querySelector('input');
            if (radioInput) {
                radioInput.checked = true;
            }
            
            // Armazenar resposta do usuário
            userAnswers[questionIndex] = value;
        });
    }
    
    return optionDiv;
}

// Verificar resposta
function checkAnswer() {
    console.log("Verificando resposta para questão:", currentQuestionIndex + 1);
    const currentQuestion = currentQuestions[currentQuestionIndex];
    const userAnswer = userAnswers[currentQuestionIndex];
    
    // Verificar se o usuário selecionou uma resposta
    if (userAnswer === null) {
        alert('Por favor, selecione uma resposta antes de verificar.');
        return;
    }
    
    const options = document.querySelectorAll('.option');
    const explanation = document.getElementById('explanation');
    
    // Marcar resposta correta e incorreta
    options.forEach((option) => {
        const optionIndex = option.getAttribute('data-index');
        let isCorrect = false;
        
        if (currentQuestion.type === 'truefalse') {
            // Para verdadeiro/falso, comparar strings 'true'/'false' com booleanos
            isCorrect = (optionIndex === 'true' && currentQuestion.answer === true) || 
                        (optionIndex === 'false' && currentQuestion.answer === false);
        } else {
            // Para múltipla escolha e múltipla assertiva, comparar índices numéricos
            isCorrect = parseInt(optionIndex) === currentQuestion.answer;
        }
        
        if (isCorrect) {
            option.classList.add('correct');
        } else {
            // Verificar se esta foi a opção selecionada pelo usuário
            let isSelected = false;
            
            if (currentQuestion.type === 'truefalse') {
                isSelected = (optionIndex === 'true' && userAnswer === true) || 
                             (optionIndex === 'false' && userAnswer === false);
            } else {
                isSelected = parseInt(optionIndex) === userAnswer;
            }
            
            if (isSelected) {
                option.classList.add('incorrect');
            }
        }
    });
    
    // Mostrar explicação
    explanation.classList.add('show');
    
    // Desabilitar cliques nas opções após verificar
    options.forEach(option => {
        option.style.pointerEvents = 'none';
    });
    
    // Mudar texto do botão para próxima questão
    const submitBtn = document.getElementById('submit-btn');
    submitBtn.textContent = 'Próxima Questão';
    
    // Remover todos os event listeners anteriores
    const newSubmitBtn = submitBtn.cloneNode(true);
    submitBtn.parentNode.replaceChild(newSubmitBtn, submitBtn);
    
    // Adicionar novo event listener para o botão de próxima questão
    newSubmitBtn.addEventListener('click', function nextQuestionHandler() {
        console.log("Avançando para próxima questão após verificação");
        if (currentQuestionIndex < currentQuestions.length - 1) {
            showNextQuestion();
        } else {
            calculateScore();
            showResultScreen();
        }
    });
}

// Mostrar questão anterior
function showPreviousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion(currentQuestionIndex);
    }
}

// Mostrar próxima questão
function showNextQuestion() {
    if (currentQuestionIndex < currentQuestions.length - 1) {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
    }
}

// Calcular pontuação
function calculateScore() {
    console.log("Calculando pontuação final");
    score = 0;
    
    currentQuestions.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        
        if (userAnswer === null) return; // Pular questões não respondidas
        
        let isCorrect = false;
        
        if (question.type === 'truefalse') {
            isCorrect = userAnswer === question.answer;
        } else {
            isCorrect = userAnswer === question.answer;
        }
        
        if (isCorrect) {
            score++;
        }
    });
    
    console.log("Pontuação final:", score, "de", currentQuestions.length);
}

// Função para voltar ao menu inicial
function goToIntroScreen() {
    console.log("Voltando ao menu inicial");
    // Resetar o estado do quiz
    currentTopic = '';
    currentQuestions = [];
    currentQuestionIndex = 0;
    userAnswers = [];
    score = 0;
    reviewMode = false;
    
    // Mostrar a tela inicial
    showScreen(document.getElementById('intro-screen'));
}

// Mostrar tela de resultados
function showResultScreen() {
    console.log("Mostrando tela de resultados");
    // Atualizar pontuação
    document.getElementById('score-value').textContent = score;
    
    // Definir mensagem com base na pontuação
    const percentage = (score / currentQuestions.length) * 100;
    if (percentage >= 90) {
        document.getElementById('score-message').textContent = 'Excelente! Você domina o assunto!';
    } else if (percentage >= 70) {
        document.getElementById('score-message').textContent = 'Muito bom! Você tem um bom conhecimento!';
    } else if (percentage >= 50) {
        document.getElementById('score-message').textContent = 'Bom! Continue estudando para melhorar.';
    } else {
        document.getElementById('score-message').textContent = 'Continue estudando. Você pode melhorar!';
    }
    
    // Preencher detalhes do desempenho
    const resultBreakdown = document.getElementById('result-breakdown');
    resultBreakdown.innerHTML = '';
    
    currentQuestions.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        
        if (userAnswer === null) {
            // Questão não respondida
            const resultItem = document.createElement('div');
            resultItem.className = 'result-item';
            
            const questionSpan = document.createElement('span');
            questionSpan.className = 'result-question';
            questionSpan.textContent = `Questão ${index + 1}`;
            
            const statusSpan = document.createElement('span');
            statusSpan.className = 'result-status';
            statusSpan.textContent = 'Não respondida';
            
            resultItem.appendChild(questionSpan);
            resultItem.appendChild(statusSpan);
            resultBreakdown.appendChild(resultItem);
            return;
        }
        
        let isCorrect = false;
        
        if (question.type === 'truefalse') {
            isCorrect = userAnswer === question.answer;
        } else {
            isCorrect = userAnswer === question.answer;
        }
        
        const resultItem = document.createElement('div');
        resultItem.className = 'result-item';
        
        const questionSpan = document.createElement('span');
        questionSpan.className = 'result-question';
        questionSpan.textContent = `Questão ${index + 1}`;
        
        const statusSpan = document.createElement('span');
        statusSpan.className = `result-status ${isCorrect ? 'correct' : 'incorrect'}`;
        statusSpan.textContent = isCorrect ? 'Correta' : 'Incorreta';
        
        resultItem.appendChild(questionSpan);
        resultItem.appendChild(statusSpan);
        resultBreakdown.appendChild(resultItem);
    });
    
    // Registrar tempo de uso
    if (loginTime) {
        const now = new Date();
        const timeSpent = Math.round((now - loginTime) / 1000 / 60); // em minutos
        console.log(`Usuário: ${studentName}, Tempo de uso: ${timeSpent} minutos`);
    }
    
    // Mostrar tela de resultados
    showScreen(document.getElementById('result-screen'));
}

// Mostrar tela de revisão
function showReviewScreen() {
    console.log("Mostrando tela de revisão");
    reviewMode = true;
    const reviewContainer = document.getElementById('review-container');
    reviewContainer.innerHTML = '';
    
    currentQuestions.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        
        let isCorrect = false;
        if (userAnswer !== null) {
            if (question.type === 'truefalse') {
                isCorrect = userAnswer === question.answer;
            } else {
                isCorrect = userAnswer === question.answer;
            }
        }
        
        const reviewQuestion = document.createElement('div');
        reviewQuestion.className = 'review-question';
        
        const questionTitle = document.createElement('h3');
        questionTitle.innerHTML = `${index + 1}. ${question.question}`;
        reviewQuestion.appendChild(questionTitle);
        
        const reviewOptions = document.createElement('div');
        reviewOptions.className = 'review-options';
        
        if (question.type === 'multiple' || question.type === 'multipleassertive') {
            question.options.forEach((option, i) => {
                const reviewOption = document.createElement('div');
                reviewOption.className = 'review-option';
                
                if (i === question.answer) {
                    reviewOption.classList.add('correct');
                }
                
                if (userAnswer !== null && i === userAnswer && i !== question.answer) {
                    reviewOption.classList.add('incorrect');
                }
                
                if (userAnswer !== null && i === userAnswer) {
                    reviewOption.classList.add('selected');
                }
                
                reviewOption.innerHTML = option;
                reviewOptions.appendChild(reviewOption);
            });
        } else if (question.type === 'truefalse') {
            const trueOption = document.createElement('div');
            trueOption.className = 'review-option';
            trueOption.textContent = 'Verdadeiro';
            
            const falseOption = document.createElement('div');
            falseOption.className = 'review-option';
            falseOption.textContent = 'Falso';
            
            if (question.answer === true) {
                trueOption.classList.add('correct');
            } else {
                falseOption.classList.add('correct');
            }
            
            if (userAnswer !== null) {
                if (userAnswer === true && question.answer !== true) {
                    trueOption.classList.add('incorrect');
                } else if (userAnswer === false && question.answer !== false) {
                    falseOption.classList.add('incorrect');
                }
                
                if (userAnswer === true) {
                    trueOption.classList.add('selected');
                } else if (userAnswer === false) {
                    falseOption.classList.add('selected');
                }
            }
            
            reviewOptions.appendChild(trueOption);
            reviewOptions.appendChild(falseOption);
        }
        
        reviewQuestion.appendChild(reviewOptions);
        
        const reviewExplanation = document.createElement('div');
        reviewExplanation.className = 'review-explanation';
        reviewExplanation.textContent = question.explanation;
        reviewQuestion.appendChild(reviewExplanation);
        
        reviewContainer.appendChild(reviewQuestion);
    });
    
    showScreen(document.getElementById('review-screen'));
}

// Mostrar resposta em modo de revisão
function showAnswerInReviewMode(index) {
    console.log("Mostrando resposta em modo de revisão para questão:", index + 1);
    const currentQuestion = currentQuestions[index];
    const userAnswer = userAnswers[index];
    
    const options = document.querySelectorAll('.option');
    const explanation = document.getElementById('explanation');
    
    options.forEach((option) => {
        const optionIndex = option.getAttribute('data-index');
        let isCorrect = false;
        let isSelected = false;
        
        if (currentQuestion.type === 'truefalse') {
            isCorrect = (optionIndex === 'true' && currentQuestion.answer === true) || 
                        (optionIndex === 'false' && currentQuestion.answer === false);
                        
            if (userAnswer !== null) {
                isSelected = (optionIndex === 'true' && userAnswer === true) || 
                             (optionIndex === 'false' && userAnswer === false);
            }
        } else {
            isCorrect = parseInt(optionIndex) === currentQuestion.answer;
            
            if (userAnswer !== null) {
                isSelected = parseInt(optionIndex) === userAnswer;
            }
        }
        
        if (isCorrect) {
            option.classList.add('correct');
        } else if (isSelected) {
            option.classList.add('incorrect');
        }
        
        if (isSelected) {
            option.classList.add('selected');
        }
        
        option.style.pointerEvents = 'none';
    });
    
    explanation.classList.add('show');
    document.getElementById('submit-btn').style.display = 'none';
}

// Inicialização - Garantir que os event listeners sejam registrados
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM carregado, inicializando quiz...");
    
    // Event listener para o botão de início
    const startBtn = document.getElementById('start-btn');
    const studentNameInput = document.getElementById('student-name');
    
    if (startBtn) {
        startBtn.addEventListener('click', function() {
            console.log("Botão Começar clicado");
            studentName = studentNameInput.value.trim() || 'Aluno';
            const welcomeName = document.getElementById('welcome-name');
            if (welcomeName) {
                welcomeName.textContent = studentName;
            }
            loginTime = new Date();
            
            // Registrar login (poderia ser enviado para um servidor)
            console.log(`Login: ${studentName}, Data: ${loginTime.toLocaleString()}`);
            
            // Mostrar a tela de introdução
            showScreen(document.getElementById('intro-screen'));
        });
    }
    
    // Adicionar event listeners aos botões de tópicos
    const topicButtons = document.querySelectorAll('.topic-btn');
    console.log("Botões de tópicos encontrados:", topicButtons.length);
    
    topicButtons.forEach(button => {
        button.addEventListener('click', function() {
            const topic = this.getAttribute('data-topic');
            console.log("Tópico selecionado:", topic);
            startQuiz(topic);
        });
    });

    // Event listeners para navegação
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const submitBtn = document.getElementById('submit-btn');
    const reviewBtn = document.getElementById('review-btn');
    const restartBtn = document.getElementById('restart-btn');
    const backToResultsBtn = document.getElementById('back-to-results');
    
    if (prevBtn) prevBtn.addEventListener('click', showPreviousQuestion);
    if (nextBtn) nextBtn.addEventListener('click', showNextQuestion);
    if (submitBtn) submitBtn.addEventListener('click', checkAnswer);
    if (reviewBtn) reviewBtn.addEventListener('click', showReviewScreen);
    if (restartBtn) restartBtn.addEventListener('click', goToIntroScreen);
    if (backToResultsBtn) backToResultsBtn.addEventListener('click', function() {
        showScreen(document.getElementById('result-screen'));
    });
    
    // Event listener para o botão Voltar ao Menu
    const homeBtn = document.getElementById('home-btn');
    if (homeBtn) {
        homeBtn.addEventListener('click', goToIntroScreen);
    }
    
    console.log("Inicialização do quiz concluída!");
});

// Garantir que o script seja executado mesmo se o evento DOMContentLoaded já tiver ocorrido
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        console.log("DOM ainda carregando, aguardando...");
    });
} else {
    console.log("DOM já carregado, executando inicialização imediatamente...");
    // Simular o evento DOMContentLoaded
    const event = new Event('DOMContentLoaded');
    document.dispatchEvent(event);
}
