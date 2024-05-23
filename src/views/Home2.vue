<script setup>
  const router = useRouter();
</script>
<template>
  <span class="txt1">HOME HOME 22222 </span>
  <button type="button" @click="router.push('/')">홈으로 이동</button>
</template>
<style scoped>
.txt1 {
  color: var(--blue-500);
}
</style>
