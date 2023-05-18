import { createRouter, createWebHistory } from "vue-router";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: () => import("../views/Home.vue")},
        { path: "/register", component: () => import("../views/Register.vue")},
        { path: "/sign-in", component: () => import("../views/SignIn.vue")},
        { path: "/feed", component: () => import("../views/Feed.vue")},
        { path: "/event", component: () => import("../views/CreateEventPage.vue")},
        { path: "/shop", component: () => import("../views/Shop.vue")},
        { path: "/shopcard", component: () => import("../components/ShopCard.vue")},
      ]
});



export default router;