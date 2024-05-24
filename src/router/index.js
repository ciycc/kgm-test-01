import { createRouter, createWebHistory } from 'vue-router';
import publishingGuide from '&/router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/home2',
    name: 'Home2',
    component: () => import('@/views/Home2.vue'),
  },
  ...publishingGuide,
];
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 };
  },
});
export default router;
