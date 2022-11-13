<script lang="ts">
  export let name = "";
  export let email = "";
  export let formSent = false;

  const jar = () => {
    formSent = true;
  };
</script>

<div class="">
  <form class="w-1/2" on:submit|preventDefault={jar}>
    <p>nom du game</p>
    <label for="name" class="block"> Nom </label>
    <input type="text" name="name" bind:value={name} class="text-black" />
    <br />
    <label for="email">
      Email
      <input type="text" name="email" bind:value={email} class="text-black" />
    </label>
    <br />
    <button type="submit"> nitty gritty </button>
  </form>
</div>
