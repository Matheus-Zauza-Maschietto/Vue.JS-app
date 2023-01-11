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

<style scoped>
  #app{
    display: flex;
    widows: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
</style>
