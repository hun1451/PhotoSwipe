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

�ɼ��� Ű - �� �ֿ� �߰��ǰ� 'PhotoSwipe` �����ڿ� �μ��� ���޵˴ϴ� (�� :

```javascript
var options = {
	index: 3,
	escKey: false,

	// ui option
	timeToIdle: 4000
};
var gallery = new PhotoSwipe( someElement, PhotoSwipeUI_Default, someItems, options);
gallery.init();

// options ��ü�� �ʱ�ȭ�ϴ� ���� �����˴ϴ�.
// �׷�����`gallery.options`�� ���� ���� �� �� �ֽ��ϴ�.
// ���� ���`escKey`�� �������� �����Ϸ��� :
gallery.options.escKey = false;

// `options.escKey = false` will not work 

```


## Core

### `index` <code class="default">integer</code> <code class="default">0</code>

�����̵� ������ �����Ͻʽÿ�. '0'�� ù ��° �����̵��Դϴ�. ���ڿ��� �ƴ� ���� �����մϴ�.

### `getThumbBoundsFn` <code class="default">function</code> <code class="default">undefined</code>

�Լ��� �ʱ� Ȯ�� �ִϸ��̼��� ���۵� ��ǥ (�Ǵ� ��� �ִϸ��̼��� ���� ��)���ִ� ��ü�� ��ȯ�ؾ��մϴ�.

��ü�� 'x'(������ ���� ������� X ��ġ), 'y'(������ ���� ������� Y ��ġ), 'w'(����� ��)�� �� ���� �Ӽ��� �����ؾ��մϴ�. ���̴� ū �̹����� ũ�⿡ ���� �ڵ����� ���˴ϴ�. ���� ���`{x : 0, y : 0, w : 50} '�� ��ȯ�ϸ� �� �ִϸ��̼��� �������� ���� ��ܿ��� ���۵˴ϴ�.

�Լ��� ���� �� ������ �׸���`index` ���ڸ� �ϳ� ������ �ֽ��ϴ�.

����� ���� (non-modal) ��忡��, ����Ʈ�� ������� ���ø��� ��ġ��`x`��`y`���� �����մϴ�. �ڼ��� ������ [FAQ](faq.html#inline-gallery)�� �����Ͻʽÿ�.

�̸����� �̹����� ��ġ�� ����ϴ� �� :

```javascript
getThumbBoundsFn: function(index) {

	// ������ ��Ҹ� ã�´�.
	var thumbnail = document.querySelectorAll('.my-gallery-thumbnails')[index];
	
	// â ��ũ�� Y�� ��´�.
	var pageYScroll = window.pageYOffset || document.documentElement.scrollTop; 
	// ���������� ���� ��ũ���� ��´�.

	// ����Ʈ�� �������� �� ����� ��ġ�� ��´�.
	var rect = thumbnail.getBoundingClientRect(); 
	
	// w = width
	return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};


	// ��� ��ǥ�� ��� ����� ���� ���� ���̵� :
	// http://javascript.info/tutorial/coordinates
}
```

���� �̸����� �̹����� ũ�Ⱑ ū �̹����� ũ��� ��ġ���� ������ Ȯ�� / ��� ���̵� ��ȯ�� ����Ͻʽÿ�. `showHideOpacity : true` �ɼ��� �߰��Ͽ��� �۾��� ���� �� �� �ֽ��ϴ� (���� �ڵ� �� (http://codepen.io/dimsemenov/pen/ZYbPJM)�� �߰��Ͽ� ��� ���̴��� �׽�Ʈ �غ��ʽÿ�). �Ǵ� `hideAnimationDuration : 0, showAnimationDuration : 0`�� �߰��Ͽ� ��ȯ�� ������ ��Ȱ��ȭ�Ͻʽÿ�. [FAQ���� �̿� ���� �ڼ��� ����](faq.html#different-thumbnail-dimensions).

�ִϸ��̼� �߿� ���� ������� ����� �ʹٸ�`visibility : hidden`�̳�`display : none`�� �ƴ϶�`opacity : 0`�� ����Ͻʽÿ�. �ִϸ��̼��� ���۵� �� ��ġ�� ���ϱ� ���� ����Ʈ �� ���̾ƿ��� ���� �������� ���ʽÿ�.


### `showHideOpacity` <code class="default">boolean</code> <code class="default">false</code>

`false`�� �����ϸ� ��� `opacity`�� �̹��� `scale`�� �ִϸ��̼����� ǥ�õ˴ϴ� (�̹��� �������� �׻� 1�Դϴ�).
`true`�� �����ϸ� : `root PhotoSwipe ���`opacity`��`scale` �̹����� �ִϸ��̼����� ��Ÿ���ϴ�.

