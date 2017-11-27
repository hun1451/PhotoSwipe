---

layout: 기본

title: PhotoSwipe API

h1_title: API

description: 공용 메소드, PhotoSwipe 자바스크립트 이미지 갤러리의 속성 및 이벤트

addjs: true

canonical_url: http://photoswipe.com/documentation/api.html

buildtool: true

markdownpage: true

---

이 페이지에 나열된 모든 메소드와 속성은 공개 됩니다. 만약 API가 할수 있는 일의 예를 보고 싶다면 [기본 PhotoSwipe UI의 소스]를 살펴 주세요.(https://github.com/dimsemenov/PhotoSwipe/blob/master/src/js/ui/photoswipe-ui-default.js).

당신은 초기화 중 PhotoSwipe 인스턴스 객체를 얻을수 있습니다.

```javascript
var photoswipeInstance = new PhotoSwipe( /* ... */ );
```

## 메소드

```javascript
var pswp = new PhotoSwipe( /* ... */ );

// 갤러리 초기화 및 열기
// (이 메소드 전에 이벤트를 바인딩 할 수 있습니다.)
pswp.init();

// 인덱스로부터 슬라이드로 이동
// 파라메터	{int}	'index'
pswp.goTo(index);

// 다음 슬라이드로 이동
pswp.next();

// 이전 슬라이드로 이동
pswp.prev();

// 갤러리 크기 업데이트
// 파라메터	{boolean}	`force`를 'true'로 설정하면,
// 							갤러리의 크기가 업데이트 됩니다.
// 							뷰포트의 크기가 변경되지 않은 경우에도 마찬가지
pswp.updateSize(force);

// Close gallery
pswp.close();

// 갤러리 파괴,
// close() 이후에 자동으로 호출
pswp.destroy()

// 현재 슬라이드 확대 / 축소 (애니메이션 옵션)
// 파라메터	{number}	`destZoomLevel` 대상의 척도. 1 - 원본.  
// 								     pswp.currItem.fitRatio - 이미지가 뷰포트에 맞음
// object 파라메터   `centerPoint`   뷰포트에 대한 x,y 좌표의 객체
// 파라메터	{int}	`speed`         애니메이션 기간.  0이 될수 있음
// 파라메터	{function}	`easingFn`      이징 기능 (옵션). 디폴트 이징을 사용하려면 false로 설정
// 파라메터	{function}	`updateFn`      함수는 각 업데이트 프레임에서 호출 (옵션)
//
// 슬라이드 중심에서 2배 확대시키는 예시
// pswp.zoomTo(2, {x:pswp.viewportSize.x/2,y:pswp.viewportSize.y/2}, 2000, false, function(now) {
// 		
// });
pswp.zoomTo(destZoomLevel, centerPoint, speed, easingFn, updateFn);

// 현재 슬라이드에 확대 / 축소 및 적용
// 
// 파라메터   {number} `zoomLevel`
// 파라메터   {int}    `panX`
// 파라메터   {int}    `panY`
// 
// 예 : `pswp.applyZoomPan(1, 0, 0)`
// 현재 이미지를 원래 크기로 확대 / 축소
// 그리고 왼쪽 상단에 배치
// 
// 
pswp.applyZoomPan(zoomLevel, panX, panY);
```

## 속성

```javascript

// current slide object
pswp.currItem

// items array (slides, images)
pswp.items

// size of sliding viewport
pswp.viewportSize

// object holds all functions from framework
// framework-bridge.js
pswp.framework

// UI object (e.g. PhotoSwipeUI_Default instance)
pswp.ui

// background element (pswp__bg)
pswp.bg

// container element (pswp__container)
pswp.container

// options
pswp.options



// Even though methods below aren't technically properties, we list them here:

// current item index (int)
pswp.getCurrentIndex();

// total number of items
pswp.options.getNumItemsFn()

// current zoom level (number)
pswp.getZoomLevel();

// one (or more) pointer is used
pswp.isDragging();

// two (or more) pointers are used
pswp.isZooming();

// `true` when transition between is running (after swipe)
pswp.isMainScrollAnimating();
```

## 이벤트

PhotoSwipe는 아주 간단한 이벤트/메세징 시스템을 사용합니다. 이 것은 두가지 메소드 'shout'(이벤트 트리거)와 listen(이벤트 핸들링)을 가지고 있습니다. 지금 리스너 바인딩을 해제하는 방법은 없지만, PhotoSwipe가 완료되면 그들 모두는 지워집니다.

```javascript
var pswp = new PhotoSwipe(/* ... */);

// Listen for "helloWorld" event
pswp.listen('helloWorld', function(name) {
	alert('Name is: ' + name);
});

// Trigger "helloWorld" event
pswp.shout('helloWorld', 'John' /* you may pass more arguments */);
```

사용가능한 이벤트:

```javascript

// Before slides change
// (before the content is changed, but after navigation)
// Update UI here (like "1 of X" indicator)
pswp.listen('beforeChange', function() { });

// After slides change
// (after content changed)
pswp.listen('afterChange', function() { });

// Image loaded
pswp.listen('imageLoadComplete', function(index, item) { 
	// index - index of a slide that was loaded
	// item - slide object
});

// Viewport size changed
pswp.listen('resize', function() { });

// Triggers when PhotoSwipe "reads" slide object data,
// which happens before content is set, or before lazy-loading is initiated.
// Use it to dynamically change properties
pswp.listen('gettingData', function(index, item) {
	// index - index of a slide that was loaded
	// item - slide object

	// e.g. change path to the image based on `something`
	if( something ) {
		item.src = item.something;
	} else {
		item.src = item.somethingElse;
	}
});

// Mouse was used (triggers only once)
pswp.listen('mouseUsed', function() { });


// Opening zoom in animation starting
pswp.listen('initialZoomIn', function() { });

// Opening zoom in animation finished
pswp.listen('initialZoomInEnd', function() { });

// Closing zoom out animation started
pswp.listen('initialZoomOut', function() { });

// Closing zoom out animation finished
pswp.listen('initialZoomOutEnd', function() { });


// Allows overriding vertical margin for individual items
pswp.listen('parseVerticalMargin', function(item) { 
	// For example:
	var gap = item.vGap;

	gap.top = 50; // There will be 50px gap from top of viewport
	gap.bottom = 100; // and 100px gap from the bottom
})

// Gallery starts closing
pswp.listen('close', function() { });

// Gallery unbinds events
// (triggers before closing animation)
pswp.listen('unbindEvents', function() { });

// After gallery is closed and closing animation finished.
// Clean up your stuff here.
pswp.listen('destroy', function() { });

// Called when the page scrolls.
// The callback is passed an offset with properties {x: number, y: number}.
//
// PhotoSwipe uses the offset to determine the top-left of the template,
// which by default is the top-left of the viewport. When using modal: false,
// you should listen to this event (before calling .init()) and modify the offset
// with the template's getBoundingClientRect().
//
// Look at the "Implementing inline gallery display" FAQ section for more info.
pswp.listen('updateScrollOffset', function(_offset) {
    var r = gallery.template.getBoundingClientRect();
    _offset.x += r.left;
    _offset.y += r.top;
});

// PhotoSwipe has a special event called pswpTap.
// It's dispatched using default JavaScript event model.
// So you can, for example, call stopPropagation on it.
// pswp.framework.bind - is a shorthand for addEventListener
pswp.framework.bind( pswp.scrollWrap /* bind on any element of gallery */, 'pswpTap', function(e) {
    console.log('tap', e, e.detail);
    // e.detail.origEvent  // original event that finished tap (e.g. mouseup or touchend)
    // e.detail.target // e.target of original event
    // e.detail.releasePoint // object with x/y coordinates of tap
    // e.detail.pointerType // mouse, touch, or pen
});

// Allow to call preventDefault on down and up events
pswp.listen('preventDragEvent', function(e, isDown, preventObj) {
	// e - original event
	// isDown - true = drag start, false = drag release

	// Line below will force e.preventDefault() on:
	// touchstart/mousedown/pointerdown events
	// as well as on:
	// touchend/mouseup/pointerup events
	preventObj.prevent = true;
});



// Default UI events
// -------------------------

// Share link clicked
pswp.listen('shareLinkClick', function(e, target) { 
	// e - original click event
	// target - link that was clicked

	// If `target` has `href` attribute and 
	// does not have `download` attribute - 
	// share modal window will popup
});


```

## 동적으로 슬라이드 추가하기

PhotoSwipe가 열린 후 슬라이드를 추가, 편집 또는 제거하려면 'items'이라는 배열을 수정만 하면 됩니다. 예를 들어, 새 슬라이드 객체를 'items' 배열에 넣을 수 있습니다

```javascript
pswp.items.push({
    src: "path/to/image.jpg", 
    w:1200,
    h:500 
});
```

CURRENT, NEXT 또는 PREVIOUS 중 하나의 슬라이드를 변경한 경우 &ndash; 컨텐츠를 업데이트하는 메소드를 호출해야 합니다.

```javascript
// sets a flag that slides should be updated
pswp.invalidateCurrItems();
// updates the content of slides
pswp.updateSize(true);
```

그렇지 않다면 `pswp.ui.update()`를 호출하는 것 외에는 다른 작업을 수행 할 필요가 없습니다. 기본 UI의 일부를 업데이트하려는 경우 (예 : '1 of X' 카운터) 참고사항 : 

- 전체 배열을 재 할당 할 수는 없으며 수정할 수 있습니다.(예 : 'splice'를 사용한 요소 제거)
- 현재 슬라이드를 제거 하려는 경우 &ndash; 그 전에 'goTo'메소드를 먼저 호출해야 됩니다.
- 적어도 하나의 슬라이드가 있어야 합니다.
-이 기술은 [반응형 이미지를 제공]하는데 사용됩니다(responsive-images.html).

일부 메소드 또는 속성이 누락 되었나요? 문법적 오류를 발견 했나요? 이 페이지를 개선할수 있는 방법을 알고 계시나요? [편집을 제안 해주세요!] (https://github.com/dimsemenov/PhotoSwipe/blob/master/website/documentation/api.md)

