<div class="md-section">

# Style 기본 가이드
## 작성시 주의사항
- 다른 File에 Style을 결합하는 @use, @import는 최상단에 작성합니다.
- vue 파일에서 scss를 결합할 때는 @import를 이용하고, scss 파일에서 다른 scss파일을 결합할 때는 @use를 사용합니다.
<br><br>

*vue file에서 다른 sass file 결합 방식*

```bash
(생략)
</template>

<style lang="scss">
@import "~/pages/br/scss/brand-car.scss";
</style>
```
<br><br>

*sass file에서 다른 scss file 결합 방식*

```bash
@use "~/scss/mixin/br/mixin.scss" as *;
```


## @use 사용법

*[예시 1-1]* 다른 File에 Style을 결합 할 경우
```bash
  기본 형식
  @use "Scss Path";

  @use "~/scss/service/intro";
```

<br><br>

*[예시 1-2]* 다른 Style File에 Module을 사용 할 경우
```bash
  기본 형식
  @use "Scss Path" as *;

  @use "~/scss/util.scss" as *
  
  @include rem(10);
```

<br><br>

*[예시 1-3]* 다른 Style File에 네임스페이스를 이용해 Module을 사용 할 경우
```bash
  기본 형식
  @use "Scss Path" as ;

  @use "~/scss/util.scss" as a
  @include a.rem(10);
```
<br>

## z-index
1. 본문: 1 ~ 10
2. sticky: 11 ~ 20
3. 툴팁: 21 ~ 30
4. Sticky: 31 ~ 40
5. Layer Popup: 41 ~ 50
6. Bottom Sheet: 51 ~ 60
7. 전체메뉴: 61 ~ 70
8. Modal: 71 ~ 80
9. Alert: 81 ~ 90
10. ETC: 91 ~ 100
11. Loading: 101 ~
<br>
<br>

## style 작성 순서
1. *노출 속성* (display, overflow)
2. *위치 속성* (position)
3. *BOX 속성* 크기 간격 / 여백 (width, height, padding, margin)
4. *디자인 속성* 테두리 / 배경 / 글꼴 (border, background, font)
5. *애니메이션 속성*
6. *기타 속성*
<br>
<br>

</div>