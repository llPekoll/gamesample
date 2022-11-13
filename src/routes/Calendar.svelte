<script lang="ts">
  import { fly } from "svelte/transition";
  import Door from "./Door.svelte";
  export let formSent = false;
  let winner = {};
  const game = {
    id: 20,
    owner: 38,
    emblem: "z0kL507Oi",
    link: "http://localhost:5173/play/z0kL507Oi",
    qr_location:
      "https://bearwallet.fra1.digitaloceanspaces.com/dev/qr/1668091201_770794_qr_z0kL507Oi.png",
    name: "mmd aie aie",
    end_text: null,
    game_type: "calendar",
    skin: "skin de base",
    logo_company: null,
    start_date: "2022-11-07T06:00:00Z",
    end_date: "2022-11-30T00:00:00Z",
    starting_time: null,
    ending_time: null,
    is_active: true,
    request_name: true,
    request_email: true,
    request_tel: true,
    request_address: true,
    unlimited_in_time: false,
    losing_factor: 50,
    is_always_winner: false,
    can_replay: false,
    facebook: null,
    twitter: null,
    insta: null,
    mailjet_id: null,
    timezone: "Europe/Paris",
    number_of_days: [
      7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
      26, 27, 28,
    ],
  };
  const prices = [
    {
      id: 27,
      name: "Tour de cou",
      img: "https://bearwallet.fra1.digitaloceanspaces.com/prod/logos/1666256239.png",
      number: 160,
      game: 20,
      display_price_name: true,
      offset_price_name: null,
    },
    {
      id: 28,
      name: "Tapis",
      img: "https://bearwallet.fra1.digitaloceanspaces.com/prod/logos/1666256264.png",
      number: 10,
      game: 20,
      display_price_name: true,
      offset_price_name: null,
    },
    {
      id: 29,
      name: "m des maes",
      img: "https://bearwallet.fra1.digitaloceanspaces.com/prod/logos/1666255402.png",
      number: 400,
      game: 20,
      display_price_name: true,
      offset_price_name: null,
    },
  ];
  $: if (formSent) {
    winner = {
      img: "https://bearwallet.fra1.digitaloceanspaces.com/prod/logos/1666256239.png",
      name: "m des manes",
      displayTitle: true,
      offsetTitle: "m-15",
      state: "won",
      day_number: 12,
    };
  }
  let modaleOn = false;
  const reboot = () => {
    modaleOn = false;
  };
</script>

<div
  class="absolute bg-slate-50 jj mx-auto text-center px-10 py-10 h-full align-middle flex flex-wrap items-center justify-center"
>
  {#each game.number_of_days as price, i}
    <Door {i} bind:modaleOn />
  {/each}
</div>
{#if modaleOn}
  <div class="absolute h-full w-full bg-black bg-opacity-80">
    <div
      in:fly={{ y: -100, duration: 400 }}
      class="h-1/2 w-1/2 bg-white rounded-lg text-center mx-auto mt-20 "
    >
      <div class="flex items-center justify-center w-full h-4/5">
        <p>M des mans vous avez gagner un truc de ouf</p>
      </div>
      <button
        on:click={reboot}
        class="bg-green-500 px-16 py-2 rounded-lg border-green-800 border-2"
      >
        ciMer D'avoir Ouej!
      </button>
    </div>
  </div>
{/if}

<style>
  .jj {
    width: 100vw;
  }
</style>
