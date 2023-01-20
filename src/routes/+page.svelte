<script lang="ts">
  import SlotMachine from "./SlotMachine.svelte";
  let reels = [{ className: 'reel reel-left', style: '' }, { className: 'reel reel-center', style: '' }, { className: 'reel reel-right', style: '' }];
  let winner = [5, 6, 2];
  
</script>

<SlotMachine {reels} bind:winner />