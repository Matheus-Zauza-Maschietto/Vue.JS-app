<template>
  <div id="app">
    <headerComponent/>
    <router-view/>
  </div>
</template>

<script>
import headerComponent from "./components/header.vue"

export default {
  name: 'App',
  components: {
    headerComponent
  }
}
</script>

<style>

</style>
