import { createWebHistory, createRouter } from "vue-router";

import homeComponent from "./pages/Home.vue"
import filmeComponent from "./pages/Filme.vue"
import erroComponent from "./pages/Erro.vue"
import meusFilmesComponent from "./pages/MeusFilmes.vue"

const routes = [
    {
        path: "/",
        component: homeComponent
    },
    {
        path: "/filme/:id",
        component: filmeComponent,
        props: true
    },
    {
        path: "/salvos",
        component: meusFilmesComponent
    },
    {
        path: "/:catchAll(.*)",
        component: erroComponent
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router