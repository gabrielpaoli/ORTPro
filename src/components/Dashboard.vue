<template>
  <div class="panel">
    <nav aria-label="breadcrumb" class="main-breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/">Inicio</a></li>
        <li class="breadcrumb-item active" aria-current="page">Dashboard</li>
      </ol>
    </nav>

    <h3>Estadisticas</h3>
    <div class="row" v-if="!loading">
      <div class="col-md-6">
        <h4>Contrataciones por rubro</h4>
        <doughnut-chart
          :cantidadProfesionalesContratadosPorTipo="
            cantidadProfesionalesContratadosPorTipo
          "
        />
      </div>
      <div class="col-md-6">
        <h4>Profesionales por rubro</h4>
        <doughnut-chart
          :cantidadProfesionalesContratadosPorTipo="
            cantidadProfesionalesPorRubro
          "
        />
      </div>
    </div>
    <div class="row containerNumeros">
      <div class="box col-md-4">
        <div class="center">
          <div><b>Total profesionales</b></div>
          <div class="bigNumber">{{ devolverCantidadProfesionales }}</div>
        </div>
      </div>
      <div class="box col-md-4">
        <div class="center backgroundCeleste">
          <div><b>Total contrataciones</b></div>
          <div class="bigNumber">{{ devolverCantidadContratados }}</div>
        </div>
      </div>
      <div class="box col-md-4">
        <div class="center backgroundRosa">
          <div><b>Usuarios conectados</b></div>
          <div class="bigNumber">2</div>
        </div>
      </div>
    </div>
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
<style scoped>
nav ol {
  margin-left: 10%;
}

.panel {
  padding: 20px 0;

  margin-top: 10px;
}
.panel h3 {
  font-size: 40px;
  font-weight: 500;
  text-transform: capitalize;
  line-height: 60px;
  margin: 0;
}
.panel h4 {
  font-size: 30px;
  font-weight: 500;
  text-transform: capitalize;
  line-height: 40px;
  margin: 0;
}
.panel b {
  font: bold;
  font-size: 18px;
}
.center {
  margin: auto;
  width: 98%;
  background: #a2c865;
  padding: 60px;
  color: white;
}
.backgroundCeleste {
  background: #63b9d7;
}
.backgroundRosa {
  background: #e9a5c0;
}
.bigNumber {
  font-weight: bold;
  font-size: 60px;
}
.containerNumeros {
  margin-top: 40px;
}
</style>
