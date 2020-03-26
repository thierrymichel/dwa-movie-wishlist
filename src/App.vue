<template>
  <div id="app" class="site">
    <ChromeNav class="site__nav" />
    <router-view class="site__main" />
    <ChromeFooter class="site__footer" />
  </div>
</template>

<script>
import ChromeFooter from '@/components/chrome/Footer.vue'
import ChromeNav from '@/components/chrome/Nav.vue'

export default {
  name: 'App',
  components: {
    ChromeFooter,
    ChromeNav,
  },
}
</script>

<style lang="scss">
@import '@/styles/utils';
@import '@/styles/global';

body > svg {
  display: none;
}
</style>
