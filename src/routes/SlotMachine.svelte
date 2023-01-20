<script lang="ts">
    import Caption from "./Caption.svelte";
    interface Reel {
      style: string;
      className: string;
    }
    export let reels: Reel[] = [];
    export let winner: number[] = [];

    const getWidth = (size: number, screens: Array<number[]>): number => {
      for(let i = 0; i < screens.length - 1; ++i) {
        if(size <= screens[i][0]) {
          return screens[i][1];
        }
      }
      return screens[screens.length - 1 ][1];
    }
    const screens = [[600, 67], [1279, 111], [10000, 142]];

    let innerWidth = 0;
    let state = 'idle';
    let msg = '';

    const isWinner = (data: number[]) => {
        let filteredData = data.filter(item => item === data[0]);
        return filteredData.length === 3 ? '✔️' : '❌';
    }

    const reset = () => {
        state = 'idle';
        const reelsLength = reels.length;
        for(let i = 0; i < reelsLength; ++i) {
            reels[i].style = 'margin-top: 0; transition-duration: 0ms;';
        }
    }

    function onClick () {
      const reelSize: number = getWidth(innerWidth, screens);
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
</script>

<svelte:window bind:innerWidth />
<div class="slot-machine">
    <div class="jackpot"
        on:click={onClick}
        on:keydown={onClick}
    >
        <div class="reel-wrapper">
            {#each reels as { className, style } }
              <Caption className={className} style={style} />
            {/each}
        </div>
        <div class="jackpot-stick { state === 'busy' ? 'on' : '' }"></div>
    </div>
    {#if msg}
      <div class="text-white text-lg">{@html msg}</div>
      <div
        class="text-white text-lg cursor-pointer"
        on:click={reset}
        on:keydown={reset}
    >
        Reset
    </div>
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
      bottom: 10%;
      left: 0;
      right: 0;
      margin: 0 auto;
      height: 615px;
      width: 678px;
      background-size: contain;
  }
  .reel-wrapper {
      background-color: transparent;
      height: 142px;
      left: 97px;
      margin: 0;
      position: absolute;
      top: 183px;
      overflow: hidden;
      width: 445px;
  }
  .jackpot-stick {
      background-image: url('images/PNG_RIDEAUX/03A_JACKPOT_02.png');
      position: absolute;
      width: 41px;
      height: 157px;
      top: 76px;
      right: -7px;
  }
  .jackpot-stick.on {
      background-image: url('images/PNG_RIDEAUX/03A_JACKPOT_03.png');
      position: absolute;
      height: 118px;
      top: 260px;
      right: -10px;
  }
  @media (max-width: 1279px) {
      .jackpot {
          height: 400px;
          width: 525px;
      }
      .reel-wrapper {
          top: 142px;
          left: 74px;
          width: 348px;
          height: 113px;
      }
      .jackpot-stick {
          top: 23px;
          right: -10px;
      }
      .jackpot-stick.on {
          height: 118px;
          top: 200px;
      }
  }
  @media (max-width: 600px) {
      .jackpot {
          height: 250px;
          width: 320px;
      }
      .reel-wrapper {
          top: 87px;
          left: 47px;
          width: 209px;
          height: 67px;
      }
      .jackpot-stick {
          background-size: contain;
          width: 25px;
          height: 95px;
          top: 16px;
          right: -7px;
      }
      .jackpot-stick.on {
          height: 72px;
          top: 119px;
      }
  }
</style>