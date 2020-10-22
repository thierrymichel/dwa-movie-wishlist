<template>
  <main class="watchlist">
    <h1>Watchlist</h1>
    <!-- Display liked movies in a grid view [default] -->
    <Listing :items="liked" />
  </main>
</template>

<script>
import { defineComponent } from 'vue'

import Listing from '@/components/Listing.vue'
// Import liked movies data
import { liked } from '@/composables/movies'

export default defineComponent({
  name: 'Watchlist',
  // Do not forget to register child components
  components: {
    Listing,
  },
  setup() {
    return {
      // Expose imported liked movies data to the template
      liked,
    }
  },
})
</script>
