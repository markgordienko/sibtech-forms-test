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
    deleteForm: (state, form) => {
      const index = state.forms.indexOf(form);
      if (index > -1) {
        // only splice array when item is found
        state.forms.splice(index, 1); // 2nd parameter means remove one item only
      }
    },
  },
  actions: {
    updateForms: ({ commit }, newValue) => {
      commit("setForms", newValue);
    },
    addValueToForms: ({ commit }, newValue) => {
      commit("addValueToForms", newValue);
    },
    deleteForm: ({ commit }, form) => {
      commit("deleteForm", form);
    },
  },
  modules: {},
});
