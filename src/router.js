import Vue from "vue";
import Router from "vue-router";
import Index from "./views/Index.vue";
import AllRoutes from "./views/AllRoutes.vue";
import AllStops from "./views/AllStops.vue";
import Route from "./views/Route.vue";
import MainNavbar from "./layout/MainNavbar.vue";
import MainFooter from "./layout/MainFooter.vue";
import EmptyFooter from "./layout/EmptyFooter.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "index",
      components: { default: Index, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400, type: 'white' },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/route/:id",
      name: "route",
      components: { default: Route, header: MainNavbar, footer: EmptyFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/routes",
      name: "routes",
      components: { default: AllRoutes, header: MainNavbar, footer: EmptyFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/stops",
      name: "stops",
      components: { default: AllStops, header: MainNavbar, footer: EmptyFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
