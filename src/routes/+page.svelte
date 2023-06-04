<script lang='ts'>
  import { onMount } from 'svelte';
  import { scaleOrdinal } from 'd3-scale';
  import { arc } from 'd3-shape';
  import randomColor from 'randomcolor';

  const lots = ['Lot 1','Lot 2','lolos','Lot 4', 'lot 6', 'lot 9'];
  const l = lots.length;
  const res = Math.round(Math.random() * l - 1);
  const isOdd = !!(l % 2);
  const rad = 1 / l;

  console.log(`res should be ${lots[res]}`);
  const offset = !isOdd ? (rad * Math.PI) : 0;
  const offsetRad = !isOdd ? rad / 2 : 0;
  let css = '';

  const svgWidth = 200;
  const svgHeight = 200;

  const handleClick = (event: MouseEvent | KeyboardEvent ): void => {
    event.preventDefault();
    let rotation = 0;

    rotation = Math.round((((l / 2) * rad) - (rad * res) - offsetRad - rad) * 360) + ((3 + Math.round(Math.random() * 5)) * 360);
    css = `transform: rotate(${rotation}deg); transition: transform  5s ease-in-out`;
  }
  const createTwistingPie = (items: string[]) => {
    const lotFormated = lots.map(item => ({ item , data: 1}));

    const rColors = randomColor({
        count: l,
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
  .background {
      background-image: url('./images/PNG_RIDEAUX/01_FOND.png');
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
      position: relative;
      overflow: hidden;
      background-repeat: no-repeat;
  }
  .pie-chart {
    z-index: 1;
    position: absolute;
    display: block;
    margin: 0 auto;
    width: 215px;
    height: 215px;
    left: 45px;
    top: 23px;
  }
  
  .pie-chart-background {
    background-image: url('./images/PNG_RIDEAUX/Roue_RTK.png');
    position: absolute;
    background-size: cover;
    z-index: 2;
    
    width: 290px;
    height: 312px;
  }
  .pie-wrapper {
    margin: 0 auto;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    
    width: 280px;
    height: 312px;
  }
  @media screen and (min-width: 920px) {
    .pie-chart {
      width: 403px;
      height: 449px;
      left: 91px;
      top: 49px;
    }
    
    .pie-chart-background {
      width: 543px;
      height: 600px;
    }
    .pie-wrapper {
      width: 543px;
      height: 600px;
    }
  }
  @media screen and (min-width: 1280px) {
    .pie-chart {
      width: 673px;
      height: 673px;
      left: 133px;
      top: 71px;
    }
    .pie-chart-background {
      width: 965px;
      height: 950px;
    }
    .pie-wrapper {
      width: 965px;
      height: 950px;
    }
  }
</style>
<div class="background">
  <div class="pie-wrapper"
    on:click|once={handleClick}
    on:keydown|once={handleClick}
  >
    <div class="pie-chart-background"></div>
    <div class="pie-chart">
      <svg
        viewBox={`-${svgWidth / 2} -${svgHeight / 2} ${svgWidth} ${svgHeight}`}
        style={`cursor: pointer;${css}`}
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
        <text transform={`rotate(${(angles[i] + offset) * (180 / Math.PI)})`}  y="18%" writing-mode="tb" font-size="12px">{lots[i]}</text>
        {/each}
      </svg>
    </div>
  </div>
</div>
