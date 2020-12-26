import VueRouter from "vue-router";
import ExampleComponent from "./components/ExampleComponent.vue";
import Example from "./components/Example.vue";

const routes = [
    {
        path: "/",
        component: ExampleComponent,
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
