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
    component: () => import('&/pages/index.vue'),
  },
];
export default routesMa;
