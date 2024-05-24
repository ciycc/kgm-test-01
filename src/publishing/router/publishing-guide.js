const publishingPath = '/publishing';
const publishingGuide = [
  {
    path: `${publishingPath}`,
    name: 'PublishingGuide',
    component: () => import('&/guide/index.vue'),

    children: [
      {
        path: 'color',
        name: 'PublishingColor',
        component: () => import('&/guide/components/color.vue'),
      },
      {
        path: 'fonts',
        name: 'PublishingFonts',
        component: () => import('&/guide/components/fonts.vue'),
        props: true,
      },
      {
        path: 'layout',
        name: 'PublishingLayout',
        component: () => import('&/guide/components/layout.vue'),
      },
      {
        path: 'button',
        name: 'PublishingButton',
        component: () => import('&/guide/components/button.vue'),
      },
      {
        path: 'table',
        name: 'PublishingTable',
        component: () => import('&/guide/components/table.vue'),
      },
      {
        path: 'paragraph',
        name: 'PublishingParagraph',
        component: () => import('&/guide/components/paragraph.vue'),
      },
      {
        path: 'tabmenu',
        name: 'PublishingTabmenu',
        component: () => import('&/guide/components/tabmenu.vue'),
      },
      {
        path: 'bullet',
        name: 'PublishingBullet',
        component: () => import('&/guide/components/bullet.vue'),
      },
      {
        path: 'accordion',
        name: 'PublishingAccordion',
        component: () => import('&/guide/components/accordion.vue'),
      },
      {
        path: 'form',
        name: 'PublishingForm',
        component: () => import('&/guide/components/form.vue'),
      },
      {
        path: 'tooltip',
        name: 'PublishingTooltip',
        component: () => import('&/guide/components/tooltip.vue'),
      },
      {
        path: 'popup',
        name: 'PublishingPopup',
        component: () => import('&/guide/components/popup.vue'),
      },
      {
        path: 'card',
        name: 'PublishingCard',
        component: () => import('&/guide/components/card.vue'),
      },
      {
        path: 'image',
        name: 'Publishingimage',
        component: () => import('&/guide/components/image.vue'),
      },
      {
        path: 'swiper',
        name: 'PublishingSwiper',
        component: () => import('&/guide/components/swiper.vue'),
      },
      {
        path: 'lazy',
        name: 'PublishingLazy',
        component: () => import('&/guide/components/lazy.vue'),
      },
      {
        path: 'chart',
        name: 'PublishingChart',
        component: () => import('&/guide/components/chart.vue'),
      },
      {
        path: 'publist',
        name: 'PublishingPublist',
        component: () => import('&/guide/components/publishing-list.vue'),
        children: [
          {
            path: 'total',
            name: 'PublishingPublistTotal',
            component: () => import('&/guide/components/publist/total.vue'),
          },
          {
            path: 'cat1',
            name: 'PublishingPublistCat1',
            component: () => import('&/guide/components/publist/cat1.vue'),
          },
          {
            path: 'cat2',
            name: 'PublishingPublistCat2',
            component: () => import('&/guide/components/publist/cat2.vue'),
          },
          {
            path: 'cat3',
            name: 'PublishingPublistCat3',
            component: () => import('&/guide/components/publist/cat3.vue'),
          },
          {
            path: 'cat4',
            name: 'PublishingPublistCat4',
            component: () => import('&/guide/components/publist/cat4.vue'),
          },
          {
            path: 'cat5',
            name: 'PublishingPublistCat5',
            component: () => import('&/guide/components/publist/cat5.vue'),
          },
        ],
      },
      {
        path: 'convention',
        name: 'PublishingConvention',
        component: () => import('&/guide/components/publishing-convention.vue'),
        children: [
          {
            path: 'rule1',
            name: 'PublishingPublistRule1',
            component: () => import('&/guide/components/convention/rule1.vue'),
          },
          {
            path: 'rule2',
            name: 'PublishingPublistRule2',
            component: () => import('&/guide/components/convention/rule2.vue'),
          },
          {
            path: 'rule3',
            name: 'PublishingPublistRule3',
            component: () => import('&/guide/components/convention/rule3.vue'),
          },
          {
            path: 'rule4',
            name: 'PublishingPublistRule4',
            component: () => import('&/guide/components/convention/rule4.vue'),
          },
          {
            path: 'rule5',
            name: 'PublishingPublistRule5',
            component: () => import('&/guide/components/convention/rule5.vue'),
          },
        ],
      },
    ],
  },
];
export default publishingGuide;
