const root = '/publishing/';
const namePrefix = 'publishingMain';

const routesMa = [
  {
    path: `${root}`,
    name: `${namePrefix}`,
    meta: {
      layout: 'main',
      wrapClass: [],
      containerClass: [],
    },
    component: () => import('&/pages/main/Home.vue'),
  },
];
export default routesMa;
