<template>
  <div id="toDo">
      <h1>Minhas Tarefas</h1>
      <div class="tasks">
        <newTask @valorTask="taskList.push($event)" />
        
        <ul>
          <task-item v-for="task in taskList" :key="task" @Concluido="RemoveItem(task)" :task="task"/>
          <!-- <li v-for="task in taskList" :key="task" @click="RemoveItem(task)">{{task}}</li> -->
        </ul>
      </div> 
  </div>
</template>

<script>
import newTask from "./components/newTask.vue"
import taskItem from "./components/taskItem.vue"

export default {
  name: 'App',
  components:{
    newTask,
    taskItem
  },
  data(){
    return{
      taskList: []
    }
  }, methods:{
    RemoveItem(task){
      this.taskList = this.taskList.filter(item => item !== task)
    }
  }
  
}
</script>

<style scoped>
  #toDo{
    width: 40vw;
    height: clamp(400px, auto, auto);
    margin: 0 auto;
  }
  h1{
    color: white;
    font-size: 25px;
    padding: 10px 0 20px 0;
    text-align: center;
  }
  .tasks{
    background-color: white;
  }
</style>

<style>
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  .flex-center{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #app{
    background-color: #07525A;
    width: 100vw;
    min-height: 100vh;
  }
</style>

