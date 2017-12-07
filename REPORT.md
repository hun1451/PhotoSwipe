# &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; REPORT
---

## 2017년도 2학기 `오프소스소프트웨어` 과목 보고서

---

### 1. 팀원
```
> 팀장 : 전영욱(20134789)
> 팀원 : 김희환(20104696), 한상원(20134793)
```

---

### 2. 오픈 소스 선택 이유 및 소개

&nbsp;최근의 웹서비스들은 많은 사용자들의 모바일 접속에 대응하기 위하여, 다수의 서비스제공자들은 반응형 웹앱을 제작하여 서비스하고 있습니다.<br>
&nbsp;모바일 웹페이지에서 주류를 이루는 컨텐츠는 사진과 동영상일 것입니다. 이러한 사진을 보기위해서 과거에는 `버튼`을 클릭하여 `다음` 혹은 `이전` 사진으로 이동해야 했었습니다.<br>
&nbsp;하지만 터치가 가능한 스마트폰의 대중화로 인해 `사용자`들의 요구에 맞는 오픈소스의 개발이 이루어져왔고, 현재에는 사용자들에게 스마트폰을 통한 모바일 웹페이지에서의 사진감상에 편리함을 제공하고 있습니다.<br>

&nbsp;저희가 선택한 이 오픈소스는 `PhotoSwipe`입니다. 과거 버튼클릭 방식의 사진이동을 `제스처` 기반의 경험을 제공할 수 있게 해주는 자바스크립트(`java script`)기반의 오픈소스 입니다.<br>
- `멀티터치`(두손가락을 이용한 터치)를 통해 사진을 확대하거나,
- 열려있는 사진을 닫고 갤러리로 이동할 수 있으며,  
- `단독터치`(한손가락or마우스)를 통해 사진을 위로 올려 사진을 닫고 갤러리로 이동하거나,
- 옆으로 넘겨 이전 혹은 다음 사진으로의 이동을 가능하게 해줍니다. 
- 또한 브라우저 `히스토리 기능`을 통하여 뒤로 가기시(백스페이스or뒤로가기버튼) 갤러리가 닫히지 않고 사진에서 갤러리로의 이동을 가능하게 해주며, 
- 이외에도 데이터 도착전 `점진적 이미지표시` 기능, 
- `미리보기(썸네일)` 사진 즉시 표시 후 고해상도 이미지 전환, 
- `반응형 이미지 지원` 등의 여러 기능들을 지원 중입니다.

---

### 3. 역할 분담
-	**전영욱**
> - `api`사용 설명서 작성.
> - `커스텀 슬라이드` 설명서 작성.
> - PhotoSwipe원작자 프로젝트에서의 `FAQ` 번역작성.
-	**김희환**
> - `시작 단계`에 대한 설명서 작성. 
> - 소스코드에서의 `옵션` 값 설명서 작성. 
> - 성능 향상을 위한 `Tip` 작성. 
> - `README.md` 작성.
> - `index.md` 작성.
-	**한상원**
> - `반응형 이미지` 설명서 작성.
> - 이미지갤러리`SEO` 설명서 작성.
> - `업데이트사항` 번역 작성. 

------------
### 4. 진행 사항
<br>

- 초기화면에 표시될 `README.md`의 번역 작성.  
  - 이에 따른 링크 수정, 보고서, 상세설명서 링크 추가함. 
  - `README.md`로 ( > [이동](https://github.com/hun1451/PhotoSwipe/blob/master/README.md). )  
<br>

- `보고서` 작성. ( 현재페이지 )
<br>

#### 사용 설명서 작성. ( [website_kr/documentation/](https://github.com/hun1451/PhotoSwipe/tree/master/website_kr/documentation) 폴더에 작성됨. )
- `index.md` 작성 ( PhotoSwipe 소개 페이지 번역) > [이동](https://github.com/hun1451/PhotoSwipe/tree/master/website_kr/index.md)
  - 기술, 라이센스 문제점 등 정리되어있는 http://photoswipe.com/ 페이지 번역 작성.
<br>

- `시작하기(getting-started)` 작성. > [이동](https://github.com/hun1451/PhotoSwipe/blob/master/website_kr/documentation/getting-started.md).
  - `PhotoSwipe` 사진갤러리를 시작하기 위한 가이드  
  - 초기화하는 3단계 순서 작성.
  - 슬라이드 객체를 만드는 방법 작성.  
  - 링크 목록에서 슬라이드 배열을 만드는 방법 작성.
  - 원작자의 코드펜 링크 추가.
<br>

- `옵션 상세(options)` 작성. > [이동](https://github.com/hun1451/PhotoSwipe/blob/master/website_kr/documentation/options.md).  
  - PhotoSwipe 전체 옵션들에 대한 설명 작성.
  - 옵션 값에 따른 프로그램의 변화 설명 및 소스코드 주석 설명 작성. 
  - UI 옵션에 대한 설명 작성  
<br>

- `갤러리 성능향상 방법(performance-tips)` 작성. > [이동](https://github.com/hun1451/PhotoSwipe/blob/master/website_kr/documentation/performance-tips.md).  
  - 애니메이션에 따른 성능향상 방법 작성.
  - 파일 포함하는 방법 작성.
<br>

- `반응형 이미지` 설명서 작성. > [이동](http://github.com/hun1451/PhotoSwipe/blob/master/website_kr/documentation/responsive-images.md).  
  -  PhotoSwipe에서 반응하는 이미지를 어떻게 제공하는지 작성.
  - "매체" 이미지와 "원본"이미지 있다는 가정하에 반응이미지 제공 과정 작성.
  - 소스 코드에 대한 주석문 작성.
  - 사용시 유의점 작성.
<br>

- 이미지 갤러리`SEO` 설명서 작성. > [이동](https://github.com/hun1451/PhotoSwipe/blob/master/website_kr/documentation/seo.md).
  - 자바스크립트 이미지 갤러리에 대한 이상적인 HTML마크업 언어와의 관계 작성.
  - ex)가장 간단한 이미지로 연결되는 미리보기 목록 코드 작성.
  - <figure>과 <figcaption> 사용하는 경우, 코드 작성.
  - `ImagePalleryforImaging` 및 `ImageObject` 및 `ImageObject` 사용가능과 관련 코드 작성. > [이동](http://schema.org/ImageGallery). 
  - `Schema.org markup`를 사용해야 하는 경우 예시를 들어서 작성
  - 추가 권장 사항 작성  
<br>

- `업데이트 사항` 번역  .> [이동](https://github.com/hun1451/PhotoSwipe/blob/master/website_kr/documentation/updates.md)
  - PhotoSwipe 갤러리 최신 상태로 유지하는 방법 작성
  - 알림 업데이트 URL 및 설정 작성 
<br>

------------
### 5. 오류 개선

---------
### 6. 마무리
---------
