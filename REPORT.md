# &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; REPORT
---

## 2017년도 2학기 `오프소스소프트웨어` 과목 보고서

---

### 1. 팀원
```
> 팀장 : 전영욱(20134789 / hun1451)
> 팀원 : 김희환(20104696 / Heehwan-Kim), 한상원(20134793 / hth9021)
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
> - `데모사이트` 제작.
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

- `api.md` 작성. > [이동](https://github.com/hun1451/PhotoSwipe/blob/master/website_kr/documentation/api.md)
  - 메소드, 속성 소스코드 주석 설명 작성
  - 이벤트 설명과 소스코드 주석 설명 작성.
  - 동적으로 슬라이드 추가하는 방법 작성.
 <br>
  
- `custom-html-in-slides.md` 작성 > [이동](https://github.com/hun1451/PhotoSwipe/blob/master/website_kr/documentation/custom-html-in-slides.md)
  - 슬라이드에 맞춤 HTML을 추가 하는 방법 작성.
  - 추가 중요 메모(주의사항) 작성.
  - 소스코드 주석 설명 작성.
 <br>
  
- `faq.md` 작성  > [이동](https://github.com/hun1451/PhotoSwipe/blob/master/website_kr/documentation/faq.md)
  - PhotoSwipe에 대해 자주 묻는 질문과 답변 번역작성.
  - PhotoSwipe에 대해 알려진 문제점 번역작성.
  - 변경 내역 확인이나 업데이트 알림 받는 방법 작성.
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
### 5. 데모 사이트 구현

  - 사용 설명서를 작성해보니 개발자들과 사람들의 높은 참여도로 인해 계속 개선됨에 따라 더이상 오류나 큰 개선사항이 쉽게 찾아지지 않는 완성도 높은 오픈소스라고 생각되어, 직접 오픈소스를 활용하여 데모 사이트를 제작하여 이전 번역작성하였던 `PhotoSwipe 소개글`과 `PhotoSwipe갤러리`를 직접 구현해 보았습니다.
  - 서버는 Google에서 서비스 중인 `GoogleCloud`를 통해 Ubuntu OS를 탑재한 리눅스 서버를 이용하였습니다.
  - `node.js`와 `express.js`를 사용하여 `PhotoSwipe갤러리`구현을 위한 단일페이지 `http서비스를 제공`하고 있습니다. ( [server.js](https://github.com/hun1451/PhotoSwipe/blob/master/server.js) & [router/main.js](https://github.com/hun1451/PhotoSwipe/blob/master/router/main.js) )
  - [데모사이트로 이동](http://35.200.120.12)

---------
### 6. 과제 결과 링크
  - 오픈 소스 - [`PhotoSwipe`](https://github.com/dimsemenov/PhotoSwipe)
  - 프로젝트 진행 - [`GitHub`](https://github.com/hun1451/PhotoSwipe)
  - 협업 진행 과정 - [Commit](https://github.com/hun1451/PhotoSwipe/commits/master)
  - [Insights](https://github.com/hun1451/PhotoSwipe/pulse/monthly)
  - [README.md](https://github.com/hun1451/PhotoSwipe/blob/master/README.md)
  - 결과 보고서 - [REPORT.md](https://github.com/hun1451/PhotoSwipe/blob/master/REPORT.md)
  - 구현한 [데모 사이트](http://35.200.120.12/)   (접속이 안될시 [DEMO_SITE.pdf](https://github.com/hun1451/PhotoSwipe/blob/master/DEMO_SITE.pdf)를 참조.)
  - 사용 설명서 [/website_kr/documentation](https://github.com/hun1451/PhotoSwipe/tree/master/website_kr/documentation)
      - 시작 안내서 - [getting-started.md](https://github.com/hun1451/PhotoSwipe/blob/master/website_kr/documentation/getting-started.md)
      - 옵션 값 명세 - [options.md](https://github.com/hun1451/PhotoSwipe/blob/master/website_kr/documentation/options.md)
      - api 명세 - [api.md](https://github.com/hun1451/PhotoSwipe/blob/master/website_kr/documentation/api.md)
      - 커스텀 슬라이드 - [custom-html-in-slides.md](https://github.com/hun1451/PhotoSwipe/blob/master/website_kr/documentation/custom-html-in-slides.md)
      - 자주 묻는 질문 답변 - [faq.md](https://github.com/hun1451/PhotoSwipe/blob/master/website_kr/documentation/faq.md)
      - 성능 향상 팁 - [performance-tips.md](https://github.com/hun1451/PhotoSwipe/blob/master/website_kr/documentation/performance-tips.md)
      - 반응형 이미지 - [responsive-images.md](https://github.com/hun1451/PhotoSwipe/blob/master/website_kr/documentation/responsive-images.md)
      - SEO - [seo.md](https://github.com/hun1451/PhotoSwipe/blob/master/website_kr/documentation/seo.md)
      - 업데이트 사항 - [updates.md](https://github.com/hun1451/PhotoSwipe/blob/master/website_kr/documentation/updates.md)

---------
### 7. 마무리
#### 프로젝트 후기 및 소감
-	**전영욱**
> - 처음 오픈소스SW를 선정 할때부터 어떻게 해야할까 많은 고민을 안고 시작하였는데, 선정하고 사용설명서를 작성하다보니  github를 사용하는 법이 확실하게 향상된거 같다. 그리고 팀원들과의 github로의 협업이 처음에는 낯설고 어렵게 느껴졌지만 사용할수록 효율적인 방식이라고 생각되고, PhotoSwipe의 사용설명서를 새로 작성하고 또 영문을 번역을 하고 모든게 새로운 경험이였다고 생각하고 만족스러운 프로젝트 결과라고 생각한다.
- **김희환**
> - 그동안 핸드폰을 통해 웹상에서 사진을 볼때 자연스럽게 손가락을 휙휙 넘기며 볼수있게 해주었던 기능인 Swipe기능이 오픈소스를 통해 공개가 되었기 때문에 가능했던 것 같습니다. 여러 개발자들이 머리를 맞대고 여러 사람들을 위한 기능과 프로그램들을 만들어 주고 있다는 것을 이번 수업을 통해 GitHub를 접하면서 알게되었습니다. 수업을 통해 GitHub의 사용법을 배우고 팀원간의 프로젝트를 통하여 직접 오픈소스를 나만의 공간에 담아 팀원들과 함께 머리를 맞대고 무언가를 할 수 있다는 것은 참 좋은 경험인 것 같습니다. GitHub와 오픈소스에 대해 배우기 전에는 팀프로젝트 시에 소스병합에 애를 참 많이 먹었었는데, GitHub를 통한 협업이라면 앞으론 그런 걱정은 없어도 될 것이라고 생각합니다. 직접 소스코드를 짜서 프로그램을 만들어 공유한 것은 아니지만, 남의 소스를 가져온 것뿐인데도 그 프로젝트에 대해 사용설명서 작성 등 프로젝트 활동을 하다보면 나도 이 프로젝트에 기여를 하고 있구나라는 생각과 함께 성취감도 느낄 수 있던 보람찬 프로젝트였다고 생각합니다.
- **한상원**
> - 막연히 PhotoSwipe와 같은 프로그램을 만들려고 했으면 불가능 했을 것입니다. 하지만, 이번 오픈소스 과목을 통해 Github 사이트와 오픈소스 활용법 빌드 해보는 법, 그리고 프로젝트에 있어서 가장 중요한 협업을 가능하게 해줘 프로그래밍 개발이 좀 더 향상 되었던 것 같습니다. PhotoSwipe 오픈소스를 선택하여 이 프로그램의 모션을 통한 사진이동이 가장 기억에 남는 효율적인 기능이라고 생각합니다. PhotoSwipe 기능향상에 사진에 그림이나 글자를 적을
수 있는 기능과 제한된 앨범 크기 안에 여러장의 사진을 넣을 수 있는 기능을 추가하게된다면 좀 더 PhotoSwipe 프로그램의 기능이 향상 될 것 같다고 생각합니다. 무엇보다 Github에서 조원들이 무엇을 했는지 어떻게 했는지를 보면서 참고 할 수 있다는 점이 프로젝트에 있어서 가장 효율적이였다고 생각합니다. 프로젝트에 참여하고있다는 소속감도 들어서 보람찼습니다.
이번 프로젝트를 통해서 처음 접하는 부분이여서 미숙한 부분이 있었지만 끝 까지 함으로써 좋은 결과가 나왔다고 생각합니다.
---
