<template>
  <svg
    v-svg
    :size="icon.size"
    :symbol="icon.symbol"
    :class="`icon ${icon.symbol}`"
  ></svg>
</template>

<style lang="scss" scoped>
@import '@/styles/utils';

.icon {
  width: 4rem;
  height: 4rem;
  fill: inherit;
}
</style>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'Icon',
  props: {
    icon: {
      type: Object,
      default: () => {},
    },
  },
  setup() {
    return {}
  },
})
</script>
