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
          profesional: profesional,
          contratado: true,
        });
      }
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
  },
  plugins: [
    createPersistedState({
      storage: window.sessionStorage,
    }),
  ],
  actions: {},
  modules: {},
});
