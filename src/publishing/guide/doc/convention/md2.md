# Markup 기본 가이드
## Markup Basic Rules
### 주의 사항
- *마크업시 HTML5문법을 따르고, 시멘틱마크업을 준수*하여 작성합니다.
- 언어[lang]속성은 *한국어일 경우에는 "ko"*, 영어일 경우에는 "en"으로 설정합니다.
- *인코딩은 유니코드[utf-8]* 방식으로 적용합니다.
- 기본 *들여쓰기[indent_size]는 2로* 설정합니다.
- *장애인 접근성은 준수*하여 작성합니다. <br><small> ( 단, 접근성 마크 획득 목적은 아닙니다. ) </small>
- ID 속성은 필요 속성에 의해 사용되는 속성을 제외하고는 최대한 지양합니다.
- 재활용이 필요한 코드는 컴포넌트(component)로 제작하여 사용합니다.


### 기본 구조
```bash
<script setup>

</script>

<template>
  <div></div>
</template>

<style lang="scss" scoped>

</style>
```

## Class Basic Rules
### class 이름 작성시 주의 사항 
- BEM 네이밍 룰을 따릅니다.
- 상태까지 포함 최대 5단어 까지 작성합니다.

### BEM 네이밍 룰이란
- BEM은 기본적으로 id를 사용하지 않으며, class만을 사용한다.
- 어떻게 보이는가 가 아니라 어떤 목적인가에 따라 이름을 짓는다.
- 예를 들어, 에러 메세지를 띄우는 P태그에는 .red가 아니라 .error 라는 이름을 줘야 한다.
- 이름을 연결 할 때는 block-name 과 같이 하이픈 하나만 써서 연결한다.
- *B-Block:* BEM 에서 B는 Block 을 의미한다. <br>실제 환경에서 Block은 사이트의 Nav, Header, Footer 등 재사용 가능한 기능적으로 독립적인 페이지 컴포넌트를 말한다.
<br><br>

다음 *[그림1-1]* 에 Logo 는 어딘가에 종속되지 않는다. header에 쓰일 수도 있고, footer에 쓰일 수도 있다. **이렇게 재사용할 수 있는 요소를 block이라고 한다.**
<br><br>

*[그림 1-1] B-Block 설명*
<img src="/src/publishing/guide/images/guide-bem-1.png" width="60%" alt="BEM설명1" />
<br><br><br>

- *E-Element:* BEM 에서 E는 block을 구성하는 단위로 Element 를 의미한다. block은 독립적인 형태인 반면, **Element는 의존적인 형태다. 자신이 속한 block 내에서만 의미를 가지기 때문에 block 안에서 떼어다 다른 데 쓸 수 없다.**
<br><br><br>

*[그림 1-2] E-Element 설명*
<img src="/src/publishing/guide/images/guide-bem-2.png" width="60%" alt="BEM설명2" />
<br><br><br>

- *M-Modifier:* BEM 에서 M은 block이나 *Element의 속성을 의미한다.* 같은 tab이어도 hover나 focus에 따라 css 효과가 달라질 때 이를 구분하기 위해 사용한다.
<br><br><br>

다음 *[예시 1-1]* 에 해당 코드에서 --focused가 수식어에 해당된다. 이렇게 작성된 걸 boolean 타입이라고 하는데 그 값이 true 일 때 라고 가정하고 사용한다.
<br><br>

*[예시 1-1] BEM 속성 표기*
```bash
<ul class="tab">
  <li class="tab__item tab__item--focused">탭 01</li>
  <li class="tab__item">탭 02</li>
  <li class="tab__item">탭 03</li>
</ul>
```
<br>

*[예시 1-2] Bad (X)*

```bash
<form class="search-form">
  <div class="search-form__content">
      <input class="search-form__content__input"/>
      <button class="search-form__content__button">Search</button>
  </div>
</form>
```
<br>

*[예시 1-3] Good (O)*

```bash
<form class="search-form">
  <div class="search-form__content">
      <input class="search-form__input"/>
      <button class="search-form__button">Search</button>
  </div>
</form>
```
### Page Root Class
- 최대 5단어 까지 작성합니다.
- page-모듈명-(페이지)구분 이름-wrap<br><small> ( 모듈명은 아래[표 1-1]을 참고하세요. )</small>

<br>

*[표 1-1]*
|구분|모듈|표기|
|:-:|:-:|:-:|
|*국내*|메인|MA|
||브랜드&뉴스|BR|
||모델&목록|PR|
||검색|PD|
||구매|OD|
||고객서비스|SR|
||회원|ME|
||마이페이지|MY|
||공통|CM
|*해외*|메인|G_MA|
||브랜드|G_BR|
||모델&목록|G_PR|
||공통/고객센터|G_CM|


### Layer(layer, modal, toolip) Class 작성 방법
-  최대 5단어 까지 작성합니다.
- *Layer:* layer-모듈명-레이어 구분 이름-wrap
- *Modal:* modal-모듈명-모달 구분 이름-wrap
- *Tootip:* tootip-모듈명-툴팁 구분 이름-wrap
<br><br>

*[예시 1-4] Layer Root Class 표기법*
```bash
<script setup>

</script>

<template>
 <Layer class="layer-ma-event-wrap">
  <div>
    ~ 생략 ~
  </div>
  </Layer>
</template>

<style lang="scss" scoped>

</style>
```

### 속성 작성 순서
1. 요소에 속성( src, for, type, href, value )
2. 선택자 속성( class )
3. 구분 이름 속성( id, name )
4. 커스텀 속성( data-* )
5. 부연 설명 속성( title, alt )
6. 접근성 속성( role, aria-* )
7. 뷰 속성( v- )