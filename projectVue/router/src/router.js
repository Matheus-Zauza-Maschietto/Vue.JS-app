import Vue from 'vue';
import VueRouter from 'vue-router';



import HomePage from './pages/Home.vue';
import ProdutoPage from './pages/produto/Produto.vue';

/*
 Regisrando o router na instancia do Vue

 > Modelo HASH E HISTORY

 > Hash seusite.com/#/contato
 > History seusite.com/contato


 */


export default new VueRouter({
    
    routes: [
        {
            path: '/',
            component: HomePage
        },
        {
            path: '/produto',
            component: ProdutoPage
        }
    ]
});

Vue.use(VueRouter);
