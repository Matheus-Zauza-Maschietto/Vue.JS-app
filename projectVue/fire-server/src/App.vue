<template>
  <div id="app">
    <label for="tarefa">Tarefa: <input type="text" name="tarefa" id="tarefa"></label>
    <label for="autor">Autor: <input type="text" name="autor" id="tarefa"></label>
    <button @click="cadastrar">Cadastrar</button>
  </div>
</template>

<script>
import firebase from "./services/firebaseConnection.js"
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
      await firebase.firestore().collection('posts')
      .doc('123')
      .set({
        tarefa: this.tarefa,
        autor: this.autor
      })
      .then(()=>{
        console.log("cadastrado")
      })
      .catch((error) => {
        console.log(error)
      })
    }
  }
}
</script>

<style>

</style>
