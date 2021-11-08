<template>
  <div class="userData">
    <div class="student-profile py-4">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="card shadow-sm">
              <div class="card-header bg-transparent text-center">
                <img
                  class="profile_img"
                  :src="getUserData().picture"
                  alt="student dp"
                />
                <h3>{{ getUserData().name }}</h3>
              </div>
              <div class="card-body">
                <p class="mb-0">
                  <strong class="pr-1">Mail: </strong>{{ getUserData().email }}
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="card shadow-sm">
              <div class="card-header bg-transparent border-0">
                <h3 class="mb-0">
                  <i class="far fa-clone pr-1"></i>Información general
                </h3>
              </div>
              <div class="card-body pt-0">
                <table class="table table-bordered">
                  <tr>
                    <th width="30%">Nickname</th>
                    <td width="2%">:</td>
                    <td>{{ getUserData().nickname }}</td>
                  </tr>
                  <tr>
                    <th width="30%">Ingreso por última vez</th>
                    <td width="2%">:</td>
                    <td>2021</td>
                  </tr>
                </table>
              </div>
            </div>
            <div style="height: 26px"></div>
            <div class="card shadow-sm">
              <div class="card-header bg-transparent border-0">
                <h3 class="mb-0"><i class="far fa-clone pr-1"></i>Otra info</h3>
              </div>
              <div class="card-body pt-0">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  methods: {
    getUserData() {
      console.log(this.$auth.user);
      return this.$auth.user;
    },
  },
};
</script>

<style scoped>
body {
  background: #67b26f; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #4ca2cd,
    #67b26f
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #4ca2cd,
    #67b26f
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  padding: 0;
  margin: 0;
  font-family: "Lato", sans-serif;
  color: #000;
}
img {
  border-radius: 50%;
}
</style>
