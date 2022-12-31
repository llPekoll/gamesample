<script lang="ts">
    const repeat = (arr: string[], n: number) => Array(n).fill(arr).flat();
    export let captions: string[] = [];
    export let className = '';
    export let style = '';
    captions = repeat([
        'https://via.placeholder.com/150x152/orange',
        'https://via.placeholder.com/50x152/black',
        'https://via.placeholder.com/150x152/blue',
        'https://via.placeholder.com/150x152/yellow',
        'https://via.placeholder.com/150x152/silver',
        'https://via.placeholder.com/158x152/green',
        'https://via.placeholder.com/150x182/teal',
        'https://via.placeholder.com/150x152/pink',
        'https://via.placeholder.com/120x152/red',
        'https://via.placeholder.com/150x152/brown',
    ], 50);
</script>
<style>
    .reel {
        background-repeat: repeat-y;
        z-index: 2;
        position: absolute;
        top: 0;
        left: 76px;
        height: 8000px;
        width: 140px;
        background-position: 0 0;
        transition: margin-top 5s ease-out;
        margin-top: 0px;
    }
    .reel-left {
        left: 0;
    }
    .reel-right {
        left: auto;
        right: 0;
    }
    .reel-center {
        left: 0;
        right: 0;
        margin: 0 auto;
    }

    .reel-left {
        left: 0;
    }
    .reel-right {
        left: auto;
        right: 0;
    }
    .reel-center {
        left: 0;
        right: 0;
        margin: 0 auto;
    }
    * {
        box-sizing: border-box;
    }
    .reel img {
        width: 100%;
        height: 142px;
    }
</style>

<div class="{className}" style={style}>
    {#each captions as id }
        <img src="{id}" alt="cadeaux X" style="border: 1px solid black;"/>
    {/each}
</div>