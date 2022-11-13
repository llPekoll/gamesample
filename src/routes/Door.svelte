<script>
  export let i;
  export let modaleOn;
  const mode = () => {
    modaleOn = true;
  };
</script>

<div
  class="hover:bg-red-300 hover:duration-75 px-20 bg-green-200 my-5 mx-3 h-32 rounded-lg"
  on:click={mode}
  on:keyup={mode}
>
  <p>salut</p>
  <p />
  <p>{i + 1}</p>
  <p />
</div>
