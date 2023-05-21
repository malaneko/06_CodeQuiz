
// variables access HTML elements (by classes / ids)
var timerEl = document.getElementById('time');  // Makes HTML timer an interactive counter
var startButton = document.getElementById('start');   // Starts Quiz button - questions show up
//var startScreenEl = document.getElementById('start-screen'); // Makes start screen interactive (targets it)

// var scoresEl = document.getElementById("scores");  //Shows high scores 


var questionsEl = document.getElementById('questions');         
var choicesEl = document.getElementById('choices');
var answerEl = document.getElementById('answer');

var endScreenEl = document.getElementById('end-screen');   //Shows end screen

var initialsEl = document.getElementById("initials");
var feedback = document.getElementById('feedback');
var submitButton = document.getElementById('submit');  //

// time settings
var timing = questions.length*10; // time for the answer
var startTime = setInterval(clock, 1000); // Timer counts every second 





//WHEN clicked the start button, starting screen turns off
//THEN a timer starts and I am presented with a question 
function startQuiz() {
    var startScreenEl = document.getElementById("start-screen"); // The starting screen targeted and must be turned off when the button clicked
    startButton.onclick = startQuiz; // Clicks the button (quiz starts) and then
    startScreenEl = startScreenEl.setAttribute('start-screen','hide'); // The starting screen hides as 'hide' attribute added
    // Shows quiz questions
    // Shows timer 

}

function clock(){
    timing-- ;  //time counted down 

}

