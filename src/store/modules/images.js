import api from '../../api';

const state = {
  images: [],
};

const getters = {
  allImages: (state) => state.images,
};

const actions = {
  async fetchImages({ rootState, commit }) {
    const { token } = rootState.auth;
    const response = await api.fetchImages(token);
    commit('setImages', response);
  },
};

const mutations = {
  setImages: (state, images) => (state.images = images),
};

export default { state, getters, mutations, actions };