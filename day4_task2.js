const questions = [
    {
        question: "What is the capital of France?",
        options: ["Benin", "Bahra", "Brazil", "Rome"],
        correctAnswer: "Benin"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Venus", "Jupiter"],
        correctAnswer: "Mars"
    },
    {
        question: "What is the largest mammal?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        correctAnswer: "Blue Whale"
    },
    {
        question: "What is the second largest organ in human body?",
        options: ["Liver", "Kidney", "Skin", "Heart"],
        correctAnswer: "Liver"
    },
    {
        question: "Number of primitive data types in Java are?",
        options: ["6", "7", "8", "9"],
        correctAnswer: "8"
    }
];

let currentQuestionIndex = 0;
let userScore = 0;

function displayQuestion() {
    const questionContainer = document.getElementById("question-container");
    const optionsContainer = document.getElementById("options-container");

    questionContainer.innerHTML = questions[currentQuestionIndex].question;

    optionsContainer.innerHTML = "";
    questions[currentQuestionIndex].options.forEach((option, index) => {
        optionsContainer.innerHTML += `<input type="radio" name="answer" value="${option}" id="option${index}">
                                        <label for="option${index}">${option}</label><br>`;
    });
}

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');

    if (selectedOption) {
        const userAnswer = selectedOption.value;

        if (userAnswer === questions[currentQuestionIndex].correctAnswer) {
            userScore++;
        }

        displayFeedback(userAnswer === questions[currentQuestionIndex].correctAnswer);
        document.getElementById("submit-btn").style.display = "none";
        document.getElementById("next-btn").style.display = "block";
    } else {
        alert("Please select an answer!");
    }
}

function displayFeedback(isCorrect) {
    const feedbackContainer = document.getElementById("score-container");

    if (isCorrect) {
        feedbackContainer.innerHTML = "Correct!";
    } else {
        feedbackContainer.innerHTML = `Incorrect. The correct answer is ${questions[currentQuestionIndex].correctAnswer}.`;
    }
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
        document.getElementById("submit-btn").style.display = "block";
        document.getElementById("next-btn").style.display = "none";
        document.getElementById("score-container").innerHTML = "";
    } else {
        endQuiz();
    }
}

function endQuiz() {
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = `<h2>Quiz completed!</h2>
                               <p>Your final score is ${userScore}/${questions.length}.</p>
                               <button id="reset-btn" onclick="resetQuiz()">Start Over</button>`;
}

function resetQuiz() {
    currentQuestionIndex = 0;
    userScore = 0;
    displayQuestion();
    document.getElementById("submit-btn").style.display = "block";
    document.getElementById("next-btn").style.display = "none";
    document.getElementById("reset-btn").style.display = "none";
    document.getElementById("score-container").innerHTML = "";
}

// Initial setup
displayQuestion();