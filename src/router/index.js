import { createRouter, createWebHistory } from 'vue-router';
import publishingGuide from '&/router';

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      layout: 'main',
      wrapClass: [],
      containerClass: [],
    },
    component: () => import('~/pages/home/Home.vue'),
  },
  {
    path: '/home2',
    name: 'Home2',
    meta: {
      layout: 'default',
      wrapClass: [],
      containerClass: [],
    },
    component: () => import('~/pages/home/Home2.vue'),
  },
  ...publishingGuide,
];
const router = createRouter({
  history: createWebHistory('/kgm-test-01/'),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 };
  },
});
export default router;
