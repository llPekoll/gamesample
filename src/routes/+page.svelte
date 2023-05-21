<script lang='ts'>
  import { onMount } from 'svelte';
  import { scaleOrdinal } from 'd3-scale';
  import { arc } from 'd3-shape';
  import randomColor from 'randomcolor';

  const lots = ['Lot 1','Lot 2','lolos','Lot 4','Lot 5', 'lot 6'];
  const res = Math.round(Math.random() * lots.length - 1);
  const isOdd = !!(lots.length % 2);
  const l = lots.length;
  const rad = 1 / l;

  console.log(`res should be ${lots[res]}`);
  const offset = !isOdd ? (rad * Math.PI) : 0;
  const offsetRad = !isOdd ? rad / 2 : 0;
  let css = '';

  const svgWidth = 200;
  const svgHeight = 200;

  const handleClick = (event: MouseEvent): void => {
    event.preventDefault();
    let rotation = 0;

    rotation = Math.round(((1 - rad) - (rad * res) - offsetRad) * 360) + ((3 + Math.round(Math.random() * 5)) * 360);
    css = `transform: rotate(${rotation}deg); transition: transform  5s ease-in-out`;
  }
  const createTwistingPie = (items: string[]) => {
    const lotFormated = lots.map(item => ({ item , data: 1}));

    const rColors = randomColor({
        count: lots.length,
        luminosity: 'light',
        hue: 'random',
      });

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
    display : block;
    width : 95px;
    height : 307px;
    background-image: url('./images/PNG_RIDEAUX/03A_ROUE_03.png');
    transform: rotate(180deg);
  }
  .background {
      background-image: url('./images/PNG_RIDEAUX/01_FOND.png');
      width: 100%;
      height: 100%;
      background-size: cover;
      position: relative;
      overflow: hidden;
      background-repeat: no-repeat;
  }
  .pie-chart {
    width: 449px;
    height: 449px;
    display: block;
    margin: 0 auto;
    left: 0;
    right: 0;
    top: 25px;
    position: absolute;
  }
  .pie-wrapper {
    background-image: url('./images/PNG_RIDEAUX/03A_ROUE_01.png');
    margin: 0 auto;
    position: absolute;
    bottom: 50px;
    left: 0;
    right: 0;
    width: 596px;
    height: 600px;
  }
</style>
<div class="background">
  <div class="pie-wrapper">
    <div class="pie-chart text-center">
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
              stroke="white"
              style={{'stroke-width': '2px' }}
        />
        {/each}
        {#each angles as value, i}
        <text transform={`rotate(${(angles[i] + offset) * (180 / Math.PI)})`}  y="15%" writing-mode="tb" font-size="6px">{lots[i]}</text>
        {/each}
      </svg>
      <div class="thick"></div>
    </div>
  </div>
</div>
