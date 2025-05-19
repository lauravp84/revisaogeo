// Variáveis globais
let currentTopic = '';
let currentQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let score = 0;
let reviewMode = false;
let studentName = '';
let loginTime = null;

// Elementos DOM
const loginScreen = document.getElementById('login-screen');
const introScreen = document.getElementById('intro-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const reviewScreen = document.getElementById('review-screen');

const welcomeName = document.getElementById('welcome-name');
const topicTitle = document.getElementById('topic-title');
const questionCounter = document.getElementById('question-counter');
const progressBar = document.getElementById('progress-bar');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');

const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');

const scoreValue = document.getElementById('score-value');
const scoreMessage = document.getElementById('score-message');
const resultBreakdown = document.getElementById('result-breakdown');
const reviewBtn = document.getElementById('review-btn');
const restartBtn = document.getElementById('restart-btn');
const backToResultsBtn = document.getElementById('back-to-results');
const reviewContainer = document.getElementById('review-container');

// Função para mostrar uma tela e esconder as outras
function showScreen(screen) {
    // Esconder todas as telas
    loginScreen.classList.remove('active');
    introScreen.classList.remove('active');
    quizScreen.classList.remove('active');
    resultScreen.classList.remove('active');
    reviewScreen.classList.remove('active');
    
    // Mostrar a tela desejada
    screen.classList.add('active');
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    // Event listener para o botão de início
    const startBtn = document.getElementById('start-btn');
    const studentNameInput = document.getElementById('student-name');
    
    startBtn.addEventListener('click', function() {
        studentName = studentNameInput.value.trim() || 'Aluno';
        welcomeName.textContent = studentName;
        loginTime = new Date();
        
        // Registrar login (poderia ser enviado para um servidor)
        console.log(`Login: ${studentName}, Data: ${loginTime.toLocaleString()}`);
        
        showScreen(introScreen);
    });
    
    // Adicionar event listeners aos botões de tópicos
    const topicButtons = document.querySelectorAll('.topic-btn');
    topicButtons.forEach(button => {
        button.addEventListener('click', () => {
            currentTopic = button.getAttribute('data-topic');
            startQuiz(currentTopic);
        });
    });

    // Event listeners para navegação
    prevBtn.addEventListener('click', showPreviousQuestion);
    nextBtn.addEventListener('click', showNextQuestion);
    
    // Usar cloneNode para garantir um event listener limpo para o botão de submissão
    const oldSubmitBtn = submitBtn;
    const newSubmitBtn = oldSubmitBtn.cloneNode(true);
    oldSubmitBtn.parentNode.replaceChild(newSubmitBtn, oldSubmitBtn);
    submitBtn = newSubmitBtn;
    submitBtn.addEventListener('click', checkAnswer);
    
    reviewBtn.addEventListener('click', showReviewScreen);
    restartBtn.addEventListener('click', goToIntroScreen);
    backToResultsBtn.addEventListener('click', showResultScreen);
    
    // Event listener para o botão Voltar ao Menu
    const homeBtn = document.getElementById('home-btn');
    homeBtn.addEventListener('click', goToIntroScreen);
    
    // Iniciar diretamente na tela de introdução, pulando a tela de login
    showScreen(introScreen);
});

// Iniciar o quiz com o tópico selecionado
function startQuiz(topic) {
    currentQuestions = questions[topic];
    currentQuestionIndex = 0;
    userAnswers = Array(currentQuestions.length).fill(null);
    score = 0;
    reviewMode = false;

    // Atualizar título do tópico
    topicTitle.textContent = quizConfig.topicNames[topic];

    // Mostrar a tela do quiz
    showScreen(quizScreen);
    
    // Mostrar a primeira questão
    showQuestion(0);
}

