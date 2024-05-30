# Style 기본 가이드
## 작성시 주의사항
- 다른 File에 Style을 결합하는 @use, @import는 최상단에 작성합니다.
- 다른 Style File을 결합할 경우 @import 보다는 @use사용을 지향합니다. 그러니 @use사용법을 숙지 바랍니다.
<br><br><br>

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
1. 본문: 1 ~ 9
2. sticky: 10 ~ 19
3. 툴팁: 20 ~ 29
4. Sticky: 30 ~ 39
5. Layer Popup: 40 ~ 49
6. Bottom Sheet: 50 ~ 59
7. 전체메뉴: 60 ~ 69
8. Modal: 70 ~ 79
9. Alert: 80 ~ 89
10. ETC: 90 ~ 99
11. Loading: 100 ~
<br>
