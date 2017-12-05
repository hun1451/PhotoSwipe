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


## <a class="anchor" name="dom-to-slide-objects"></a> ��ũ ��Ͽ��� �����̵� �迭�� ����� ���

������ ���� ��ũ / ����� ����� �ִٰ� ���� �� ���ڽ��ϴ� ([������ ��ũ ���� ���� �ڼ��� ����](seo.html)).

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

... �̸����� �̹����� Ŭ���Ͽ� PhotoSwipe�� ū �̹����� ���� �� (���� ���������� �Ϸ� �� ��ó��). ������ؾ� �� ���� :

1. Ŭ�� �̺�Ʈ�� ��ũ / ����ǿ� ���ε��Ͻʽÿ�.
2. ����ڰ� �̸����� �̹����� Ŭ���ϸ� �ش� ������ ã���ϴ�.
3. DOM ��ҷκ��� �����̵� ��ü�� �迭�� ���� - ��� ��ũ�� �ݺ��ϰ�`href` �Ӽ� (ū �̹��� URL),`data-size` �Ӽ� (ũ��), �������`src` �� ĸ���� ������ �����ɴϴ�.

PhotoSwipe�� ����� ��� �� ������ ������ �Ű� ���� �ʽ��ϴ�. jQuery �Ǵ� MooTools�� ���� ������ ��ũ�� ����ϰų� IE8�� ������ �ʿ䰡���� ��� �ڵ带 ũ�� �ܼ�ȭ �� �� �ֽ��ϴ�.

������ IE8�� �����ϴ� ���� �ٴҶ� JS �����Դϴ�.

```javascript
var initPhotoSwipeFromDOM = function(gallerySelector) {

	// DOM ��ҿ��� �����̵� ������ (url, title, size ...)�� �Ľ��մϴ�.
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

			// ��� ��� �� ����
			if(figureEl.nodeType !== 1) {
				continue;
			}

			linkEl = figureEl.children[0]; // <a> element
			
			size = linkEl.getAttribute('data-size').split('x');

			// �����̵� ��ü�� ����
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
		   
			item.el = figureEl; // getThumbBoundsFn�� ��ҿ� ���� ��ũ ����
			items.push(item);
		}

		return items;
	};

	// ���� ����� �θ� ��� ã��
	var closest = function closest(el, fn) {
		return el && ( fn(el) ? el : closest(el.parentNode, fn) );
	};

	// ����ڰ� �̸����� �̹����� Ŭ���ϸ� Ʈ���ŵ˴ϴ�.
	var onThumbnailsClick = function(e) {
		e = e || window.event;
		e.preventDefault ? e.preventDefault() : e.returnValue = false;

		var eTarget = e.target || e.srcElement;

		// �����̵��� ��Ʈ ��� ã��
		var clickedListItem = closest(eTarget, function(el) {
			return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
		});

		if(!clickedListItem) {
			return;
		}

		// ��� �ڽ� ��带 �ݺ��Ͽ� Ŭ�� �� �׸��� ������ ã���ϴ�.
		// �Ǵ� ������ �Ӽ��� ���� ������ ���� �� �� �ֽ��ϴ�
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

	// URL (#&pid=1&gid=2)���� ���� ���� �� ������ ������ ���� �м��մϴ�.
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

		// �ɼ��� �����Ͻʽÿ� (�ʿ��� ���).
		options = {

			// ������ ���� ���� (URL ��)
			galleryUID: galleryElement.getAttribute('data-pswp-uid'),

			getThumbBoundsFn: function(index) {
				// �ڼ��� ������ ������ �ɼ� -> getThumbBoundsFn ������ �����Ͻʽÿ�.
				var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
					pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
					rect = thumbnail.getBoundingClientRect(); 

				return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
			}

		};

		// PhotoSwipe URL���� ����
		if(fromURL) {
	    	if(options.galleryPIDs) {
	    		// ����� ���� PID�� ���� �� ���� ������ ���� �м��մϴ�.
	    		// http://photoswipe.com/documentation/faq.html#custom-pid-in-url
	    		for(var j = 0; j < items.length; j++) {
	    			if(items[j].pid == index) {
	    				options.index = j;
	    				break;
	    			}
	    		}
		    } else {
		    	// URL �ε����� 1���� �����մϴ�.
		    	options.index = parseInt(index, 10) - 1;
		    }
	    } else {
	    	options.index = parseInt(index, 10);
	    }

	    // ������ ã�� ������ ��� �����Ͻʽÿ�.
	    if( isNaN(options.index) ) {
	    	return;
	    }

		if(disableAnimation) {
			options.showAnimationDuration = 0;
		}

		// PhotoSwipe�� �����͸� �����ϰ� �ʱ�ȭ�Ͻʽÿ�.
		gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
		gallery.init();
	};

	// ��� ������ ��ҿ� ���ε� �̺�Ʈ�� �ݺ��մϴ�.
	var galleryElements = document.querySelectorAll( gallerySelector );

	for(var i = 0, l = galleryElements.length; i < l; i++) {
		galleryElements[i].setAttribute('data-pswp-uid', i+1);
		galleryElements[i].onclick = onThumbnailsClick;
	}

	// #&pid=3&gid=1 �� ��� URL�� ���� �м��ϰ� �������� ���� ��.
	var hashData = photoswipeParseHash();
	if(hashData.pid && hashData.gid) {
		openPhotoSwipe( hashData.pid ,  galleryElements[ hashData.gid - 1 ], true, true );
	}
};

// ���� �Լ��� �����մϴ�.
initPhotoSwipeFromDOM('.my-gallery');
```


