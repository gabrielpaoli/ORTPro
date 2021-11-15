<template>
  <div class="userData">
    <div>
      <div>Nombre: {{ getUserData().name }}</div>
      <div>{{ getUserData().nickname }}</div>
      <div>{{ getUserData().email }}</div>
      <div><img :src="getUserData().picture" /></div>

      <table class="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Profesion</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="profesional in profesionales" :key="profesional.id">
            <td>{{ profesional.profesional.nombre }}</td>
            <td>{{ profesional.profesional.profesion }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  methods: {
    getUserData() {
      return this.$auth.user;
    },
    async getUserData2() {
      const data = await this.$auth.user;
      this.user = data;
    },
    getContratados2() {
      const contratados = this.$store.getters.getContratados(this.user.email);
      this.profesionales = contratados;
      console.log(contratados);
    },
  },
  data() {
    return {
      loading: false,
      profesionales: [],
      user: null,
    };
  },
  async created() {
    this.getUserData2().then(() => this.getContratados2());
  },
};
</script>
