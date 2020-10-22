<template>
  <main class="home">
    <h1>Movie wishlist</h1>
    <!-- Display all movies in a grid view [default] -->
    <Listing :items="movies" />
  </main>
</template>

<script>
import { defineComponent } from 'vue'

import Listing from '@/components/Listing.vue'
// Import movies data
import { movies } from '@/composables/movies'

export default defineComponent({
  name: 'Home',
  // Do not forget to register child components
  components: {
    Listing,
  },
  setup() {
    return {
      // Expose imported movies data to the template
      movies,
    }
  },
})
</script>
