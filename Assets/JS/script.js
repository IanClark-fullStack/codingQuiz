function generateQuiz() {
//  Initial Time variable initialized to the value of 0
    let initialTime=0;

// Start Button Functionality : Hide the intro elements, paint the quiz elements to the page
    const startBtn = document.getElementById("start");
    const currentTimeLeft = document.getElementById("timeLeft");
    const userScore = document.getElementById("userFinalScore");
    // Grab the number of questions
    const questionsNum = questions.length;
    const startPageWrapper= document.getElementById("landing-wrapper");
    const quizWrapper = document.getElementById("quiz-wrapper");
    const finalWrapper = document.getElementById("final-wrapper");
    const finalButton = document.getElementById("submit-user-info");
    const viewScoresBtn = document.getElementById("view-scores-btn");
    const viewScoresWrapper = document.getElementById("highscore-wrapper");
    // High scores initialized to the value of an empty array
    let highScoresArray = [];
        //  Method to store and retrieve arrays in/from local storage obtained from https://stackoverflow.com/questions/3357553/how-do-i-store-an-array-in-localstorage
    if (JSON.parse(localStorage.getItem('scores')) !== null) {
        highScoresArray = JSON.parse(localStorage.getItem("scores"));
    }
    
        function startQuiz() {
            
            // If the user starts the quiz, hide the start page
            startPageWrapper.setAttribute("class","container d-none");
            let rowToAppend = null;
            let colToAppend = null;
            let headerToAppend = null;
            let buttonToAppend = null;
            // Then, display the quiz wrapper
            quizWrapper.setAttribute("class","container");
            let currentQuestion = 1;
            // User score starts at 0
            let score = 0;
    // Reassign initialTime from 0 to the Number of Question * 30
            initialTime = questionsNum * 30;
            // Store the new value of initialTime in currentTimeLeft
            currentTimeLeft.setAttribute("value",initialTime);
            let stopWatch = setInterval(function() {
                // When the value of initial time hits 0, clear the stopWatch interval, 
                if (initialTime<1) {
                    clearInterval(stopWatch);
                    // Then, hide the quiz
                    quizWrapper.setAttribute("class","container d-none");
                    // Then, paint the high scores content to the page
                    finalWrapper.setAttribute("class","container");
                    // Finally, Exit the load quiz execution context.
                    return;
                }
                // When the initial time variable has a value greater than zero, decrement the time by 1
                initialTime = initialTime - 1;
                // Store the new value of initialTime in currentTimeLeft with every second passed
                currentTimeLeft.setAttribute("value",initialTime);
            },1000);


            let trueOrFalse = false;
            // Generate Questions with the num of Questions passed in as a parameter
            function generateQuestion(questionNum) {
                //  During the quiz, the header has the current question, and the answer buttons have the possible answers for that question
                
                quizWrapper.innerHTML = "";
                // Create the row element 
                rowToAppend = document.createElement("div");
                // Set the row to display flex
                rowToAppend.setAttribute("class","row");
                // Paint the Flex Row to the page
                quizWrapper.append(rowToAppend);

                // Create the column element
                colToAppend = document.createElement("div");
                // Set the column width
                colToAppend.setAttribute("class","col-0 col-sm-2");
                // Paint the Column to the page 
                rowToAppend.append(colToAppend);

// PICK UP MARK UP HERE
                colToAppend = document.createElement("div");
                colToAppend.setAttribute("class","col-12 col-sm-8");
                rowToAppend.append(colToAppend);

                colToAppend = document.createElement("div");
                colToAppend.setAttribute("class","col-0 col-sm-2");
                rowToAppend.append(colToAppend);

                // Create a new Row Under the first Flex Row
                colToAppend = rowToAppend.children[1];
                rowToAppend = document.createElement("div");
                rowToAppend.setAttribute("class","row mb-3");
                colToAppend.append(rowToAppend);

                colToAppend = document.createElement("div");
                colToAppend.setAttribute("class","col-12");
                rowToAppend.append(colToAppend);
                
                // Create the heading Element for Question 
                headerToAppend = document.createElement("h2");
                // Assign the content of the heading equal to the last question prompt
                headerToAppend.innerHTML = questions[questionNum-1].questionPrompt;
                // Paint the question to the page
                colToAppend.append(headerToAppend);

                // colToAppen value changed to the seconmd child element within the first child element
                colToAppend = quizWrapper.children[0].children[1];

                for (let i=0; i<4; i++) {
                    // On each iteration, create a new row 
                    let rowToAppend = document.createElement("div");
                    rowToAppend.setAttribute("class","row mb-1");
                    colToAppend.append(rowToAppend);
                    // Then, create a new column within that row
                    let colToAppend2 = document.createElement("div");
                    colToAppend2.setAttribute("class","col-12");
                    rowToAppend.append(colToAppend2);
                    // Then, add a button to the center of that column
                    buttonToAppend = document.createElement("button");
                    buttonToAppend.setAttribute("class","btn btn-primary");
                    buttonToAppend.setAttribute("type","button");
                    // Because the answers array length is equal to 4, grab each answer and paint it to each button
                    buttonToAppend.innerHTML = questions[currentQuestion-1].answersArray[i];
                    colToAppend2.append(buttonToAppend);

                    buttonToAppend.addEventListener("click",function(){
                        //  When the user clicks one of the answer buttons, if it is the correct answer, the message "Correct" is displayed, and if not, the message "Incorrect" is displayed and 15 seconds deducted from the timer
                        // The initial value of False turns true, return
                        if (trueOrFalse) {
                            return;
                        }
                        trueOrFalse = true;
                        clearInterval(stopWatch);
                        let colToAppend = quizWrapper.children[0].children[1];
                        let rowToAppend = document.createElement("div");
                        rowToAppend.setAttribute("class","row");
                        colToAppend.append(rowToAppend);

                        colToAppend = document.createElement("div");
                        colToAppend.setAttribute("class","col-12");
                        rowToAppend.append(colToAppend);

                        let feedBack = document.createElement("p");
                        colToAppend.append(feedBack);
                        // If user clicks the correct Response 
                        if (this.innerHTML === questions[currentQuestion - 1].correctAnswer) {
                            feedBack.innerHTML = "Correct!";
                        } else {
                            feedBack.innerHTML = "Incorrect";
                            // Decrease the current Time by 10
                            initialTime = initialTime - 10;
                            // Fail Safe for initial Time 
                            if (initialTime < 0) {
                                initialTime = 0;
                            }
                            currentTimeLeft.setAttribute("value",initialTime);
                        }
                        // Move on to the next question
                        currentQuestion++;
                        // If we hit the end the end of our questions
                        if (currentQuestion>questions.length) {
                            // set users Score
                            score = initialTime;
                        }
                        setTimeout(function() {
                            // Pause stopWatch and Display feedback for 1 second 
                            if (currentQuestion>questions.length) {
                                // Hide the Quiz
                                quizWrapper.setAttribute("class","container d-none");
                                // Paint the high scores wrapper to the page
                                finalWrapper.setAttribute("class","container");
                                // Save the  current score
                                userScore.setAttribute("value",score);
                            } else {
                                // In every other case, call the function again with next question 
                                generateQuestion(currentQuestion);
                                trueOrFalse = false;
                                stopWatch = setInterval(function() {
                                    // Evaluate when to end the function again. 
                                    if (initialTime<1) {
                                        clearInterval(stopWatch);
                                        quizWrapper.setAttribute("class","container d-none");
                                        finalWrapper.setAttribute("class","container");
                                        return;
                                    }
                                    initialTime = initialTime - 1;
                                    currentTimeLeft.setAttribute("value",initialTime);
                                },1000);
                            }
                        },1000);
                    });
                }
                

            }
        
            function highScore() {
                let userInitials = document.getElementById("user-initials");
                let newUserScore = {
                    initials: userIntials.value,
                    highScore: score
                };
                
                highScoresArray.push(newUserScore);
                localStorage.setItem("scores",JSON.stringify(highScoresArray));
            }
            finalButton.addEventListener("click",highScore);
            
            generateQuestion(currentQuestion);
        }

        startBtn.addEventListener("click",startQuiz);

        viewScoresBtn.addEventListener("click",function() {
            startPageWrapper.setAttribute("class","container d-none");
            quizWrapper.setAttribute("class","container d-none");
            finalWrapper.setAttribute("class","container d-none");
            viewScoresWrapper.setAttribute("class","container");
            let colToAppend = document.getElementById("highscores-table");
            for (i=0; i<highScoresArray.length; i++) {
                let rowToAppend = document.createElement("div");
                rowToAppend.setAttribute("class","row mb-1");
                colToAppend.append(rowToAppend);

                let colToAppend2 = document.createElement("div");
                colToAppend2.setAttribute("class","col-12 text-center");
                rowToAppend.append(colToAppend2);

                let feedBack = document.createElement("div");
                feedBack.innerHTML = "Initials: " + highScoresArray[i].userInitials + "   Score: " + highScoresArray[i].highScore;
                colToAppend2.append(feedBack);
            }
        });
    
        
    
    
    
    
    
    
    }
    
generateQuiz();