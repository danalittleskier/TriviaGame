//  Variable that will hold our intervals and questions index
var intervalId;
var clockInterval;
var index = 0;
var correctText = '';
var clockRunning = false;

var triviagame = {
    correct: 0,
    wrong: 0,

    questionsArray: [
        {
            qid: 0,
            question: "What is the tallest mountain?",
            answers: ["Kilimanjaro", "Matterhorn", "Everest", "Dolomites"],
            correctAnswer: 2
        },
        {
            qid: 1,
            question: "Which national park is the largest acording to size?",
            answers: ["Acadia", "Grand Canyon", "Yellowstone", "Wrangell-St. Elias"],
            correctAnswer: 3
        },
        {
            qid: 2,
            question: "Which continent hosts the Atlas Mountains?",
            answers: ["Europe", "Africa", "Asia", "Australia"],
            correctAnswer: 1
        },
        {
            quid: 3,
            question: "The highest peaks in the Western Hemisphere are found in which mountain range?",
            answers: ["The Rocky Mountains", "The Andes Mountain", "The Sierra Madres", "The Sierra Nevadas"],
            correctAnswer: 1
        },

    ]
}


function displayQuestions() {
    clear();
    console.log("index "+index);

    $("#question").text(triviagame.questionsArray[index].question);
    $("#answers").empty();
    startTimer(10);

    for (let i = 0; i < triviagame.questionsArray[index].answers.length; i++) {
        const questionId = triviagame.questionsArray[index].qid;
        const correctAnswer = triviagame.questionsArray[index].correctAnswer;
        const element = triviagame.questionsArray[index].answers[i];
        correctText = triviagame.questionsArray[index].answers[correctAnswer];

        //display array of answers in buttons with a data-correct value of the correct answer
        $("#answers").append("<button type='button' class='btn btn-light btn-med btn-block answer-button' data-correct='" + correctAnswer + "' id='" + i + "'>" + element + "</button>");
    }
    index++;

    $(".answer-button").on("click", function () {
        //check if the correct button was pressed and increase score accordingly
        if ($(this).attr('id') === $(this).attr('data-correct')) {
            triviagame.correct++;
            displayAnswer(correctText, "congrats");
        } else {
            triviagame.wrong++;
            displayAnswer(correctText, "bummer");
        }

        if (index < triviagame.questionsArray.length) {
            setTimeout(displayQuestions, 2000); 
        }
        else {
            clear();
            setTimeout(displayAnswer(correctText, "end"), 2000);
        }

    });


}

function displayAnswer(correct, type) {

    $("#answers").empty();

    if (type === "congrats") {
        $("#answers").append("<p class='card-text'>Congrats!");
        $("#correct").text(triviagame.correct);
    }
    if (type === "bummer") {
        $("#answers").append("<p class='card-text'>Bummer Wrong Answer!");
        $("#wrong").text(triviagame.wrong);
    }
    if (type === "outoftime") {
        $("#answers").append("<p class='card-text'>Oh no! You did not answer in time!");
        $("#wrong").text(triviagame.wrong);
    }

    $("#answers").append("<BR>The correct answer is <BR> <font color='red'>" + correct + "</font><BR>");

    if (type === "end") {
        $("#answers").append("<br><p class='card-text ly-2'>The End!");
        
    }

}

$(document).on("click", "#play-game", function () {
    event.preventDefault();
    clear();
    playGame();
});


function startTimer(seconds) {
    console.log("starting timer");
    if (!clockRunning){
        clockInterval = setInterval(function () {
            $("#clock").html(seconds);
            seconds--;
    
            //If we run out of time give one penalty and display the answer.  
            //Check if the game needs to end or continue to next question
            if (seconds <= 0) {
                clear();
                triviagame.wrong++;
                displayAnswer(correctText, "outoftime");
    
                if (index < triviagame.questionsArray.length) {
                    setTimeout(displayQuestions, 2000);
                }
                else {
                    setTimeout(displayAnswer(correctText, "end"), 2000);
                }
            }
        }, 1000);
    clockRunning = true;
    }
    
}

function clear() {
    console.log("clearing");
    clearInterval(clockInterval);
    clockRunning = false;
}

function playGame() {
    console.log("in playGame function");
    triviagame.correct = 0;
    triviagame.wrong = 0;
    index = 0;
    correctText = 0;

    $("#correct").text(triviagame.correct);
    $("#wrong").text(triviagame.wrong);

    displayQuestions();
}


displayQuestions();

