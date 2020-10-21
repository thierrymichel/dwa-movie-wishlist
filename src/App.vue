<template>
  <div class="site">
    <ChromeNav class="site__nav" />
    <router-view class="site__main" />
    <ChromeFooter class="site__footer" />
  </div>
</template>

<style lang="scss" scoped>
.site {
  display: grid;
  grid-template-areas:
    'nav main'
    'footer footer';
  grid-template-columns: $site-nav-width 1fr;
  grid-template-rows: 1fr $site-footer-height;
  min-height: 100vh;
  color: $c-light;
  background-color: $c-darker;
}

.site__nav {
  grid-area: nav;
  background-color: $c-dark;
}

.site__main {
  grid-area: main;
  padding: 4rem;
}

.site__footer {
  grid-area: footer;
  background-color: $c-darkest;
}
</style>

<script>
import { defineComponent } from 'vue'

import ChromeFooter from '@/components/chrome/Footer.vue'
import ChromeNav from '@/components/chrome/Nav.vue'

export default defineComponent({
  name: 'App',
  components: {
    ChromeFooter,
    ChromeNav,
  },
  setup() {
    console.log('App')
  },
})
</script>
