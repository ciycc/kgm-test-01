<script setup>
const router = useRouter();
</script>
<template>
  <span>HOME HOME </span>
  <p><button type="button" @click="router.push('/home2')">홈2로 이동</button></p>
  <p><button type="button" @click="router.push('/publishing')">펴블리싱가이드 이동</button></p>
</template>
<style lang="scss" scoped></style>