// Mostrar uma questão específica
function showQuestion(index) {
    const question = currentQuestions[index];
    
    // Atualizar contador e barra de progresso
    questionCounter.textContent = `Questão ${index + 1} de ${currentQuestions.length}`;
    progressBar.style.width = `${((index + 1) / currentQuestions.length) * 100}%`;
    
    // Atualizar texto da questão
    questionText.innerHTML = question.question;
    
    // Limpar e preencher opções
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
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === currentQuestions.length - 1;
    
    // Se estiver em modo de revisão, mostrar respostas e explicações
    if (reviewMode) {
        showAnswerInReviewMode(index);
    } else {
        // Se o usuário já respondeu esta questão, marcar a resposta selecionada
        if (userAnswers[index] !== null) {
            const selectedOption = document.querySelector(`[data-index="${userAnswers[index]}"]`);
            if (selectedOption) {
                selectedOption.classList.add('selected');
            }
        }
        
        // Configurar botão de verificação
        submitBtn.textContent = userAnswers[index] !== null ? 'Verificar Novamente' : 'Verificar Resposta';
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
            // Remover seleção anterior
            const options = document.querySelectorAll('.option');
            options.forEach(opt => opt.classList.remove('selected'));
            
            // Marcar esta opção como selecionada
            optionDiv.classList.add('selected');
            
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
    optionDiv.setAttribute('data-index', value);
    
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
            // Remover seleção anterior
            const options = document.querySelectorAll('.option');
            options.forEach(opt => opt.classList.remove('selected'));
            
            // Marcar esta opção como selecionada
            optionDiv.classList.add('selected');
            
            // Armazenar resposta do usuário
            userAnswers[questionIndex] = value;
        });
    }
    
    return optionDiv;
}

// Verificar resposta
function checkAnswer() {
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
        const isCorrect = 
            (currentQuestion.type === 'truefalse' && 
             ((optionIndex === 'true' && currentQuestion.answer === true) || 
              (optionIndex === 'false' && currentQuestion.answer === false))) ||
            (currentQuestion.type !== 'truefalse' && parseInt(optionIndex) === currentQuestion.answer);
        
        if (isCorrect) {
            option.classList.add('correct');
        } else if (
            (currentQuestion.type === 'truefalse' && 
             ((optionIndex === 'true' && userAnswer === true) || 
              (optionIndex === 'false' && userAnswer === false))) ||
            (currentQuestion.type !== 'truefalse' && parseInt(optionIndex) === userAnswer)
        ) {
            option.classList.add('incorrect');
        }
    });
    
    // Mostrar explicação
    explanation.classList.add('show');
    
    // Desabilitar cliques nas opções após verificar
    options.forEach(option => {
        option.style.pointerEvents = 'none';
    });
    
    // Mudar texto do botão para próxima questão
    submitBtn.textContent = 'Próxima Questão';
    
    // Remover todos os event listeners anteriores usando cloneNode
    const oldSubmitBtn = submitBtn;
    const newSubmitBtn = oldSubmitBtn.cloneNode(true);
    oldSubmitBtn.parentNode.replaceChild(newSubmitBtn, oldSubmitBtn);
    submitBtn = newSubmitBtn;
    
    // Adicionar novo event listener para o botão de próxima questão
    submitBtn.addEventListener('click', function() {
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
        
        // Resetar o botão de verificação
        submitBtn.textContent = userAnswers[currentQuestionIndex] !== null ? 'Verificar Novamente' : 'Verificar Resposta';
        
        // Remover todos os event listeners anteriores usando cloneNode
        const oldSubmitBtn = submitBtn;
        const newSubmitBtn = oldSubmitBtn.cloneNode(true);
        oldSubmitBtn.parentNode.replaceChild(newSubmitBtn, oldSubmitBtn);
        submitBtn = newSubmitBtn;
        
        // Adicionar o event listener correto
        submitBtn.addEventListener('click', checkAnswer);
    }
}

// Calcular pontuação
function calculateScore() {
    score = 0;
    
    currentQuestions.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        
        if (question.type === 'truefalse') {
            if (userAnswer === question.answer) {
                score++;
            }
        } else {
            if (userAnswer === question.answer) {
                score++;
            }
        }
    });
}

