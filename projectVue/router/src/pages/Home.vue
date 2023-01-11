<template>
  <div id="home">
    <h1>Tela Home</h1>
    <router-link :to="{ name: 'produto' }" exact-active-class="ativo">Produto</router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeItem'
}
</script>

<style>
 .ativo{
  color: rgb(255, 0, 0);
 }
</style>