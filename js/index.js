import { Controls } from './controls.js';
import { Timer } from './timer.js';
import { Sounds } from './sounds.js';
import { buttonPlay, buttonPause, buttonStop, buttonSet, minutesDisplay, secondsDisplay } from './elements.js';
import { Events } from './events.js';

const controls = Controls({ buttonPlay, buttonPause, buttonSet, buttonStop })
const timer = Timer({ minutesDisplay, secondsDisplay, resetControls: controls.reset });
const sound = Sounds();
const events = Events({controls, timer, sound});

