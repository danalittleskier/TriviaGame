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
            question:  "Which national park is the largest acording to size?",
            answers: ["Acadia", "Grand Canyon", "Yellowstone", "Wrangell-St. Elias"],
            correctAnswer: 3
        },
        {
            qid: 2,
            question:  "Which continent hosts the Atlas Mountains?",
            answers: ["Europe", "Africa", "Asia", "Australia"],
            correctAnswer: 1
        },
        {
            quid: 3,
            question:  "The highest peaks in the Western Hemisphere are found in which mountain range?",
            answers: ["The Rocky Mountains", "The Andes Mountain", "The Sierra Madres", "The Sierra Nevadas"],
            correctAnswer: 1
        },
        
    ]
}
//  Variable that will hold our setInterval
    var intervalId;
    var clockInterval;
    var index = 0;

  function displayQuestions() { 
    if (index === triviagame.questionsArray.length -1){
        stop();
    }
    $("#question").text(triviagame.questionsArray[index].question);
    $("#answers").empty();

    for (let i = 0; i < triviagame.questionsArray[index].answers.length; i++) {      
        const questionId = triviagame.questionsArray[index].qid;
        const correctAnswer = triviagame.questionsArray[index].correctAnswer;
        const element = triviagame.questionsArray[index].answers[i];
        $("#answers").append("<button type='button' class='btn btn-light btn-med btn-block' data-correct='"+correctAnswer+"' id='"+i+"'>" + element + "</button>");
    }
    
    $("button").on("click", function () {  
        console.log("the button id "+$(this).attr('id'));
        console.log("the button correct "+$(this).attr('data-correct'));
        stop();
        
        if($(this).attr('id') === $(this).attr('data-correct')){
            triviagame.correct++;
            console.log("One more correct");
            $("#correct").text("Correct: "+triviagame.correct);
            run();
        } else {
            console.log("One more incorrect ");
            triviagame.wrong++;
            $("#wrong").text("Wrong: "+triviagame.wrong);
            run();
        }
     });

    
    index++;
  }

  function run() {
    clearInterval(intervalId);
    clearInterval(clockInterval);
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

  displayQuestions();
  run();

 

 

 