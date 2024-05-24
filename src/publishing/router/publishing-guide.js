const publishingPath = '/publishing';
const publishingGuide = [
  {
    path: publishingPath,
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
      },
      {
        path: 'convention',
        name: 'PublishingConvention',
        component: () => import('&/guide/components/publishing-convention.vue'),
      },
    ]
  },
]
export default publishingGuide