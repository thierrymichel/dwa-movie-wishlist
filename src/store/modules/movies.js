import data from '@/inc/movies.json'

const state = {
  data: data.results.map(m => {
    m.liked = false

    return m
  }),
}

const getters = {
  movies: state => state.data,
  moviesLiked: state => state.data.filter(movie => movie.liked),
}

const mutations = {
  SET_MOVIES(state, payload) {
    if (payload) {
      state.data = payload
    }
  },
  TOGGLE_LIKE(state, item) {
    item.liked = !item.liked
  },
}

const actions = {
  async fetchMovies({ commit }, payload) {
    commit('SET_MOVIES', payload)
  },
}

export const movies = {
  state,
  getters,
  mutations,
  actions,
}
