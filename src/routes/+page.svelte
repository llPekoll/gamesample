<script lang='ts'>
  import { onMount } from 'svelte';
  // import { PieChart } from '../utils/PieCharts';
  import { scaleOrdinal } from 'd3-scale';
  import { arc } from 'd3-shape';
  import randomColor from 'randomcolor';

  const lots = ['Lot 1','Lot 2','lolos','Lot 4','Lot 5'];
  const res = Math.round(Math.random() * lots.length - 1);
  
  console.log(`res should be ${res}`);

  let css = '';

  const svgWidth = 200;
  const svgHeight = 200;

  const handleClick = (event: MouseEvent): void => {
    event.preventDefault();
    // rotation = Math.round(Math.random() * 360) + ((3 + Math.round(Math.random() * 5)) * 360);
    const l = lots.length;
    const rad = 1 / l;
    let rotation = 0;

    rotation = Math.round(((1 - rad) - (rad * res)) * 360) + ((3 + Math.round(Math.random() * 5)) * 360);
    css = `transform: rotate(${rotation}deg); transition: transform  5s ease-in-out`;
  }
  const createTwistingPie = (items: string[]) => {
    const lotFormated = lots.map(item => ({ item , data: 1}));

    const rColors = randomColor({
        count: lots.length,
        luminosity: 'light',
        hue: 'random',
      });

    const data = [40, 40, 40, 40, 40];
    const colors = scaleOrdinal()
      .range(rColors);

    
    const radius = Math.min(svgWidth, svgHeight) / 2;

    const pie = arc()
      .innerRadius(0)
      .outerRadius(radius);

    const total = lotFormated.reduce((acc, { data }) => acc + data, 0);

    let angles = lotFormated.reduce((acc, { data }, i) => {
      let start = acc[i - 1] || 0;
      let angle = start + (data / total) * 2 * Math.PI;
      return [...acc, angle];
    }, []);
    return { 
      angles,
      colors,
      pie,
    };
  }

  const { angles, colors, pie } = createTwistingPie(lots);

</script>
<style>
  .thick {
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    bottom: -40px;
    display : inline-block;
    height : 0;
    width : 0;
    border-right : 32px solid transparent;
    border-bottom : 55px solid red;
    border-left : 32px solid transparent;
  }
</style>
<div class="relative text-center w-9/12 my-5 mx-auto max-w-lg">
  <svg
    viewBox={`-${svgWidth / 2} -${svgHeight / 2} ${svgWidth} ${svgHeight}`}
    style={`cursor: pointer;${css}`}
    on:click={handleClick}
    on:keydown={handleClick}
  >
  {#each angles as value, i}
    <path
      d={pie({
        startAngle: angles[i - 1] || 0,
        endAngle: value,
      })}
          fill={colors(i)}
    />
    {/each}
    {#each angles as value, i}
    <text transform={`rotate(${angles[i] * (180 / Math.PI)})`}  y="15%" writing-mode="tb" font-size="6px">{lots[i]}</text>
    {/each}
  </svg>
  <div class="thick"></div>
</div>
