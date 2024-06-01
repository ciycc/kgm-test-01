const publishingPath = '/publishing/guide';
const publishingGuide = [
  {
    path: `${publishingPath}`,
    name: 'PublishingGuide',
    meta: {
      title: 'KG 모빌리티 퍼블리싱 GUIDE',
      layout: 'blank',
      wrapClass: [],
      containerClass: [],
    },
    component: () => import('&/guide/index.vue'),

    children: [
      {
        path: 'color',
        name: 'PublishingColor',
        component: () => import('&/guide/pages/color.vue'),
      },
      {
        path: 'fonts',
        name: 'PublishingFonts',
        component: () => import('&/guide/pages/fonts.vue'),
        props: true,
      },
      {
        path: 'layout',
        name: 'PublishingLayout',
        component: () => import('&/guide/pages/layout.vue'),
      },
      {
        path: 'button',
        name: 'PublishingButton',
        component: () => import('&/guide/pages/button.vue'),
      },
      {
        path: 'table',
        name: 'PublishingTable',
        component: () => import('&/guide/pages/table.vue'),
      },
      {
        path: 'paragraph',
        name: 'PublishingParagraph',
        component: () => import('&/guide/pages/paragraph.vue'),
      },
      {
        path: 'tabmenu',
        name: 'PublishingTabmenu',
        component: () => import('&/guide/pages/tabmenu.vue'),
      },
      {
        path: 'bullet',
        name: 'PublishingBullet',
        component: () => import('&/guide/pages/bullet.vue'),
      },
      {
        path: 'accordion',
        name: 'PublishingAccordion',
        component: () => import('&/guide/pages/accordion.vue'),
      },
      {
        path: 'form',
        name: 'PublishingForm',
        component: () => import('&/guide/pages/form.vue'),
      },
      {
        path: 'tooltip',
        name: 'PublishingTooltip',
        component: () => import('&/guide/pages/tooltip.vue'),
      },
      {
        path: 'popup',
        name: 'PublishingPopup',
        component: () => import('&/guide/pages/popup.vue'),
      },
      {
        path: 'card',
        name: 'PublishingCard',
        component: () => import('&/guide/pages/card.vue'),
      },
      {
        path: 'image',
        name: 'Publishingimage',
        component: () => import('&/guide/pages/image.vue'),
      },
      {
        path: 'swiper',
        name: 'PublishingSwiper',
        component: () => import('&/guide/pages/swiper.vue'),
      },
      {
        path: 'lazy',
        name: 'PublishingLazy',
        component: () => import('&/guide/pages/lazy.vue'),
      },
      {
        path: 'chart',
        name: 'PublishingChart',
        component: () => import('&/guide/pages/chart.vue'),
      },
      {
        path: 'publist',
        name: 'PublishingPublist',
        component: () => import('&/guide/pages/publishing-list.vue'),
        children: [
          {
            path: 'total',
            name: 'PublishingPublistTotal',
            component: () => import('&/guide/pages/publist/total.vue'),
          },
          {
            path: 'cat1',
            name: 'PublishingPublistCat1',
            component: () => import('&/guide/pages/publist/cat1.vue'),
          },
          {
            path: 'cat2',
            name: 'PublishingPublistCat2',
            component: () => import('&/guide/pages/publist/cat2.vue'),
          },
          {
            path: 'cat3',
            name: 'PublishingPublistCat3',
            component: () => import('&/guide/pages/publist/cat3.vue'),
          },
          {
            path: 'cat4',
            name: 'PublishingPublistCat4',
            component: () => import('&/guide/pages/publist/cat4.vue'),
          },
          {
            path: 'cat5',
            name: 'PublishingPublistCat5',
            component: () => import('&/guide/pages/publist/cat5.vue'),
          },
        ],
      },
      {
        path: 'convention',
        name: 'PublishingConvention',
        meta: {
          layout: 'blank',
          wrapClass: [],
          containerClass: [],
        },
        component: () => import('&/guide/pages/publishing-convention.vue'),
        children: [
          {
            path: 'rule1',
            name: 'PublishingPublistRule1',
            component: () => import('&/guide/pages/convention/rule1.vue'),
          },
          {
            path: 'rule2',
            name: 'PublishingPublistRule2',
            component: () => import('&/guide/pages/convention/rule2.vue'),
          },
          {
            path: 'rule3',
            name: 'PublishingPublistRule3',
            component: () => import('&/guide/pages/convention/rule3.vue'),
          },
          {
            path: 'rule4',
            name: 'PublishingPublistRule4',
            component: () => import('&/guide/pages/convention/rule4.vue'),
          },
          {
            path: 'rule5',
            name: 'PublishingPublistRule5',
            component: () => import('&/guide/pages/convention/rule5.vue'),
          },
        ],
      },
    ],
  },
];
export default publishingGuide;
