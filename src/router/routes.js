import HelloWorld from "../components/HelloWorld.vue";

export const routes = [
    {path: '', component: HelloWorld, title: 'HelloWorld', meta: {guest: true}},
    {path: '/home', component: HelloWorld, title: 'Home', meta: {requiresAuth: true}},
];