---

layout: default

title: PhotoSwipe Options

h1_title: Options

description: Complete list of PhotoSwipe options (including PhotoSwipeUI_Default options).

addjs: true

canonical_url: http://photoswipe.com/documentation/options.html

buildtool: true

markdownpage: true

---

옵션은 키 - 값 쌍에 추가되고 'PhotoSwipe` 생성자에 인수로 전달됩니다 (예 :

```javascript
var options = {
	index: 3,
	escKey: false,

	// ui option
	timeToIdle: 4000
};
var gallery = new PhotoSwipe( someElement, PhotoSwipeUI_Default, someItems, options);
gallery.init();

// options 객체는 초기화하는 동안 복제됩니다.
// 그렇지만`gallery.options`를 통해 접근 할 수 있습니다.
// 예를 들어`escKey`를 동적으로 변경하려면 :
gallery.options.escKey = false;

// `options.escKey = false` will not work

```


## Core

### `index` <code class="default">integer</code> <code class="default">0</code>

슬라이드 색인을 시작하십시오. '0'이 첫 번째 슬라이드입니다. 문자열이 아닌 정수 여야합니다.

### `getThumbBoundsFn` <code class="default">function</code> <code class="default">undefined</code>

함수는 초기 확대 애니메이션이 시작될 좌표 (또는 축소 애니메이션이 종료 됨)가있는 객체를 반환해야합니다.

객체는 'x'(문서에 대한 상대적인 X 위치), 'y'(문서에 대한 상대적인 Y 위치), 'w'(요소의 폭)의 세 가지 속성을 포함해야합니다. 높이는 큰 이미지의 크기에 따라 자동으로 계산됩니다. 예를 들어`{x : 0, y : 0, w : 50} '을 반환하면 줌 애니메이션은 페이지의 왼쪽 상단에서 시작됩니다.

함수는 열거 나 닫히는 항목의`index` 인자를 하나 가지고 있습니다.

모달이 없는 (non-modal) 모드에서, 뷰포트에 상대적인 템플릿의 위치는`x`와`y`에서 빼야합니다. 자세한 내용은 [FAQ](faq.html#inline-gallery)를 참조하십시오.

미리보기 이미지의 위치를 계산하는 예 :

```javascript
getThumbBoundsFn: function(index) {

	// 섬네일 요소를 찾는다.
	var thumbnail = document.querySelectorAll('.my-gallery-thumbnails')[index];
	
	// 창 스크롤 Y를 얻는다.
	var pageYScroll = window.pageYOffset || document.documentElement.scrollTop; 
	// 선택적으로 수평 스크롤을 얻는다.

	// 뷰포트를 기준으로 한 요소의 위치를 얻는다.
	var rect = thumbnail.getBoundingClientRect(); 
	
	// w = width
	return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};


	// 요소 좌표를 얻는 방법에 대한 좋은 가이드 :
	// http://javascript.info/tutorial/coordinates
}
```

작은 미리보기 이미지의 크기가 큰 이미지의 크기와 일치하지 않으면 확대 / 축소 페이드 전환을 사용하십시오. `showHideOpacity : true` 옵션을 추가하여이 작업을 수행 할 수 있습니다 (위의 코드 펜 (http://codepen.io/dimsemenov/pen/ZYbPJM)에 추가하여 어떻게 보이는지 테스트 해보십시오). 또는 `hideAnimationDuration : 0, showAnimationDuration : 0`을 추가하여 전환을 완전히 비활성화하십시오. [FAQ에서 이에 대한 자세한 정보](faq.html#different-thumbnail-dimensions).

애니메이션 중에 작은 썸네일을 숨기고 싶다면`visibility : hidden`이나`display : none`이 아니라`opacity : 0`를 사용하십시오. 애니메이션이 시작될 때 래치를 피하기 위해 페인트 및 레이아웃을 강제 실행하지 마십시오.


### `showHideOpacity` <code class="default">boolean</code> <code class="default">false</code>

`false`로 설정하면 배경 `opacity`와 이미지 `scale`이 애니메이션으로 표시됩니다 (이미지 불투명도는 항상 1입니다).
`true`로 설정하면 : `root PhotoSwipe 요소`opacity`와`scale` 이미지가 애니메이션으로 나타납니다.

