let starttime = 25;
let time = starttime * 60;
let timer = document.getElementById('countdown-timer');
let startbtn = document.getElementById('start-button');
let intervalID;
let startchange = false;
let startstart = false;

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