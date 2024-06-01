<script setup>
const router = useRouter();
</script>
<template>
  <div>
    <h1>HOME</h1>
    <p><button type="button" @click="router.push('/publishing/br/')">브렌드 메인 이동</button></p>
    <p><button type="button" @click="router.push('/publishing/guide')">펴블리싱가이드 이동</button></p>
  </div>
</template>
<style lang="scss">
.home-btn {
  @include button;
}
</style>