let starttime = 25;
let time = starttime * 60;
let timer = document.getElementById('countdown-timer');
let startbtn = document.getElementById('start-button');
let intervalID;
let startchange = false;
let startstart = false;

let starttime2 = 5;
let time2 = starttime2 * 60;
let timer2 = document.getElementById('countdown-timer2');
let startbtn2 = document.getElementById('start-button2');
let intervalID2;
let startchange2 = false;
let startstart2 = false;

function StartTimer() {
    if(startchange){
        startbtn.innerHTML = 'Start';
    }
    if(startstart == false){
        intervalID = setInterval(CountdownTimer, 1000);
        startstart = true;
    }
}

function PauseTimer() {
    clearInterval(intervalID);
    startbtn.innerHTML = 'Resume';
    startchange = true;
    startstart = false;
}

function CountdownTimer() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    
    seconds = seconds < 10 ? '0' + seconds : seconds;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    timer.innerHTML = `${minutes} : ${seconds}`;
    time--;

    if (time < 0) {
        clearInterval(intervalID);
        timer.innerHTML = "00 : 00";
    }
}

function ResetTimer () {
    clearInterval(intervalID);
    timer.innerHTML = "25 : 00";
    time = 25 * 60;
    startstart = false;
    startbtn.innerHTML = 'Start';
    startchange = false;
}

function StartTimer2 () {
    if(startchange2){
        startbtn2.innerHTML = 'Start';
    }
    if(startstart2 == false){
        intervalID2 = setInterval(CountdownTimer2, 1000);
        startstart2 = true;
    }
}

function CountdownTimer2 () {
    let minutes = Math.floor(time2 / 60);
    let seconds = time2 % 60;
    
    seconds = seconds < 10 ? '0' + seconds : seconds;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    timer2.innerHTML = `${minutes} : ${seconds}`;
    time2--;

    if (time2 < 0) {
        clearInterval(intervalID2);
        timer2.innerHTML = "00 : 00";
    }
}

function PauseTimer2 () {
    clearInterval(intervalID2);
    startbtn2.innerHTML = 'Resume';
    startchange2 = true;
    startstart2 = false;
}

function ResetTimer2 () {
    clearInterval(intervalID);
    timer2.innerHTML = "5 : 00";
    time2 = 5 * 60;
    startstart2 = false;
    startbtn2.innerHTML = 'Start';
    startchange2 = false;
}