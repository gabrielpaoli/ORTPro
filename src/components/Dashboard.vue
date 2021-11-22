<template>
  <div v-if="!loading">
    <h3>DASHBOARD</h3>
    <h4>Contrataciones por rubro</h4>
    <doughnut-chart
      :cantidadProfesionalesContratadosPorTipo="
        cantidadProfesionalesContratadosPorTipo
      "
    />
    <h4>Profesionales por rubro</h4>
    <doughnut-chart
      :cantidadProfesionalesContratadosPorTipo="cantidadProfesionalesPorRubro"
    />
    <b>Total profesionales: </b> {{ devolverCantidadProfesionales }}
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
      loading: true,
      obtenerContratados: [],
    };
  },
  async created() {
    this.loading = true;
    const response = await fetch(
      "http://localhost:3000/api/v1/getAllContratados"
    );
    const data = await response.json();
    this.obtenerContratados = data;

    this.loading = false;
  },
  computed: {
    devolverCantidadContratados() {
      return Number(this.obtenerContratados.cantidadDeContratados);
    },
    devolverCantidadProfesionales() {
      return Number(this.obtenerContratados.cantidadDeProfesionales);
    },
    cantidadProfesionalesPorRubro() {
      let chart = {};
      chart.labels = this.obtenerContratados.labelsProfesionalesPorTipo;
      chart.data = this.obtenerContratados.profesionalesPorTipo;
      return chart;
    },
    cantidadProfesionalesContratadosPorTipo() {
      let chart = {};
      chart.labels = this.obtenerContratados.labelsContratadosPorTipo;
      chart.data = this.obtenerContratados.contratadosPorTipo;
      return chart;
    },
  },
};
</script>
