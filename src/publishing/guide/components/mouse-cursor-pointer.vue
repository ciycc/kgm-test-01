<script setup>
const props = defineProps({
  mouseShape: {
    type: String,
    default: '',
  },
});
</script>
<template>
  <div class="mouse-cursor-pointer" :class="[props.mouseShape]">
    <div class="ball" />
  </div>
</template>

<style lang="scss" scoped>
.mouse-cursor-pointer {
  position: fixed;
  pointer-events: none;
  transform: translate(-50%, -50%);
  opacity: .7;
  mix-blend-mode: difference;

  .ball {
    width: rem(10);
    height: rem(10);
    background: #e40077;
    border-radius: 50%;
    transition: all .1s linear;
  }

  &.zoom {
    .ball {
      width: rem(30);
      height: rem(30);
    }
  }
}
</style>