<template>
  <main class="search">
    <h1>Search</h1>
    <!-- Display all movies in a list view -->
    <Listing :items="movies" view="list" />
  </main>
</template>

<style lang="scss" scoped>
.search__title {
  margin-bottom: 2rem;
}
.search__input {
  margin-bottom: 2rem;
  padding: 0.5em 1em;
  border: 1px solid $c-dark;
  color: rgba($c-light, 0.5);
  background-color: transparent;

  &:focus {
    border-color: $c-light;
    outline: none;
  }
}
</style>

<script>
import { defineComponent } from 'vue'

import Listing from '@/components/Listing.vue'
// Import movies data
import { movies } from '@/composables/movies'

export default defineComponent({
  name: 'Search',
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
