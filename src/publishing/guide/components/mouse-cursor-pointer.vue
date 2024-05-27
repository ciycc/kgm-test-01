<template>
  <div class="mouse-cursor-pointer">
    <div class="ball" />
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.mouse-cursor-pointer {
  position: fixed;
  pointer-events: none;
  transform: translate(-50%, -50%);
  opacity: .7;
  mix-blend-mode: difference;

  .ball {
    width: rem(15);
    height: rem(15);
    background: #ff0;
    border-radius: 50%;
  }
}
</style>