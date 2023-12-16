import { createStore } from "vuex";

export default createStore({
  state: { forms: [] },
  getters: {
    getForms: (state) => {
      return state.forms;
    },
  },
  mutations: {
    setForms: (state, newValue) => {
      state.forms = [...newValue];
    },
    addValueToForms: (state, newValue) => {
      state.forms.push(newValue);
    },
  },
  actions: {
    updateForms: ({ commit }, newValue) => {
      commit("setForms", newValue);
    },
    addValueToForms: ({ commit }, newValue) => {
      commit("addValueToForms", newValue);
    },
  },
  modules: {},
});
