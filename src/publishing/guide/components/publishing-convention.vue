<template>
  <div class="publishing-convention">
    <h1 class="container-title">Publishing Convention</h1>
    <div class="menu-convention">
      <ul>
        <li>
          <router-link class="cursor-zoom" to="/publishing/convention/rule1">Basic</router-link>
        </li>
        <li>
          <router-link class="cursor-zoom" to="/publishing/convention/rule2">Markup</router-link>
        </li>
        <li>
          <router-link class="cursor-zoom" to="/publishing/convention/rule3">Style</router-link>
        </li>
        <li>
          <router-link class="cursor-zoom" to="/publishing/convention/rule4">VUE &amp; JS</router-link>
        </li>
        <li>
          <router-link class="cursor-zoom" to="/publishing/convention/rule5">Etc</router-link>
        </li>

      </ul>
    </div>
    <div class="contents-wrap">
      <router-view />
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@use "&/guide/scss/publishing-contents.scss" as *;
@include publist-convention;
</style>
