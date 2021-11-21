<template>
  <div>
    <h3>DASHBOARD</h3>
    <doughnut-chart />
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
      obtenerContratados: [],
      obtenerProfesionales: [],
    };
  },
  methods: {},
  async created() {
    const response = await fetch(
      "http://localhost:3000/api/v1/getAllContratados"
    );
    const data = await response.json();
    this.obtenerContratados = data;

    const responseP = await fetch("http://localhost:3000/api/v1/mapData");
    const dataDB = await responseP.json();
    this.obtenerProfesionales = dataDB.features;
  },
  computed: {
    devolverCantidadContratados() {
      return Number(this.obtenerContratados.length);
    },
    devolverCantidadProfesionales() {
      return Number(this.obtenerProfesionales.length);
    },
  },
};
</script>
