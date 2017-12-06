---

layout: 기본 값

title: PhotoSwipe API

h1_title: API

description: 공용 메소드, PhotoSwipe 자바스크립트 이미지 갤러리의 속성 및 이벤트

addjs: true

정식_url: http://photoswipe.com/documentation/api.html

buildtool: true

markdownpage: true

---

이 페이지에 나열된 모든 메소드와 속성은 공개 됩니다. 만약 API가 할수 있는 일의 예를 보고 싶다면 [기본 PhotoSwipe UI의 소스](https://github.com/hun1451/PhotoSwipe/blob/master/src/js/ui/photoswipe-ui-default.js)를 살펴 주세요.

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

// 갤러리 닫기
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

// 현재 슬라이드 객체
pswp.currItem

// 배열 items (슬라이드, 이미지)
pswp.items

// 슬라이딩 뷰포트의 크기
pswp.viewportSize

// 객체는 프레임 워크에서 모든 기능을 유지
// framework-bridge.js
pswp.framework

// UI 객체 (예. PhotoSwipeUI_Default 인스턴스)
pswp.ui

// 배경 요소 (pswp__bg)
pswp.bg

// 컨테이너 요소 (pswp__container)
pswp.container

// 옵션들
pswp.options



// 아래의 메소드가 기술적인 속성이 아닐지라도, 여기에 이 메소드 나열 합니다:

// 현재 항목의 인덱스 (int)
pswp.getCurrentIndex();

// 총 항목의 수
pswp.options.getNumItemsFn()

// 현재 줌 레벨 (number)
pswp.getZoomLevel();

// 하나 이상의 포인터가 사용
pswp.isDragging();

// 두개 이상의 포인터가 사용
pswp.isZooming();

// 둘 사이의 전환이 실행 중일때 '참' (스와이프 후에)
pswp.isMainScrollAnimating();
```

## 이벤트

PhotoSwipe는 아주 간단한 이벤트/메세징 시스템을 사용합니다. 이 것은 두가지 메소드 'shout'(이벤트 트리거)와 listen(이벤트 핸들링)을 가지고 있습니다. 지금 리스너 바인딩을 해제하는 방법은 없지만, PhotoSwipe가 완료되면 그들 모두는 지워집니다.

```javascript
var pswp = new PhotoSwipe(/* ... */);

// "helloWorld" 이벤트 듣기
pswp.listen('helloWorld', function(name) {
	alert('Name is: ' + name);
});

// "helloWorld" 이벤트 트리거
pswp.shout('helloWorld', 'John');
```

사용가능한 이벤트:

```javascript

// 슬라이드가 변경되기 전에
// (내용이 변경되기 전에, 탐색 후에)
// 여기에 UI를 업데이트 (예. "1 of X" 표시기)
pswp.listen('beforeChange', function() { });

// 슬라이드가 변경된 이후
// (내용 변경 후)
pswp.listen('afterChange', function() { });

// 이미지 로드
pswp.listen('imageLoadComplete', function(index, item) { 
	// index - 로드 된 슬라이드의 인덱스
	// item - 슬라이드 개체
});

// 뷰포트 크기 변경
pswp.listen('resize', function() { });

// PhotoSwipe가 슬라이드 개체 데이터를 "읽는"경우의 트리거는,
// 컨텐츠가 설정 되기 전 또는 지연로드가 시작 되기 전에 발생
// 동적으로 속성을 변경하는 데 사용
pswp.listen('gettingData', function(index, item) {
	// index - 로드 된 슬라이드 인덱스
	// item - 슬라이드 개체

	// 예. 'something'을 기반으로 이미지 경로 변경
	if( something ) {
		item.src = item.something;
	} else {
		item.src = item.somethingElse;
	}
});

// 마우스 사용 됨(한번 만 트리거 됨)
pswp.listen('mouseUsed', function() { });


// 애니메이션 시작 시 확대 시작
pswp.listen('initialZoomIn', function() { });

// 애니메이션 확대/축소 완료
pswp.listen('initialZoomInEnd', function() { });

// 애니메이션 닫기/축소 시작
pswp.listen('initialZoomOut', function() { });

// 애니메이션 닫기/축소 완료
pswp.listen('initialZoomOutEnd', function() { });


// 개별 항목에 대한 수직 여백 재정의 허용
pswp.listen('parseVerticalMargin', function(item) { 
	// 예시:
	var gap = item.vGap;

	gap.top = 50; // 뷰포트 위쪽에서 50px 갭이 있음
	gap.bottom = 100; // 그리고 하단에서 100px 간격
})

// 갤러리 닫기를 시작
pswp.listen('close', function() { });

// 갤러리가 이벤트 바인딩 해제
// (애니메이션을 닫기 전의 트리거)
pswp.listen('unbindEvents', function() { });

// 갤러리가 닫히고 애니메이션이 끝난 후
// 여기애서 정리
pswp.listen('destroy', function() { });

// 페이지가 스크롤 될 때 호출
// 콜백은 속성{x: number, y: number}이 있는 오프셋이 전달
//
// PhotoSwipe는 오프셋을 사용하여 템플릿의 왼쪽 상단을 결정하고,
// 기본적으로 뷰포트의 왼쪽 상단에 있음. modal을 사용할때 : false
// 이 이벤트가 진행되고(.init()를 호출하기 전에) 오프셋을 변경해야 함
// getBoundingClientRect()를 사용.
//
pswp.listen('updateScrollOffset', function(_offset) {
    var r = gallery.template.getBoundingClientRect();
    _offset.x += r.left;
    _offset.y += r.top;
});

// PhotoSwipe에는 pswpTap라는 특별한 이벤트가 있음.
// pswpTap은 기본 자바스크립트 이벤트 모델을 사용하여 전달
// 예를 들어, stopPropagation을 호출 할 수 있음.
// pswp.framework.bind - addEventListener의 줄임말
pswp.framework.bind( pswp.scrollWrap /* 갤러리의 모든 요소에 바인딩 */, 'pswpTap', function(e) {
    console.log('tap', e, e.detail);
    // e.detail.origEvent  // 탭을 종료한 본래 이벤트 (예. 마우스및 터치)
    // e.detail.target // e.target의 본래 이벤트
    // e.detail.releasePoint // 탭의 x/y 좌표를 가진 객체
    // e.detail.pointerType // 마우스, 터치 또는 펜
});

// Allow to call preventDefault on down and up events
pswp.listen('preventDragEvent', function(e, isDown, preventObj) {
	// e - 본래 이벤트
	// isDown - true = 드래그 시작, false = 드래그 릴리즈

	// 아래는 e.preventDefault()를 강제 실행:
	// 터치 시작 / 마우스 다운  / 포인터 다운 이벤트
	// 뿐만 아니라:
	// touchend/mouseup/pointerup 이벤트들
	preventObj.prevent = true;
});



// 기본 UI 이벤트
// -------------------------

// 클릭한 링크 공유
pswp.listen('shareLinkClick', function(e, target) { 
	// e - 본래의 클릭 이벤트
	// target - 클릭된 링크

	// `target`이 `href` 속성을 가지고 있고, 
	// 'download' 속성을 가지고 있지 않음 - 
	// 공유 modal 창이 팝업
});


```

## 동적으로 슬라이드 추가하기

PhotoSwipe가 열린 후 슬라이드를 추가, 편집 또는 제거하려면 `items`이라는 배열을 수정만 하면 됩니다. 예를 들어, 새 슬라이드 객체를 `items` 배열에 넣을 수 있습니다

```javascript
pswp.items.push({
    src: "path/to/image.jpg", 
    w:1200,
    h:500 
});
```

CURRENT, NEXT 또는 PREVIOUS 중 하나의 슬라이드를 변경한 경우 &ndash; 컨텐츠를 업데이트하는 메소드를 호출해야 합니다.

```javascript
// 슬라이드를 업데이트 해야 한다는 플래그를 설정
pswp.invalidateCurrItems();
// 슬라이드 내용 업데이트
pswp.updateSize(true);
```

그렇지 않다면 `pswp.ui.update()`를 호출하는 것 외에는 다른 작업을 수행 할 필요가 없습니다. 기본 UI의 일부를 업데이트하려는 경우 (예 : `1 of X` 카운터) 참고사항 : 

- 전체 배열을 재 할당 할 수는 없으며 수정할 수 있습니다.(예 : `splice`를 사용한 요소 제거)
- 현재 슬라이드를 제거 하려는 경우 &ndash; 그 전에 `goTo`메소드를 먼저 호출해야 됩니다.
- 적어도 하나의 슬라이드가 있어야 합니다.
-이 기술은 [반응형 이미지를 제공](responsive-images.md)하는데 사용됩니다.

일부 메소드 또는 속성이 누락 되었나요? 문법적 오류를 발견 했나요? 이 페이지를 개선할수 있는 방법을 알고 계시나요? [편집을 제안 해주세요!](https://github.com/hun1451/PhotoSwipe/blob/master/website/documentation/api.md)

