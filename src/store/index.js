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
        state.forms.splice(index, 1);
      }
    },
  },
  actions: {
    /**
     * Обновить список форм
     */
    updateForms: ({ commit }, newValue) => {
      commit("setForms", newValue);
    },

    /**
     * Добавить форму в список
     */
    addValueToForms: ({ commit }, newValue) => {
      commit("addValueToForms", newValue);
    },

    /**
     * Удалить форму из списка
     */
    deleteForm: ({ commit }, form) => {
      commit("deleteForm", form);
    },
  },
  modules: {},
});
