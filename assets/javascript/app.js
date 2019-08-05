var triviagame = {
    correct: 0,
    wrong: 0,

    questionsArray: [
        {
            question: "What is the tallest mountain?",
            answers: ["Kilimanjaro", "Matterhorn", "Everest", "Dolomites"],
            correctAnswer: "Everest"
        },
        {
            question:  "Which national park is the largest acording to size?",
            answers: ["Acadia", "Grand Canyon", "Yellowstone", "Wrangell-St. Elias"],
            correctAnswer: "Wrangell-St. Elias"
        },
        {
            question:  "Which continent hosts the Atlas Mountains?",
            answers: ["Europe", "Africa", "Asia", "Australia"],
            correctAnswer: "Africa"
        },
        {
            question:  "The highest peaks in the Western Hemisphere are found in which mountain range?",
            answers: ["The Rocky Mountains", "The Andes Mountain", "The Sierra Madres", "The Sierra Nevadas"],
            correctAnswer: "The Andes Mountain"
        },
        
    ]
}
//  Variable that will hold our setInterval
    var intervalId;
    var clockInterval;
    var index = 0;

//  This code will run as soon as the page loads.
window.onload = function() {
    displayQuestions();
    run();

    $("button").on("click", function () {  
        console.log("clicked button");
        stop();
        if($(this).text === triviagame.questionsArray[index].correctAnswer){
            triviagame.correct++;
            console.log("One more correct");
            $("#correct").text("Correct: "+triviagame.correct);
            run();
        } else {
            console.log("One more incorrect");
            triviagame.wrong++;
            $("#wrong").text("Wrong: "+triviagame.wrong);
            run();
        }
     });
  };


  function displayQuestions() { 
    $("#question").text(triviagame.questionsArray[index].question);
    $("#answers").empty();
    for (let i = 0; i < triviagame.questionsArray[index].answers.length; i++) {
        const element = triviagame.questionsArray[index].answers[i];
        $("#answers").append("<button type='button' class='btn btn-light btn-med btn-block' id='"+i+"'>" + element + "</button>");
    }

    console.log(triviagame.questionsArray.length);
    if (index === triviagame.questionsArray.length -1){
        stop();
    }

    index++;  
  }

  function run() {
    clearInterval(intervalId);
    intervalId = setInterval(displayQuestions, 20 * 1000);  
    startTimer(); 
  }

  function stop() {
    clearInterval(intervalId);
    clearInterval(clockInterval);
  }

  function startTimer(){
    var seconds = 20;
    clockInterval = setInterval(function () {
        $("#clock").html(seconds);
        seconds--;
        if(seconds === 0){
            seconds = 20;
        }
    }, 1000);
  }