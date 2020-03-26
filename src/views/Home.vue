<template>
  <main class="home">
    <h1>Movie wishlist</h1>
    <Listing :items="movies.results" />
  </main>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

import Listing from '@/components/Listing.vue'
import movies from '@/inc/movies.json'

export default defineComponent({
  name: 'Home',
  components: {
    Listing,
  },
  setup() {
    return {
      movies,
    }
  },
})
</script>
