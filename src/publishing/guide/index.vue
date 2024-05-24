<script setup>
const router = useRouter();
const route = useRoute();

if (route.path === '/publishing') {
  router.push({ name: 'PublishingColor' });
}

const toggleStatus = ref(false);
</script>

<template>
  <div class="publishing-guide-wrap" :class="{ 'menu-hide': toggleStatus }">
    <div class="publishing-menu-list">
      <div class="custom-scroll-wrap">
        <h1 class="publishing-guide-title"><span class="logo-img"><span class="blind">KGM</span></span><br>PUBLISHING
          GUIDE</h1>
        <ul>
          <li><router-link to="/publishing/color">COLOR</router-link></li>
          <li><router-link to="/publishing/fonts">FONTS</router-link></li>
          <li><router-link to="/publishing/layout">Layout</router-link></li>
          <li><router-link to="/publishing/button">Button</router-link></li>
          <li><router-link to="/publishing/table">Table</router-link></li>
          <li><router-link to="/publishing/paragraph">Paragraph</router-link></li>
          <li><router-link to="/publishing/tabmenu">Tabmenu</router-link></li>
          <li><router-link to="/publishing/bullet">Bullet</router-link></li>
          <li><router-link to="/publishing/accordion">Accordion</router-link></li>
          <li><router-link to="/publishing/form">Form</router-link></li>
          <li><router-link to="/publishing/tooltip">Tooltip</router-link></li>
          <li><router-link to="/publishing/popup">Popup</router-link></li>
          <li><router-link to="/publishing/card">Card</router-link></li>
          <li><router-link to="/publishing/image">Image</router-link></li>
          <li><router-link to="/publishing/swiper">Swiper</router-link></li>
          <li><router-link to="/publishing/lazy">Lazy</router-link></li>
          <li><router-link to="/publishing/chart">Chart</router-link></li>
          <li><router-link to="/">HOME</router-link></li>
        </ul>
      </div>
      <button class="btn-toggle" type="button" @click="toggleStatus = !toggleStatus"><span
        class="blind">열고/닫기</span></button>
      <p class="link-publist">
        <router-link to="/publishing/publist/total">PUBLISHING LIST</router-link>
      </p>
      <p class="link-convention">
        <router-link to="/publishing/convention/rule1">PUBLISHING CONVENTION</router-link>
      </p>
    </div>
    <div class="publishing-container">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "&/guide/scss/publishing-guide.scss";
@include menu-list;
</style>