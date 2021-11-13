import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    contratados: [],
  },
  mutations: {
    contratar(state, { idContratado, idUsuario }) {
      const agregado = state.contratados.find(
        (p) => p.id_contratado === idContratado && p.id_user === idUsuario
      );
      console.log(agregado);
      if (!agregado) {
        state.contratados.push({
          id_contratado: idContratado,
          id_user: idUsuario,
          contratado: true,
        });
      }
    },
  },
  actions: {},
  modules: {},
});
