<template>
  <div class="publishing-convention">
    <h1 class="container-title">Publishing Convention</h1>
    <div class="menu-convention">
      <ul>
        <li>
          <router-link class="cursor-zoom" to="/publishing/convention/rule1">RULE1</router-link>
        </li>
        <li>
          <router-link class="cursor-zoom" to="/publishing/convention/rule2">RULE2</router-link>
        </li>
        <li>
          <router-link class="cursor-zoom" to="/publishing/convention/rule3">RULE3</router-link>
        </li>
        <li>
          <router-link class="cursor-zoom" to="/publishing/convention/rule4">RULE4</router-link>
        </li>
        <li>
          <router-link class="cursor-zoom" to="/publishing/convention/rule5">RULE5</router-link>
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
