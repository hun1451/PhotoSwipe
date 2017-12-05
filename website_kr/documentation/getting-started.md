---

layout: default

title: "PhotoSwipe Documentation: Getting Started"

h1_title: Getting Started

description: PhotoSwipe image gallery getting started guide.

addjs: true

canonical_url: http://photoswipe.com/documentation/getting-started.html

buildtool: true

markdownpage: true

---

시작하기 전에 알아야 할 사항 :

시작하기 전에 알아야 할 사항 :

- PhotoSwipe는 간단한 jQuery 플러그인이 아니며 최소한 기본적인 자바 스크립트 지식은이 요구됩니다.
- PhotoSwipe는 미리 정의 된 이미지 크기가 필요합니다.
- 응답이없는 웹 사이트에서 PhotoSwipe를 사용하는 경우 & ndash; 컨트롤은 모바일에서 확장됩니다 (전체 페이지의 크기가 조정됨에 따라). 따라서 맞춤 컨트롤 (예 : 오른쪽 상단에 단일 큰 닫기 버튼)을 구현해야합니다.
- 문서의 모든 코드는 순수한 Vanilla JS이며 IE 8 이상을 지원합니다. 웹 사이트 또는 앱에서 jQuery 또는 MooTools와 같은 일부 JavaScript 프레임 워크를 사용하거나 이전 브라우저를 지원할 필요가 없는 경우 코드를 단순화하십시오.
- 모바일 용으로 큰 이미지 (2,000x1500 픽셀 이상)를 제공하지 마십시오. 애니메이션 성능이 크게 저하되고 특히 iOS Safari 브라우저에서 충돌이 발생할 수 있습니다. 가능한 해결책 : [반응 형 이미지 제공] (responsive-images.html) 또는 별도의 페이지에서 이미지 열기 ([Leaflet] (http://leafletjs.com/)와 같은 이미지 타일링을 지원하는 라이브러리 사용 ([more] FAQ] (faq.html # mobile-crash)).

##<a name="initialization"></a> 초기화(Initialization)

##<a name="init-include-files"></a> 1단계 : JS 및 CSS 파일을 Include

[GitHub](https://github.com/dimsemenov/PhotoSwipe) 저장소의 [dist /](https://github.com/dimsemenov/PhotoSwipe/tree/master/dist) 폴더에서 찾을 수 있습니다.Sass 및 컴파일되지 않은 JS 파일은 [src /] (https://github.com/dimsemenov/PhotoSwipe/tree/master/src) 폴더에 있습니다. 기존 스타일을 수정할 계획이라면 Sass를 사용하는 것이 좋습니다. 코드는 구조화되고 주석 처리되어 있습니다.