`불투명도`전환을 가능하게하려면 ( `scale`없이), `getThumbBoundsFn` 옵션을 정의하지 마십시오.

### `showAnimationDuration` <code class="default">integer</code> <code class="default">333</code>

초기 줌인 전환 지속 시간 (밀리 초). 사용하지 않으려면 '0'으로 설정하십시오.
이 JS 옵션 외에도 PhotoSwipe CSS 파일의 전환 지속 시간을 변경해야합니다.

```css
.pswp--animate_opacity,
.pswp__bg,
.pswp__caption,
.pswp__top-bar,
.pswp--has_mouse .pswp__button--arrow--left,
.pswp--has_mouse .pswp__button--arrow--right{
	-webkit-transition: opacity 333ms cubic-bezier(.4,0,.22,1);
	transition: opacity 333ms cubic-bezier(.4,0,.22,1);
}
```

Sass를 사용하는 경우 [_main-settings.scss](https://github.com/dimsemenov/PhotoSwipe/blob/master/src/css/_main-settings.scss)에서 전환 기간 변수를 변경하기 만하면됩니다.


### `hideAnimationDuration` <code class="default">integer</code> <code class="default">333</code>

앞의 옵션과 동일하며, 전환 (축소) 전환에만 사용됩니다. PhotoSwipe가 열리면`pswp-open` 클래스가 루트 요소에 추가됩니다. CSS에서 다른 전환 기간을 적용하는 데 사용할 수 있습니다.


### `bgOpacity` <code class="default">number</code> <code class="default">1</code>

배경 (`.pswp__bg`) 불투명도. 0에서 1 사이의 숫자 여야합니다 (예 : `0.7`. 이 스타일은 CSS를 통하지 않고 JS를 통해 정의됩니다.이 값은 몇 가지 제스처 기반 전환에 사용되기 때문입니다.


### `spacing` <code class="default">number</code> <code class="default">0.12</code>

슬라이드 사이의 간격 비율. 예를 들어 '0.12'는 슬라이딩 뷰포트 너비의 12 % (반올림 됨)로 렌더링됩니다.


### `allowPanToNext` <code class="default">boolean</code> <code class="default">true</code>

현재 항목이 확대 된 경우 다음 / 이전 항목으로 스 와이프 탐색을 허용합니다. 하드웨어 터치가 지원되지 않는 기기의 경우 옵션이 항상 `거짓`입니다.


### `maxSpreadZoom` <code class="default">number</code> <code class="default">2</code>

펼치기 (확대 / 축소) 동작을 수행 할 때의 최대 줌 레벨입니다. `2`는 이미지가 원래 크기의 2 배로 확대 될 수 있음을 의미합니다. 너무 큰 이미지는 모바일 (특히 iOS)에서 메모리 문제를 일으킬 수 있으므로 큰 값은 피해야합니다.


### `getDoubleTapZoom` <code class="default">function</code>

함수는 두 번 살짝 누르거나 이미지를 클릭하거나 확대 / 축소 아이콘을 클릭하거나 이미지 자체를 마우스로 클릭하면 이미지가 확대되는 확대 / 축소 수준을 반환해야합니다. `1`을 반환하면 이미지가 원래 크기로 확대됩니다.

기본값:

```javascript
getDoubleTapZoom: function(isMouseClick, item) {

	// isMouseClick          - 마우스 인 경우는 true, 더블 탭하는 경우는 false
	// item                  - 확대 / 축소 된 슬라이드 객체, 일반적으로 현재
	// item.initialZoomLevel - 초기 이미지 비율
	// 						   e.g. 뷰포트가 700px이고 이미지가 1400px 인 경우,
	// 						   		initialZoomLevel은 0.5가됩니다.

	if(isMouseClick) {

		// 이미지를 마우스로 클릭하거나 확대 / 축소 아이콘을 클릭합니다.
		
		// 원본으로 확대
		return 1;

		// e.g. for 1400px image:
		// 0.5 - zooms to 700px
		// 2   - zooms to 2800px
		
	} else {

		// 두 번 살짝 누르십시오.
		
		// 초기 줌이 0.7x보다 작 으면 원본으로 줌,
		// 그렇지 않으면 1.5x로 두 번 탭 동작이 항상 이미지를 확대하도록하십시오.
		return item.initialZoomLevel < 0.7 ? 1 : 1.5;
	}
}
```

함수는 확대 애니메이션이 시작될 때마다 호출됩니다. 크기 나 화면 DPI를 기반으로 다른 이미지에 다른 값을 반환 할 수 있습니다.




### `loop` <code class="default">boolean</code> <code class="default">true</code>

슬쩍 제스처를 사용할 때 슬라이드를 반복합니다. `true`로 설정하면 마지막 이미지에서 첫 번째 이미지로 스 와이프 할 수 있습니다. 슬라이드가 3 개 미만인 경우 옵션은 항상 `false`입니다.

이 옵션은 화살표 탐색과 관련이 없습니다. 화살표 순환이 영구적으로 켜집니다. 사용자 지정 UI를 만들어이 동작을 수정할 수 있습니다.


### `pinchToClose` <code class="default">boolean</code> <code class="default">true</code>

갤러리 제스처를 닫기 위해 핀치. 사용자가 축소하면 갤러리 배경이 점차 사라집니다. 제스처가 완료되면 갤러리가 닫힙니다.


### `closeOnScroll` <code class="default">boolean</code> <code class="default">true</code>

페이지 스크롤에서 갤러리를 닫습니다. 옵션은 하드웨어 터치 지원 기능이없는 장치에서만 작동합니다.


### `closeOnVerticalDrag` <code class="default">boolean</code> <code class="default">true</code>

세로로 드래그하거나 이미지가 확대되지 않을 때 갤러리를 닫습니다. 마우스를 사용하면 항상 false입니다..
 

### `mouseUsed` <code class="default">boolean</code> <code class="default">false</code>

옵션을 사용하면 마우스를 사용했는지 여부를 미리 정의 할 수 있습니다. 일부 PhotoSwipe 기능은이 기능에 의존합니다. 예를 들어 마우스를 사용한 후에 만 기본 UI의 왼쪽 / 오른쪽 화살표가 표시됩니다. `false`로 설정하면 마우스가 단독으로 사용될 때 PhotoSwipe가 감지를 시작하고 마우스가 발견되면 `mouseUsed` 이벤트가 발생합니다.


### `escKey` <code class="default">boolean</code> <code class="default">true</code>

`esc` 키보드 키를 눌러 PhotoSwipe를 닫습니다. 옵션을 동적으로 변경할 수 있습니다 (`yourPhotoSwipeInstance.options.escKey = false;`).


### `arrowKeys` <code class="default">boolean</code> <code class="default">true</code>

키보드 왼쪽 또는 오른쪽 화살표 키 탐색. 옵션을 동적으로 변경할 수 있습니다 (`yourPhotoSwipeInstance.options.arrowKeys = false;`).


### `history` <code class="default">boolean</code> <code class="default">true</code>

`false`로 설정하면 히스토리 모듈을 비활성화합니다 (갤러리를 닫으려면 뒤로 버튼, 각 슬라이드의 고유 URL). 빌드에서`history.js` 모듈을 제외시킬 수도 있습니다.


### `galleryUID` <code class="default">integer</code> <code class="default">1</code>

갤러리 고유 ID. URL을 작성할 때 History 모듈에서 사용됩니다. 예를 들어, UID 1 갤러리의 두 번째 그림은 URL이 있습니다 : `http://example.com/#&gid=1&pid=2`.


### <a name="galleryPIDs"></a> `galleryPIDs` <code class="default">boolean</code> <code class="default">false</code>

URL을 작성할 때 사용되는 각 슬라이드 개체에 대한 사용자 지정 ID를 사용합니다. 옵션 세트가 `true`로 설정되면 슬라이드 객체는 문자열 또는 정수가 될 수있는 `pid`(그림 식별자) 속성을 가져야합니다. 예 :

```js
var slides = [
	{
		src: 'path/to/1.jpg',
		w:500,
		h:400,
		pid: 'image-one'
	},
	{
		src: 'path/to/2.jpg',
		w:300,
		h:700,
		pid: 'image-two'
	},

	... 
];
```

... 두 번째 슬라이드에는 URL이 있습니다.`http://example.com/#&gid=1&pid=image-two`.

[FAQ 섹션](faq.html#custom-pid-in-url)에서 맞춤 PID를 구현하는 방법에 대해 자세히 알아보십시오.


### `errorMsg` <code class="default">string</code>

이미지가로드되지 않았을 때의 오류 메시지. `%url%`는 image의 URL로 대체 될 것입니다.

기본값:

```html
<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>
```


### `preload` <code class="default">array</code> <code class="default">[1,1]</code>

움직이는 방향을 기준으로 인근 슬라이드의 지연로드 두 개의 정수가있는 배열이어야합니다. 첫 번째는 현재 이미지 앞에 두 번째로로드 할 항목의 수이고 두 번째 정수는 현재 이미지 뒤에 미리로드 할 항목의 수입니다. 예 : [1,3]로 설정하면 현재 이미지보다 1이미지, 현재 이미지보다 3이미지가로드됩니다. 값은 1보다 작을 수 없습니다.


### `mainClass` <code class="default">string</code> <code class="default">undefined</code>

PhotoSwipe의 루트 요소에 추가 될 클래스의 이름을 가진 문자열 (`.pswp`). 공백으로 구분 된 여러 클래스를 포함 할 수 있습니다.


### `getNumItemsFn` <code class="default">function</code>

갤러리에있는 총 항목 수를 반환해야하는 함수. 기본적으로 슬라이드 배열의 길이를 반환합니다. 여기에 매우 복잡한 코드를 넣지 마십시오. 함수가 자주 실행됩니다.

### `focus` <code class="default">boolean</code> <code class="default">true</code>

PhotoSwipe 요소가 열린 후에 포커스를 설정합니다.

### `isClickableElement` <code class="default">function</code>

Default value:

```javascript
isClickableElement: function(el) {
	return el.tagName === 'A';
}
```

함수는 요소 (`el`)를 클릭 할 수 있는지 확인해야합니다. & ndash; PhotoSwipe는`preventDefault`를 호출하지 않고`click` 이벤트가 통과합니다. 함수는 드래그 시작 및 드래그 릴리스에서 여러 번 실행되므로 가볍게 수행 할 수 있어야합니다.

### `modal` <code class="default">boolean</code> <code class="default">true</code>

전체 뷰포트를 차지하기 위해 PhotoSwipe를 확장해야하는지 여부를 조정합니다. `false` 인 경우 PhotoSwipe 요소는 템플릿의 위치 지정된 부모 크기를 사용합니다. 자세한 내용은 [FAQ] (faq.html # inline-gallery)를 참조하십시오.


## 기본 UI 옵션

`PhotoSwipeUI_Default` 옵션 (`dist/ui/photoswipe-ui-default.js`)은 코어 옵션과 같은 방법으로 동일한 객체에 추가됩니다.

```javascript
// 위쪽 및 아래쪽 막대의 크기 (픽셀)
// `bottom`매개 변수는 `auto`(캡션의 높이를 계산합니다) 일 수 있습니다.
// 옵션은 마우스가 사용될 때만 적용됩니다.
// 화면 너비가 1200px 이상입니다.
//
// (`parseVerticalMargin` 이벤트 참조)
barsSize: {top:44, bottom:'auto'}, 

// 마우스가 4000ms 동안 움직이지 않으면 pswp__ui 클래스를 pswp__ui 요소에 추가합니다.
timeToIdle: 4000,

// 위와 같지만 마우스가 창을 나갈 때이 타이머가 적용됩니다.
timeToIdleOutside: 1000,

// 로드 인디케이터가 표시 될 때까지 지연
loadingIndicatorDelay: 1000,

// 함수는 캡션 마크 업을 만듭니다.
addCaptionHTMLFn: function(item, captionEl, isFake) {
	// item      - 슬라이드 개체
	// captionEl - 자막 DOM 요소
	// isFake    - 가짜 자막 컨테이너에 내용이 추가되면 true입니다.
	// 			   (다음 또는 이전 캡션의 크기를 가져 오는 데 사용됩니다.)
	
	if(!item.title) {
		captionEl.children[0].innerHTML = '';
		return false;
	}
	captionEl.children[0].innerHTML = item.title;
	return true;
},

// Buttons/elements
closeEl:true,
captionEl: true,
fullscreenEl: true,
zoomEl: true,
shareEl: true,
counterEl: true,
arrowEl: true,
preloaderEl: true,

// 갤러리를 닫아야하는 슬라이딩 영역을 누릅니다.
tapToClose: false,

// 탭은 컨트롤의 가시성을 전환해야합니다.
tapToToggleControls: true,

// 이미지를 마우스로 클릭하면 갤러리를 닫아야합니다.
// 이미지가 뷰포트의 크기보다 작은 경우에만
clickToCloseNonZoomable: true,

// 요소 클래스 클릭하면 PhotoSwipe를 닫아야합니다.
// HTML 마크 업에서 class는 항상 `pswp__`로 시작해야합니다 (예 : "pswp__item", "pswp__caption").
// 마우스가 이러한 요소 중 하나 위에있을 때 
// `pswp__ui - over-close`클래스가 UI의 루트 요소에 추가됩니다.
// 기본적으로 닫기 버튼을 강조 표시하는 데 사용됩니다.
closeElClasses: ['item', 'caption', 'zoom-wrap', 'ui', 'top-bar'], 

//"1 of X"카운터 용 구분 기호
indexIndicatorSep: ' / ',


{% raw %}
// 공유 버튼
//
// URL에 사용할 수있는 변수 :
// {{url}}             - url to current page
// {{text}}            - title
// {{image_url}}       - encoded image url
// {{raw_image_url}}   - raw image url
shareButtons: [
	{id:'facebook', label:'Share on Facebook', url:'https://www.facebook.com/sharer/sharer.php?u={{url}}'},
	{id:'twitter', label:'Tweet', url:'https://twitter.com/intent/tweet?text={{text}}&url={{url}}'},
	{id:'pinterest', label:'Pin it', url:'http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}'},
	{id:'download', label:'Download image', url:'{{raw_image_url}}', download:true}
],
{% endraw %}

// 다음 세 함수는 공유 링크에 대한 데이터를 반환합니다.
//
// 공유 모달을 여는 버튼을 클릭하면 함수가 실행됩니다.
// 데이터가 현재 (활성) 슬라이드에 있어야 함을 의미합니다.
getImageURLForShare: function( shareButtonData ) {
	//`shareButtonData` - shareButtons 배열의 객체
	//
	//`pswp`는 갤러리 인스턴스 객체입니다.
	// 직접 정의해야합니다.
	// 
	return pswp.currItem.src || '';
},
getPageURLForShare: function( shareButtonData ) {
	return window.location.href;
},
getTextForShare: function( shareButtonData ) {
	return pswp.currItem.title || '';
},

// 공유 링크 출력 분석
parseShareButtonOut: function(shareButtonData, shareButtonOut) {
	// `shareButtonData` - object from shareButtons array
	// `shareButtonOut` - raw string of share link element
	return shareButtonOut;
}
```

Know how this page can be improved? Found a typo? [Suggest an edit!](https://github.com/dimsemenov/PhotoSwipe/blob/master/website/documentation/responsive-images.md)

<iframe src="http://ghbtns.com/github-btn.html?user=dimsemenov&amp;repo=photoswipe&amp;type=watch&amp;count=true&amp;size=large" allowtransparency="true" frameborder="0" scrolling="0" width="155" height="30" style=""></iframe>



