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
    getAllContratados: (state) => () => {
      let contratados = state.contratados.filter(
        (profesional, index, self) =>
          index ===
          self.findIndex((t) => t.profesional.id === profesional.profesional.id)
      );
      return contratados;
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
  },
  plugins: [createPersistedState()],
  actions: {},
  modules: {},
});
