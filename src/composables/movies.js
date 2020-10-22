/**
 * Movies module
 */
import { reactive, toRef, computed } from 'vue'
import { pause } from '@/inc/utils'

// State to centralize reactive data
const state = reactive({
  data: [],
})

/**
 * Exported data
 */
// https://composition-api.vuejs.org/api.html#toref
const movies = toRef(state, 'data')
// Filtered liked movies
const liked = computed(() => movies.value.filter(movie => movie.liked))

/**
 * Exported actions
 */
// Toggle a movie `liked` property
const toggleLike = movie => {
  movie.liked = !movie.liked
}
// Load movies
const loadMovies = async () => {
  // Fetch movies, chained promises style
  // fetch('/data/movies.json')
  //   .then(res => res.json())
  //   .then(data => {
  //     state.data = data.results.map(movie => {
  //       movie.liked = false

  //       return movie
  //     })
  //   })

  // Async / await (+ chained style)
  // !!! Our function should be declared `async`
  await pause(2000)

  try {
    // Everything inside `public` folder will be available from the root
    const data = await fetch('/data/movies.json').then(res => res.json())

    // Augment movie data with `liked` propoerty
    state.data = data.results.map(movie => {
      movie.liked = false

      return movie
    })
  } catch (err) {
    console.error(err)
  }
}

// Named exports
export { movies, liked, toggleLike, loadMovies }
