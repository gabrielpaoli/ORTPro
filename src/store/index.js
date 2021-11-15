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
    modificarPuntaje(state, { profesionalId, mailUsuario, puntaje }) {
      //Tendriamos que agregar un array de usuarios y votos o algo asi para que esto quede joya
      const contratadoIndex = state.contratados.findIndex(
        (p) => p.id_contratado === profesionalId && p.id_user === mailUsuario
      );
      state.contratados[contratadoIndex].profesional.puntuacion = puntaje;
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
      return state.contratados;
    },
  },
  plugins: [createPersistedState()],
  actions: {},
  modules: {},
});
