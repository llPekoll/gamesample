var state = 'idle';
// var inputs = [7, 3, 7];
// var inputs = [5, 3, 7];
var inputs = [2, 2, 2];

function isWinner (data) {
    var filteredData = data.filter(item => item === data[0]);
    console.log({filteredData});
    return filteredData.length === 3 ? '✔️' : '❌';
}

function displayEndMessage (msg) {
    var div = document.createElement("div");
    var bck = document.getElementsByClassName('slot-machine')[0];
    var message = bck.appendChild(div);
    message.innerHTML = msg;
    message.style.color = 'white';
    message.style.fontSize = '2rem';
}

function onClick () {
    if (state !== 'idle') {
        return false;
    }
    state = 'busy';
    var stick = document.getElementsByClassName('jackpot-stick')[0];
    var reels = document.getElementsByClassName('reel');
    var longestTempo = 0;
    for(var i = 0; i < reels.length; ++i) {
        if (typeof(reels[i]) === 'object') {
            var calc = 67 * (inputs[i] + 35);
            var tempo = (Math.round(Math.random() * 2000) + 1000);
            longestTempo = tempo > longestTempo ? tempo: longestTempo;
            reels[i].style.backgroundPositionY = calc + 'px';
            reels[i].style.transitionDuration = tempo + 'ms';
        }
    }
    stick.classList.add('on');
    setTimeout(function() {
        stick.classList.remove('on');
    }, 250);
    setTimeout(function() {
      displayEndMessage('is winner: ' + isWinner(inputs));
  }, (longestTempo + 300));
}

function init () {
    window.addEventListener('click', onClick);
}


