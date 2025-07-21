// app.js

const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        correctAnswer: "Mars"
    },
    {
        question: "Who developed the theory of relativity?",
        options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
        correctAnswer: "Albert Einstein"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correctAnswer: "Pacific Ocean"
    },
    
    // New questions
    {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "South Korea", "Japan", "Thailand"],
        correctAnswer: "Japan"
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"],
        correctAnswer: "William Shakespeare"
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Fe", "Pb"],
        correctAnswer: "Au"
    },
    {
        question: "Which animal is known as the King of the Jungle?",
        options: ["Tiger", "Elephant", "Lion", "Giraffe"],
        correctAnswer: "Lion"
    },
    {
        question: "What is the longest river in the world?",
        options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
        correctAnswer: "Amazon River"
    },
    {
        question: "Who was the first man to step on the moon?",
        options: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "Alan Shepard"],
        correctAnswer: "Neil Armstrong"
    },
    {
        question: "What is the smallest planet in our solar system?",
        options: ["Mercury", "Mars", "Venus", "Earth"],
        correctAnswer: "Mercury"
    },
    {
        question: "Which artist painted the Mona Lisa?",
        options: ["Pablo Picasso", "Vincent van Gogh", "Leonardo da Vinci", "Claude Monet"],
        correctAnswer: "Leonardo da Vinci"
    },
    {
        question: "Which element has the atomic number 1?",
        options: ["Helium", "Oxygen", "Hydrogen", "Carbon"],
        correctAnswer: "Hydrogen"
    },
    {
        question: "What is the hardest natural substance on Earth?",
        options: ["Diamond", "Gold", "Iron", "Platinum"],
        correctAnswer: "Diamond"
    },
    {
        question: "Which country is the largest by land area?",
        options: ["USA", "Canada", "Russia", "China"],
        correctAnswer: "Russia"
    }
];

    // Add more questions as needed



let currentQuestionIndex = 0;
let score = 0;

// Function to load a question
function loadQuestion() {
    const questionData = questions[currentQuestionIndex];
    const quizContainer = document.getElementById('quiz');
    const feedbackContainer = document.getElementById('feedback');
    const resultContainer = document.getElementById('result');
    
    // Clear previous feedback
    feedbackContainer.innerHTML = '';
    resultContainer.innerHTML = '';

    quizContainer.innerHTML = `
        <div class="question">${questionData.question}</div>
        <ul class="options">
            ${questionData.options.map(option => `
                <li onclick="checkAnswer('${option}')">${option}</li>
            `).join('')}
        </ul>
    `;
}

// Function to check the selected answer
function checkAnswer(selectedOption) {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;
    const feedbackContainer = document.getElementById('feedback');

    if (selectedOption === correctAnswer) {
        score++;
        feedbackContainer.innerHTML = `<p class="correct">Correct!</p>`;
    } else {
        feedbackContainer.innerHTML = `<p class="incorrect">Incorrect. The correct answer is: ${correctAnswer}</p>`;
    }

    // Move to the next question after a brief delay
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        setTimeout(loadQuestion, 1000);
    } else {
        setTimeout(showFinalResult, 1000);
    }
}

// Function to show the final result after the quiz is completed
function showFinalResult() {
    const quizContainer = document.getElementById('quiz');
    const finalScreen = document.getElementById('final-screen');
    const finalScore = document.getElementById('final-score');

    quizContainer.innerHTML = '';
    finalScreen.style.display = 'block';
    finalScore.innerText = score;

    // Optionally, show the total number of questions
    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = `You answered ${score} out of ${questions.length} correctly!`;
}
function showFinalResult() {
    const quizContainer = document.getElementById('quiz');
    const finalScreen = document.getElementById('final-screen');
    const finalScore = document.getElementById('final-score');
    const resultContainer = document.getElementById('result');

    quizContainer.innerHTML = '';
    finalScreen.style.display = 'block';

    // Set final score as score out of total questions
    finalScore.innerText = `${score} out of ${questions.length}`;
    
    resultContainer.innerHTML = `🎉 You answered ${score} out of ${questions.length} correctly!`;
}


// Function to restart the quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('final-screen').style.display = 'none';
    loadQuestion();
}

// Initialize the quiz
function checkAnswer(selectedOption) {
    const questionData = questions[currentQuestionIndex];
    const correctAnswer = questionData.correctAnswer;
    const feedbackContainer = document.getElementById('feedback');
    const options = document.querySelectorAll('.options li');

    // Disable all options
    options.forEach(option => {
        option.style.pointerEvents = 'none';
        if (option.textContent === correctAnswer) {
            option.style.backgroundColor = '#c8e6c9'; // green
        }
        if (option.textContent === selectedOption && selectedOption !== correctAnswer) {
            option.style.backgroundColor = '#ffcdd2'; // red
        }
    });

    // Show feedback
    if (selectedOption === correctAnswer) {
        score++;
        feedbackContainer.innerHTML = `<p class="feedback correct">✅ Correct!</p>`;
    } else {
        feedbackContainer.innerHTML = `<p class="feedback incorrect">❌ Incorrect! Correct answer: <strong>${correctAnswer}</strong></p>`;
    }

    // Move to next question after short delay
    currentQuestionIndex++;
    setTimeout(() => {
        feedbackContainer.innerHTML = '';
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            showFinalResult();
        }
    }, 1500);
}

loadQuestion();
