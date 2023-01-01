<script lang="ts">
    type Type = 'image' | 'text'
    interface Captions {
        type: Type;
        value: 'string';
    }
    const repeat = (arr: any[], n: number) => Array(n).fill(arr).flat();
    export let captions: Captions[] = [];
    export let className = '';
    export let style = '';
    captions = repeat([
        { type: 'text', value: 'jaaar tu as gagné un grille pain!', },
        { type: 'image', value: 'https://via.placeholder.com/50x152/black', },
        { type: 'image', value: 'https://via.placeholder.com/150x152/blue', },
        { type: 'image', value: 'https://via.placeholder.com/150x152/yellow', },
        { type: 'image', value: 'https://via.placeholder.com/150x152/silver', },
        { type: 'image', value: 'https://via.placeholder.com/158x152/green', },
        { type: 'image', value: 'https://via.placeholder.com/150x182/teal', },
        { type: 'image', value: 'https://via.placeholder.com/150x152/pink', },
        { type: 'image', value: 'https://via.placeholder.com/120x152/red', },
        { type: 'image', value: 'https://via.placeholder.com/150x152/brown', },
    ], 30);
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
    .reel img,
    .reel p {
        width: 100%;
        height: 142px;
    }
    .reel p {
        text-align: center;
        font-weight: 600;
        padding: 20px 10px;
    }
</style>

<div class="{className}" style={style}>
    {#each captions as { type, value }}
        {#if type === 'image'}
            <img src="{value}" alt="cadeaux X" style="border: 1px solid black;"/>
        {:else}
            <p>{value}</p>
        {/if}
    {/each}
</div>