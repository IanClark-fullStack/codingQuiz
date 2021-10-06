/*_________________________ Application Main Structure  _________________________*/

/*_________________ Global Variables _________________*/
var timerVal = '60';
var quizIntro = 'Answer the question correctly & as fast you can. The maximum point value you recieve for each question will be 200 points. Every 2 seconds, that score will decrease. Good luck.';
let userScore = 0;
// Questions Array
var initialIndex = 0;
var questionsArray = [
    {
        'name': 'questionTwo',
        'questionPrompt': 'Choose the best definition of scope in JavaScript.',
        'correctAnswer': 'where declared variables and functions are visible',
        answersArray: ['the functions that the browser \'knows about\' by default', 'variables and functions get \'hoisted\' to the top', 'the value of the variables defined inside a function', 'where declared variables and functions are visible']
        
    },
    {
        'name': 'questionThree',
        'questionPrompt': 'Variables declared with ___ are block-scoped',
        'correctAnswer': 'let',
        'answersArray': ['var', 'function', 'let']
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

// Event Listeners : Start Page

letsGo.addEventListener('click', function(event) {
    // event.preventDefault();
    letsGo = event.target;
    gameIntro.style.display = 'none';
    loadTimer();
    loadQuiz(0);
    
});

function hideFeedback() {
    var displayFeeback = document.getElementById('feedback');
    displayFeeback.setAttribute('style', 'display: none;');
}

// console.log(questionsArray[intitalIndex].correctAnswer);
function loadQuiz(currIndex) {
    var goodChoice = questionsArray[currIndex].correctAnswer;
    console.log(goodChoice);
    const currQuestion = questionsArray[currIndex].questionPrompt;
   
    
    // If the index has been incremented 
    if (currIndex === questionsArray.length) {
        return;
    }
    else {
        
        var currentQuestion = document.createElement('h3');
        currentQuestion.textContent = currQuestion;
        mainWrapper.appendChild(currentQuestion);
        // At the current Index, get the answers array for the associated question. 
        var choiceArray = questionsArray[currIndex].answersArray;
        // Function to use as a callback on each answer
        const createButton = (element) => {
            // Create each button
            var answerButtons = document.createElement('button');
            // Give each button an answer 
            answerButtons.textContent = element;
            // Assign each button an associated ID to differntiate between start and answer
            answerButtons.id = 'choiceButton';
            // Paint the buttons on the page 
            currentQuestion.appendChild(answerButtons);
        }
        // Perform the callback on each answer
        choiceArray.forEach(createButton);
        
        // Coditional Logic for User clicks 
        function checkAnswers(event) {
            event.preventDefault();
            
           

            // if (buttonClick.matches('#choiceButton')) {
                // Get all the choiceButtons on the page 
                
                // If the buttons text content matches the value at correctAnswer 
                // Get the buttons 
                var answerButtons = document.getElementById('choiceButton');
                 // if user click a button only 
                answerButtons = event.target; 
                console.log(answerButtons.textContent);
                if (answerButtons.textContent === goodChoice) {
                    // increase the users score 
                    userScore += 5;
                    console.log(userScore);
                    // Print feeback to the Page
                    
                    printFeedback.textContent = 'correct!';
                    answerButtons.appendChild(printFeedback);

                    // clear the feedback from the screen 
                    setTimeout(hideFeedback, 1000);
                    currIndex++;
                    // Recursive Case : call the function again with next question in play 
                    
                } // In the event the user did not select the correct answer,
                else if (userScore > 0 && answerButtons.textContent !== goodChoice) {
                    // decrease userscore 
                    userScore - 5;
                    // Print feeback to the Page
                    printFeedback.textContent = 'oops!';
                    answerButtons.appendChild(printFeedback);
                    // clear the feedback from the screen 
                    setTimeout(hideFeedback, 1000);
                    currIndex++;
                }
                else {
                    // Decrease the users score 
                    timerVal - 5;
                    // Print feeback to the Page
                    printFeedback.textContent = 'You\'re losing time!';
                    answerButtons.appendChild(printFeedback);

                    // clear the feedback from the screen 
                    setTimeout(hideFeedback, 1000);
                    
                        // call the function again with next question in play 
                    currIndex++;
                }
                loadQuiz(currIndex);
             
        }

        mainWrapper.addEventListener('click', checkAnswers);

        

    }

} 


console.log(userScore);

