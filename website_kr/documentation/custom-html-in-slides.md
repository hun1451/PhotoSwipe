---

layout: 기본값

title: PhotoSwipe 슬라이드의 사용자 지정 HTML컨텐츠

hi_title: 슬라이드의 사용자 지정 HTML컨텐츠

description: 광고 또는 관련 갤러리 목록처럼 PhotoSwipe 슬라이드에 맞춤 HTML을 추가하는 방법

addjs: true

정식_URL: http://photoswipe.com/documentation/custom-html-in-slides.html

buildtool: true

markdownpage: true

---

PhotoSwipe가 슬라이드에 HTML컨텐츠를 표시하게 하려면 슬라이드 객체에서 `html`속성을 정의 해야 함. HTML 문자열 또는 DOM 요소 객체를 포함해야 함.

```javascript

var items = [
	// 슬라이드 1 with HTML
	{
		html: '<div><h1>Any HTML <a href="http://example.com">content</a></h1></div>'
	},

	// 슬라이드 2 with image
	{
		src: 'path/to/image.jpg',
		w:600,
		h:200
	}
];


// 평소대로 초기화
var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);

// 평소대로 초기화
// getData이벤트에서 동적으로 만들 수 있음.
/*
	gallery.listen('gettingData', function(index, item) {
		if(index === 3) {
			item.html = '<div>Dynamically generated HTML ' + Math.random() + '</div>';
		}

	});
*/

// getData이벤트가 바인드 된 후 init() 메소드가 호출됨에 유의
gallery.init();
```

추가적인 중요 메모:

- 제 3자 모듈과의 충돌을 피하기 위해, `html` 속성을 가진 슬라이드는 `src`(이미지)속성을 가지지 않아야 합니다.
- PhotoSwipe는 텍스트컨텐츠의 스크롤러가 아닌 이미지용으로 설계 되었습니다. `맞춤 HTML`기능을 추가로 사용하세요.(예: 관련 갤러리가 있는 슬라이드, 소개슬라이드또는 이미지 사이의 광고)
- 이 방법(Youtube, Vimeo 등의 iframe 포함)을 사용하여 동영상 또는 오디오 요소를 푸가하는 것은 강력하지 않습니다. HTML5 비디오 블록이 많은 모바일 브라우저에서 이벤트를 터치하므로 사용자가 스와이프를 할수 없습니다. PhotoSwipe에 비디오가 정말로 필요한 경우, 사용자가 현재 슬라이드를 탭할 때 나타나는 modal로 추가 할수 있습니다. DOM에 modal을 동적으로 만들고 `.pswp__scroll-wrap` 요소 뒤에 추가 할 수 있습니다.
- 초기 줌인 (zoom-in) / 줌아웃(zoom-out)전환이 활성화 된 경우, PhotoSwipe 는 현재 슬라이드에 `html`이 있으면 자동으로 비활성화 합니다. 대신 단순한 페이드 전환이 사용됩니다
- 기본적으로 PhotosSwipe는 링크('<a>')와 그 자식 요소들에 대해서만 클릭 이벤트를 허용합니다. 이 행동을`isClickableElement` 옵션이나 `preventDragEvent` 이벤트로 변경하세요.
- HTML 슬라이드에 대한 줌(zoom)은 아직 지원되지 않습니다.

예:

<div class="codepen-embed">
	<p data-height="600" data-theme-id="10447" data-slug-hash="MYexrm" data-default-tab="result" data-user="dimsemenov" class='codepen'>
		<a href="http://codepen.io/dimsemenov/pen/MYexrm/" target="_blank"><strong>View example on CodePen &rarr;</strong></a>
	</p>
</div>

Tip: CodePen에서 예제를 다운로드하여 로컬로 재생 할 수 있습니다. (`Edit on CodePen` -> `Share` -> `Export .zip`)

이 페이지를 개선할수 있는 방법을 알고 계시나요? [편집을 제안 해주세요!](https://github.com/hun1451/PhotoSwipe/blob/master/website/documentation/custom-html-in-slides.md)


