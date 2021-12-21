<script>
import { Doughnut } from "vue-chartjs";

export default {
  extends: Doughnut,
  data() {
    return {
      chartData: {
        labels: this.cantidadProfesionalesContratadosPorTipo.labels,
        datasets: [
          {
            borderWidth: 1,
            borderColor: [
              "rgba(255,99,132,0.5)",
              "rgba(54, 162, 235, 0.5)",
              "rgba(255, 206, 86, 0.5)",
              "rgba(75, 192, 192, 0.5)",
              "rgba(153, 102, 255, 0.5)",
              "rgba(255, 153, 255, 0.5)",
              "rgba(128, 159, 255, 0.5)",
              "rgba(255, 153, 255, 0.5)",
              "rgba(255, 153, 255, 0.5)",
              "rgba(255, 153, 255, 0.5)",
            ],
            backgroundColor: [
              "rgba(255, 99, 132, 0.5)",
              "rgba(54, 162, 235, 0.5)",
              "rgba(255, 206, 86, 0.5)",
              "rgba(75, 192, 192, 0.5)",
              "rgba(153, 102, 255, 0.5)",
              "rgba(255, 153, 255, 0.5)",
              "rgba(128, 159, 255, 0.5)",
              "rgba(255, 153, 255, 0.5)",
              "rgba(255, 153, 255, 0.5)",
              "rgba(255, 153, 255, 0.5)",
            ],
            data: this.cantidadProfesionalesContratadosPorTipo.data,
          },
        ],
      },
      options: {
        legend: {
          display: true,
        },
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  props: {
    cantidadProfesionalesContratadosPorTipo: Object,
  },
  mounted() {
    this.renderChart(this.chartData, this.options);
  },
};
</script>
