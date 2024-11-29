let questions = [
    {
        "question": "Who invented HTML?",
        "answer_1": "George Kahneman",
        "answer_2": "Stefan Raab",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Michael Crichton",
        "correct_answer": 3
    },
    {
        "question": "What is the capital of France?",
        "answer_1": "Paris",
        "answer_2": "Berlin",
        "answer_3": "Madrid",
        "answer_4": "London",
        "correct_answer": 1
    },
    {
        "question": "What is the name of the first video game?",
        "answer_1": "Super Mario Bros.",
        "answer_2": "Tetris",
        "answer_3": "Pong",
        "answer_4": "Pac-Man",
        "correct_answer": 1
    },
    {
        "question": "What is the name of the first computer?",
        "answer_1": "ENIAC",
        "answer_2": "IBM PC",
        "answer_3": "Apple II",
        "answer_4": "IBM 360",
        "correct_answer": 2
    },
    {
        "question": "What is the name of the first computer language?",
        "answer_1": "FORTRAN",
        "answer_2": "COBOL",
        "answer_3": "ALGOL",
        "answer_4": "BASIC",
        "correct_answer": 3
    },
    {
        "question": "Who wrote the book 'To Kill a Mockingbird'?",
        "answer_1": "Harper Lee",
        "answer_2": "J.D. Salinger",
        "answer_3": "Charles Dickens",
        "answer_4": "Mary Shelley",
        "correct_answer": 1
    },
    {
        "question": "What is the name of the first smartphone?",
        "answer_1": "iPhone",
        "answer_2": "Android",
        "answer_3": "Windows Phone",
        "answer_4": "BlackBerry",
        "correct_answer": 1
    },
    {
        "question": "What is the name of the first music album?",
        "answer_1": "The Dark Side of the Moon",
        "answer_2": "Led Zeppelin IV",
        "answer_3": "The Wall",
        "answer_4": "The Beatles",
        "correct_answer": 4
    },

];

let currentQuestion = 0;
let rightAnswers = 0;

function init() {
    document.getElementById("question-length").innerHTML = questions.length;
    showCurrentQuestion(); 
};


function showCurrentQuestion() {

    if (currentQuestion >= questions.length) {
        document.getElementById("question-body").style.display = "none";
        document.getElementById("endScreen").style.display = "flex";
        document.getElementById("header-image").src = "./assets/img//trophy.png"
    } else {

        let percent = Math.round((currentQuestion / questions.length ) * 100);
        document.getElementById("progress-bar").innerHTML = `${percent}%`;
        document.getElementById("progress-bar").style = `width: ${percent}%`;

        let question = questions[currentQuestion];
        document.getElementById("question-number").innerHTML = currentQuestion + 1;
        document.getElementById("question-text").innerHTML = question.question;
        document.getElementById("answer_1").innerHTML = question['answer_1'];
        document.getElementById("answer_2").innerHTML = question['answer_2'];
        document.getElementById("answer_3").innerHTML = question['answer_3'];
        document.getElementById("answer_4").innerHTML = question['answer_4'];
    }

}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectionQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question.correct_answer}`;
    
    if (selectionQuestionNumber == question['correct_answer']) {
            document.getElementById(selection).parentNode.classList.add('bg-success'); 
            showAllRightAnswers();
        }
        else {
            document.getElementById(selection).parentNode.classList.add('bg-danger');
            document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success'); 
        }
        document.getElementById("next-button").disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    document.getElementById("next-button").disabled = true;
    // increaseNumberOfQuestions()
    resetAnswerButtons();
    showCurrentQuestion();
}

function resetAnswerButtons() {
    document.getElementById("answer_1").parentNode.classList.remove('bg-success');
    document.getElementById("answer_1").parentNode.classList.remove('bg-danger');
    document.getElementById("answer_2").parentNode.classList.remove('bg-success');
    document.getElementById("answer_2").parentNode.classList.remove('bg-danger');
    document.getElementById("answer_3").parentNode.classList.remove('bg-success');
    document.getElementById("answer_3").parentNode.classList.remove('bg-danger');
    document.getElementById("answer_4").parentNode.classList.remove('bg-success');
    document.getElementById("answer_4").parentNode.classList.remove('bg-danger');
}

function showAllRightAnswers() {
    rightAnswers++;
    document.getElementById("correct-questions").innerHTML = rightAnswers;
    document.getElementById("all-questions").innerHTML = questions.length
}