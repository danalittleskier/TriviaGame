//  Variable that will hold our intervals and questions index
var intervalId;
var clockInterval;
var index = 0;
var questionAnswered = false;

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
    var correctText = '';
    questionAnswered = false;

    $("#question").text(triviagame.questionsArray[index].question);
    $("#answers").empty();

    for (let i = 0; i < triviagame.questionsArray[index].answers.length; i++) {
        const questionId = triviagame.questionsArray[index].qid;
        const correctAnswer = triviagame.questionsArray[index].correctAnswer;
        const element = triviagame.questionsArray[index].answers[i];
        correctText = triviagame.questionsArray[index].answers[correctAnswer];

        //display array of answers in buttons with a data-correct value of the correct answer
        $("#answers").append("<button type='button' class='btn btn-light btn-med btn-block' data-correct='" + correctAnswer + "' id='" + i + "'>" + element + "</button>");
    }

    $("button").on("click", function () {
        questionAnswered = true;
        //check if the correct button was pressed and increase score accordingly
        if ($(this).attr('id') === $(this).attr('data-correct')) {
            triviagame.correct++;
            displayAnswer(correctText, "congrats");
        } else {
            triviagame.wrong++;
            displayAnswer(correctText, "bummer");
        }

        index++;
        if(index < triviagame.questionsArray.length){
            clear(); 
            setTimeout(displayQuestions, 2000);  
            startTimer(10); 
             
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
        $("#answers").append("<BR>The correct answer is <BR> <font color='red'>" + correct + "</font><BR>");
    }
    else if(type === "end"){
        $("#answers").empty();
        $("#answers").append("<p class='card-text ly-2'>The End!");
    }
    else {
        $("#answers").append("<p class='card-text'>Bummer Wrong Answer!");
        $("#wrong").text(triviagame.wrong);
        $("#answers").append("<BR>The correct answer is <BR> <font color='red'>" + correct + "</font><BR>");
    }
    

    
}



function startTimer(seconds) {
    clockInterval = setInterval(function () {
        $("#clock").html(seconds);
        seconds--;
        if (seconds === 0) {
            seconds = 10;
        }
    }, 1000);
}

function clear() {
    clearInterval(intervalId);
    clearInterval(clockInterval);
}

function run(sec) {
    startTimer(10);
    intervalId = setInterval(displayQuestions, 10 * 1000);

}
displayQuestions();

run();
