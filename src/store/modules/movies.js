import data from '@/inc/movies.json'

const myMovies = JSON.parse(window.localStorage.getItem('movies'))
const saveMyMovies = data =>
  window.localStorage.setItem('movies', JSON.stringify(data))

const state = {
  data:
    myMovies ||
    data.results.map(m => {
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
    saveMyMovies(state.data)
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
