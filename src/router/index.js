import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Recipes from '../views/Recipes.vue'
import Contact from '../views/Contact.vue'
import MySpace from '../views/MySpace.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/recipes',
        name: 'Recipes',
        component: Recipes
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    },
    {
        path: '/myspace',
        name: 'MySpace',
        component: MySpace
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router