import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
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
    path: '/bestiary',
    name: 'Bestiary',
    component: () =>
      import(/* webpackChunkName: "bestiary" */ '../views/Bestiary.vue'),
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
});

export default router;
