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

// Close gallery
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

## �̺�Ʈ

PhotoSwipe�� ���� ������ �̺�Ʈ/�޼�¡ �ý����� ����մϴ�. �� ���� �ΰ��� �޼ҵ� 'shout'(�̺�Ʈ Ʈ����)�� listen(�̺�Ʈ �ڵ鸵)�� ������ �ֽ��ϴ�. ���� ������ ���ε��� �����ϴ� ����� ������, PhotoSwipe�� �Ϸ�Ǹ� �׵� ��δ� �������ϴ�.

```javascript
var pswp = new PhotoSwipe(/* ... */);

// Listen for "helloWorld" event
pswp.listen('helloWorld', function(name) {
	alert('Name is: ' + name);
});

// Trigger "helloWorld" event
pswp.shout('helloWorld', 'John' /* you may pass more arguments */);
```

��밡���� �̺�Ʈ:

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

�׷��� �ʴٸ� `pswp.ui.update()`�� ȣ���ϴ� �� �ܿ��� �ٸ� �۾��� ���� �� �ʿ䰡 �����ϴ�. �⺻ UI�� �Ϻθ� ������Ʈ�Ϸ��� ��� (�� : '1 of X' ī����) �������� : 

- ��ü �迭�� �� �Ҵ� �� ���� ������ ������ �� �ֽ��ϴ�.(�� : 'splice'�� ����� ��� ����)
- ���� �����̵带 ���� �Ϸ��� ��� &ndash; �� ���� 'goTo'�޼ҵ带 ���� ȣ���ؾ� �˴ϴ�.
- ��� �ϳ��� �����̵尡 �־�� �մϴ�.
-�� ����� [������ �̹����� ����]�ϴµ� ���˴ϴ�(responsive-images.html).

�Ϻ� �޼ҵ� �Ǵ� �Ӽ��� ���� �Ǿ�����? ������ ������ �߰� �߳���? �� �������� �����Ҽ� �ִ� ����� �˰� ��ó���? [������ ���� ���ּ���!] (https://github.com/dimsemenov/PhotoSwipe/blob/master/website/documentation/api.md)
