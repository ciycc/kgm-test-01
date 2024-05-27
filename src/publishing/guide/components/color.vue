<script setup>
import { useSetMouseShape } from '&/guide/composables/useMouse';
import MouseCursorPointer from '&/guide/components/mouse-cursor-pointer.vue';

const { mouseStatus } = useSetMouseShape();
</script>
<template>
  <div>
    <h1 class="container-title">Color Guide</h1>
    <MouseCursorPointer v-if="mouseStatus" />
  </div>
</template>

<style lang="scss" scoped></style>
