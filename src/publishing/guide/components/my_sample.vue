<script setup>
import useMouse from '&/guide/composables/useMouse';
import { mouseStore } from '&/guide/store/mouseStore';

/*
  중요 요점 [store와 composable의 차이점]

  store는 전역 상태(변수)를 공유하기 위해 사용합니다.
  composable은 공통 수행문 또는 함수를 사용하는 목적으로 사용됩니다.
*/

/* 3. [composable 01] 공통으로 사용되는 수행문 또는 함수는 composable을
이용하여 사용해야 합니다. */
const { changeNum } = useMouse();

const msStore = mouseStore();
// 1. [store 01]store에 Action(메서드)은 공통으로 대부분 사용하므로 composable에서 사용하면 될 듯 싶습니다.
// const { setGxy } = msStore;

/* 2. [store 02]store에 변수 또는 computed는 그냥 불러오면 반응성을 잃으므로
반응성을 위해서는 storeToRefs 메서드를 (반드시)사용해야 합니다. */
const { gx, gy } = storeToRefs(msStore);

</script>
<template>
  <div>
    <h1 class="container-title">Color Guide</h1>
    <p>Mouse position is at: {{ gx }}, {{ gy }}</p>
    <p><button type="button" @click="changeNum(10, 10)">버튼(10,10)</button></p>
    <p><button type="button" @click="changeNum(20, 20)">버튼(20,20)</button></p>
    <p><button type="button" @click="changeNum(30, 30)">버튼(30,30)</button></p>
  </div>
</template>

<style lang="scss" scoped></style>
