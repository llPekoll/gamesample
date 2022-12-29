<script lang="ts">
    export let captions: string[] = [];
    export let className = '';
    export let style = '';
    captions = [
        'https://via.placeholder.com/150x152',
        'https://via.placeholder.com/150x152',
        'https://via.placeholder.com/150x152',
        'https://via.placeholder.com/150x152',
        'https://via.placeholder.com/150x152',
        'https://via.placeholder.com/150x152',
        'https://via.placeholder.com/150x152',
        'https://via.placeholder.com/150x152',
        'https://via.placeholder.com/150x152',
        'https://via.placeholder.com/150x152',
        'https://via.placeholder.com/150x152',
        'https://via.placeholder.com/150x152',
        'https://via.placeholder.com/150x152',
        'https://via.placeholder.com/150x152',
        'https://via.placeholder.com/150x152',
        'https://via.placeholder.com/150x152',
        'https://via.placeholder.com/150x152',
        'https://via.placeholder.com/150x152',
        'https://via.placeholder.com/150x152',
        'https://via.placeholder.com/150x152',
        'https://via.placeholder.com/150x152',
        'https://via.placeholder.com/150x152',
        'https://via.placeholder.com/150x152',
        'https://via.placeholder.com/150x152',
        'https://via.placeholder.com/150x152',
        'https://via.placeholder.com/150x152',
        'https://via.placeholder.com/150x152',
        'https://via.placeholder.com/150x152',
        'https://via.placeholder.com/150x152',
        'https://via.placeholder.com/150x152',
        'https://via.placeholder.com/150x152',
        'https://via.placeholder.com/150x152',
        'https://via.placeholder.com/150x152',
        'https://via.placeholder.com/150x152',
        'https://via.placeholder.com/150x152',
        'https://via.placeholder.com/150x152',
        'https://via.placeholder.com/150x152',
        'https://via.placeholder.com/150x152',
        'https://via.placeholder.com/150x152',
        'https://via.placeholder.com/150x152',
        'https://via.placeholder.com/150x152',
        'https://via.placeholder.com/150x152',
        'https://via.placeholder.com/150x152',
        'https://via.placeholder.com/150x152',
        'https://via.placeholder.com/150x152',
        'https://via.placeholder.com/150x152',
        'https://via.placeholder.com/150x152',
        'https://via.placeholder.com/150x152',
        'https://via.placeholder.com/150x152',
        'https://via.placeholder.com/150x152',
        'https://via.placeholder.com/150x152',
        'https://via.placeholder.com/150x152',
        'https://via.placeholder.com/150x152',
        'https://via.placeholder.com/150x152',
        'https://via.placeholder.com/150x152',
        'https://via.placeholder.com/150x152',
        'https://via.placeholder.com/150x152',
        'https://via.placeholder.com/150x152',
        'https://via.placeholder.com/150x152',
        'https://via.placeholder.com/150x152',
        'https://via.placeholder.com/150x152',
        'https://via.placeholder.com/150x152',
        'https://via.placeholder.com/150x152',
        'https://via.placeholder.com/150x152',
        'https://via.placeholder.com/150x152',
        'https://via.placeholder.com/150x152',
        'https://via.placeholder.com/150x152',
        'https://via.placeholder.com/150x152',
        'https://via.placeholder.com/150x152',
        'https://via.placeholder.com/150x152',
        'https://via.placeholder.com/150x152',
        'https://via.placeholder.com/150x152',
        'https://via.placeholder.com/150x152',
        'https://via.placeholder.com/150x152',
        'https://via.placeholder.com/150x152',
        'https://via.placeholder.com/150x152',
    ];
    
    console.log(captions);
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
        background-size: contain;
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
</style>

<div class="{className}" style={style}>
    {#each captions as id }
        <img src="{id}" alt="cadeaux X" style="border: 1px solid black;"/>
    {/each}
</div>