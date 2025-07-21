// Start quiz from start screen
function startQuiz() {
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('quiz-screen').style.display = 'block';
    loadQuestion();
}

// Restart quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('final-screen').style.display = 'none';
    document.getElementById('result').innerHTML = '';
    document.getElementById('feedback').innerHTML = '';
    loadQuestion();
}
