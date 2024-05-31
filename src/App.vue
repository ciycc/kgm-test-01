<script setup>
import DefaultLayout from '~/layouts/DefaultLayout.vue';
import BlankLayout from '~/layouts/BlankLayout.vue';

const detectMobile = () => {
  const toMatchMobile = [
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i,
  ];
  const mobileCond = toMatchMobile.some((toMatchItem) => navigator.userAgent.match(toMatchItem));

  return mobileCond ? 'mobile' : 'desktop';
};

const checkDevice = ref(detectMobile());

const getLayout = () => {
  const route = useRoute();
  if (typeof route === 'undefined') {
    return Default;
  }
  switch (route.meta.layout) {
    case 'default':
      return DefaultLayout;
    case 'blank':
      return BlankLayout;
    default:
      return DefaultLayout;
  }
};

const layout = computed(() => getLayout());
</script>
<template>
  <router-view v-slot="{ Component, route }">
    <component :is="layout" :class="[route.meta.wrapClass, route.name, checkDevice]">
      <component :is="Component" class="container" :class="[route.meta.containerClass]" />
    </component>
  </router-view>
</template>
<style lang="scss" scoped></style>
