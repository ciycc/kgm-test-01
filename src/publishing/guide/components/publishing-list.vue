<template>
  <div class="publishing-list">
    <h1>퍼블리싱 리스트</h1>
    <div class="contents-wrap">
      <router-view />
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.publishing-list {
  display: flex;
  flex: 1;
  flex-direction: column;
  .contents-wrap {
    flex: 1;
    border: 1px solid #000;
  }
}
</style>