// Função para voltar ao menu inicial
function goToIntroScreen() {
    // Resetar o estado do quiz
    currentTopic = '';
    currentQuestions = [];
    currentQuestionIndex = 0;
    userAnswers = [];
    score = 0;
    reviewMode = false;
    
    // Mostrar a tela inicial
    showScreen(introScreen);
    
    // Resetar o botão de verificação
    submitBtn.textContent = 'Verificar Resposta';
    submitBtn.removeEventListener('click', showNextQuestion);
    submitBtn.addEventListener('click', checkAnswer);
}

// Mostrar tela de resultados
function showResultScreen() {
    // Atualizar pontuação
    scoreValue.textContent = score;
    
    // Definir mensagem com base na pontuação
    const percentage = (score / currentQuestions.length) * 100;
    if (percentage >= 90) {
        scoreMessage.textContent = 'Excelente! Você domina o assunto!';
    } else if (percentage >= 70) {
        scoreMessage.textContent = 'Muito bom! Você tem um bom conhecimento!';
    } else if (percentage >= 50) {
        scoreMessage.textContent = 'Bom! Continue estudando para melhorar.';
    } else {
        scoreMessage.textContent = 'Continue estudando. Você pode melhorar!';
    }
    
    // Preencher detalhes do desempenho
    resultBreakdown.innerHTML = '';
    currentQuestions.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect = 
            (question.type === 'truefalse' && userAnswer === question.answer) ||
            (question.type !== 'truefalse' && userAnswer === question.answer);
        
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
        
        // Aqui poderia ser implementado o envio desses dados para uma planilha ou servidor
    }
    
    // Mostrar tela de resultados
    showScreen(resultScreen);
}

// Mostrar tela de revisão
function showReviewScreen() {
    reviewMode = true;
    reviewContainer.innerHTML = '';
    
    currentQuestions.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect = 
            (question.type === 'truefalse' && userAnswer === question.answer) ||
            (question.type !== 'truefalse' && userAnswer === question.answer);
        
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
                
                if (i === userAnswer && i !== question.answer) {
                    reviewOption.classList.add('incorrect');
                }
                
                if (i === userAnswer) {
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
    
    showScreen(reviewScreen);
}

// Mostrar resposta em modo de revisão
function showAnswerInReviewMode(index) {
    const currentQuestion = currentQuestions[index];
    const userAnswer = userAnswers[index];
    
    const options = document.querySelectorAll('.option');
    const explanation = document.getElementById('explanation');
    
    options.forEach((option) => {
        const optionIndex = option.getAttribute('data-index');
        const isCorrect = 
            (currentQuestion.type === 'truefalse' && 
             ((optionIndex === 'true' && currentQuestion.answer === true) || 
              (optionIndex === 'false' && currentQuestion.answer === false))) ||
            (currentQuestion.type !== 'truefalse' && parseInt(optionIndex) === currentQuestion.answer);
        
        if (isCorrect) {
            option.classList.add('correct');
        } else if (
            (currentQuestion.type === 'truefalse' && 
             ((optionIndex === 'true' && userAnswer === true) || 
              (optionIndex === 'false' && userAnswer === false))) ||
            (currentQuestion.type !== 'truefalse' && parseInt(optionIndex) === userAnswer)
        ) {
            option.classList.add('incorrect');
        }
        
        if (
            (currentQuestion.type === 'truefalse' && 
             ((optionIndex === 'true' && userAnswer === true) || 
              (optionIndex === 'false' && userAnswer === false))) ||
            (currentQuestion.type !== 'truefalse' && parseInt(optionIndex) === userAnswer)
        ) {
            option.classList.add('selected');
        }
        
        option.style.pointerEvents = 'none';
    });
    
    explanation.classList.add('show');
    submitBtn.style.display = 'none';
}
