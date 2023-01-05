<template>
  <div id="app">
    <header> Minhas tarefas </header>
    <TaskBody/>

  </div>
</template>

<script>
import TaskBody from './components/Task.vue';
export default {
  name: 'App',
  components:{
    TaskBody
  }
}
</script>

<style scoped>
  header{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80px;
    font-size: 40px;
    color: #FFF;
  }
</style>
