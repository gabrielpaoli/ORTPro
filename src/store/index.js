import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    contratados: [],
  },
  mutations: {
    contratar(state, { idContratado, idUsuario }) {
      const contratado = state.contratados.find(
        (p) => p.id_contratado === idContratado && p.id_user === idUsuario
      );
      if (!contratado) {
        state.contratados.push({
          id_contratado: idContratado,
          id_user: idUsuario,
          contratado: true,
        });
      }
    },
  },
  getters: {
    doneTodos: (state) => (idContratado, idUsuario) => {
      const contratado = state.contratados.find(
        (p) => p.id_contratado === idContratado && p.id_user === idUsuario
      );
      return contratado;
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
