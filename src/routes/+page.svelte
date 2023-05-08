<script lang='ts'>
  import { onMount } from 'svelte';
  // import { PieChart } from '../utils/PieCharts';
  import { scaleOrdinal } from 'd3-scale';
  import { arc } from 'd3-shape';
  import ColorScheme from 'color-scheme';

  const scheme = new ColorScheme;
  scheme.from_hue(32)         // Start the scheme 
      .scheme('triade')     // Use the 'triade' scheme, that is, colors
                            // selected from 3 points equidistant around
                            // the color wheel.
      // .variation('soft');   // Use the 'soft' color variation
 
  const c: [] = scheme.colors();
  var lots = ["LoT 1","Lot 2","lolos","Lot 4","Lot 5"];
  const data = [40, 40, 40, 40, 40];
  const colors = scaleOrdinal()
    .domain(data.map((d, i) => i))
    .range([`#${c[0]}`, `#${c[1]}`, `#${c[9]}`, `#${c[6]}`, `#${c[8]}`]);

  let svgWidth = 200;
  let svgHeight = 200;
  let radius = Math.min(svgWidth, svgHeight) / 2;

  let pie = arc()
    .innerRadius(0)
    .outerRadius(radius);

  let total = data.reduce((acc, val) => acc + val, 0);

  let angles = data.reduce((acc, val, i) => {
    let start = acc[i - 1] || 0;
    let angle = start + (val / total) * 2 * Math.PI;
    return [...acc, angle];
  }, []);
  console.log({ data })
  let rotation = 0;
 let css = '';
  function handleClick(event: MouseEvent): void {
    event.preventDefault();
    rotation = Math.round(Math.random() * 150);
    css = 'transform: rotate(1480deg); transition: transform  5s ease-in-out';
  }

  const population = [
    {name: "truc", value: 10 },
    {name: "machin", value: 20 },
    {name: "trucbof", value: 20 },
    {name: "truczadzd", value: 20 },
    {name: "truczadzd5", value: 20 },
  ]
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
  {#each data as value, i}
    <path
      d={pie({
        startAngle: angles[i - 1] || 0,
        endAngle: angles[i],
      })}
          fill={colors(i)}
    />
    {/each}
    {#each data as value, i}
    <text transform={`rotate(${angles[i] * (180 / Math.PI)})`}  y="15%" writing-mode="tb" font-size="6px">{lots[i]}</text>
    {/each}
  </svg>
  <div class="thick"></div>
</div>
