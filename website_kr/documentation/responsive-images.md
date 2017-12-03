---

layout: �⺻��

title: PhotoSwipe���� �����ϴ� �̹��� ����

h1_title: ���� �̹���

description: PhotoSwipe���� �����ϴ� �̹����� ��� �����ϴ����� ���� �Ϻ��� ���̵�.

addjs: true

canonical_url: http://photoswipe.com/documentation/responsive-images.html

buildtool: true

markdownpage: true

---

PhotoSwipe�� �̹��� ũ�Ⱑ ���ǵǾ� �ְ� ���̺� �ε��� �ʿ��ϹǷ� `<picture>` �� `srcset`�� �������� �ʽ��ϴ�. ������ �̹����� ���������� �ۿ��Կ� ���� ������� `srcset`�� �������� �ʴ� ���� �� ���������� ������ �ҽ��� �ٲٱⰡ �����ϴ�.

"��ü" �̹����� "����" ("ū") �̹����� �ִٰ� ������ ���ô�. ���� ���, ������ ���� �����̵� ��ü�� �̹����� ��ο� ũ�⸦ �����ؾ� �մϴ�.

```javascript
var items = [

	// �����̵� 1 Slide 1
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

	// �����̵� 2 Slide 2
	// {
	//     mediumImage: {
	//         src: 'path/to/medium-image-2.jpg',
	//         ...
	//     
	// ...
		
];
```

�׸��� ����:


```javascript
// ��Ҵ�� �ʱ�ȭ 
var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);

// ���� ũ���� viewport�� ������ ������ ����
var realViewportWidth,
	useLargeImages = false,
	firstResize = true,
	imageSrcWillChange;

// ������ �� ��Ʈ�� �� �ð� ũ�⺰�� �̺�Ʈ�� �߻�
updates
gallery.listen('beforeResize', function() {
	// gallery.viewportSize.x - width of PhotoSwipe viewport
	// gallery.viewportSize.y - height of PhotoSwipe viewport
	// window.devicePixelRatio - ratio between physical pixels and device independent pixels (Number)
	//							1 (regular display), 2 (@2x, retina) ...
	

	// ũ�Ⱑ ���� �� ���� �ȼ��� ���
	realViewportWidth = gallery.viewportSize.x * window.devicePixelRatio;
	
	// �Ʒ��� �ڵ�� �̹����� �����쿡�� �������� ��ȯ�Ϸ��� ��쿡 �ʿ�
	
	// ���� �̹����� �����ؾ� �ϴ��� Ȯ��
	if(useLargeImages && realViewportWidth < 1000) {
		useLargeImages = false;
		imageSrcWillChange = true;
	} else if(!useLargeImages && realViewportWidth >= 1000) {
		useLargeImages = true;
		imageSrcWillChange = true;
	}

	//�ҽ��� ����� ��쿡�� �׸��� �����ϰ� ù��° ������Ʈ�� �ƴ� ���
	if(imageSrcWillChange && !firstResize) {
		// invalidateCurritems�� DOM�� �ִ� �����̵忡 �÷��׸� ����
		// ���� ������(�̹���)�� ������(�̹���)�� ������ ������Ʈ ����
		gallery.invalidateCurrItems();
	}

	if(firstResize) {
		firstResize = false;
	}

	imageSrcWillChange = false;

});


// gettingData�̺�Ʈ�� PhotoSwipe�� �̹��� �ҽ��� ũ�⸦ �˻��� ������ �߻�
gallery.listen('gettingData', function(index, item) {

	// ���� �� ��Ʈ ���� �������� �̹��� �ҽ� �� ũ�� ����
	if( useLargeImages ) {
		item.src = item.originalImage.src;
		item.w = item.originalImage.w;
		item.h = item.originalImage.h;
	} else {
		item.src = item.mediumImage.src;
		item.w = item.mediumImage.w;
		item.h = item.mediumImage.h;
	}

	// ���⼭ ������ ������ �߿����� �ʽ��ϴ�. 
	// ���� ��� item.src, item.w �׸��� item.h ��ȿ�� ���� ���� ��.
	// 
	// �� �����ʿ��� HTTP��û�� ���ϼ���. �� ���� �߻��մϴ�.

});


// Init()�޼ҵ�� gettingData�̺�Ʈ�� ���ε� �� �� ȣ�� �˴ϴ�.
gallery.init();

```

- ���� ���� �����̵� ��ü�� ������ ����� �ǹ��� �����ϴ� (`mediumImage` �� `largeImage` ��ü). ���� ��� �̹��� ���� �̸�  (`/path/to/large-image-600x500.jpg`) �� �̹��� ũ�⸦ ���� ������ ���� `gettingData`�̺�Ʈ ���� ũ�⸦ �м��� �� �ֽ��ϴ�. `gettingData` �̺�Ʈ�� ���� �ڿ��� PhotoSwipe�� ���ؼ� `item.src`, `item.w`�׸��� `item.h` �Ӽ����� �н��ϴ�.
- �̹����� Ŭ ���� �� �ε�ο� �ִϸ��̼��� ��Ÿ���ϴ�.
- ��ġ�� ���ؼ��� ����ϰų� �� ��Ʈ ũ�⸦ ������� �Ͽ� �̹����� �������� ���ʽÿ�. �׻� �ΰ����� �����Ͽ� ����Ͻʽÿ�.
- PhotoSwipe�� ���� ����ǿ� `srcset`�� ����ϼ���.




�� ���̵带 ������ �� �ִ� ����� �˰� ��ʴϱ�? 
[������ �����մϴ�!](https://github.com/dimsemenov/PhotoSwipe/blob/master/website/documentation/responsive-images.md)