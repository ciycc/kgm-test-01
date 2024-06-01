# JS 기본 가이드
## 함수 주석

```bash
/**
 * num1와 num2를 더한 결과를 반환
 * @param {number} num1 첫번째 숫자
 * @param {number} num2 두번째 숫자
 * @returns {number} num1과 num2를 더한 결과
 */
function sum(num1, num2) {
  return num1 + num2;
}
```

## 사용처별 표기법
|표기법|사용처|
|-:|:-|
|*Camel Case*|변수명, 함수명|
|*Pascal Case*|클래스 생성자|
|*Snake Case*|상수명|

<br><br>

# VUE 기본 가이드

## 초기 시작
```bash
pnpm dev
````

## 기본 문서
```bash
<script setup>

</script>

<template>
  <div></div>
</template>

<style lang="scss" scoped>

</style>
```
