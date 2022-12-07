

import { createWebHistory, createRouter } from "vue-router";
import ToDo from '../views/ToDo.vue'
import ComicPage from '../views/ComicPage.vue'
import HomeView from '../views/HomeView.vue'
import LanDing from '../views/LanDing.vue'
const routes = [
    {
        name: 'ToDoPage',
        path: '/todo',
        component: ToDo
    },
    {
        name: 'ComicPageD',
        path: '/comic',
        component: ComicPage
    },
    {
        name: 'HomeView',
        path: '/home',
        component: HomeView
  },
    {
        name: 'LanDing',
        path: '/land',
        component: LanDing
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;
