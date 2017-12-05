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

- PhotoSwipe는 간단한 jQuery 플러그인이 아니며 최소한 기본적인 자바 스크립트 지식은이 요구됩니다.
- PhotoSwipe는 미리 정의 된 이미지 크기가 필요합니다.
- 응답이없는 웹 사이트에서 PhotoSwipe를 사용하는 경우 & ndash; 컨트롤은 모바일에서 확장됩니다 (전체 페이지의 크기가 조정됨에 따라). 따라서 맞춤 컨트롤 (예 : 오른쪽 상단에 단일 큰 닫기 버튼)을 구현해야합니다.
- 문서의 모든 코드는 순수한 Vanilla JS이며 IE 8 이상을 지원합니다. 웹 사이트 또는 앱에서 jQuery 또는 MooTools와 같은 일부 JavaScript 프레임 워크를 사용하거나 이전 브라우저를 지원할 필요가 없는 경우 코드를 단순화하십시오.
- 모바일 용으로 큰 이미지 (2,000x1500 픽셀 이상)를 제공하지 마십시오. 애니메이션 성능이 크게 저하되고 특히 iOS Safari 브라우저에서 충돌이 발생할 수 있습니다. 가능한 해결책 : [반응 형 이미지 제공] (responsive-images.html) 또는 별도의 페이지에서 이미지 열기 ([Leaflet] (http://leafletjs.com/)와 같은 이미지 타일링을 지원하는 라이브러리 사용 ([more] FAQ] (faq.html # mobile-crash)).

## <a name="initialization"></a> 초기화(Initialization)

### <a name="init-include-files"></a> 1단계 : JS 및 CSS 파일을 Include

[GitHub](https://github.com/dimsemenov/PhotoSwipe) 저장소의 [dist /](https://github.com/dimsemenov/PhotoSwipe/tree/master/dist) 폴더에서 찾을 수 있습니다.Sass 및 컴파일되지 않은 JS 파일은 [src /] (https://github.com/dimsemenov/PhotoSwipe/tree/master/src) 폴더에 있습니다. 기존 스타일을 수정할 계획이라면 Sass를 사용하는 것이 좋습니다. 코드는 구조화되고 주석 처리되어 있습니다.

```html
<!-- 핵심 CSS 파일 -->
<link rel = "stylesheet"href = "path/to/photoswipe.css">

<!-- 스킨 CSS 파일 (UI의 스타일 지정 - 버튼, 캡션 등)
	스킨 CSS 파일의 폴더에는 다음도 있습니다.
	- .png 및 .svg 아이콘 스프라이트,
	- preloader.gif (CSS 애니메이션을 지원하지 않는 브라우저의 경우) -->
<link rel="stylesheet"href="path/to/default-skin/default-skin.css">

<!-- Core JS 파일 -->
<script src = "path/to/photoswipe.min.js"></ script>

<!-- UI JS 파일 -->
<script src = "path/to/photoswipe-ui-default.min.js"> </ script>
```

JS 및 CSS 파일을 어떻게 그리고 어디서 포함 시킬지는 중요하지 않습니다. 코드는`new PhotoSwipe ()`를 호출 할 때만 실행됩니다. 처음에 PhotoSwipe를 열 필요가 없다면 파일 로딩을 연기하십시오.

PhotoSwipe는 RequireJS와 같은 AMD Loader와 CommonJS도 지원하므로 다음과 같이 사용하십시오.


```javascript
require([ 
		'path/to/photoswipe.js', 
		'path/to/photoswipe-ui-default.js' 
	], function( PhotoSwipe, PhotoSwipeUI_Default ) {

	//  	var gallery = new PhotoSwipe( someElement, PhotoSwipeUI_Default ...
	//  	gallery.init() 
	//  	...

});
```

또한 Bower (`bower install photoswipe`) 또는 [NPM](https://www.npmjs.com/package/photoswipe) (`npm install photoswipe`)을 통해 설치할 수 있습니다.

### <a name="init-add-pswp-to-dom"></a>Step 2: Dom에 PhotoSwipe(.pswp) 엘리먼트 추가하기 

JS를 통해 (초기화 직전의) JS 코드를 통해 HTML 코드를 동적으로 추가하거나, 초기에 데모 페이지에서처럼 HTML 코드를 페이지에 추가 할 수 있습니다. 이 코드는 어디에서나 추가 될 수 있지만, 닫는`</ body>`전에 이상적으로 추가 될 수 있습니다. 동일한 갤러리 UI를 사용하는 한 여러 갤러리에서 재사용 할 수 있습니다.

```html
<!-- PhotoSwipe의 루트 요소. 클래스 pswp가 있어야 합니다.. -->
<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">

	<!-- PhotoSwipe의 배경. 
		 불투명도 애니메이션이 rgba()보다 빠르기 때문에 별도의 요소입니다. -->
    <div class="pswp__bg"></div>

	<!-- Slides wrapper with overflow:hidden. -->
    <div class="pswp__scroll-wrap">

		<!-- 슬라이드를 보관하는 컨테이너입니다. 
			PhotoSwipe는 메모리를 절약하기 위해 DOM에서 3개만 유지합니다.
			이 3개의 pswp__item 요소를 수정하지 마십시오. 나중에 데이터가 추가됩니다. -->
		<div class="pswp__container">
			<div class="pswp__item"></div>
			<div class="pswp__item"></div>
			<div class="pswp__item"></div>
		</div>

		<!-- 슬라이딩 영역의 맨 위에 있는 기본 인터페이스입니다. 변경할 수 있습니다. -->
		<div class="pswp__ui pswp__ui--hidden">

			<div class="pswp__top-bar">

				<!--  Controls are self-explanatory. Order can be changed. -->
				
				<div class="pswp__counter"></div>

				<button class="pswp__button pswp__button--close" title="Close (Esc)"></button>

				<button class="pswp__button pswp__button--share" title="Share"></button>

				<button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>

				<button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>

				<!-- Preloader 데모 http://codepen.io/dimsemenov/pen/yyBWoR -->
				<!-- 요소가 클래스 pswp__preloader를 얻습니다 - 프리로더가 실행 중 일 때 활성화 됨 -->
				<div class="pswp__preloader">
					<div class="pswp__preloader__icn">
					  <div class="pswp__preloader__cut">
					    <div class="pswp__preloader__donut"></div>
					  </div>
					</div>
				</div>
			</div>

	        <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
				<div class="pswp__share-tooltip"></div> 
	        </div>

			<button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">
			</button>
			
			<button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)">
			</button>

			<div class="pswp__caption">
				<div class="pswp__caption__center"></div>
			</div>

	    </div>

	</div>

</div>


```

`pswp__bg`,`pswp__scroll-wrap`,`pswp__container` 및`pswp__item` 요소의 순서는 변경하면 안됩니다.

PhotoSwipe가 JS를 통해 이 코드를 자동으로 추가하지 않는 이유는 간단합니다. 레이아웃 수정이 필요한 경우를 대비하여 파일 크기를 절약 할 수 있기 때문입니다.

### Step 3: initialize (초기화)

`PhotoSwipe` 생성자를 실행합니다. 그것은 4 개의 인수를받습니다 :

1. 2 단계의`.pswp` 요소 (DOM에 추가되어야 함).
2. PhotoSwipe UI 클래스. 기본`photoswipe-ui-default.js`를 포함하면 클래스는`PhotoSwipeUI_Default`가됩니다. 'false' 값 일 수 있습니다.
3. 객체 (슬라이드)가있는 배열.
4. [Option](options.html).


```javascript
var pswpElement = document.querySelectorAll('.pswp')[0];

// build items array
var items = [
	{
		src: 'https://placekitten.com/600/400',
		w: 600,
		h: 400
	},
	{
		src: 'https://placekitten.com/1200/900',
		w: 1200,
		h: 900
	}
];

// 옵션을 정의 (필요할 경우)
var options = {
	// optionName: 'option value'
	// 예를 들면:
	index: 0 // 첫 번째 슬라이드에서 시작
};

// PhtoSwipe를 초기화하고 열기.
var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
gallery.init();
```

결국 당신은 다음과 같은 것을 얻어야한다 :

<div class="codepen-embed">
	<p data-height="600" data-theme-id="10447" data-slug-hash="gbadPv" data-default-tab="result" data-user="dimsemenov" class='codepen'>
		<a href="http://codepen.io/dimsemenov/pen/gbadPv/" target="_blank"><strong>View example on CodePen &rarr;</strong></a>
	</p>
	<!-- <script async src="//assets.codepen.io/assets/embed/ei.js"></script> -->
</div>


## <a name="creating-slide-objects-array"></a> 슬라이드 객체의 배열 만들기

배열의 각 객체는 슬라이드에 대한 데이터를 포함해야하며 PhotoSwipe에 표시하려는 모든 것 (이미지 경로, 캡션 문자열, 공유 수, 설명 등) 일 수 있습니다.

기본적으로 PhotoSwipe는 단 5개의 속성만을 사용합니다 : 'src'(이미지 경로), 'w'(이미지 너비), 'h'(이미지 높이), 'msrc'(작은 이미지 자리 표시 자, 큰 이미지가 위에로드됩니다. ),`html` (맞춤 HTML, [더 자세히](custom-html-in-slides.html)).

네비게이션 중 PhotoSwipe는이 객체에 자신의 속성을 추가합니다 (예 :`minZoom` 또는`loaded`).

```javascript
var slides = [

	// slide 1
	{

		src: 'path/to/image1.jpg', // path to image
		w: 1024, // image width
		h: 768, // image height

		msrc: 'path/to/small-image.jpg', // small image placeholder,
						// 메인(큰) 이미지가 이 이위에 로드되고,
						// 이 매개 변수를 건너 뛰면 회색 사각형이 표시되고,
						// 작은 이미지가로드되기 전에이 속성을 정의하려고 시도하십시오.



		title: 'Image Caption'  // 기본 PhotoSwipe UI에서 사용됩니다.
								// 당신이 그것을 건너 뛸 경우, 어떤 캡션도 없을 것입니다.
								

		// 여기에 속성을 더 추가하고 사용할 수 있습니다.
		// 예를 들어, 데모 갤러리는 캡션에 사용되는 "author"속성을 사용합니다.
		// author: 'John Doe'
		
	},

	// slide 2
	{
		src: 'path/to/image2.jpg', 
		w: 600, 
		h: 600

		// etc.
	}

	// etc.

];
```

PhotoSwipe가 슬라이드 객체 속성을 읽기 전에 동적으로 객체 속성을 정의 할 수 있습니다. 'gettingData` 이벤트를 사용하십시오 (자세한 내용은 [API 섹션의 문서](api.html)). 예를 들어이 기술을 사용하여 다양한 화면 크기에 대해 [다른 이미지 제공](responsive-images.html)을 사용할 수 있습니다.


## <a class="anchor" name="dom-to-slide-objects"></a> 링크 목록에서 슬라이드 배열을 만드는 방법

다음과 같은 링크 / 축소판 목록이 있다고 가정 해 보겠습니다 ([갤러리 마크 업에 대한 자세한 내용](seo.html)).

```html
<div class="my-gallery" itemscope itemtype="http://schema.org/ImageGallery">

	<figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">
		<a href="large-image.jpg" itemprop="contentUrl" data-size="600x400">
		    <img src="small-image.jpg" itemprop="thumbnail" alt="Image description" />
		</a>
		<figcaption itemprop="caption description">Image caption</figcaption>
	</figure>

	<figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">
		<a href="large-image.jpg" itemprop="contentUrl" data-size="600x400">
		    <img src="small-image.jpg" itemprop="thumbnail" alt="Image description" />
		</a>
		<figcaption itemprop="caption description">Image caption</figcaption>
	</figure>


</div>
 ```

... 미리보기 이미지를 클릭하여 PhotoSwipe를 큰 이미지로 엽니 다 (데모 페이지에서 완료 한 것처럼). 당신이해야 할 일은 :

1. 클릭 이벤트를 링크 / 축소판에 바인딩하십시오.
2. 사용자가 미리보기 이미지를 클릭하면 해당 색인을 찾습니다.
3. DOM 요소로부터 슬라이드 객체의 배열을 생성 - 모든 링크를 반복하고`href` 속성 (큰 이미지 URL),`data-size` 속성 (크기), 썸네일의`src` 및 캡션의 내용을 가져옵니다.

PhotoSwipe는 당신이 어떻게 할 것인지 정말로 신경 쓰지 않습니다. jQuery 또는 MooTools와 같은 프레임 워크를 사용하거나 IE8을 지원할 필요가없는 경우 코드를 크게 단순화 할 수 있습니다.

다음은 IE8을 지원하는 순수 바닐라 JS 구현입니다.

```javascript
var initPhotoSwipeFromDOM = function(gallerySelector) {

	// DOM 요소에서 슬라이드 데이터 (url, title, size ...)를 파싱합니다.
	// (children of gallerySelector)
	var parseThumbnailElements = function(el) {
		var thumbElements = el.childNodes,
			numNodes = thumbElements.length,
			items = [],
			figureEl,
			linkEl,
			size,
			item;

		for(var i = 0; i < numNodes; i++) {

			figureEl = thumbElements[i]; // <figure> element

			// 요소 노드 만 포함
			if(figureEl.nodeType !== 1) {
				continue;
			}

			linkEl = figureEl.children[0]; // <a> element
			
			size = linkEl.getAttribute('data-size').split('x');

			// 슬라이드 객체를 생성
			item = {
				src: linkEl.getAttribute('href'),
				w: parseInt(size[0], 10),
				h: parseInt(size[1], 10)
			};

			

			if(figureEl.children.length > 1) {
				// <figcaption> content
				item.title = figureEl.children[1].innerHTML; 
			}
 
			if(linkEl.children.length > 0) {
				// <img> thumbnail element, retrieving thumbnail url
				item.msrc = linkEl.children[0].getAttribute('src');
			} 
		   
			item.el = figureEl; // getThumbBoundsFn의 요소에 대한 링크 저장
			items.push(item);
		}

		return items;
	};

	// 가장 가까운 부모 요소 찾기
	var closest = function closest(el, fn) {
		return el && ( fn(el) ? el : closest(el.parentNode, fn) );
	};

	// 사용자가 미리보기 이미지를 클릭하면 트리거됩니다.
	var onThumbnailsClick = function(e) {
		e = e || window.event;
		e.preventDefault ? e.preventDefault() : e.returnValue = false;

		var eTarget = e.target || e.srcElement;

		// 슬라이드의 루트 요소 찾기
		var clickedListItem = closest(eTarget, function(el) {
			return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
		});

		if(!clickedListItem) {
			return;
		}

		// 모든 자식 노드를 반복하여 클릭 된 항목의 색인을 찾습니다.
		// 또는 데이터 속성을 통해 색인을 정의 할 수 있습니다
		var clickedGallery = clickedListItem.parentNode,
			childNodes = clickedListItem.parentNode.childNodes,
			numChildNodes = childNodes.length,
			nodeIndex = 0,
			index;

		for (var i = 0; i < numChildNodes; i++) {
			if(childNodes[i].nodeType !== 1) { 
				continue; 
			}

			if(childNodes[i] === clickedListItem) {
				index = nodeIndex;
				break;
			}
			nodeIndex++;
		}



		if(index >= 0) {
			// open PhotoSwipe if valid index found
			openPhotoSwipe( index, clickedGallery );
		}
		return false;
	};

	// URL (#&pid=1&gid=2)에서 사진 색인 및 갤러리 색인을 구문 분석합니다.
	var photoswipeParseHash = function() {
		var hash = window.location.hash.substring(1),
		params = {};

		if(hash.length < 5) {
			return params;
		}

		var vars = hash.split('&');
		for (var i = 0; i < vars.length; i++) {
			if(!vars[i]) {
				continue;
			}
			var pair = vars[i].split('=');  
			if(pair.length < 2) {
				continue;
			}           
			params[pair[0]] = pair[1];
		}

		if(params.gid) {
			params.gid = parseInt(params.gid, 10);
		}

		return params;
	};

	var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
		var pswpElement = document.querySelectorAll('.pswp')[0],
			gallery,
			options,
			items;

		items = parseThumbnailElements(galleryElement);

		// 옵션을 정의하십시오 (필요한 경우).
		options = {

			// 갤러리 색인 정의 (URL 용)
			galleryUID: galleryElement.getAttribute('data-pswp-uid'),

			getThumbBoundsFn: function(index) {
				// 자세한 내용은 설명서의 옵션 -> getThumbBoundsFn 섹션을 참조하십시오.
				var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
					pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
					rect = thumbnail.getBoundingClientRect(); 

				return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
			}

		};

		// PhotoSwipe URL에서 열림
		if(fromURL) {
	    	if(options.galleryPIDs) {
	    		// 사용자 정의 PID가 사용될 때 실제 색인을 구문 분석합니다.
	    		// http://photoswipe.com/documentation/faq.html#custom-pid-in-url
	    		for(var j = 0; j < items.length; j++) {
	    			if(items[j].pid == index) {
	    				options.index = j;
	    				break;
	    			}
	    		}
		    } else {
		    	// URL 인덱스는 1부터 시작합니다.
		    	options.index = parseInt(index, 10) - 1;
		    }
	    } else {
	    	options.index = parseInt(index, 10);
	    }

	    // 색인을 찾을 수없는 경우 종료하십시오.
	    if( isNaN(options.index) ) {
	    	return;
	    }

		if(disableAnimation) {
			options.showAnimationDuration = 0;
		}

		// PhotoSwipe에 데이터를 전달하고 초기화하십시오.
		gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
		gallery.init();
	};

	// 모든 갤러리 요소와 바인드 이벤트를 반복합니다.
	var galleryElements = document.querySelectorAll( gallerySelector );

	for(var i = 0, l = galleryElements.length; i < l; i++) {
		galleryElements[i].setAttribute('data-pswp-uid', i+1);
		galleryElements[i].onclick = onThumbnailsClick;
	}

	// #&pid=3&gid=1 인 경우 URL을 구문 분석하고 갤러리를 엽니 다.
	var hashData = photoswipeParseHash();
	if(hashData.pid && hashData.gid) {
		openPhotoSwipe( hashData.pid ,  galleryElements[ hashData.gid - 1 ], true, true );
	}
};

// 위의 함수를 실행합니다.
initPhotoSwipeFromDOM('.my-gallery');
```


CodePen에 대한 예제 (embed 문제로 인해`focus` 및`history` 옵션이 비활성화되었습니다) :

<div class="codepen-embed">
	<p data-height="600" data-theme-id="10447" data-slug-hash="ZYbPJM" data-default-tab="result" data-user="dimsemenov" class='codepen'>
		<a href="http://codepen.io/dimsemenov/pen/ZYbPJM/" target="_blank"><strong>View example on CodePen &rarr;</strong></a>
	</p>
</div>

팁 : CodePen에서 예제를 다운로드하여 로컬로 재생할 수 있습니다 (`Edit on CodePen` ->`Share` ->`Export .zip`).

-이 예제와 다른 마크 업을 사용한다면`parseThumbnailElements` 함수를 편집해야합니다.
- 순수 자바 스크립트에 익숙하지 않고 DOM을 파싱하는 방법을 모르는 경우 [QuirksMode](http://quirksmode.org/dom/core/#gettingelements) 및 [MDN에 대한 설명서](https : //developer.mozilla.org/en-US/docs/Web/API/Element.getElementsByTagName).
- IE8은 HTML5`<figure>`와`<figcaption>`요소를 지원하지 않으므로`<head>`섹션에 [html5shiv](https://github.com/aFarkas/html5shiv)를 포함시켜야한다. 예를 들어 [cdnjs hosted version](http://cdnjs.com/libraries/html5shiv/)이 사용됩니다.

    ```html
    <!--[if lt IE 9]>
        <script src="//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv.min.js"></script>
    <![endif]-->
    ```


## 요약

[계속 스크립트를 업데이트하십시오](faq.html#keep-updated), [GitHub](https://github.com/dimsemenov/PhotoSwipe)를 통해 버그를보고하고, [UserVoice](https://photoswipe.uservoice)의 기능을 제안하십시오. .com/forums/275302-feature-requests-ideas). [StackOverflow](http://stackoverflow.com/questions/ask?tags=javascript,photoswipe)를 통해 질문하십시오.

이 페이지를 개선 할 수있는 방법을 알고 있습니까? 오타가있는 걸까요? [Suggest an edit!](https://github.com/dimsemenov/PhotoSwipe/blob/master/website/documentation/getting-started.md)


<iframe src="http://ghbtns.com/github-btn.html?user=dimsemenov&amp;repo=photoswipe&amp;type=watch&amp;count=true&amp;size=large" allowtransparency="true" frameborder="0" scrolling="0" width="155" height="30" style=""></iframe>