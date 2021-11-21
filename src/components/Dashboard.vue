<template>
  <div>
    <h3>DASHBOARD</h3>
    <doughnut-chart />
    <b>Total contrataciones: </b> {{ devolverCantidadContratados }}
  </div>
</template>

<script>
import DoughnutChart from "@/components/DoughnutChart";

export default {
  name: "Dashboard",
  components: {
    DoughnutChart,
  },
  data() {
    return {
      obtenerContratados: [],
      obtenerProfesionales: [],
    };
  },
  async created() {
    const response = await fetch(
      "http://localhost:3000/api/v1/getAllContratados"
    );
    const data = await response.json();
    this.obtenerContratados = data;
  },
  computed: {
    devolverCantidadContratados() {
      return Number(this.obtenerContratados.length);
    },
  },
};
</script>
