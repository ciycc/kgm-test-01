### ====== 수정 이력 =======
|수정 날짜|내용|
|-:|:-:|
|2024-05-29|최초작성|

---

# Publishing Basic Environment

## 프로젝트 기본 개요
- KGM홈페이지구축
<br>

## 퍼블리싱 개발 환경
### Publishing Basic Environment
|구분|내용|
|-:|:-|
|*Language*|vue3 / vite (**별도 개발 협의 필요**)|
|*Node Version*|v20.13.1 (**별도 개발 협의 필요**)|
|*Style*|scss|
|*Script*|- ES6<br> - ESLint Airbnb|
|*Font*|**미정**|
|*Descktop*| **(IE 지원) 미정** |
|*Table*| **(MO, PC) 미정** |
|*Mobile*| **(IOS, AOS 최소 버전)미정**<br><br>**(디바이스 지원) 미정** |
|*Editor*|vscode|
|*해상도*|- PC: ~1600(**Default 확인 필요**)<br> - MO: 360px<br><small>&nbsp;(가능한 최소 320px 까지 대응)</small> |

### Publishing Node Package
|구분|패키지명|내용|
|:-|:-|:-|
|*global*|pnmp|package 관리|
|*dependencies*|pinia|전역 상태 변경|
|*devDependencies*|postcss|css전처리기|
||autoprefixer|css접두사|
||sass|sass컴파일|
||unplugin-auto-import|sass컴파일|
||vite-plugin-vue-markdown|md변환|
||markdown-it-shiki|md변환|
||@vue/eslint-config-airbnb|airbnb eslint|
||@rushstack/eslint-patch|airbnb eslint 최신화|
||gsap|Motion Manage|

<br>

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


## 폴더 구조
```bash
├─dist
├─public
│  ├─fonts
│  └─images
└─src
    ├─assets
    ├─components
    ├─publishing
    │  ├─guide
    │  ├─pages
    │  └─router
    ├─router
    ├─service
    │  ├─scss
    │  └─pages
    ├─system
```
<br>

## Vue File Path
- 제공되는 router 경로 기준으로 작성합니다. (**개발 협의 필요**)

## 파일명 규칙
### 표기법 종류
|구분|내용|
|-:|:-|
|*Kabab Case*|ex) member-join-step|
|*Camel Case*|ex) memberJoinStep|
|*Snake Case*|ex) member_join_step|
|*Pascal Case*|ex) MemberJoingStep|


### 파일별 표기법
|구분|내용|
|-:|:-|
|*Vue Page*|- Kabab Case<br>- 최대 4단어 이하|
|*Vue Component*|- Kabab Case<br>- 최대 4단어 이하<br>- import에는 Pascal Case 사용|
|*Image*|- Kabab Case<br>- 최대 4단어 이하<br>- 파일명 규칙은 아래 [이미지 사용]내용 참고|
|*Scss*|- Kabab Case<br>- 최대 4단어 이하|
|*JS*|- Kabab Case<br>- 최대 4단어 이하|

<br>

## 이미지 사용
### 이미지 폴더 구조

- 각 페이지에 해당하는 아이콘은 각 페이지 폴더 내에  [icons] 폴더에 저장하고, 공통일 경우에만 [common] 폴더에 [icons] 폴더에 저장합니다.
- 아이콘 외에 이미지는 각 페이지 폴더에 저장합니다.
- 글로벌 이미지일 경우에는 [global] 폴더에 저장합니다.

<br>

```bash
├─br
├─cm
│  └─icons
├─data
│  ├─ma
│  ├─od
│  └─( ~생략~ )
├─ma
│  └─icons
├─me
│  └─icons
├─my
│  └─icons
├─od
│  └─icons
├─pd
│  └─icons
├─pr
│  └─icons
├─global
│  ├─cm
│  │  └─icons
│  ├─gbr
│  │  └─icons
│  ├─gcm
│  │  └─icons
│  ├─gma
│  │  └─icons
│  └─gpr
│      └─icons
└─sr
    └─icons
```

### 이미지 확장자

|구분|내용|
|:-:|:-:|
|아이콘|.svg|
|사진|.jpg|
|투명 배경 이미지|.png|


### 이미지 파일명 접두어
|구분|내용|
|:-:|:-|
|아이콘|icon-XXX|
|사진|img-XXX|
|데이터|@data-XXX|

<br>