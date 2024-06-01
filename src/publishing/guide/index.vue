<script setup>
import { useSetMouseShape } from '&/guide/composables/useMouse';
import MouseCursorPointer from '&/guide/pages/mouse-cursor-pointer.vue';

const { mouseStatus, mouseShape } = useSetMouseShape();
const router = useRouter();
const route = useRoute();
const toggleStatus = ref(false);
const beforeTitle = document.title;

if (route.path === '/publishing/guide') {
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
          <li><router-link class="cursor-zoom" to="/publishing/guide/color">Color</router-link></li>
          <li><router-link class="cursor-zoom" to="/publishing/guide/fonts">Fonts</router-link></li>
          <li><router-link class="cursor-zoom" to="/publishing/guide/layout">Layout</router-link></li>
          <li><router-link class="cursor-zoom" to="/publishing/guide/button">Button</router-link></li>
          <li><router-link class="cursor-zoom" to="/publishing/guide/table">Table</router-link></li>
          <li><router-link class="cursor-zoom" to="/publishing/guide/paragraph">Paragraph</router-link></li>
          <li><router-link class="cursor-zoom" to="/publishing/guide/tabmenu">Tabmenu</router-link></li>
          <li><router-link class="cursor-zoom" to="/publishing/guide/bullet">Bullet</router-link></li>
          <li><router-link class="cursor-zoom" to="/publishing/guide/accordion">Accordion</router-link></li>
          <li><router-link class="cursor-zoom" to="/publishing/guide/form">Form</router-link></li>
          <li><router-link class="cursor-zoom" to="/publishing/guide/tooltip">Tooltip</router-link></li>
          <li><router-link class="cursor-zoom" to="/publishing/guide/popup">Popup</router-link></li>
          <li><router-link class="cursor-zoom" to="/publishing/guide/card">Card</router-link></li>
          <li><router-link class="cursor-zoom" to="/publishing/guide/image">Image</router-link></li>
          <li><router-link class="cursor-zoom" to="/publishing/guide/swiper">Swiper</router-link></li>
          <li><router-link class="cursor-zoom" to="/publishing/guide/lazy">Lazy</router-link></li>
          <li><router-link class="cursor-zoom" to="/publishing/guide/chart">Chart</router-link></li>
          <li><router-link class="cursor-zoom" to="/">HOME</router-link></li>
        </ul>
      </div>
      <button class="btn-toggle cursor-zoom" type="button" @click="toggleStatus = !toggleStatus"><span
        class="blind">열고/닫기</span></button>
      <p class="link-publist">
        <router-link to="/publishing/guide/publist/total" class="cursor-zoom">PUBLISHING LIST</router-link>
      </p>

      <p class="link-convention">
        <router-link to="/publishing/guide/convention/rule1" class="cursor-zoom">PUBLISHING CONVENTION</router-link>
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