<template>
  <div id="app">
    <span class="timer">{{valorCronometro}}</span>
    <div class="AreaBtn">
      <button class="botao" @click="inicia()">
        {{botao}}
      </button>
      <button class="botao" @click="limpa()">
        Limpar
      </button>
    </div>
    <div class="list">
      <ul>
        <li v-for="check in checkpoints" :key="check.id">{{check}}</li>
      </ul>
      <button v-show="checkpoints.length > 0" @click="checkpoints = []">Limpar Historico</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      contadorSegundos: 0,
      botao: "Iniciar",
      timer: null,
      valorCronometro: new Date(0).toISOString().substring(11, 22),
      checkpoints: []
    }
  },
  methods:{
    inicia(){
      if(this.timer !== null){
        clearInterval(this.timer)
        this.timer = null
        this.botao = "Iniciar"
        this.checkpoints.push(this.valorCronometro)
        console.log(this.checkpoints)
      }
      else{
        this.timer = setInterval(()=>{
          this.contadorSegundos++
          this.valorCronometro = new Date(this.contadorSegundos*10).toISOString().substring(11, 22)
        }, 10)
        this.botao = "Pausar"
      }
      
    },
    limpa(){
      clearInterval(this.timer)
      this.timer = null
      this.valorCronometro = new Date(0).toISOString().substring(11, 22)
      this.botao = "Iniciar"
      this.contadorSegundos = 0
      this.checkpoints = []
    }
  }
}
</script>

<style>
  #app{
    display: flex;
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .timer{
    color: white;
    font-size: 70px;
    margin-top: -210px;
  }
  .areaBtn{
    margin-top: 155px;
    display: flex;
  }
  .botao{
    width: 150px;
    background-color:white;
    font-size: 20px;
    border: 0;
    border-radius: 5px;
    text-align: center;
    margin: 0 15px;
    padding: 6px;
    cursor: pointer;
    -webkit-user-select: none;
  }
  .botao:hover{
    opacity: 0.7;
    transition: all 0.5s;
  }

  ul{
    margin: 20px auto 5px auto;
    padding: 0;
    overflow-y: scroll;
    max-height: 200px;
  }
  li{
    list-style: none;
    color: white;
    font-size: 20px;
    padding: 3px;
  }
</style>
