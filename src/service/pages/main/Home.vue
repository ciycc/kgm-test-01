<script setup>
const router = useRouter();
</script>
<template>
  <div>
    <span>HOME HOME </span>
    <p><button class="home-btn" type="button" @click="router.push('/home2')">홈2로 이동</button></p>
    <p><button type="button" @click="router.push('/publishing/guide')">펴블리싱가이드 이동</button></p>
  </div>
</template>
<style lang="scss">
.home-btn {
  @include button;
  width: rem(500);
}
</style>
