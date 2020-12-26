import VueRouter from "vue-router";
import Example from "./components/Example.vue";
import Bookables from "./bookable/Bookables.vue";

const routes = [
    {
        path: "/",
        component: Bookables,
        name: "home"
    },
    {
        path: "/example",
        component: Example,
        name: "example"
    }
];

const router = new VueRouter({
    routes,
    mode: "history"
});

export default router;
