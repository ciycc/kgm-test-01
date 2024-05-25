<script setup>
import useMouse from '&/guide/composables/useMouse';
import { mouseStore } from '&/guide/store/mouseStore';

// [store 01] global (상태)변수를 사용하기 위해 store를 사용했습니다.
const msStore = mouseStore();
// [store 02] 필요한 global (상태)변수를 불러왔습니다.
const { gx, gy } = storeToRefs(msStore);

// [composable 03] 공통 수행문 또는 함수를 사용을 위해 사용
const { changeNum } = useMouse();
</script>
<template>
  <div>
    <h1 class="container-title">Font Guide</h1>
    <p>Mouse position is at: {{ gx }}, {{ gy }}</p>
    <p><button type="button" @click="changeNum(10, 10)">버튼(10,10)</button></p>
    <p><button type="button" @click="changeNum(20, 20)">버튼(20,20)</button></p>
    <p><button type="button" @click="changeNum(30, 30)">버튼(30,30)</button></p>
  </div>
</template>

<style lang="scss" scoped>

</style>
