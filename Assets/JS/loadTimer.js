function loadTimer() {
    // Local Variables
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
;
