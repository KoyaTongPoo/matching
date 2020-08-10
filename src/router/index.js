import Vue from "vue";
import VueRouter from "vue-router";
import Irai from "../views/iraigamen.vue";
import Modorubar from "../components/modorubar.vue";
import Chat from "../views/chat.vue";
import Cupid from "../views/Cupid.vue";
import Tanomu from "../views/tanomu.vue";
import Appbar from "../components/appbar.vue";
import Drawer from "../components/drawer.vue";
import Cpappbar from "../components/cpappbar.vue";



Vue.use(VueRouter);

const routes = [
  {
    path: "/tanomu",
    name: "Tanomu",
    components: {default: Tanomu,drawer: Drawer,appbar: Appbar}
  },
  {
    path: "/cupid",
    name: "Cupid",
    components: {default: Cupid,drawer: Drawer,appbar: Cpappbar}
  },
  {
    path: "*",
    name: "Chat",
    components: {default: Chat,drawer: Drawer,appbar: Appbar}
  },
  {
    path: "/iraigamen",
    name: "Irai",
    components: {default: Irai,appbar: Modorubar}
    },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
