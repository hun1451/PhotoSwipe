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

�����ϱ� ���� �˾ƾ� �� ���� :

- PhotoSwipe�� ������ jQuery �÷������� �ƴϸ� �ּ��� �⺻���� �ڹ� ��ũ��Ʈ �������� �䱸�˴ϴ�.
- PhotoSwipe�� �̸� ���� �� �̹��� ũ�Ⱑ �ʿ��մϴ�.
- �����̾��� �� ����Ʈ���� PhotoSwipe�� ����ϴ� ��� & ndash; ��Ʈ���� ����Ͽ��� Ȯ��˴ϴ� (��ü �������� ũ�Ⱑ �����ʿ� ����). ���� ���� ��Ʈ�� (�� : ������ ��ܿ� ���� ū �ݱ� ��ư)�� �����ؾ��մϴ�.
- ������ ��� �ڵ�� ������ Vanilla JS�̸� IE 8 �̻��� �����մϴ�. �� ����Ʈ �Ǵ� �ۿ��� jQuery �Ǵ� MooTools�� ���� �Ϻ� JavaScript ������ ��ũ�� ����ϰų� ���� �������� ������ �ʿ䰡 ���� ��� �ڵ带 �ܼ�ȭ�Ͻʽÿ�.
- ����� ������ ū �̹��� (2,000x1500 �ȼ� �̻�)�� �������� ���ʽÿ�. �ִϸ��̼� ������ ũ�� ���ϵǰ� Ư�� iOS Safari ���������� �浹�� �߻��� �� �ֽ��ϴ�. ������ �ذ�å : [���� �� �̹��� ����] (responsive-images.html) �Ǵ� ������ ���������� �̹��� ���� ([Leaflet] (http://leafletjs.com/)�� ���� �̹��� Ÿ�ϸ��� �����ϴ� ���̺귯�� ��� ([more] FAQ] (faq.html # mobile-crash)).

## <a name="initialization"></a> �ʱ�ȭ(Initialization)

### <a name="init-include-files"></a> 1�ܰ� : JS �� CSS ������ Include

[GitHub](https://github.com/dimsemenov/PhotoSwipe) ������� [dist /](https://github.com/dimsemenov/PhotoSwipe/tree/master/dist) �������� ã�� �� �ֽ��ϴ�.Sass �� �����ϵ��� ���� JS ������ [src /] (https://github.com/dimsemenov/PhotoSwipe/tree/master/src) ������ �ֽ��ϴ�. ���� ��Ÿ���� ������ ��ȹ�̶�� Sass�� ����ϴ� ���� �����ϴ�. �ڵ�� ����ȭ�ǰ� �ּ� ó���Ǿ� �ֽ��ϴ�.

```html
<!-- �ٽ� CSS ���� -->
<link rel = "stylesheet"href = "path/to/photoswipe.css">

<!-- ��Ų CSS ���� (UI�� ��Ÿ�� ���� - ��ư, ĸ�� ��)
	��Ų CSS ������ �������� ������ �ֽ��ϴ�.
	- .png �� .svg ������ ��������Ʈ,
	- preloader.gif (CSS �ִϸ��̼��� �������� �ʴ� �������� ���) -->
<link rel="stylesheet"href="path/to/default-skin/default-skin.css">

<!-- Core JS ���� -->
<script src = "path/to/photoswipe.min.js"></ script>

<!-- UI JS ���� -->
<script src = "path/to/photoswipe-ui-default.min.js"> </ script>
```

JS �� CSS ������ ��� �׸��� ��� ���� ��ų���� �߿����� �ʽ��ϴ�. �ڵ��`new PhotoSwipe ()`�� ȣ�� �� ���� ����˴ϴ�. ó���� PhotoSwipe�� �� �ʿ䰡 ���ٸ� ���� �ε��� �����Ͻʽÿ�.

PhotoSwipe�� RequireJS�� ���� AMD Loader�� CommonJS�� �����ϹǷ� ������ ���� ����Ͻʽÿ�.


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

���� Bower (`bower install photoswipe`) �Ǵ� [NPM](https://www.npmjs.com/package/photoswipe) (`npm install photoswipe`)�� ���� ��ġ�� �� �ֽ��ϴ�.

### <a name="init-add-pswp-to-dom"></a>Step 2: Dom�� PhotoSwipe(.pswp) ������Ʈ �߰��ϱ� 

JS�� ���� (�ʱ�ȭ ������) JS �ڵ带 ���� HTML �ڵ带 �������� �߰��ϰų�, �ʱ⿡ ���� ����������ó�� HTML �ڵ带 �������� �߰� �� �� �ֽ��ϴ�. �� �ڵ�� ��𿡼��� �߰� �� �� ������, �ݴ�`</ body>`���� �̻������� �߰� �� �� �ֽ��ϴ�. ������ ������ UI�� ����ϴ� �� ���� ���������� ���� �� �� �ֽ��ϴ�.

```html
<!-- PhotoSwipe�� ��Ʈ ���. Ŭ���� pswp�� �־�� �մϴ�.. -->
<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">

	<!-- PhotoSwipe�� ���. 
		 ������ �ִϸ��̼��� rgba()���� ������ ������ ������ ����Դϴ�. -->
    <div class="pswp__bg"></div>

	<!-- Slides wrapper with overflow:hidden. -->
    <div class="pswp__scroll-wrap">

		<!-- �����̵带 �����ϴ� �����̳��Դϴ�. 
			PhotoSwipe�� �޸𸮸� �����ϱ� ���� DOM���� 3���� �����մϴ�.
			�� 3���� pswp__item ��Ҹ� �������� ���ʽÿ�. ���߿� �����Ͱ� �߰��˴ϴ�. -->
		<div class="pswp__container">
			<div class="pswp__item"></div>
			<div class="pswp__item"></div>
			<div class="pswp__item"></div>
		</div>

		<!-- �����̵� ������ �� ���� �ִ� �⺻ �������̽��Դϴ�. ������ �� �ֽ��ϴ�. -->
		<div class="pswp__ui pswp__ui--hidden">

			<div class="pswp__top-bar">

				<!--  Controls are self-explanatory. Order can be changed. -->
				
				<div class="pswp__counter"></div>

				<button class="pswp__button pswp__button--close" title="Close (Esc)"></button>

				<button class="pswp__button pswp__button--share" title="Share"></button>

				<button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>

				<button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>

				<!-- Preloader ���� http://codepen.io/dimsemenov/pen/yyBWoR -->
				<!-- ��Ұ� Ŭ���� pswp__preloader�� ����ϴ� - �����δ��� ���� �� �� �� Ȱ��ȭ �� -->
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

`pswp__bg`,`pswp__scroll-wrap`,`pswp__container` ��`pswp__item` ����� ������ �����ϸ� �ȵ˴ϴ�.

PhotoSwipe�� JS�� ���� �� �ڵ带 �ڵ����� �߰����� �ʴ� ������ �����մϴ�. ���̾ƿ� ������ �ʿ��� ��츦 ����Ͽ� ���� ũ�⸦ ���� �� �� �ֱ� �����Դϴ�.

### Step 3: initialize (�ʱ�ȭ)

`PhotoSwipe` �����ڸ� �����մϴ�. �װ��� 4 ���� �μ����޽��ϴ� :

1. 2 �ܰ���`.pswp` ��� (DOM�� �߰��Ǿ�� ��).
2. PhotoSwipe UI Ŭ����. �⺻`photoswipe-ui-default.js`�� �����ϸ� Ŭ������`PhotoSwipeUI_Default`���˴ϴ�. 'false' �� �� �� �ֽ��ϴ�.
3. ��ü (�����̵�)���ִ� �迭.
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

// �ɼ��� ���� (�ʿ��� ���)
var options = {
	// optionName: 'option value'
	// ���� ���:
	index: 0 // ù ��° �����̵忡�� ����
};

// PhtoSwipe�� �ʱ�ȭ�ϰ� ����.
var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
gallery.init();
```

�ᱹ ����� ������ ���� ���� �����Ѵ� :

<div class="codepen-embed">
	<p data-height="600" data-theme-id="10447" data-slug-hash="gbadPv" data-default-tab="result" data-user="dimsemenov" class='codepen'>
		<a href="http://codepen.io/dimsemenov/pen/gbadPv/" target="_blank"><strong>View example on CodePen &rarr;</strong></a>
	</p>
	<!-- <script async src="//assets.codepen.io/assets/embed/ei.js"></script> -->
</div>


## <a name="creating-slide-objects-array"></a> �����̵� ��ü�� �迭 �����

�迭�� �� ��ü�� �����̵忡 ���� �����͸� �����ؾ��ϸ� PhotoSwipe�� ǥ���Ϸ��� ��� �� (�̹��� ���, ĸ�� ���ڿ�, ���� ��, ���� ��) �� �� �ֽ��ϴ�.

�⺻������ PhotoSwipe�� �� 5���� �Ӽ����� ����մϴ� : 'src'(�̹��� ���), 'w'(�̹��� �ʺ�), 'h'(�̹��� ����), 'msrc'(���� �̹��� �ڸ� ǥ�� ��, ū �̹����� �����ε�˴ϴ�. ),`html` (���� HTML, [�� �ڼ���](custom-html-in-slides.html)).

�׺���̼� �� PhotoSwipe���� ��ü�� �ڽ��� �Ӽ��� �߰��մϴ� (�� :`minZoom` �Ǵ�`loaded`).

```javascript
var slides = [

	// slide 1
	{

		src: 'path/to/image1.jpg', // path to image
		w: 1024, // image width
		h: 768, // image height

		msrc: 'path/to/small-image.jpg', // small image placeholder,
						// ����(ū) �̹����� �� ������ �ε�ǰ�,
						// �� �Ű� ������ �ǳ� �ٸ� ȸ�� �簢���� ǥ�õǰ�,
						// ���� �̹������ε�Ǳ� ������ �Ӽ��� �����Ϸ��� �õ��Ͻʽÿ�.



		title: 'Image Caption'  // �⺻ PhotoSwipe UI���� ���˴ϴ�.
								// ����� �װ��� �ǳ� �� ���, � ĸ�ǵ� ���� ���Դϴ�.
								

		// ���⿡ �Ӽ��� �� �߰��ϰ� ����� �� �ֽ��ϴ�.
		// ���� ���, ���� �������� ĸ�ǿ� ���Ǵ� "author"�Ӽ��� ����մϴ�.
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

PhotoSwipe�� �����̵� ��ü �Ӽ��� �б� ���� �������� ��ü �Ӽ��� ���� �� �� �ֽ��ϴ�. 'gettingData` �̺�Ʈ�� ����Ͻʽÿ� (�ڼ��� ������ [API ������ ����](api.html)). ���� ����� ����� ����Ͽ� �پ��� ȭ�� ũ�⿡ ���� [�ٸ� �̹��� ����](responsive-images.html)�� ����� �� �ֽ��ϴ�.

