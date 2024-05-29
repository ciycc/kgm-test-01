# 레이어 팝업 안내
### 1. 파일위치
<br>

- 리스트1
    - 리스트1-1
- 리스트2
- 리스트3

1. 리스트1
    1. 리스트1
    2. 리스트2
2. 리스트2
3. 리스트3

<br>

### 1. 파일위치
```bash
# 공통
- 공통(VUE): /src/publishing/components/layer
- 공통(SCSS): /src/service/components/scss/layer

# 지역
- 지역(VUE): /src/publishing/pages/도메인/components/layer
- 지역(SCSS): /src/service/pages/도메인/scss/layer
```

### 2. 파일명
```bash
- 파일명은 "modal-"로 시작합니다. ex) modal-파일명.vue
```

### 3. 버튼명
```bash
# MOBILE에서만 사용
- {{화면ID}}(MO) - {{콤포넌트명}} 
(※ MO: MOBILE에서만 확인 가능)

# PC에서만 사용
- {{화면ID}}(PC) - {{콤포넌트명}} 
(※ PC: PC에서만 확인 가능)

# PC/MOBILE에서 사용
- {{화면ID}}(MOPC) - {{콤포넌트명}} 
(※ MOPC: MOBILE, PC 모두 확인 가능)
```

### 4. 레이어 팝업 리스트
```bash
- 화면ID로 검색해주세요.
```

### 5. 작업규칙
```bash
- 화면ID가 있는 Layer 컴포넌트만 본 페이지에 버튼을 생성하여 연동합니다.
  (※ 해당 지역 페이지에는 연동하지 않습니다.)

- 화면ID가 없는 Layer 컴포넌트는 해당하는 지역 페이지에 직접 연동합니다.
```

|제목|내용|설명|
|:-:|:-|:-:|
|*왼쪽정렬*|오른쪽정렬오른쪽정렬오른쪽정렬오른쪽정렬|중앙정렬|
|*왼쪽정렬*|오른쪽정렬|중앙정렬|
|*왼쪽정렬*|오른쪽정렬|중앙정렬|


|제목1|제목2|제목3|
|:-:|:-:|:-:|
|내용1|내용2|내용3|

* 1234 *555*

2142sdfjsdfljsakfj **666** sdfjlsjlfjsdlfjslajf
__777__