import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: () => import('../views/Home.vue')},
        { path: '/register', component: () => import('../views/Register.vue')},
        { path: '/sign-in', component: () => import('../views/SignIn.vue')},
        { path: '/genre', component: () => import('../views/Genre.vue')},
        { path: '/event', component: () => import('../views/CreateEventPage.vue')},
        { path: '/cart', component: () => import('../components/Cart.vue')},
        { path: '/shop', component: () => import('../views/Shop.vue')},
        { path: '/test', component: () => import('../views/HomeTest.vue')},
        { path: '/events', component: () => import('../views/Events.vue')},
        { path: "/sign-in", component: () => import("../views/SignIn.vue")},
        { path: "/genre", component: () => import("../views/Genre.vue")},
        { path: "/event", component: () => import("../views/CreateEventPage.vue")},
        { path: "/shop", component: () => import("../views/Shop.vue")},
        { path: "/test", component: () => import("../views/HomeTest.vue")},
        { path: "/events", component: () => import("../views/Events.vue")},
        { path: "/gallery", component: () => import("../components/Gallery.vue")},
        { path: "/registration", component: () => import("../views/Registration.vue")},
        { path: "/news", component: () => import("../views/Newsletter.vue")},
        { path: "/volunteer", component: () => import("../views/Volunteer.vue")},
        { path: "/about", component: () => import("../views/AboutUs.vue")},
        { path: "/footer", component: () => import("../components/Footer.vue")},
      ]
});



export default router;