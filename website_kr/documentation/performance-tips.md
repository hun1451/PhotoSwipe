---

layout: default

title: PhotoSwipe Performance Tips

h1_title: Performance Tips

description: Suggestions on how to make gallery faster.

addjs: true

canonical_url: http://photoswipe.com/documentations/performance-tips.html

buildtool: true

markdownpage: true

---

## 애니메이션

- 애니메이션 성능은 이미지의 크기에 따라 크게 달라집니다. 더 작은 이미지 & ndash; 더 부드러운 애니메이션. 따라서 게으르지 않고 [반응 형 이미지 제공](responsive-images.html) 또는 적어도 휴대 전화 용 1200x1200 이상의 이미지는 제공하지 마십시오
- 페인트 또는 레이아웃을 유발할 수있는 애니메이션 중에는 아무 것도하지 마십시오. DOM에 새 요소를 추가하지 마십시오. `표시`또는 `가시성`을 변경하지 마십시오. `변형`과 `불투명도`만 변경할 수 있습니다. 애니메이션이 끝난 후 모든 변경 사항을 지연하십시오. & ndash; `beforeChange` (슬라이드 전환),`initialZoomInEnd` (애니메이션의 초기 확대가 끝남) 및`initialZoomOutEnd` (초기 축소 애니메이션이 종료 됨) 이벤트를 사용합니다.
- 확대 / 축소 애니메이션이 활성화 된 경우 (첫 번째 규칙 적용) PhotoSwipe를 여는 축소판에 복잡한`: hover` 및`: active` 효과를 피하십시오.
- PhotoSwipe 슬라이딩 영역을 통해 UI에 복잡한 스타일이 없는지 확인하십시오. 예를 들어, 캡션 텍스트의`text-shadow`는 문제를 일으킬 수 있습니다.

위 단계를 수행하고 갤러리의 성능이 [PhotoSwipe 홈페이지](http://photoswipe.com)와 다른 경우 관련되지 않은 모든 JS / CSS / HTML 코드를 제외하여 페이지에서 PhotoSwipe를 격리하십시오. PhotoSwipe 뒤에 계속해서 애니메이션을 실행하는 배너 로테이터가 없는지 확인하십시오.

PhotoSwipe를 분리 한 후에도 빠르게 작동하지 않으면 & ndash; [GitHub의 문제](https://github.com/dimsemenov/PhotoSwipe/issues)를 열고 [축소 된 테스트 케이스] (http://css-tricks.com/reduced-test-cases/) 링크를 제공하십시오. .

## 파일 포함하기

- 기본 PhotoSwipe UI에는`png`와`svg` 스프라이트가 있습니다. 기본적으로 PhotoSwipe를 연 후에 만로드됩니다. 즉시 컨트롤을 표시하려면 갤러리 스프라이트를 사이트 "기본"스프라이트와 병합하거나 CSS를 통해 미리 스프레드 할 수 있습니다.
갤러리가 페이지의 주요 기능이 아닌 경우 PhotoSwipe JS 파일로드를 지연합니다.
- JS를 결합하고, CSS 파일을 축소하고 결합합니다.

이 페이지를 개선 할 수있는 방법을 알고 있습니까? [Suggest an edit!](https://github.com/dimsemenov/PhotoSwipe/blob/master/website/documentation/responsive-images.md)