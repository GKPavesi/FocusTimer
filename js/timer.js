import { Sounds } from "./sounds.js";

function Timer({ minutesDisplay, secondsDisplay, resetControls }) {

    let timerTimeOut = 0;
    let minutes = Number(minutesDisplay.textContent);


    function updateDisplay(newMinutes, seconds) {

        newMinutes = newMinutes === undefined ? minutes : newMinutes;
        seconds = seconds === undefined ? 0 : seconds;
        minutesDisplay.textContent = String(newMinutes).padStart(2, "0");
        secondsDisplay.textContent = String(seconds).padStart(2, "0");
    }

    function countdown() {
        timerTimeOut = setTimeout(function () {
            let seconds = Number(secondsDisplay.textContent);
            let minutes = Number(minutesDisplay.textContent);
            let isFinished = (minutes <= 0 && seconds <= 0);

            if (isFinished) {
                resetControls();
                updateDisplay();
                Sounds().timeEnd();
                return
            }

            if (seconds <= 0) {
                seconds = 60;
                minutes = minutes - 1;
            }

            updateDisplay(minutes, seconds - 1);
            countdown();
        }, 1000)
    }

    function reset() {
        updateDisplay(minutes, 0)
        clearTimeout(timerTimeOut);
    }

    function updateMinutes(newMinutes) {
        minutes = newMinutes;
    }

    function hold() {
        clearTimeout(timerTimeOut);
    }

    return {
        countdown,
        reset,
        updateDisplay,
        updateMinutes,
        hold
    }
}

export { Timer }