var time = 0;
var status = 0;

function start() {
    status = 1;
    timer();
    //document.getElementById("start").disabled =true;
}

function reset() {
    status = 0;
    time = 0;
    //document.getElementById("start").disabled = false;
    document.querySelector('.timer').innerHTML = "00:00:00";
}

function stop() {
    status = 0;
    // document.getElementById("start").disabled = false;
}

function timer() {

    if (status == 1) {
        setTimeout(function () {
            time++;
            var min = Math.floor(time / 100 / 60);
            var sec = Math.floor(time / 100);
            var mSec = time % 100;

            if (min < 10) {
                min = "0" + min;
            }
            if (sec >= 60) {
                sec = sec % 60;
            }
            if (sec < 10) {
                sec = "0" + sec;
            }
            document.querySelector(".timer").innerHTML = min + ":" + sec + ":" + mSec;
            timer();

        }, 10)
    }
}


function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

