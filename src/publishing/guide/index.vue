<script setup>
import { useSetMouseShape } from '&/guide/composables/useMouse';
import MouseCursorPointer from '&/guide/components/mouse-cursor-pointer.vue';

const { mouseStatus, mouseShape } = useSetMouseShape();
const router = useRouter();
const route = useRoute();
const toggleStatus = ref(false);
const beforeTitle = document.title;

if (route.path === '/publishing') {
  router.push({ name: 'PublishingColor' });
}

watchEffect(() => {
  if (route.meta.title) {
    document.title = route.meta.title;
  }
});

onUnmounted(() => {
  document.title = beforeTitle;
});
</script>

<template>
  <div class="publishing-guide-wrap" :class="{ 'menu-hide': toggleStatus }">
    <div class="publishing-menu-list">
      <div class="custom-scroll-wrap">
        <h1 class="publishing-guide-title"><span class="logo-img"><span class="blind">KGM</span></span><br>PUBLISHING
          GUIDE</h1>
        <ul>
          <li><router-link class="cursor-zoom" to="/publishing/color">COLOR</router-link></li>
          <li><router-link class="cursor-zoom" to="/publishing/fonts">FONTS</router-link></li>
          <li><router-link class="cursor-zoom" to="/publishing/layout">Layout</router-link></li>
          <li><router-link class="cursor-zoom" to="/publishing/button">Button</router-link></li>
          <li><router-link class="cursor-zoom" to="/publishing/table">Table</router-link></li>
          <li><router-link class="cursor-zoom" to="/publishing/paragraph">Paragraph</router-link></li>
          <li><router-link class="cursor-zoom" to="/publishing/tabmenu">Tabmenu</router-link></li>
          <li><router-link class="cursor-zoom" to="/publishing/bullet">Bullet</router-link></li>
          <li><router-link class="cursor-zoom" to="/publishing/accordion">Accordion</router-link></li>
          <li><router-link class="cursor-zoom" to="/publishing/form">Form</router-link></li>
          <li><router-link class="cursor-zoom" to="/publishing/tooltip">Tooltip</router-link></li>
          <li><router-link class="cursor-zoom" to="/publishing/popup">Popup</router-link></li>
          <li><router-link class="cursor-zoom" to="/publishing/card">Card</router-link></li>
          <li><router-link class="cursor-zoom" to="/publishing/image">Image</router-link></li>
          <li><router-link class="cursor-zoom" to="/publishing/swiper">Swiper</router-link></li>
          <li><router-link class="cursor-zoom" to="/publishing/lazy">Lazy</router-link></li>
          <li><router-link class="cursor-zoom" to="/publishing/chart">Chart</router-link></li>
          <li><router-link class="cursor-zoom" to="/">HOME</router-link></li>
        </ul>
      </div>
      <button class="btn-toggle cursor-zoom" type="button" @click="toggleStatus = !toggleStatus"><span
          class="blind">열고/닫기</span></button>
      <p class="link-publist">
        <router-link to="/publishing/publist/total" class="cursor-zoom">PUBLISHING LIST</router-link>
      </p>
      <p class="link-convention">
        <router-link to="/publishing/convention/rule1" class="cursor-zoom">PUBLISHING CONVENTION</router-link>
      </p>
    </div>
    <div class="publishing-container">
      <router-view />
    </div>
    <MouseCursorPointer v-if="mouseStatus" :mouseShape="mouseShape" />
  </div>
</template>

<style lang="scss" scoped>
@import "&/guide/scss/publishing-guide.scss";
@include menu-list;
</style>