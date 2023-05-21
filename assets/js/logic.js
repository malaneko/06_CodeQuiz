
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

// Targets array's questions
var questionEl = document.getElementById('"question-title"');




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



function showQuestions(){   
var getQuestion = questions[question]; // Accesses every question from the array by index [0] (question)
// question = [0];  // Starts from index 0
questionEl = getQuestion.question;  // Takes every next question from each nested object



 // loop through questions choices - forEach(myfunction)
getQuestion.choices.forEach(function(currentValue, i,     // For each of choices nested array of the array's questions - taken current value and its index

// This value should be shown as a clickable button (to make a choice)
// Missing buttons for choices - createElement()
function addElement(){
        var newButton = document.createElement('button');   //Creates a new button
        var questionBtn = document.
}
}




//---------------
//array.forEach(function(currentValue, index, arr), thisValue)