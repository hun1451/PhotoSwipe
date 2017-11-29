---

layout: �⺻

title: PhotoSwipe API

h1_title: API

description: ���� �޼ҵ�, PhotoSwipe �ڹٽ�ũ��Ʈ �̹��� �������� �Ӽ� �� �̺�Ʈ

addjs: true

canonical_url: http://photoswipe.com/documentation/api.html

buildtool: true

markdownpage: true

---

�� �������� ������ ��� �޼ҵ�� �Ӽ��� ���� �˴ϴ�. ���� API�� �Ҽ� �ִ� ���� ���� ���� �ʹٸ� [�⺻ PhotoSwipe UI�� �ҽ�]�� ���� �ּ���.(https://github.com/dimsemenov/PhotoSwipe/blob/master/src/js/ui/photoswipe-ui-default.js).

����� �ʱ�ȭ �� PhotoSwipe �ν��Ͻ� ��ü�� ������ �ֽ��ϴ�.

```javascript
var photoswipeInstance = new PhotoSwipe( /* ... */ );
```

## �޼ҵ�

```javascript
var pswp = new PhotoSwipe( /* ... */ );

// ������ �ʱ�ȭ �� ����
// (�� �޼ҵ� ���� �̺�Ʈ�� ���ε� �� �� �ֽ��ϴ�.)
pswp.init();

// �ε����κ��� �����̵�� �̵�
// �Ķ����	{int}	'index'
pswp.goTo(index);

// ���� �����̵�� �̵�
pswp.next();

// ���� �����̵�� �̵�
pswp.prev();

// ������ ũ�� ������Ʈ
// �Ķ����	{boolean}	`force`�� 'true'�� �����ϸ�,
// 							�������� ũ�Ⱑ ������Ʈ �˴ϴ�.
// 							����Ʈ�� ũ�Ⱑ ������� ���� ��쿡�� ��������
pswp.updateSize(force);

// ������ �ݱ�
pswp.close();

// ������ �ı�,
// close() ���Ŀ� �ڵ����� ȣ��
pswp.destroy()

// ���� �����̵� Ȯ�� / ��� (�ִϸ��̼� �ɼ�)
// �Ķ����	{number}	`destZoomLevel` ����� ô��. 1 - ����.  
// 								     pswp.currItem.fitRatio - �̹����� ����Ʈ�� ����
// object �Ķ����   `centerPoint`   ����Ʈ�� ���� x,y ��ǥ�� ��ü
// �Ķ����	{int}	`speed`         �ִϸ��̼� �Ⱓ.  0�� �ɼ� ����
// �Ķ����	{function}	`easingFn`      ��¡ ��� (�ɼ�). ����Ʈ ��¡�� ����Ϸ��� false�� ����
// �Ķ����	{function}	`updateFn`      �Լ��� �� ������Ʈ �����ӿ��� ȣ�� (�ɼ�)
//
// �����̵� �߽ɿ��� 2�� Ȯ���Ű�� ����
// pswp.zoomTo(2, {x:pswp.viewportSize.x/2,y:pswp.viewportSize.y/2}, 2000, false, function(now) {
// 		
// });
pswp.zoomTo(destZoomLevel, centerPoint, speed, easingFn, updateFn);

// ���� �����̵忡 Ȯ�� / ��� �� ����
// 
// �Ķ����   {number} `zoomLevel`
// �Ķ����   {int}    `panX`
// �Ķ����   {int}    `panY`
// 
// �� : `pswp.applyZoomPan(1, 0, 0)`
// ���� �̹����� ���� ũ��� Ȯ�� / ���
// �׸��� ���� ��ܿ� ��ġ
// 
// 
pswp.applyZoomPan(zoomLevel, panX, panY);
```

## �Ӽ�

```javascript

// ���� �����̵� ��ü
pswp.currItem

// �迭 items (�����̵�, �̹���)
pswp.items

// �����̵� ����Ʈ�� ũ��
pswp.viewportSize

// ��ü�� ������ ��ũ���� ��� ����� ����
// framework-bridge.js
pswp.framework

// UI ��ü (��. PhotoSwipeUI_Default �ν��Ͻ�)
pswp.ui

// ��� ��� (pswp__bg)
pswp.bg

// �����̳� ��� (pswp__container)
pswp.container

// �ɼǵ�
pswp.options



// �Ʒ��� �޼ҵ尡 ������� �Ӽ��� �ƴ�����, ���⿡ �� �޼ҵ� ���� �մϴ�:

// ���� �׸��� �ε��� (int)
pswp.getCurrentIndex();

// �� �׸��� ��
pswp.options.getNumItemsFn()

// ���� �� ���� (number)
pswp.getZoomLevel();

// �ϳ� �̻��� �����Ͱ� ���
pswp.isDragging();

// �ΰ� �̻��� �����Ͱ� ���
pswp.isZooming();

// �� ������ ��ȯ�� ���� ���϶� '��' (�������� �Ŀ�)
pswp.isMainScrollAnimating();
```

## �̺�Ʈ

PhotoSwipe�� ���� ������ �̺�Ʈ/�޼�¡ �ý����� ����մϴ�. �� ���� �ΰ��� �޼ҵ� 'shout'(�̺�Ʈ Ʈ����)�� listen(�̺�Ʈ �ڵ鸵)�� ������ �ֽ��ϴ�. ���� ������ ���ε��� �����ϴ� ����� ������, PhotoSwipe�� �Ϸ�Ǹ� �׵� ��δ� �������ϴ�.

```javascript
var pswp = new PhotoSwipe(/* ... */);

// "helloWorld" �̺�Ʈ ���
pswp.listen('helloWorld', function(name) {
	alert('Name is: ' + name);
});

// "helloWorld" �̺�Ʈ Ʈ����
pswp.shout('helloWorld', 'John');
```

��밡���� �̺�Ʈ:

```javascript

// �����̵尡 ����Ǳ� ����
// (������ ����Ǳ� ����, Ž�� �Ŀ�)
// ���⿡ UI�� ������Ʈ (��. "1 of X" ǥ�ñ�)
pswp.listen('beforeChange', function() { });

// �����̵尡 ����� ����
// (���� ���� ��)
pswp.listen('afterChange', function() { });

// �̹��� �ε�
pswp.listen('imageLoadComplete', function(index, item) { 
	// index - �ε� �� �����̵��� �ε���
	// item - �����̵� ��ü
});

// ����Ʈ ũ�� ����
pswp.listen('resize', function() { });

// PhotoSwipe�� �����̵� ��ü �����͸� "�д�"����� Ʈ���Ŵ�,
// �������� ���� �Ǳ� �� �Ǵ� �����ε尡 ���� �Ǳ� ���� �߻�
// �������� �Ӽ��� �����ϴ� �� ���
pswp.listen('gettingData', function(index, item) {
	// index - �ε� �� �����̵� �ε���
	// item - �����̵� ��ü

	// ��. 'something'�� ������� �̹��� ��� ����
	if( something ) {
		item.src = item.something;
	} else {
		item.src = item.somethingElse;
	}
});

// ���콺 ��� ��(�ѹ� �� Ʈ���� ��)
pswp.listen('mouseUsed', function() { });


// �ִϸ��̼� ���� �� Ȯ�� ����
pswp.listen('initialZoomIn', function() { });

// �ִϸ��̼� Ȯ��/��� �Ϸ�
pswp.listen('initialZoomInEnd', function() { });

// �ִϸ��̼� �ݱ�/��� ����
pswp.listen('initialZoomOut', function() { });

// �ִϸ��̼� �ݱ�/��� �Ϸ�
pswp.listen('initialZoomOutEnd', function() { });


// ���� �׸� ���� ���� ���� ������ ���
pswp.listen('parseVerticalMargin', function(item) { 
	// ����:
	var gap = item.vGap;

	gap.top = 50; // ����Ʈ ���ʿ��� 50px ���� ����
	gap.bottom = 100; // �׸��� �ϴܿ��� 100px ����
})

// ������ �ݱ⸦ ����
pswp.listen('close', function() { });

// �������� �̺�Ʈ ���ε� ����
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

## �������� �����̵� �߰��ϱ�

PhotoSwipe�� ���� �� �����̵带 �߰�, ���� �Ǵ� �����Ϸ��� 'items'�̶�� �迭�� ������ �ϸ� �˴ϴ�. ���� ���, �� �����̵� ��ü�� 'items' �迭�� ���� �� �ֽ��ϴ�

```javascript
pswp.items.push({
    src: "path/to/image.jpg", 
    w:1200,
    h:500 
});
```

CURRENT, NEXT �Ǵ� PREVIOUS �� �ϳ��� �����̵带 ������ ��� &ndash; �������� ������Ʈ�ϴ� �޼ҵ带 ȣ���ؾ� �մϴ�.

```javascript
// sets a flag that slides should be updated
pswp.invalidateCurrItems();
// updates the content of slides
pswp.updateSize(true);
```

�׷��� �ʴٸ� `pswp.ui.update()`�� ȣ���ϴ� �� �ܿ��� �ٸ� �۾��� ���� �� �ʿ䰡 �����ϴ�. �⺻ UI�� �Ϻθ� ������Ʈ�Ϸ��� ��� (�� : '1 of X' ī����) ������� : 

- ��ü �迭�� �� �Ҵ� �� ���� ������ ������ �� �ֽ��ϴ�.(�� : 'splice'�� ����� ��� ����)
- ���� �����̵带 ���� �Ϸ��� ��� &ndash; �� ���� 'goTo'�޼ҵ带 ���� ȣ���ؾ� �˴ϴ�.
- ��� �ϳ��� �����̵尡 �־�� �մϴ�.
-�� ����� [������ �̹����� ����]�ϴµ� ���˴ϴ�(responsive-images.html).

�Ϻ� �޼ҵ� �Ǵ� �Ӽ��� ���� �Ǿ�����? ������ ������ �߰� �߳���? �� �������� �����Ҽ� �ִ� ����� �˰� ��ó���? [������ ���� ���ּ���!] (https://github.com/dimsemenov/PhotoSwipe/blob/master/website/documentation/api.md)

