<template>
  <main class="search">
    <h1 class="search__title">Search</h1>
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

export default defineComponent({
  name: 'Search',
})
</script>
