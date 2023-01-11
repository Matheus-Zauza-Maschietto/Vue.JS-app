<template>
  <header id="header">
    <router-link to="/" exact>Filmaria</router-link>
    <button>
      <router-link to="/salvos" exact class="meusfilmes">Salvos</router-link>
    </button>
  </header>
</template>

<script>
export default {
    name: "headerComponent"
}
</script>

<style scoped>
  #header{
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 60px;
    background-color: brown;
  }
  #header a{
    text-decoration: none;
    font-size: 30px;
    color: #fff;
    cursor: pointer;
  }
  button{
    cursor: pointer;
    border: 0;
    background: #fff;
    padding: 5px 15px;
    outline: none;
    border-radius: 5px;
    font-weight: bold;
  }
  #header .meusfilmes{
    color: black;
    font-size: 16px;
  }
</style>