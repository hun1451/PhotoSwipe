---

layout: 기본값

title: PhotoSwipe FAQ

h1_title: FAQ

description: PhotoSwipe 이미지 갤러리에 대해 자주 묻는 질문과 알려진 문제점.

addjs: true

정식_url: http://photoswipe.com/documentation/faq.html

buildtool: true

markdownpage: true

---

## 구현

### <a name="image-size"></a> 이미지 크기를 미리 정의 할 수 없으므로 어떻게 해야 하나?

다른 갤러리 스크립트 사용 ([1](http://dimsemenov.com/plugins/magnific-popup/), [2](http://dimsemenov.com/plugins/royal-slider/gallery/)), 또는 방법 잦기:

- 이미지의 작은 부분만 다운로드해서 이미지의 크기를 읽을 수 있습니다 ([PHP 버전](http://stackoverflow.com/questions/4635936/super-fast-getimagesize-in-php), [Ruby](https://github.com/sdsykes/fastimage), [Node.js](http://stackoverflow.com/a/20111234/331460)).
- 파일 이름에 직접 이미지의 크기를 저장하고 PhotoSwipe 초기화 중에 프론트 엔드에서 파싱 할 수 있습니다  (API 섹션의 `gettingData` 이벤트). 
- 대부분의 CMS는 이미지의 크기를 데이터베이스에 저장하고 이를 검색하는 API를 가지고 있습니다.
- 대부분의 웹 API (Facebook, 500px, Instagram, Flickr, Twitter, YouTube, Vimeo 등)는 이미지 크기를 반환합니다.

치수는 점진적 로드, 확장된 자리 표시자, 초기 줌인(zoom-in)  / 줌아웃 (zoom-out)전환, 이동, 줌잉(zooming), 캡션 위치 지정에 사용됩니다. GitHub에서의 토론 : [issue #741](https://github.com/dimsemenov/PhotoSwipe/issues/741).


### <a name="different-thumbnail-dimensions"></a> 미리보기 이미지는 정사각형 이지만 크기가 큰 이미지는 크기가 다르며, 열기/닫기 전환을 어떻게 해야 하나요?

1. 썸네일의 종횡비가 큰 이미지와 일치하지 않으면 슬라이드에 대해 'msrc'속성을 정의하지 않고 불투명 전환 옵션을 활성화 하세요 (`showHideOpacity:true, getThumbBoundsFn:false`).
2. 썸네일 이미지 파일의 종횡비가 큰 이미지와 일치하면, **그러나 썸네일 영역은 CSS를 통해 잘립니다.**, `showHideOpacity:true` 을 추가하고 `getThumbBoundsFn`옵션이 자르기 영역을 고려한 좌표를 반환하는지 확인 하세요.

큰 이미지의 가로 세로 비율가 일치하는 축소판을 표시하거나 CSS를 통해 보이는 영역 자르기를 강력히 권장합니다. (2).

이것이 아직 구현되지 않은 이유를 설명하려고 노력할 것입니다. 영역 애니메이션을 확장하는데는 두 가지 방법이 있습니다.

1. 'clip'속성에 애니메이션을 적용하십시오. 하지만 [Paint를 강제로](http://csstriggers.com/#clip) 하면, 매번 애니메이션이 어색해집니다.
2. `overflow:hidden`을 가진 두 div로 펼쳐지는 이미지를 감싸고 애니메이션 중에 `transform:translate`를 통해 위치를 변겨아면 오른쪽 부분에 클립됩니다. 이 방법은 페인트 또는 레이아웃을 강요하지 않지만 각 슬라이드의 마크 업에 두 가지 요소가 추가로 필요합니다. 테스트 프로토타입은 고급 모바일 기기(예: Chrome이 장착된 Nexus 5)에서만 원활하게 작동한다는걸 보여줬습니다. 어쩌면 언젠가는 그 것을 구현할 것 입니다.


### <a name="scroll-in-caption"></a> 캡션이 크다면 스크롤을 추가 할 수 있습니까?  

참조 : [issue #657](https://github.com/dimsemenov/PhotoSwipe/issues/657).


### <a name="inline-gallery"></a>인라인 갤러리 디스플레이 구현 방법

이 것은 실험적인 기능입니다. 지금은 터치 이벤트에서 'prvetDefault()'를 호출 할 때 모바일에서 갤러리 위에 페이지를 수직으로 스크롤하는 것을 허용하지 않습니다. 문제가 있으면 알려주세요. 문서의 나머지 부분과 함께 흐르는 내장된 갤러리를 구현하려면 다음 단계를 따르십시오

1. 위치가 지정된 부모 요소안에`.pswp` 템플릿을 넣으십시오
2. `modal: false, closeOnScroll: false`옵션을 설정하십시오.
3. `getThumbBoundsFn` (사용하고 있는 경우)을 수정하여 템플릿 부모의 경계 직사각형(rect)을 뺍니다.
4. PhotoSwipe 생성합니다.
5. `updateScrollOffset` 이벤트를 보고 템플릿의 경계 사각형을 오프셋에 추가하십시오
6. `init()` PhotoSwipe.

[**CodePen의 라이브 예제 &rarr;**](http://codepen.io/dimsemenov/pen/JogxWM)

```html
<div style="position: relative;" class="parent">
    <div id="gallery" class="pswp"> ... </div>
</div>
```

```javascript
var items = [...];
var template = document.getElementById("gallery"); // .pswp
var options = {
    ...,
    modal: false,
    closeOnScroll: false,
    getThumbBoundsFn: function(index) {
        // rect는 본래의 경계
        var rect = {x: ..., y: ..., w: ...},

        var templateBounds = template.parentElement.getBoundingClientRect();
        rect.x -= templateBounds.left;
        rect.y -= templateBounds.top;

        return rect;
    }
};
var photoSwipe = new PhotoSwipe(template, PhotoSwipeUI_Default, items, options);
photoSwipe.listen('updateScrollOffset', function(_offset) {
    var r = template.getBoundingClientRect();
    _offset.x += r.left;
    _offset.y += r.top;
});
photoSwipe.init();
```

### <a name="custom-pid-in-url"></a>URL에서 색인 대신 맞춤 식별자를 사용하는 방법

단일 이미지 URL을 다음과 같이 만드려면

```
http://example.com/#&gid=1&pid=custom-first-id
http://example.com/#&gid=1&pid=custom-second-id
```

대신에 :

```
http://example.com/#&gid=1&pid=1
http://example.com/#&gid=1&pid=2
```

... `history:true, galleryPIDs:true`옵션을 가능하게 하고 `pid` (고유의 그림 식별자)속성을 슬라이드 객체에 추가합니다. (`pid`는 정수나 문자열), 예시:

```js
var slides = [
    {
        src: 'path/to/1.jpg',
        w:500,
        h:400,
        pid: 'custom-first-id'
    },
    {
        src: 'path/to/2.jpg',
        w:300,
        h:700,
        pid: 'custom-second-id'
    },
    ... 
];
```

- PhotoSwipe는 초기화하고 열기 전까지 코드를 실행하지 않습니다. 처음 페이지를 로드할 때 URL을 직접 파싱해야 합니다. [시작하기](http://photoswipe.com/documentation/getting-started.html#dom-to-slide-objects)의 기본 코드 섹션에는 이 기능이 포함되어 있습니다. (수정이 필요한 경우`photoswipeParseHash`기능을 확인 하십시오)
- PhotoSwipe v4.0.8부터`galleryPIDs` 옵션을 사용할 수 있습니다. ([옵션 설명](options.md#galleryPIDs)).


## 버그

### <a name="gif-freeze-ios"></a> iOS8에서 GIF이미지가 고정되는 경우가 있습니다.

iOS Safari애는 창 외부로 이동한 GIF이미지가 고정되는 버그가 있습니다.(또는 'overflow:hidden'이 있는 요소 외부) 권장 사항은 PhotoSwipe에서 애니메이션 GIF를 사용하지 않는 것입니다. 모바일 브라우저에서 애니메이션 성능이 느려지므로 좋습니다. 하지만 정말로 사용해야하는 경우 [이 해킹](https://github.com/dimsemenov/PhotoSwipe/issues/662#issuecomment-66420874)을 참조하십시오.

### <a name="mobile-crash"></a> 거대한 이미지가 갤러리를 열면 모바일 브라우저가 다운됩니다

대부분 메모리 부족으로 모바일 장치에서 발생할 수 있습니다. (iOS Safari, 오래된 Android의 기본 브라우저 (KitKat 이전)) 충돌의 가장 흔한 원인은 너무 큰 이미지입니다.(일반적으로 2000x1500px보다 큼) PhotoSwipe는 이미지에 하드웨어 가속을 적용하여 페이지의 일반 이미지보다 많은 메모리를 소비하므로 제한 브라우저를 모두 사용하지 않으면 지연되거나 충돌이 발생합니다.

따라서 [반응형 이미지 제공](responsive-images.md), 또는 적어도 거대한 이미지를 제공하지 마십시오. 평균 900x600의 핸드폰의 경우 1200px 너비의 이미지를 재공하는 것이 가장 이상적입니다 . iOS Simulator에서 모든 것이 원활하게 작동한다고해서 실제 장치에서 충돌이 발생하지는 않습니다.

드문 경우이지만 페이지의 일부 프로세스 중에 PhotoSwipe를 열면 충돌이 발생할 수 있습니다 (초기 페이지로드 / 렌더링 또는 페이지의 복잡한 애니메이션 일 수 있음), 페이지가 렌더링 될 때까지 PhotoSwipe 초기화 지연 (document.ready 후 18-300ms), 특히 큰 이미지를 표시하는 경우.

**UPD.:** in [v4.1.0](https://github.com/hun1451/PhotoSwipe/releases/tag/v4.1.0) 이것은 부분적으로 수정되었습니다. 

## 기타

### <a name="keep-updated"></a> 변경 내역은 어디에 있습니까, 업데이트에 대한 알림을 받는 방법은 무엇입니까?

PhotoSwipe가 업데이트를 얻을 때마다 - [GitHub releases](https://github.com/hun1451/PhotoSwipe/releases)페이지가 세부 정보로 업데이트 됩니다.
출시 페이지에는 [Atom feed](https://github.com/hun1451/PhotoSwipe/releases.atom)가 있습니다., 피드가 업데이트 되면 이메일 알림을 설정할 수 있습니다 [using IFTTT](https://ifttt.com/recipes/230902-photoswipe-update-notification).

또한 저의 [email newsletter](http://dimsemenov.com/subscribe.html?i=pswp) (1년에 3~4회 발신), [@PhotoSwipe on Twitter](http://twitter.com/photoswipe)를 팔로우 하세요. 그리고  [PhotoSwipe on GitHub](https://github.com/hun1451/PhotoSwipe/)에서 star를 누르시고 읽어주세요.

### <a name="wordpress-release"></a> WordPress 플러그인이 출시 될 때?

플러그인은 개발 중이며 2015년에 출시 될 예정입니다. 알림을 받으려면 [뉴스레터 구독](http://dimsemenov.com/subscribe.html?i=pswp-wp)하세요.


### <a name="can-i-use-in-theme"></a> WordPress / Magento / Joomla ... PhotoSwipe를 사용하고 싶습니다. 템플릿을 사용할 수 있습니까?

그렇습니다. PhotoSwipe는 제한없이 무료 또는 상업용 테마로 사용할 수 있습니다. 가능한 경우 테마 설명을 관리 영역에 크레딧 (PhotoSwipe 홈페이지 링크)을 남겨 두십시오.


<div style="margin-top:30px;"><p>이 페이지를 개선할 수 있는 방법을 알고 있습니까? 문법적 오류를 발견 했습니까? <a href="https://github.com/hun1451/PhotoSwipe/blob/master/website/documentation/responsive-images.md">편집을 제안하십시오!</a></p></div>
