<template>
    <form class="flex-center">
        <input type="text" v-model="taskInfo" required placeholder="Tarefa de hoje?">
        <button @click.prevent="PassarValorTaskAdicionar()">Adicionar</button>
    </form>
</template>

<script>
export default {
    name: "newTask",
    data(){
        return{
            taskInfo: ""
        }
    },
    methods: {
        PassarValorTaskAdicionar(){
            this.$emit("valorTask", this.taskInfo)
        }
    }
}
</script>

<style scoped>
    form{
        flex-direction: row;
        margin: 0 auto;
        padding: 15px 10px
    }
    input{
        width: clamp(300px, 80%, 500px);
    }
    button{
        color: white;
        background-color: #07525A;
    }
</style>