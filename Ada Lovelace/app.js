var seconds = 0;
var el = document.getElementById('seconds-counter');

function incrementSeconds() {
    seconds += 1;
    el.innerText = "You have been here for " + seconds + " seconds.";
}

var cancel = setInterval(incrementSeconds, 1000);var seconds = 0;
var el = document.getElementById('seconds-counter');

function incrementSeconds() {
    seconds += 0.5;
    el.innerText = seconds + " seconds!";
}

var cancel = setInterval(incrementSeconds, 1000);