<template>
  <div id="produto">
    <h1>Tela Produto</h1>
    <router-link to="/" exact-active-class="ativo">Home</router-link>
  </div>
</template>

<script>
export default {
  name: 'ProdutoItem'
}
</script>

<style>
  .ativo{
    color: red;
  }
</style>