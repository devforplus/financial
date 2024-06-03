<script lang="ts">
  import { onMount } from "svelte";
  import { Chart, registerables } from "chart.js";
  import { data } from "./data";

  let canvas: HTMLCanvasElement;

  Chart.register(...registerables); // Chart.js 모듈을 등록합니다.

  onMount(() => {
    const ctx = canvas.getContext("2d");
    if (ctx) {
      new Chart(ctx, {
        type: "line", // 차트 유형을 변경할 수 있습니다 (예: 'bar', 'line', 'pie', 등)
        data: data,
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  });
</script>

<canvas bind:this={canvas}></canvas>
