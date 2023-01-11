<template>
  <div id="filme">
    <div v-if="loading">
      <loading/>
    </div>
    <div class="container" v-else>
      <h2>{{filme.nome}}</h2>
      <img :src="filme.foto" alt=""/>
      <h3>Sinopse</h3>
      <p>{{filme.sinopse}}</p>
      <div class="botoes">
        <router-link to="/">Ver mais filmes</router-link>
        <button @click="salvarFilme">Salvar</button>
        <button>
          <a :href="`https://youtube.com/results?search_query=${filme.nome} trailer`" target="blank" >Trailer</a>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../service/api.js"
import loading from "../components/loading.vue"

export default {
  name: "filmeComponent",
  components: {
    loading
  },
  props:['id'],
  data(){
    return{
      filme: {},
      loading: true
    }
  },
  methods:{
    salvarFilme(){
      const minhaLista = localStorage.getItem('myFilme')
      let filmes = JSON.parse(minhaLista) || []

      // verifica se aquele filme ja está na lista
      const hasFilme = filmes.some((filme) => filme.id === this.filme.id)
      if(hasFilme){
        alert("Você já tem esse filme salvo")
        return;
      }
      filmes.push(this.filme);
      localStorage.setItem('myFilme', JSON.stringify(filmes))
      alert("Filme salvo com sucesso")
    }
  },
  async created(){
    const response = await api.get(`?api=filmes/${this.id}`)
    this.filme = response.data
    this.loading = false
  }
}
</script>

<style scoped>
  .container{
        display: flex;
        justify-content: center;
        flex-direction: column;
        max-width: 900px;
    }

    h2{
      color: #FFF;
      margin-bottom: 0px;
      background: brown;
      padding: 15px;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
    }

    .container img{
        width: 100%;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
    }

    button{
      margin-right: 5px;
      border-radius: 5px;
      margin-top: 15px;
      cursor: pointer;
      border:0;
      padding: 12px;
      font-size: 20px;
      transition: all 0.5s;
      outline: none;
    }
    button:hover{
      background: brown;
      color: #FFF;
    }

    a{
      text-decoration: none;
      color: #000;
      transition: all 0.5s;
    }

    a:hover{
      color: #FFF;
    }
</style>