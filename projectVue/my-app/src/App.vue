<template>
  <div id="app">

    <h1>Bem vindo ao meu primeiro projeto!</h1>
    <p>Componente App:  {{nome}}</p>

    <button>Entrar</button>
    
    <user-cmp :nome2="nome" @nomeCurso="nome = $event" />

  </div>
</template>

<script>
import UserCmp from './components/Usuario.vue';

  export default{
    name: 'App',
    components:{
      UserCmp
    },
    data(){
      return{
        nome:'Sujeito Programador',
        outraVariavel: ""
      }
    },
    methods:{
    }
  }
</script>

<style scoped>

</style>