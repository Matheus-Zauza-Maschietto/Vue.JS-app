import { createWebHistory, createRouter } from "vue-router";

import HomeItem from './pages/Home.vue';
import ProdutoItem from './pages/produto/Produto.vue';

/*
 Regisrando o router na instancia do Vue

 > Modelo HASH E HISTORY

 > Hash seusite.com/#/contato
 > History seusite.com/contato


 */
const routes= [
        {
            path: '/',
            name: "home",
            component: HomeItem
        },
        {
            path: '/produto',
            name: "produto",
            component: ProdutoItem
        }
    ]
const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router