`������`��ȯ�� �����ϰ��Ϸ��� ( `scale`����), `getThumbBoundsFn` �ɼ��� �������� ���ʽÿ�.

### `showAnimationDuration` <code class="default">integer</code> <code class="default">333</code>

�ʱ� ���� ��ȯ ���� �ð� (�и� ��). ������� �������� '0'���� �����Ͻʽÿ�.
�� JS �ɼ� �ܿ��� PhotoSwipe CSS ������ ��ȯ ���� �ð��� �����ؾ��մϴ�.

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

Sass�� ����ϴ� ��� [_main-settings.scss](https://github.com/hun1451/PhotoSwipe/blob/master/src/css/_main-settings.scss)���� ��ȯ �Ⱓ ������ �����ϱ� ���ϸ�˴ϴ�.


### `hideAnimationDuration` <code class="default">integer</code> <code class="default">333</code>

���� �ɼǰ� �����ϸ�, ��ȯ (���) ��ȯ���� ���˴ϴ�. PhotoSwipe�� ������`pswp-open` Ŭ������ ��Ʈ ��ҿ� �߰��˴ϴ�. CSS���� �ٸ� ��ȯ �Ⱓ�� �����ϴ� �� ����� �� �ֽ��ϴ�.


### `bgOpacity` <code class="default">number</code> <code class="default">1</code>

��� (`.pswp__bg`) ������. 0���� 1 ������ ���� �����մϴ� (�� : `0.7`. �� ��Ÿ���� CSS�� ������ �ʰ� JS�� ���� ���ǵ˴ϴ�.�� ���� �� ���� ����ó ��� ��ȯ�� ���Ǳ� �����Դϴ�.


### `spacing` <code class="default">number</code> <code class="default">0.12</code>

�����̵� ������ ���� ����. ���� ��� '0.12'�� �����̵� ����Ʈ �ʺ��� 12 % (�ݿø� ��)�� �������˴ϴ�.


### `allowPanToNext` <code class="default">boolean</code> <code class="default">true</code>

���� �׸��� Ȯ�� �� ��� ���� / ���� �׸����� �� ������ Ž���� ����մϴ�. �ϵ���� ��ġ�� �������� �ʴ� ����� ��� �ɼ��� �׻� `����`�Դϴ�.


### `maxSpreadZoom` <code class="default">number</code> <code class="default">2</code>

��ġ�� (Ȯ�� / ���) ������ ���� �� ���� �ִ� �� �����Դϴ�. `2`�� �̹����� ���� ũ���� 2 ��� Ȯ�� �� �� ������ �ǹ��մϴ�. �ʹ� ū �̹����� ����� (Ư�� iOS)���� �޸� ������ ����ų �� �����Ƿ� ū ���� ���ؾ��մϴ�.


### `getDoubleTapZoom` <code class="default">function</code>

�Լ��� �� �� ��¦ �����ų� �̹����� Ŭ���ϰų� Ȯ�� / ��� �������� Ŭ���ϰų� �̹��� ��ü�� ���콺�� Ŭ���ϸ� �̹����� Ȯ��Ǵ� Ȯ�� / ��� ������ ��ȯ�ؾ��մϴ�. `1`�� ��ȯ�ϸ� �̹����� ���� ũ��� Ȯ��˴ϴ�.

�⺻��:

```javascript
getDoubleTapZoom: function(isMouseClick, item) {

	// isMouseClick          - ���콺 �� ���� true, ���� ���ϴ� ���� false
	// item                  - Ȯ�� / ��� �� �����̵� ��ü, �Ϲ������� ����
	// item.initialZoomLevel - �ʱ� �̹��� ����
	// 						   e.g. ����Ʈ�� 700px�̰� �̹����� 1400px �� ���,
	// 						   		initialZoomLevel�� 0.5���˴ϴ�.

	if(isMouseClick) {

		// �̹����� ���콺�� Ŭ���ϰų� Ȯ�� / ��� �������� Ŭ���մϴ�.
		
		// �������� Ȯ��
		return 1;

		// e.g. for 1400px image:
		// 0.5 - zooms to 700px
		// 2   - zooms to 2800px
		
	} else {

		// �� �� ��¦ �����ʽÿ�.
		
		// �ʱ� ���� 0.7x���� �� ���� �������� ��,
		// �׷��� ������ 1.5x�� �� �� �� ������ �׻� �̹����� Ȯ���ϵ����Ͻʽÿ�.
		return item.initialZoomLevel < 0.7 ? 1 : 1.5;
	}
}
```

�Լ��� Ȯ�� �ִϸ��̼��� ���۵� ������ ȣ��˴ϴ�. ũ�� �� ȭ�� DPI�� ������� �ٸ� �̹����� �ٸ� ���� ��ȯ �� �� �ֽ��ϴ�.




### `loop` <code class="default">boolean</code> <code class="default">true</code>

��½ ����ó�� ����� �� �����̵带 �ݺ��մϴ�. `true`�� �����ϸ� ������ �̹������� ù ��° �̹����� �� ������ �� �� �ֽ��ϴ�. �����̵尡 3 �� �̸��� ��� �ɼ��� �׻� `false`�Դϴ�.

�� �ɼ��� ȭ��ǥ Ž���� ������ �����ϴ�. ȭ��ǥ ��ȯ�� ���������� �����ϴ�. ����� ���� UI�� ������� ������ ������ �� �ֽ��ϴ�.


### `pinchToClose` <code class="default">boolean</code> <code class="default">true</code>

������ ����ó�� �ݱ� ���� ��ġ. ����ڰ� ����ϸ� ������ ����� ���� ������ϴ�. ����ó�� �Ϸ�Ǹ� �������� �����ϴ�.


### `closeOnScroll` <code class="default">boolean</code> <code class="default">true</code>

������ ��ũ�ѿ��� �������� �ݽ��ϴ�. �ɼ��� �ϵ���� ��ġ ���� ����̾��� ��ġ������ �۵��մϴ�.


### `closeOnVerticalDrag` <code class="default">boolean</code> <code class="default">true</code>

���η� �巡���ϰų� �̹����� Ȯ����� ���� �� �������� �ݽ��ϴ�. ���콺�� ����ϸ� �׻� false�Դϴ�..
 

### `mouseUsed` <code class="default">boolean</code> <code class="default">false</code>

�ɼ��� ����ϸ� ���콺�� ����ߴ��� ���θ� �̸� ���� �� �� �ֽ��ϴ�. �Ϻ� PhotoSwipe ������� ��ɿ� �����մϴ�. ���� ��� ���콺�� ����� �Ŀ� �� �⺻ UI�� ���� / ������ ȭ��ǥ�� ǥ�õ˴ϴ�. `false`�� �����ϸ� ���콺�� �ܵ����� ���� �� PhotoSwipe�� ������ �����ϰ� ���콺�� �߰ߵǸ� `mouseUsed` �̺�Ʈ�� �߻��մϴ�.


### `escKey` <code class="default">boolean</code> <code class="default">true</code>

`esc` Ű���� Ű�� ���� PhotoSwipe�� �ݽ��ϴ�. �ɼ��� �������� ������ �� �ֽ��ϴ� (`yourPhotoSwipeInstance.options.escKey = false;`).


### `arrowKeys` <code class="default">boolean</code> <code class="default">true</code>

Ű���� ���� �Ǵ� ������ ȭ��ǥ Ű Ž��. �ɼ��� �������� ������ �� �ֽ��ϴ� (`yourPhotoSwipeInstance.options.arrowKeys = false;`).


### `history` <code class="default">boolean</code> <code class="default">true</code>

`false`�� �����ϸ� �����丮 ����� ��Ȱ��ȭ�մϴ� (�������� �������� �ڷ� ��ư, �� �����̵��� ���� URL). ���忡��`history.js` ����� ���ܽ�ų ���� �ֽ��ϴ�.


### `galleryUID` <code class="default">integer</code> <code class="default">1</code>

������ ���� ID. URL�� �ۼ��� �� History ��⿡�� ���˴ϴ�. ���� ���, UID 1 �������� �� ��° �׸��� URL�� �ֽ��ϴ� : `http://example.com/#&gid=1&pid=2`.


### <a name="galleryPIDs"></a> `galleryPIDs` <code class="default">boolean</code> <code class="default">false</code>

URL�� �ۼ��� �� ���Ǵ� �� �����̵� ��ü�� ���� ����� ���� ID�� ����մϴ�. �ɼ� ��Ʈ�� `true`�� �����Ǹ� �����̵� ��ü�� ���ڿ� �Ǵ� ������ �� ���ִ� `pid`(�׸� �ĺ���) �Ӽ��� �������մϴ�. �� :

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

... �� ��° �����̵忡�� URL�� �ֽ��ϴ�.`http://example.com/#&gid=1&pid=image-two`.

[FAQ ����](faq.md#custom-pid-in-url)���� ���� PID�� �����ϴ� ����� ���� �ڼ��� �˾ƺ��ʽÿ�.


### `errorMsg` <code class="default">string</code>

�̹������ε���� �ʾ��� ���� ���� �޽���. `%url%`�� image�� URL�� ��ü �� ���Դϴ�.

�⺻��:

```html
<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>
```


### `preload` <code class="default">array</code> <code class="default">[1,1]</code>

�����̴� ������ �������� �α� �����̵��� �����ε� �� ���� �������ִ� �迭�̾���մϴ�. ù ��°�� ���� �̹��� �տ� �� ��°�ηε� �� �׸��� ���̰� �� ��° ������ ���� �̹��� �ڿ� �̸��ε� �� �׸��� ���Դϴ�. �� : [1,3]�� �����ϸ� ���� �̹������� 1�̹���, ���� �̹������� 3�̹������ε�˴ϴ�. ���� 1���� ���� �� �����ϴ�.


### `mainClass` <code class="default">string</code> <code class="default">undefined</code>

PhotoSwipe�� ��Ʈ ��ҿ� �߰� �� Ŭ������ �̸��� ���� ���ڿ� (`.pswp`). �������� ���� �� ���� Ŭ������ ���� �� �� �ֽ��ϴ�.


### `getNumItemsFn` <code class="default">function</code>

���������ִ� �� �׸� ���� ��ȯ�ؾ��ϴ� �Լ�. �⺻������ �����̵� �迭�� ���̸� ��ȯ�մϴ�. ���⿡ �ſ� ������ �ڵ带 ���� ���ʽÿ�. �Լ��� ���� ����˴ϴ�.

### `focus` <code class="default">boolean</code> <code class="default">true</code>

PhotoSwipe ��Ұ� ���� �Ŀ� ��Ŀ���� �����մϴ�.

### `isClickableElement` <code class="default">function</code>

Default value:

```javascript
isClickableElement: function(el) {
	return el.tagName === 'A';
}
```

�Լ��� ��� (`el`)�� Ŭ�� �� �� �ִ��� Ȯ���ؾ��մϴ�. & ndash; PhotoSwipe��`preventDefault`�� ȣ������ �ʰ�`click` �̺�Ʈ�� ����մϴ�. �Լ��� �巡�� ���� �� �巡�� ���������� ���� �� ����ǹǷ� ������ ���� �� �� �־���մϴ�.

### `modal` <code class="default">boolean</code> <code class="default">true</code>

��ü ����Ʈ�� �����ϱ� ���� PhotoSwipe�� Ȯ���ؾ��ϴ��� ���θ� �����մϴ�. `false` �� ��� PhotoSwipe ��Ҵ� ���ø��� ��ġ ������ �θ� ũ�⸦ ����մϴ�. �ڼ��� ������ [FAQ] (faq.md # inline-gallery)�� �����Ͻʽÿ�.


## �⺻ UI �ɼ�

`PhotoSwipeUI_Default` �ɼ� (`dist/ui/photoswipe-ui-default.js`)�� �ھ� �ɼǰ� ���� ������� ������ ��ü�� �߰��˴ϴ�.

```javascript
// ���� �� �Ʒ��� ������ ũ�� (�ȼ�)
// `bottom`�Ű� ������ `auto`(ĸ���� ���̸� ����մϴ�) �� �� �ֽ��ϴ�.
// �ɼ��� ���콺�� ���� ���� ����˴ϴ�.
// ȭ�� �ʺ� 1200px �̻��Դϴ�.
//
// (`parseVerticalMargin` �̺�Ʈ ����)
barsSize: {top:44, bottom:'auto'}, 

// ���콺�� 4000ms ���� �������� ������ pswp__ui Ŭ������ pswp__ui ��ҿ� �߰��մϴ�.
timeToIdle: 4000,

// ���� ������ ���콺�� â�� ���� ���� Ÿ�̸Ӱ� ����˴ϴ�.
timeToIdleOutside: 1000,

// �ε� �ε������Ͱ� ǥ�� �� ������ ����
loadingIndicatorDelay: 1000,

// �Լ��� ĸ�� ��ũ ���� ����ϴ�.
addCaptionHTMLFn: function(item, captionEl, isFake) {
	// item      - �����̵� ��ü
	// captionEl - �ڸ� DOM ���
	// isFake    - ��¥ �ڸ� �����̳ʿ� ������ �߰��Ǹ� true�Դϴ�.
	// 			   (���� �Ǵ� ���� ĸ���� ũ�⸦ ���� ���� �� ���˴ϴ�.)
	
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

// �������� �ݾƾ��ϴ� �����̵� ������ �����ϴ�.
tapToClose: false,

// ���� ��Ʈ���� ���ü��� ��ȯ�ؾ��մϴ�.
tapToToggleControls: true,

// �̹����� ���콺�� Ŭ���ϸ� �������� �ݾƾ��մϴ�.
// �̹����� ����Ʈ�� ũ�⺸�� ���� ��쿡��
clickToCloseNonZoomable: true,

// ��� Ŭ���� Ŭ���ϸ� PhotoSwipe�� �ݾƾ��մϴ�.
// HTML ��ũ ������ class�� �׻� `pswp__`�� �����ؾ��մϴ� (�� : "pswp__item", "pswp__caption").
// ���콺�� �̷��� ��� �� �ϳ� �������� �� 
// `pswp__ui - over-close`Ŭ������ UI�� ��Ʈ ��ҿ� �߰��˴ϴ�.
// �⺻������ �ݱ� ��ư�� ���� ǥ���ϴ� �� ���˴ϴ�.
closeElClasses: ['item', 'caption', 'zoom-wrap', 'ui', 'top-bar'], 

//"1 of X"ī���� �� ���� ��ȣ
indexIndicatorSep: ' / ',


{% raw %}
// ���� ��ư
//
// URL�� ����� ���ִ� ���� :
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

// ���� �� �Լ��� ���� ��ũ�� ���� �����͸� ��ȯ�մϴ�.
//
// ���� ����� ���� ��ư�� Ŭ���ϸ� �Լ��� ����˴ϴ�.
// �����Ͱ� ���� (Ȱ��) �����̵忡 �־�� ���� �ǹ��մϴ�.
getImageURLForShare: function( shareButtonData ) {
	//`shareButtonData` - shareButtons �迭�� ��ü
	//
	//`pswp`�� ������ �ν��Ͻ� ��ü�Դϴ�.
	// ���� �����ؾ��մϴ�.
	// 
	return pswp.currItem.src || '';
},
getPageURLForShare: function( shareButtonData ) {
	return window.location.href;
},
getTextForShare: function( shareButtonData ) {
	return pswp.currItem.title || '';
},

// ���� ��ũ ��� �м�
parseShareButtonOut: function(shareButtonData, shareButtonOut) {
	// `shareButtonData` - object from shareButtons array
	// `shareButtonOut` - raw string of share link element
	return shareButtonOut;
}
```

Know how this page can be improved? Found a typo? [Suggest an edit!](https://github.com/hun1451/PhotoSwipe/blob/master/website/documentation/responsive-images.md)

<iframe src="http://ghbtns.com/github-btn.html?user=dimsemenov&amp;repo=photoswipe&amp;type=watch&amp;count=true&amp;size=large" allowtransparency="true" frameborder="0" scrolling="0" width="155" height="30" style=""></iframe>



