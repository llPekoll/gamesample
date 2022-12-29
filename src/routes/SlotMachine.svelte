<script lang="ts">
    import Caption from "./Caption.svelte";
    interface Reel {
      style: string;
      className: string;
    }
    export let reels: Reel[] = [];
    export let winner: number[] = [];
    let state = 'idle';
    let msg = '';
    const reelSize = 142;

    function isWinner (data: number[]) {
        let filteredData = data.filter(item => item === data[0]);
        return filteredData.length === 3 ? '✔️' : '❌';
    }

    function onClick () {
        if (state !== 'idle') {
            return false;
        }
        state = 'busy';
        let longestTempo = 0;
        const reelsLength = reels.length;
        for(let i = 0; i < reelsLength; ++i) {
          let calc = reelSize * (winner[i] + 35);
          let tempo = (Math.round(Math.random() * 2000) + 1000);
          longestTempo = tempo > longestTempo ? tempo: longestTempo;
          reels[i].style = `margin-top: -${calc}px; transition-duration: ${tempo}ms;`;
        }
        setTimeout(function() {
            state = 'end';
        }, 250);
        setTimeout(function() {
          msg = 'is winner: ' + isWinner(winner);
        }, (longestTempo + 300));
    }

    // <div class={className} {style}></div>
</script>
  
<div class="slot-machine"
    on:click|once={onClick}
    on:keydown|once={onClick}
>
    <div class="jackpot">
        <div class="reel-wrapper">
            {#each reels as { className, style } }
              <Caption className={className} style={style} />
            {/each}
        </div>
        <div class="jackpot-stick { state === 'busy' ? 'on' : '' }"></div>
    </div>
    {#if msg}
      <div class="text-white text-lg">{@html msg}</div>
    {/if}
</div>

<style>
.slot-machine {
  background-image: url('./images/PNG_RIDEAUX/01_FOND.png');
  width: 100%;
  height: 100%;
  background-size: cover;
  position: relative;
  overflow: hidden;
  background-repeat: no-repeat;
}
.jackpot {
  background-image: url('./images/PNG_RIDEAUX/03A_JACKPOT_01.png');
  background-repeat: no-repeat;
  z-index: 1;
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  margin: auto auto;
  height: 615px;
  width: 678px;
  background-size: contain;
}
.reel-wrapper {
  height: 142px;
  overflow: hidden;
  width: 445px;
  background-color: transparent;
  position: absolute;
  top: 183px;
  left: 97px;
  margin: 0;
}
.jackpot-stick {
  background-image: url('images/PNG_RIDEAUX/03A_JACKPOT_02.png');
  position: absolute;
  right: 0;
  width: 41px;
  height: 157px;
  top: 76px;
  right: -7px;
}
.jackpot-stick.on {
  background-image: url('images/PNG_RIDEAUX/03A_JACKPOT_03.png');
  position: absolute;
  right: 0;
  width: 41px;
  height: 118px;
  top: 260px;
  right: -10px;
}
</style>