<template>
  <main class="home">
    <h1>Movie wishlist</h1>
    <pre>{{ movies.length }}</pre>
    <ul>
      <li v-for="m in movies" :key="m.is">
        {{ m.title }}
      </li>
    </ul>
  </main>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home',
  setup() {
    const movies = []

    console.log(movies)

    return {
      movies,
    }
  },
})
</script>
