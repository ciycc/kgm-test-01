import { createRouter, createWebHashHistory } from 'vue-router';
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
    component: () => import('~/pages/main/Home.vue'),
  },
  ...publishingGuide,
];
const router = createRouter({
  history: createWebHashHistory('/kgm-test-01/'),
  // history: createWebHistory(),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 };
  },
});
export default router;
