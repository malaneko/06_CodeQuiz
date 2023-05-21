# UoB_Challange06_CodeQuiz
 Web APIs: Code Quiz



* WHEN I click the start button THEN a timer starts and I am presented with a question
    - quiz starts => screen activation
    - 'Start Quiz' button clicked
    - screen hidden and questions appear
    - questions are invisible -> <div id="questions" class="hide">
    - questions choices available
    - used:
        - setInterval(function, milliseconds) -  timing event(miliseconds => 1000=1second)
        - .setAttribute() method to make start screen hidden on clicked 'Start Quiz'
        
* WHEN I answer a question THEN I am presented with another question


* WHEN I answer a question incorrectly THEN time is subtracted from the clock


* WHEN all questions are answered or the timer reaches 0 THEN the game is over

* WHEN the game is over THEN I can save my initials and score

















--------------------------------------------------------------

INFO:

Acceptance Criteria
GIVEN I am taking a code quiz

WHEN I click the start button
THEN a timer starts and I am presented with a question

WHEN I answer a question
THEN I am presented with another question

WHEN I answer a question incorrectly
THEN time is subtracted from the clock

WHEN all questions are answered or the timer reaches 0
THEN the game is over

WHEN the game is over
THEN I can save my initials and score