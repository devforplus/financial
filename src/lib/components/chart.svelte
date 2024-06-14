<script lang="ts">
  import { onMount } from "svelte";
  import { Chart, registerables } from "chart.js";
  import { data } from "./data";

  let chart: Chart | null = null;

  onMount(() => {
    Chart.register(...registerables);

    const ctx = document.getElementById("myChart") as HTMLCanvasElement;

    chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
          },
        ],
      },
      options: {
        layout: {
          padding: {
            left: 50,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  });
</script>

<div style="width: 800px;">
  <canvas id="myChart"></canvas>
</div>
