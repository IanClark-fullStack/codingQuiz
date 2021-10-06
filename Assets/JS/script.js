/*_________________________ Application Main Structure  _________________________*/

/*_________________ Global Variables _________________*/
var timerVal = '60';
var quizIntro = 'Answer the question correctly & as fast you can. The maximum point value you recieve for each question will be 200 points. Every 2 seconds, that score will decrease. Good luck.';
let userScore = 0;
// Questions Array
var questionsArray = [
    {
        'name': 'questionTwo',
        questionPrompt: 'Choose the best definition of scope in JavaScript.',
        correctAnswer: 'where declared variables and functions are visible',
        answerA: 'the functions that the browser \'knows about\' by default', 
        answerB: 'variables and functions get \'hoisted\' to the top',
        answerC: 'the value of the variables defined inside a function',
        answerD: 'where declared variables and functions are visible'
        
    },
    {
        'name': 'questionThree',
        'questionPrompt': 'Variables declared with ___ are block-scoped',
        'correctAnswer': 'let',
        answersArray: ['var', 'function', 'let']
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

var printFeedback = document.createElement('h4');
var quizWrapper = document.getElementById('quiz');
var currentPrompt = document.getElementById('question-title');

 var displayList = document.getElementById('answerList');

  // Create the Element to hold Current Question 
  

  currentPrompt.textContent = questionsArray[0].questionPrompt;
var button1 = document.getElementById('1');
var button2 = document.getElementById('2');
var button3 = document.getElementById('3');
var button4 = document.getElementById('4');

button1.textContent = questionsArray[0].answerA;
button2.textContent = questionsArray[0].answerB;
button3.textContent = questionsArray[0].answerC;
button4.textContent = questionsArray[0].answerD;

displayList.addEventListener('click', function(event) {
    event.preventDefault();
    var element = event.target;
   
    if (element.matches('button')) {
        if (element.textContent === questionsArray[0].correctAnswer)
    }
});

// Assign Element Values : start page 
highScores.innerHTML = 'View High Scores';
highScores.href = "#";
countDown.innerHTML = timerVal;
timerDisplay.innerHTML = 'Time Left';
gameTitle.innerHTML = 'theCodingQuiz';
gameIntro.textContent = quizIntro;
letsGo.innerHTML = 'start';
letsGo.id = 'start-button';
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


function loadTimer() {
    // start timer function
    var stopWatch = setInterval(function () {
        timerVal--;
        countDown.innerHTML = timerVal;
        if (timerVal === 0) {
            clearInterval(stopWatch);
            // // Call End of Quiz Function
            // stopQuiz();
        }
    }, 1000);
}

// Event Listeners : Start Page
letsGo.addEventListener('click', function(event) {
    // event.preventDefault();
    letsGo = event.target;
    gameIntro.style.display = 'none';
    loadTimer();
    loadQuiz();
    
});

// Function to use as a callback on each answer
const generateButton = (element) => {
    // Create List Items 
    var listItem = document.createElement('li');
    // Create each button
    var buttonItem = document.createElement('button');
    // Give each button an answer 
    buttonItem.textContent = element;
    // Assign each button an associated ID to differntiate between start and answer
    buttonItem.id = 'choiceButton';
      // Paint the buttons on the page 
      displayList.appendChild(listItem);
    listItem.appendChild(buttonItem);
  
}

let retrieveAnswers = [];
let answerLength = 4;





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
        // Fill the Element 
        
        // Paint the current Question to the page 
        
        
        // For each answer, perform the callback generateButton 
        
        // In each iteration, we also need to evaluate whether the selcted button is correct. 

        

        
    

    




function hideFeedback() {
    var displayFeeback = document.getElementById('feedback');
    displayFeeback.setAttribute('style', 'display: none;');
}

