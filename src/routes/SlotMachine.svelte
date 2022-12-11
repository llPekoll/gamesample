<script lang="ts">
    var state = 'idle';
    // var inputs = [7, 3, 7];
    // var inputs = [5, 3, 7];
    var inputs = [2, 2, 2];

    function isWinner (data: number[]) {
        var filteredData = data.filter(item => item === data[0]);
        console.log({filteredData});
        return filteredData.length === 3 ? '✔️' : '❌';
    }

    function displayEndMessage (msg: string) {
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
</script>
  
<div class="slot-machine"
    on:click|once={onClick}
    on:keydown|once={onClick}
>
    <div class="jackpot">
        <div class="reel-wrapper">
            <div class="reel reel-left"></div>
            <div class="reel"></div>
            <div class="reel reel-right"></div>
        </div>
        <div class="jackpot-stick"></div>
    </div>
</div>

<style>
.slot-machine {
  background-image: url('./images/PNG_RIDEAUX/01_FOND.png');
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;
  background-size: cover;
  position: relative;
}
.jackpot {
  background-image: url('./images/PNG_RIDEAUX/03A_JACKPOT_01.png');
  background-repeat: no-repeat;
  z-index: 1;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  height: 301px;
  width: 320px;
  background-size: contain;
}
.reel {
  background-image: url('images/reel_normal.png');
  background-repeat: repeat-y;
  z-index: 2;
  position: absolute;
  top: 0;
  left: 76px;
  height: 8000px;
  width: 60px;
  background-size: contain;
  background-position: 0 0;
  transition: background-position 5s ease-out;

}
.reel-left {
  left: 0;
}
.reel-right {
  left: auto;
  right: 0;
}
.reel-wrapper {
  height: 67px;
  overflow: hidden;
  width: 210px;
  background-color: transparent;
  position: absolute;
  top: 86px;
  left: 45px;
  margin: 0;
}
.jackpot-stick {
  background-image: url('images/PNG_RIDEAUX/03A_JACKPOT_02.png');
  position: absolute;
  right: 0;
  width: 41px;
  height: 157px;
  top: -47px;
  right: -10px;
}
.jackpot-stick.on {
  background-image: url('images/PNG_RIDEAUX/03A_JACKPOT_03.png');
  position: absolute;
  right: 0;
  width: 41px;
  height: 118px;
  top: 113px;
  right: -10px;
}
</style>