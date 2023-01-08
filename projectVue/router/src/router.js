import { createWebHistory, createRouter } from "vue-router";

import HomeItem from './pages/Home.vue';
import ProdutoItem from './pages/produto/Produto.vue';
import homeProduto from "./pages/produto/produtoHome.vue";
import detalheProduto from "./pages/produto/ProdutoDetalhe.vue";

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
            component: ProdutoItem,
            props: true,
            children:[
                {path: "", component: homeProduto},
                {path: ":id", component: detalheProduto, props: true}
            ]
        }
    ]
const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router