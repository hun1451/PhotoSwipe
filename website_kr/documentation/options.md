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

페이지 스크롤에서 갤러리를 닫습니다. 옵션은 하드웨어 터치 지원 기능이없는 장치에서만 작동합니다


