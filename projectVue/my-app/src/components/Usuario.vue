<template>
    <div id="usuario">

        <h2>Olá PROP: {{nome2}} </h2>
        <button @click="this.$emit('nomeCurso', 'ValorTeste')">NOME CURSO</button>

    </div>
</template>

<script>
export default {
    name: 'UserCmp',
    props: {
       nome2:{
           type: String,
           required: false
       }
    },
    methods:{
        curso(){
            this.nome = 'Aprendendo Portugues';
            this.$emit('nomeCurso', "ValorTeste");
        }
    }
}
</script>

<style scoped>
    h2{
        color: red;
    }
</style>