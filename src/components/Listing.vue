<template>
  <ul class="listing">
    <li class="item" v-for="item in items" :key="item.id">
      <h2 class="item__title">{{ item.title }}</h2>
      <img
        class="item__poster"
        :src="`https://image.tmdb.org/t/p/w500${item.poster_path}`"
        :alt="item.title"
      />
      <button type="button" class="item__like like">
        <Icon :icon="{ symbol: 'heart', size: '0 0 24 24' }" />
      </button>
    </li>
  </ul>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import Icon from '@/components/Icon.vue'

export default defineComponent({
  name: 'Listing',
  components: {
    Icon,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/utils';

.listing,
[class*='listing--'] {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  grid-auto-rows: 24rem;

  @include mq(l) {
    grid-template-columns: repeat(2, 1fr);
  }

  @include mq(xl) {
    grid-template-columns: repeat(3, 1fr);
  }

  @include mq(xxl) {
    grid-template-columns: repeat(4, 1fr);
  }
}

.item,
[class*='item--'] {
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  overflow: hidden;
}

.item__title {
  position: relative;
  z-index: 1;
  padding: 1rem 1.5rem;
  background-image: linear-gradient(to top, $c-black 0%, rgba($c-black, 0.35));
  font-size: 2rem;
  line-height: 1.1;
  will-change: transform;

  > * {
    will-change: transform, opacity;
  }
}

.item__poster {
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  will-change: opacity;
}

.item__like {
  position: absolute;
  z-index: 2;
  right: 1rem;
  bottom: 1rem;
}

.like,
[class*='like--'] {
  border: 0;
  padding: 0;
  background: none;
  fill: $c-white;
  opacity: 0.65;
  transition: fill 0.25s ease-in-out, opacity 0.25s ease-in-out;
  cursor: pointer;

  &:hover,
  &:focus {
    outline: 0;
    opacity: 1;
  }

  &.is-selected {
    opacity: 1;
    // fill: $c-gold;
    fill: $c-pink;
  }

  svg {
    display: block;
    width: 2.4rem;
    height: 2.4rem;
  }
}
</style>
