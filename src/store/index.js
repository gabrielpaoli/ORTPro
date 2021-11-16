import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    contratados: [],
  },
  mutations: {
    contratar(state, { idContratado, mailUsuario, profesional }) {
      const contratado = state.contratados.find(
        (p) => p.id_contratado === idContratado && p.id_user === mailUsuario
      );
      if (!contratado) {
        state.contratados.push({
          id_contratado: idContratado,
          id_user: mailUsuario,
          voto: 0,
          profesional: profesional,
          contratado: true,
        });
      }
    },
    modificarPuntaje(state, { profesionalId, mailUsuario, puntaje }) {
      const contratadoIndex = state.contratados.findIndex(
        (p) => p.id_contratado === profesionalId && p.id_user === mailUsuario
      );
      state.contratados[contratadoIndex].voto = puntaje;
    },
  },
  getters: {
    getContratado: (state) => (idContratado, mailUsuario) => {
      return state.contratados.find(
        (p) => p.id_contratado === idContratado && p.id_user === mailUsuario
      );
    },
    getContratados: (state) => (mailUsuario) => {
      return state.contratados.filter((p) => p.id_user === mailUsuario);
    },
    getCantidadDeContrataciones: (state) => (profesionalId) => {
      return state.contratados.filter((p) => p.id_contratado === profesionalId)
        .length;
    },
    getAllContratados: (state) => () => {
      let contratados = state.contratados.filter(
        (profesional, index, self) =>
          index ===
          self.findIndex((t) => t.profesional.id === profesional.profesional.id)
      );
      return contratados;
    },
    getTotalContratados: (state) => () => {
      let contratados = state.contratados.filter(
        (profesional, index, self) =>
          index ===
          self.findIndex((t) => t.profesional.id === profesional.profesional.id)
      );
      return contratados.length;
    },
    getPuntajeTotalPorProfesional: (state) => (profesionalId) => {
      const profesionales = state.contratados.filter(
        (p) => p.profesional.id === profesionalId
      );
      let voto = 0;
      let i = 0;
      let votoTotal = 0;
      profesionales.forEach(function (element) {
        voto += element.voto;
        if (voto != 0) {
          i++;
        }
      });
      if (i > 0) {
        votoTotal = voto / i;
      }
      return votoTotal;
    },
    getTipoDeVotoPorProfesional: (state) => (profesionalId) => {
      const profesionales = state.contratados.filter(
        (p) => p.profesional.id === profesionalId
      );
      let votoTotal = [];
      let tipoDeVoto = {};
      profesionales.forEach(function (element) {
        votoTotal.push(element.voto);
      });

      tipoDeVoto.sinVoto = votoTotal.filter((x) => x == 0).length;
      tipoDeVoto.voto1 = votoTotal.filter((x) => x == 1).length;
      tipoDeVoto.voto2 = votoTotal.filter((x) => x == 2).length;
      tipoDeVoto.voto3 = votoTotal.filter((x) => x == 3).length;
      tipoDeVoto.voto4 = votoTotal.filter((x) => x == 4).length;
      tipoDeVoto.voto5 = votoTotal.filter((x) => x == 5).length;

      return tipoDeVoto;
    },
  },
  plugins: [createPersistedState()],
  actions: {},
  modules: {},
});
