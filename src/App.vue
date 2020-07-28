<template>
  <div id="app">
    <Home />
    <router-view />
  </div>
</template>

<script>
import Home from "@/components/home.vue";
export default {
  components: {
    Home,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 0.12rem;
}
</style>
