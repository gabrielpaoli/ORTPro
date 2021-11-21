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
      obtenerProfesionales: [],
      obtenerContratadosSF: [],
    };
  },
  methods: {
    getSuggestions() {
      const suggestions = [];
      this.obtenerProfesionales.forEach(function (data) {
        suggestions.push(data.properties.profesion);
      });
      return suggestions;
    },
  },
  async created() {
    this.loading = true;
    const response = await fetch(
      "http://localhost:3000/api/v1/getAllContratados"
    );
    const data = await response.json();
    this.obtenerContratados = data;

    const responseSF = await fetch(
      "http://localhost:3000/api/v1/getAllContratadosSinFiltro"
    );
    const dataSF = await responseSF.json();
    this.obtenerContratadosSF = dataSF;

    const responseP = await fetch("http://localhost:3000/api/v1/mapData");
    const dataDB = await responseP.json();
    this.obtenerProfesionales = dataDB.features;
    this.loading = false;
  },
  computed: {
    devolverCantidadContratados() {
      return Number(this.obtenerContratadosSF.length);
    },
    devolverCantidadProfesionales() {
      return Number(this.obtenerProfesionales.length);
    },
    cantidadProfesionalesPorRubro() {
      console.log(this.obtenerProfesionales);
      let chart = {};
      let labels = [
        "Plomero",
        "Gasista",
        "Pintor",
        "Albanil",
        "Carpintero",
        "Herrero",
        "Costurera",
        "Cocinera",
      ];

      let plomeros = this.obtenerProfesionales.filter(function (element) {
        return element.properties.profesion == "Plomero";
      });
      let gasistas = this.obtenerProfesionales.filter(function (element) {
        return element.properties.profesion == "Gasista";
      });
      let pintores = this.obtenerProfesionales.filter(function (element) {
        return element.properties.profesion == "Pintor";
      });
      let albaniles = this.obtenerProfesionales.filter(function (element) {
        return element.properties.profesion == "Albañil";
      });
      let carpinteros = this.obtenerProfesionales.filter(function (element) {
        return element.properties.profesion == "Carpintero";
      });
      let herreros = this.obtenerProfesionales.filter(function (element) {
        return element.properties.profesion == "Herrero";
      });
      let costureras = this.obtenerProfesionales.filter(function (element) {
        return element.properties.profesion == "Costurera";
      });
      let cocineras = this.obtenerProfesionales.filter(function (element) {
        return element.properties.profesion == "Cocinera";
      });

      let data = [
        plomeros.length,
        gasistas.length,
        pintores.length,
        albaniles.length,
        carpinteros.length,
        herreros.length,
        costureras.length,
        cocineras.length,
      ];
      chart.labels = labels;
      chart.data = data;
      return chart;
    },
    cantidadProfesionalesContratadosPorTipo() {
      let chart = {};
      let labels = [
        "Plomero",
        "Gasista",
        "Pintor",
        "Albanil",
        "Carpintero",
        "Herrero",
        "Costurera",
        "Cocinera",
      ];

      let plomeros = this.obtenerContratadosSF.filter(function (element) {
        return element.profesional.profesion == "Plomero";
      });
      let gasistas = this.obtenerContratadosSF.filter(function (element) {
        return element.profesional.profesion == "Gasista";
      });
      let pintores = this.obtenerContratadosSF.filter(function (element) {
        return element.profesional.profesion == "Pintor";
      });
      let albaniles = this.obtenerContratadosSF.filter(function (element) {
        return element.profesional.profesion == "Albañil";
      });
      let carpinteros = this.obtenerContratadosSF.filter(function (element) {
        return element.profesional.profesion == "Carpintero";
      });
      let herreros = this.obtenerContratadosSF.filter(function (element) {
        return element.profesional.profesion == "Herrero";
      });
      let costureras = this.obtenerContratadosSF.filter(function (element) {
        return element.profesional.profesion == "Costurera";
      });
      let cocineras = this.obtenerContratadosSF.filter(function (element) {
        return element.profesional.profesion == "Cocinera";
      });

      let data = [
        plomeros.length,
        gasistas.length,
        pintores.length,
        albaniles.length,
        carpinteros.length,
        herreros.length,
        costureras.length,
        cocineras.length,
      ];
      chart.labels = labels;
      chart.data = data;

      return chart;
    },
  },
};
</script>
