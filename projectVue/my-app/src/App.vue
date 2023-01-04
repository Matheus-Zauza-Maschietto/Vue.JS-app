<template>
  <div id="app">
    <h1>Cadastro</h1>
    <form>
      <label>Nome </label>
      <input type="text" v-model="nome">
    </form>
  </div>
</template>

<script>

export default{
    name: 'App',
    Data(){
      return{
        nome: ""
      }
    }
  }
</script>

<style scoped>

</style>