CodePen�� ���� ���� (embed ������ ����`focus` ��`history` �ɼ��� ��Ȱ��ȭ�Ǿ����ϴ�) :

<div class="codepen-embed">
	<p data-height="600" data-theme-id="10447" data-slug-hash="ZYbPJM" data-default-tab="result" data-user="dimsemenov" class='codepen'>
		<a href="http://codepen.io/dimsemenov/pen/ZYbPJM/" target="_blank"><strong>View example on CodePen &rarr;</strong></a>
	</p>
</div>

�� : CodePen���� ������ �ٿ�ε��Ͽ� ���÷� ����� �� �ֽ��ϴ� (`Edit on CodePen` ->`Share` ->`Export .zip`).

-�� ������ �ٸ� ��ũ ���� ����Ѵٸ�`parseThumbnailElements` �Լ��� �����ؾ��մϴ�.
- ���� �ڹ� ��ũ��Ʈ�� �ͼ����� �ʰ� DOM�� �Ľ��ϴ� ����� �𸣴� ��� [QuirksMode](http://quirksmode.org/dom/core/#gettingelements) �� [MDN�� ���� ����](https : //developer.mozilla.org/en-US/docs/Web/API/Element.getElementsByTagName).
- IE8�� HTML5`<figure>`��`<figcaption>`��Ҹ� �������� �����Ƿ�`<head>`���ǿ� [html5shiv](https://github.com/aFarkas/html5shiv)�� ���Խ��Ѿ��Ѵ�. ���� ��� [cdnjs hosted version](http://cdnjs.com/libraries/html5shiv/)�� ���˴ϴ�.

    ```html
    <!--[if lt IE 9]>
        <script src="//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv.min.js"></script>
    <![endif]-->
    ```


## ���

[��� ��ũ��Ʈ�� ������Ʈ�Ͻʽÿ�](faq.html#keep-updated), [GitHub](https://github.com/dimsemenov/PhotoSwipe)�� ���� ���׸������ϰ�, [UserVoice](https://photoswipe.uservoice)�� ����� �����Ͻʽÿ�. .com/forums/275302-feature-requests-ideas). [StackOverflow](http://stackoverflow.com/questions/ask?tags=javascript,photoswipe)�� ���� �����Ͻʽÿ�.

�� �������� ���� �� ���ִ� ����� �˰� �ֽ��ϱ�? ��Ÿ���ִ� �ɱ��? [Suggest an edit!](https://github.com/dimsemenov/PhotoSwipe/blob/master/website/documentation/getting-started.md)


<iframe src="http://ghbtns.com/github-btn.html?user=dimsemenov&amp;repo=photoswipe&amp;type=watch&amp;count=true&amp;size=large" allowtransparency="true" frameborder="0" scrolling="0" width="155" height="30" style=""></iframe>