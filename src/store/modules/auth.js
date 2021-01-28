import api from '../../api/index';

const state = {
  token: null,
};

const getters = {
  isAuth: (state) => !!state.token,
};

const actions = {
  login: () => api.login(),
  logout: ({ commit }) => commit('setToken', null),
};

const mutations = {
  setToken: (state, token) => (state.token = token),
};

export default { state, getters, actions, mutations };
