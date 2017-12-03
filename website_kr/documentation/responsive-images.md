---

layout: 기본값

title: PhotoSwipe에서 응답하는 이미지 제공

h1_title: 응답 이미지

description: PhotoSwipe에서 반응하는 이미지를 어떻게 제공하는지에 대한 완벽한 가이드.

addjs: true

canonical_url: http://photoswipe.com/documentation/responsive-images.html

buildtool: true

markdownpage: true

---

PhotoSwipe는 이미지 크기가 정의되어 있고 레이블 로딩이 필요하므로 `<picture>` 나 `srcset`를 지원하지 않습니다. 하지만 이미지가 역동적으로 작용함에 따라 심지어는 `srcset`을 지원하지 않는 오래 된 브라우저에서 조차도 소스를 바꾸기가 쉽습니다.

"매체" 이미지와 "원본" ("큰") 이미지가 있다고 가정해 봅시다. 예를 들어, 다음과 같이 슬라이드 객체에 이미지의 경로와 크기를 저장해야 합니다.

```javascript
var items = [

	// 슬라이드 1 Slide 1
	{
		mediumImage: {
			src: 'path/to/medium-image-1.jpg',
			w:800,
			h:600
		},
		originalImage: {
			src: 'path/to/large-image-1.jpg',
			w: 1400,
			h: 1050
		}
	},

	// 슬라이드 2 Slide 2
	// {
	//     mediumImage: {
	//         src: 'path/to/medium-image-2.jpg',
	//         ...
	//     
	// ...
		
];
```

그리고 나서:


```javascript
// 평소대로 초기화 
var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);

// 실제 크기의 viewport를 저장할 변수를 생성
var realViewportWidth,
	useLargeImages = false,
	firstResize = true,
	imageSrcWillChange;

// 갤러리 뷰 포트의 각 시간 크기별로 이벤트를 발생
updates
gallery.listen('beforeResize', function() {
	// gallery.viewportSize.x - width of PhotoSwipe viewport
	// gallery.viewportSize.y - height of PhotoSwipe viewport
	// window.devicePixelRatio - ratio between physical pixels and device independent pixels (Number)
	//							1 (regular display), 2 (@2x, retina) ...
	

	// 크기가 변할 때 실제 픽셀을 계산
	realViewportWidth = gallery.viewportSize.x * window.devicePixelRatio;
	
	// 아래의 코드는 이미지를 윈도우에서 동적으로 전환하려는 경우에 필요
	
	// 현재 이미지를 변경해야 하는지 확인
	if(useLargeImages && realViewportWidth < 1000) {
		useLargeImages = false;
		imageSrcWillChange = true;
	} else if(!useLargeImages && realViewportWidth >= 1000) {
		useLargeImages = true;
		imageSrcWillChange = true;
	}

	//소스가 변경된 경우에만 항목을 나열하고 첫번째 업데이트가 아닌 경우
	if(imageSrcWillChange && !firstResize) {
		// invalidateCurritems는 DOM에 있는 슬라이드에 플래그를 설정
		// 따라서 콘텐츠(이미지)에 콘텐츠(이미지)를 강제로 업데이트 가능
		gallery.invalidateCurrItems();
	}

	if(firstResize) {
		firstResize = false;
	}

	imageSrcWillChange = false;

});


// gettingData이벤트는 PhotoSwipe가 이미지 소스와 크기를 검색할 때마다 발생
gallery.listen('gettingData', function(index, item) {

	// 실제 뷰 포트 폭을 기준으로 이미지 소스 및 크기 설정
	if( useLargeImages ) {
		item.src = item.originalImage.src;
		item.w = item.originalImage.w;
		item.h = item.originalImage.h;
	} else {
		item.src = item.mediumImage.src;
		item.w = item.mediumImage.w;
		item.h = item.mediumImage.h;
	}

	// 여기서 무엇을 할지는 중요하지 않습니다. 
	// 예를 들어 item.src, item.w 그리고 item.h 유효한 값을 갖는 한.
	// 
	// 이 리스너에서 HTTP요청을 피하세요. 꽤 자주 발생합니다.

});


// Init()메소드는 gettingData이벤트가 바인딩 된 후 호출 됩니다.
gallery.init();

```

- 위와 같은 슬라이드 객체의 구조를 사용할 의무가 없습니다 (`mediumImage` 및 `largeImage` 객체). 예를 들어 이미지 파일 이름  (`/path/to/large-image-600x500.jpg`) 에 이미지 크기를 직접 저장한 다음 `gettingData`이벤트 에서 크기를 분석할 수 있습니다. `gettingData` 이벤트가 끝난 뒤에야 PhotoSwipe에 의해서 `item.src`, `item.w`그리고 `item.h` 속성들을 읽습니다.
- 이미지가 클 수록 덜 부드로운 애니메이션이 나타납니다.
- 장치에 대해서만 사용하거나 뷰 포트 크기를 기반으로 하여 이미지를 제공하지 마십시오. 항상 두가지를 조합하여 사용하십시오.
- PhotoSwipe를 여는 축소판에 `srcset`을 사용하세요.




이 가이드를 개선할 수 있는 방법을 알고 계십니까? 
[편집을 제안합니다!](https://github.com/dimsemenov/PhotoSwipe/blob/master/website/documentation/responsive-images.md)