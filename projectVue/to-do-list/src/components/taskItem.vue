<template>
    <li class="task">
        <p>
            {{task}}
        </p>
        <button @click="Concluir()">
            Concluir
        </button>
    </li>
</template>

<script>
export default {
    name: "taskItem",
    data(){
        return{
            Concluido: false
        }
    },
    methods:{
        Concluir(){
            this.Concluido = true
            this.$emit("Concluido", this.Concluir)
        }
    },
    props: {
        task:{
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
    .task{
        display: flex;
        justify-content: space-around;
    }
</style>