<template>
  <div id="app">
    <h1>FiseBase + Vue.js</h1>
    <label for="tarefa">Tarefa: <input type="text" name="tarefa" id="tarefa" v-model="tarefa"></label> <br>
    <label for="autor">Autor: <input type="text" name="autor" id="tarefa" v-model="autor"></label> <br>
    <button @click="cadastrar">Cadastrar</button>
  </div>
</template>

<script>
import db from "./services/firebaseConnection.js"
db

export default {
  name: "app",
  data(){
    return{
      tarefa: '',
      autor: ''
    }
  },
  methods: {
    async cadastrar(){

    }
  }
}
</script>

<style>

</style>
