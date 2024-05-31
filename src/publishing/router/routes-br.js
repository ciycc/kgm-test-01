const root = '/publishing/br/';
const namePrefix = 'publishingBr';

const routesBr = [
  {
    path: `${root}`,
    name: `${namePrefix}`,
    meta: {
      layout: 'default',
      wrapClass: [],
      containerClass: [],
    },
    component: () => import('&/pages/br/index.vue'),
  },
];
export default routesBr;
