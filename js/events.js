import { buttonPlay, buttonPause, buttonStop, buttonSet, buttonSoundOn, buttonSoundOff } from './elements.js';

function Events({controls, timer, sound}) {

    buttonPlay.addEventListener('click', function () {
        controls.play();
        timer.countdown();
        sound.pressButton();
    });
    
    buttonPause.addEventListener('click', function () {
        controls.pause();
        timer.hold();
        sound.pressButton();
    });
    
    buttonStop.addEventListener('click', function () {
        controls.reset();
        timer.reset();
        sound.pressButton();
    });
    
    buttonSet.addEventListener('click', function () {
        sound.pressButton();
    
        let newMinutes = controls.getMinutes();
    
        if (!newMinutes) {
            timer.reset();
            return;
        }
    
        timer.updateDisplay(newMinutes, 0)
        timer.updateMinutes(newMinutes);
    });
    
    buttonSoundOn.addEventListener('click', function () {
        buttonSoundOn.classList.toggle('hide');
        buttonSoundOff.classList.toggle('hide');
        sound.bgAudioPause();
    });
    
    buttonSoundOff.addEventListener('click', function () {
        buttonSoundOn.classList.toggle('hide');
        buttonSoundOff.classList.toggle('hide');
        sound.bgAudioPlay();
    });
}

export { Events }