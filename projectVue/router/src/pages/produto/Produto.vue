<template>
  <div id="produto">
    <h1>Tela Produto</h1>
    <router-link to="/" exact-active-class="ativo">Home</router-link>
    <button @click="goHome()">home</button>
  </div>
  <router-view/>
</template>

<script>
export default {
  name: 'ProdutoItem',
  methods: {
    goHome(){
      this.$router.push("/")
    }
  }
}
</script>

<style>
  .ativo{
    color: red;
  }
</style>