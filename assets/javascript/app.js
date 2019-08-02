var triviagame = {
    correct: 0,
    incorect: 0,

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
            correctAnswer: "Africa"
        },
        
    ]
}
//  Variable that will hold our setInterval that runs the stopwatch
    var intervalId;

    var index = 0;

//  This code will run as soon as the page loads.
window.onload = function() {
    run();

    // $("#stop").on("click", stop);
    // $("#reset").on("click", reset);
    // $("#start").on("click", start);
  };

  function displayQuestions() {
    $("#question").text(triviagame.questionsArray[index].question);
    $("#answers").empty();
    for (let i = 0; i < triviagame.questionsArray[index].answers.length; i++) {
        const element = triviagame.questionsArray[index].answers[i];
        $("#answers").append("<li class='list-group-item'>" + element + "</li>");
    }
    console.log(triviagame.questionsArray.length);
    if (index === triviagame.questionsArray.length -1){
        stop();
    }
    index++;  
  }

  function run() {
    clearInterval(intervalId);
    intervalId = setInterval(displayQuestions, 3 * 1000);   
       
  }

  function stop() {
    clearInterval(intervalId);
  }

