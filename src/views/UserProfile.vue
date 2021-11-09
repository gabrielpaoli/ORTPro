<template>
  <div class="userData">
    <div id="caja">
      <div id="card">
        <img :src="getUserData().picture" />
        <h3>{{ getUserData().name }}</h3>
      </div>
      <div id="info">
        <div id="mail"><strong>Mail: </strong>{{ getUserData().email }}</div>
        <div id="nickname">
          <strong>Nickname: </strong>{{ getUserData().nickname }}
        </div>
        <div id="login">
          <strong>Último ingreso: </strong>{{ getLastLogin() }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      meses: [
        "enero",
        "febrero",
        "marzo",
        "abril",
        "mayo",
        "junio",
        "julio",
        "agosto",
        "septiembre",
        "octubre",
        "noviembre",
        "diciembre",
      ],
    };
  },
  methods: {
    getUserData() {
      console.log(this.$auth.user);
      return this.$auth.user;
    },
    getLastLogin() {
      const fecha = new Date(this.$auth.user.updated_at);
      return `${fecha.getDate()} de ${
        this.meses[fecha.getMonth()]
      } de ${fecha.getFullYear()} a las ${fecha.getHours()}:${fecha.getMinutes()}`;
    },
  },
};
</script>

<style scoped>
img {
  border-radius: 50%;
}
#caja {
  display: flex;
  flex-direction: column;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  margin-left: 500px;
  margin-right: 500px;
}
#card {
  margin-top: 20px;
  margin-bottom: 15px;
  border-bottom-color: #ccd6dd;
  border-bottom-width: thin;
  border-bottom-style: solid;
}
#info {
  flex-direction: column;
  margin-bottom: 20px;
}
</style>
