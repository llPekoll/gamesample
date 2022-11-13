<script lang="ts">
  import Calendar from "./Calendar.svelte";
  import { fly } from "svelte/transition";
  import Form from "./Form.svelte";
  let formSent = false;
</script>

<Calendar bind:formSent />
{#if !formSent}
  <div
    out:fly={{ y: +100, duration: 400 }}
    class="absolute h-full w-full bg-black bg-opacity-80 text-white mx-auto text-center"
  >
    <Form bind:formSent />
  </div>
{/if}
