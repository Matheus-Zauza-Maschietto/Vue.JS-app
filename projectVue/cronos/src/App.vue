<template>
  <span class="timer">00:00:00</span>
  <div class="AreaBtn">
    <button class="botao">
      Iniciar
    </button>
    <button class="botao">
      Limpar
    </button>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
  #app{
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .timer{
    color: #fff;
    font-size: 70px;
    margin-top: -210px;
  }
  .areaBtn{
    margin-top: 155px;
    display: flex;
  }
  .botao{
    width: 150px;
    background-color: #fff;
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
</style>
