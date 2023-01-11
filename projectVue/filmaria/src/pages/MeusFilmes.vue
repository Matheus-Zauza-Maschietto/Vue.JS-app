<template>
  <div id="meus-filmes">
    <h1>Meus Filmes</h1>
    <span v-if="filmes.length <= 0">
      Você não possui nenhum filme salvo :(
    </span>
    <ul>
      <li v-for="filme in filmes" :key="filme.id">
        <span>{{filme.nome}}</span>
        <div>
          <router-link :to="`/filme/${filme.id}`">Ver detalhes</router-link>
          <button @click="excluirFilme(filme.id)">Excluir</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "meusFilmesComponent",
  data(){
    return{
      filmes: []
    }
  },
  methods: {
    excluirFilme(id){
      this.filmes = this.filmes.filter((filme) => {
        return (filme.id !== id)

      })
    }
  },
  watch: {
    filmes(){
      localStorage.setItem('myFilme', JSON.stringify(this.filmes))
    }
  },
  created(){
    const minhaLista = localStorage.getItem("myFilme")
    this.filmes = JSON.parse(minhaLista) || []
  }
}
</script>

<style scoped>
  #meus-filmes{
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
  }

  ul{
    padding: 0;
  }


  ul li{
    padding: 0;
    list-style: none;
    min-width: 600px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  span{
    font-size: 25px;
  }

  button{
    margin-left: 10px;
  }

</style>