<script setup>
</script>

<template>
  <div class="publishing-list">
    <h1 class="container-title">Publishing List</h1>
    <div class="menu-list">
      <ul>
        <li>
          <router-link class="cursor-zoom" to="/publishing/publist/total">전체</router-link>
        </li>
        <li>
          <router-link class="cursor-zoom" to="/publishing/publist/cat1">CAT1</router-link>
        </li>
        <li>
          <router-link class="cursor-zoom" to="/publishing/publist/cat2">CAT2</router-link>
        </li>
        <li>
          <router-link class="cursor-zoom" to="/publishing/publist/cat3">CAT3</router-link>
        </li>
        <li>
          <router-link class="cursor-zoom" to="/publishing/publist/cat4">CAT4</router-link>
        </li>
        <li>
          <router-link class="cursor-zoom" to="/publishing/publist/cat5">CAT5</router-link>
        </li>
      </ul>
    </div>
    <div class="contents-wrap">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "&/guide/scss/publishing-contents.scss";
@include publist-convention;
</style>
