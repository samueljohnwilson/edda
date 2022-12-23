import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import HomePage from '../views/HomePage.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/home',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/races',
    name: 'Races',
    component: () =>
      import(/* webpackChunkName: "races" */ '../views/Races.vue'),
  },
  {
    path: '/lands',
    name: 'Lands',
    component: () =>
      import(/* webpackChunkName: "lands" */ '../views/Lands.vue'),
  },
  {
    path: '/appendix',
    name: 'Appendix',
    component: () =>
      import(/* webpackChunkName: "appendix" */ '../views/Appendix.vue'),
  },
  {
    path: '/gods',
    name: 'Gods',
    component: () => import(/* webpackChunkName: "gods" */ '../views/Gods.vue'),
  },
  {
    path: '/history',
    name: 'History',
    component: () =>
      import(/* webpackChunkName: "history" */ '../views/History.vue'),
  },
  {
    path: '/beasts',
    name: 'Bestiary',
    component: () =>
      import(/* webpackChunkName: "beasts" */ '../views/Bestiary.vue'),
  },
  {
    path: '/maps',
    name: 'Maps',
    component: () => import(/* webpackChunkName: "maps" */ '../views/Maps.vue'),
  },
  {
    path: '*',
    redirect: '/home',
  },
];

const router = new VueRouter({
  routes,
  // Scroll to top of the page with each navigation.
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
