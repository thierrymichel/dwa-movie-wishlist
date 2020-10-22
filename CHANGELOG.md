# CHANGELOG

## Step 1

### components/Listing.vue

Custom and reused component with dynamic content and behaviour using [`props`](https://v3.vuejs.org/guide/component-props.html).

### composables/movies.js

Shared state module.

Exports reactive data (`ref` and `computed`) for display and actions to manage the state (load and toggle).

Use of promises for fetching. `async`/`await` style vs chaining (`then` / `catch`).
