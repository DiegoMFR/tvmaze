<script setup lang="ts">
import { RouterView } from 'vue-router'
import TopNavigation from './components/TopNavigation.vue'
</script>

<template>
  <TopNavigation></TopNavigation>
  <RouterView />
</template>

<style scoped>

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
