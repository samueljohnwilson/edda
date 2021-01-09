import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
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
    path: '/races',
    name: 'Races',
    component: () =>
      import(/* webpackChunkName: "races" */ '../views/Races.vue'),
  },
  {
    path: '/gods',
    name: 'Gods',
    component: () => import(/* webpackChunkName: "gods" */ '../views/Gods.vue'),
  },
  {
    path: '/bestiary',
    name: 'Bestiary',
    component: () =>
      import(/* webpackChunkName: "bestiary" */ '../views/Bestiary.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
