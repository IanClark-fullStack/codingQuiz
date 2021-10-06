/*_________________________ Application Main Structure  _________________________*/

/*_________________ Global Variables _________________*/
var timerVal = '60';
var quizIntro = 'Answer the question correctly & as fast you can. The maximum point value you recieve for each question will be 200 points. Every 2 seconds, that score will decrease. Good luck.';

// Questions Array

var questionsArray = [
    {
        'name': 'questionTwo',
        'questionPrompt': 'Choose the best definition of scope in JavaScript.',
        answersNewArray: ['the functions that the browser \'knows about\' by default', 'variables and functions get \'hoisted\' to the top', 'the value of the variables defined inside a function'],

        'altAnswer1': 'the functions that the browser \'knows about\' by default',
        'altAnswer2': 'variables and functions get \'hoisted\' to the top',
        'altAnswer3': 'the value of the variables defined inside a function',
        'correctAnswer': 'where declared variables and functions are visible',
        'answersArray': [this.altAnswer2, this.altAnswer1, this.correctAnswer, this.altAnswer3]

    },
    {
        'name': 'questionThree',
        'questionPrompt': 'Variables declared with ___ are block-scoped',
        'altAnswer1': 'var',
        'altAnswer2': 'function',
        'correctAnswer': 'let',
        'answersArray': [this.correctAnswer, this.altAnswer1, this.altAnswer2]
    }
];

// Get container Elements : start page 
var headerWrapper = document.querySelector('header');
var mainWrapper = document.querySelector('main');
// Create Elements : start page 
var navWrapper = document.createElement('nav');
var highScores = document.createElement("a");
var timerDisplay = document.createElement('h5');
var countDown = document.createElement('span');

var sectionElement = document.createElement('section');
var gameTitle = document.createElement('h1');
var gameIntro = document.createElement('p');
var letsGo = document.createElement('button');
// Create Elements for Quiz




// Assign Element Values : start page 
highScores.innerHTML = 'View High Scores';
highScores.href = "#";
countDown.innerHTML = timerVal;
timerDisplay.innerHTML = 'Time Left';
gameTitle.innerHTML = 'theCodingQuiz';
gameIntro.textContent = quizIntro;
letsGo.innerHTML = 'start';
letsGo.href = "#";


// Set Attributes for Elements : startPage
timerDisplay.setAttribute('style', 'font-family:Courier; monsopace; font-size:1em; letter-spacing:2px; color:#000; float: right; display: inline-block;');
countDown.setAttribute('style', 'font-family:Courier; monsopace; font-size:2em; letter-spacing:2px; color:#000; float: right; display: inline-block;');

// Append Elements : start page
headerWrapper.appendChild(navWrapper);
navWrapper.appendChild(highScores);
navWrapper.appendChild(timerDisplay).appendChild(countDown);
mainWrapper.appendChild(gameTitle);
mainWrapper.appendChild(gameIntro);
mainWrapper.appendChild(letsGo);

// Event Listeners : Start Page

letsGo.addEventListener('click', function(event) {
    event.preventDefault();
    var element = event.target;
    gameIntro.style.display = 'none';
    if (element.matches('button')) {
        loadTimer();
        loadQuiz();
    }
});

const loadQuiz = (initialIndex = 0) => {

} 

function loadTimer() {
    // Local Variables
    
    // start timer function
        var stopWatch = setInterval(function() {
            timerVal--;
            countDown.innerHTML = timerVal;
            if (timerVal === 0) {
            clearInterval();
                // // Call End of Quiz Function
                // stopQuiz();
            }
        }, 1000);
};

