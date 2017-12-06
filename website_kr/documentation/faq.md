---

layout: �⺻��

title: PhotoSwipe FAQ

h1_title: FAQ

description: PhotoSwipe �̹��� �������� ���� ���� ���� ������ �˷��� ������.

addjs: true

����_url: http://photoswipe.com/documentation/faq.html

buildtool: true

markdownpage: true

---

## ����

### <a name="image-size"></a> �̹��� ũ�⸦ �̸� ���� �� �� �����Ƿ� ��� �ؾ� �ϳ�?

�ٸ� ������ ��ũ��Ʈ ��� ([1](http://dimsemenov.com/plugins/magnific-popup/), [2](http://dimsemenov.com/plugins/royal-slider/gallery/)), �Ǵ� ��� ���:

- �̹����� ���� �κи� �ٿ�ε��ؼ� �̹����� ũ�⸦ ���� �� �ֽ��ϴ� ([PHP ����](http://stackoverflow.com/questions/4635936/super-fast-getimagesize-in-php), [Ruby](https://github.com/sdsykes/fastimage), [Node.js](http://stackoverflow.com/a/20111234/331460)).
- ���� �̸��� ���� �̹����� ũ�⸦ �����ϰ� PhotoSwipe �ʱ�ȭ �߿� ����Ʈ ���忡�� �Ľ� �� �� �ֽ��ϴ�  (API ������ `gettingData` �̺�Ʈ). 
- ��κ��� CMS�� �̹����� ũ�⸦ �����ͺ��̽��� �����ϰ� �̸� �˻��ϴ� API�� ������ �ֽ��ϴ�.
- ��κ��� �� API (Facebook, 500px, Instagram, Flickr, Twitter, YouTube, Vimeo ��)�� �̹��� ũ�⸦ ��ȯ�մϴ�.

ġ���� ������ �ε�, Ȯ��� �ڸ� ǥ����, �ʱ� ����(zoom-in)  / �ܾƿ� (zoom-out)��ȯ, �̵�, ����(zooming), ĸ�� ��ġ ������ ���˴ϴ�. GitHub������ ��� : [issue #741](https://github.com/dimsemenov/PhotoSwipe/issues/741).


### <a name="different-thumbnail-dimensions"></a> �̸����� �̹����� ���簢�� ������ ũ�Ⱑ ū �̹����� ũ�Ⱑ �ٸ���, ����/�ݱ� ��ȯ�� ��� �ؾ� �ϳ���?

1. ������� ��Ⱦ�� ū �̹����� ��ġ���� ������ �����̵忡 ���� 'msrc'�Ӽ��� �������� �ʰ� ������ ��ȯ �ɼ��� Ȱ��ȭ �ϼ��� (`showHideOpacity:true, getThumbBoundsFn:false`).
2. ����� �̹��� ������ ��Ⱦ�� ū �̹����� ��ġ�ϸ�, **�׷��� ����� ������ CSS�� ���� �߸��ϴ�.**, `showHideOpacity:true` �� �߰��ϰ� `getThumbBoundsFn`�ɼ��� �ڸ��� ������ ����� ��ǥ�� ��ȯ�ϴ��� Ȯ�� �ϼ���.

ū �̹����� ���� ���� ������ ��ġ�ϴ� ������� ǥ���ϰų� CSS�� ���� ���̴� ���� �ڸ��⸦ ������ �����մϴ�. (2).

�̰��� ���� �������� ���� ������ �����Ϸ��� ����� ���Դϴ�. ���� �ִϸ��̼��� Ȯ���ϴµ��� �� ���� ����� �ֽ��ϴ�.

1. 'clip'�Ӽ��� �ִϸ��̼��� �����Ͻʽÿ�. ������ [Paint�� ������](http://csstriggers.com/#clip) �ϸ�, �Ź� �ִϸ��̼��� ��������ϴ�.
2. `overflow:hidden`�� ���� �� div�� �������� �̹����� ���ΰ� �ִϸ��̼� �߿� `transform:translate`�� ���� ��ġ�� ���ܾƸ� ������ �κп� Ŭ���˴ϴ�. �� ����� ����Ʈ �Ǵ� ���̾ƿ��� �������� ������ �� �����̵��� ��ũ ���� �� ���� ��Ұ� �߰��� �ʿ��մϴ�. �׽�Ʈ ������Ÿ���� ��� ����� ���(��: Chrome�� ������ Nexus 5)������ ��Ȱ�ϰ� �۵��Ѵٴ°� ��������ϴ�. ��¼�� �������� �� ���� ������ �� �Դϴ�.


### <a name="scroll-in-caption"></a> ĸ���� ũ�ٸ� ��ũ���� �߰� �� �� �ֽ��ϱ�?  

���� : [issue #657](https://github.com/dimsemenov/PhotoSwipe/issues/657).


### <a name="inline-gallery"></a>�ζ��� ������ ���÷��� ���� ���

�� ���� �������� ����Դϴ�. ������ ��ġ �̺�Ʈ���� 'prvetDefault()'�� ȣ�� �� �� ����Ͽ��� ������ ���� �������� �������� ��ũ���ϴ� ���� ������� �ʽ��ϴ�. ������ ������ �˷��ּ���. ������ ������ �κа� �Բ� �帣�� ����� �������� �����Ϸ��� ���� �ܰ踦 �����ʽÿ�

1. ��ġ�� ������ �θ� ��Ҿȿ�`.pswp` ���ø��� �����ʽÿ�
2. `modal: false, closeOnScroll: false`�ɼ��� �����Ͻʽÿ�.
3. `getThumbBoundsFn` (����ϰ� �ִ� ���)�� �����Ͽ� ���ø� �θ��� ��� ���簢��(rect)�� ���ϴ�.
4. PhotoSwipe �����մϴ�.
5. `updateScrollOffset` �̺�Ʈ�� ���� ���ø��� ��� �簢���� �����¿� �߰��Ͻʽÿ�
6. `init()` PhotoSwipe.

[**CodePen�� ���̺� ���� &rarr;**](http://codepen.io/dimsemenov/pen/JogxWM)

```html
<div style="position: relative;" class="parent">
    <div id="gallery" class="pswp"> ... </div>
</div>
```

```javascript
var items = [...];
var template = document.getElementById("gallery"); // .pswp
var options = {
    ...,
    modal: false,
    closeOnScroll: false,
    getThumbBoundsFn: function(index) {
        // rect�� ������ ���
        var rect = {x: ..., y: ..., w: ...},

        var templateBounds = template.parentElement.getBoundingClientRect();
        rect.x -= templateBounds.left;
        rect.y -= templateBounds.top;

        return rect;
    }
};
var photoSwipe = new PhotoSwipe(template, PhotoSwipeUI_Default, items, options);
photoSwipe.listen('updateScrollOffset', function(_offset) {
    var r = template.getBoundingClientRect();
    _offset.x += r.left;
    _offset.y += r.top;
});
photoSwipe.init();
```

### <a name="custom-pid-in-url"></a>URL���� ���� ��� ���� �ĺ��ڸ� ����ϴ� ���

���� �̹��� URL�� ������ ���� �������

```
http://example.com/#&gid=1&pid=custom-first-id
http://example.com/#&gid=1&pid=custom-second-id
```

��ſ� :

```
http://example.com/#&gid=1&pid=1
http://example.com/#&gid=1&pid=2
```

... `history:true, galleryPIDs:true`�ɼ��� �����ϰ� �ϰ� `pid` (������ �׸� �ĺ���)�Ӽ��� �����̵� ��ü�� �߰��մϴ�. (`pid`�� ������ ���ڿ�), ����:

```js
var slides = [
    {
        src: 'path/to/1.jpg',
        w:500,
        h:400,
        pid: 'custom-first-id'
    },
    {
        src: 'path/to/2.jpg',
        w:300,
        h:700,
        pid: 'custom-second-id'
    },
    ... 
];
```

- PhotoSwipe�� �ʱ�ȭ�ϰ� ���� ������ �ڵ带 �������� �ʽ��ϴ�. ó�� �������� �ε��� �� URL�� ���� �Ľ��ؾ� �մϴ�. [�����ϱ�](http://photoswipe.com/documentation/getting-started.html#dom-to-slide-objects)�� �⺻ �ڵ� ���ǿ��� �� ����� ���ԵǾ� �ֽ��ϴ�. (������ �ʿ��� ���`photoswipeParseHash`����� Ȯ�� �Ͻʽÿ�)
- PhotoSwipe v4.0.8����`galleryPIDs` �ɼ��� ����� �� �ֽ��ϴ�. ([�ɼ� ����](options.md#galleryPIDs)).


## ����

### <a name="gif-freeze-ios"></a> iOS8���� GIF�̹����� �����Ǵ� ��찡 �ֽ��ϴ�.

iOS Safari�ִ� â �ܺη� �̵��� GIF�̹����� �����Ǵ� ���װ� �ֽ��ϴ�.(�Ǵ� 'overflow:hidden'�� �ִ� ��� �ܺ�) ���� ������ PhotoSwipe���� �ִϸ��̼� GIF�� ������� �ʴ� ���Դϴ�. ����� ���������� �ִϸ��̼� ������ �������Ƿ� �����ϴ�. ������ ������ ����ؾ��ϴ� ��� [�� ��ŷ](https://github.com/dimsemenov/PhotoSwipe/issues/662#issuecomment-66420874)�� �����Ͻʽÿ�.

### <a name="mobile-crash"></a> �Ŵ��� �̹����� �������� ���� ����� �������� �ٿ�˴ϴ�

��κ� �޸� �������� ����� ��ġ���� �߻��� �� �ֽ��ϴ�. (iOS Safari, ������ Android�� �⺻ ������ (KitKat ����)) �浹�� ���� ���� ������ �ʹ� ū �̹����Դϴ�.(�Ϲ������� 2000x1500px���� ŭ) PhotoSwipe�� �̹����� �ϵ���� ������ �����Ͽ� �������� �Ϲ� �̹������� ���� �޸𸮸� �Һ��ϹǷ� ���� �������� ��� ������� ������ �����ǰų� �浹�� �߻��մϴ�.

���� [������ �̹��� ����](responsive-images.md), �Ǵ� ��� �Ŵ��� �̹����� �������� ���ʽÿ�. ��� 900x600�� �ڵ����� ��� 1200px �ʺ��� �̹����� ����ϴ� ���� ���� �̻����Դϴ� . iOS Simulator���� ��� ���� ��Ȱ�ϰ� �۵��Ѵٰ��ؼ� ���� ��ġ���� �浹�� �߻������� �ʽ��ϴ�.

�幮 ��������� �������� �Ϻ� ���μ��� �߿� PhotoSwipe�� ���� �浹�� �߻��� �� �ֽ��ϴ� (�ʱ� �������ε� / ������ �Ǵ� �������� ������ �ִϸ��̼� �� �� ����), �������� ������ �� ������ PhotoSwipe �ʱ�ȭ ���� (document.ready �� 18-300ms), Ư�� ū �̹����� ǥ���ϴ� ���.

**UPD.:** in [v4.1.0](https://github.com/hun1451/PhotoSwipe/releases/tag/v4.1.0) �̰��� �κ������� �����Ǿ����ϴ�. 

## ��Ÿ

### <a name="keep-updated"></a> ���� ������ ��� �ֽ��ϱ�, ������Ʈ�� ���� �˸��� �޴� ����� �����Դϱ�?

PhotoSwipe�� ������Ʈ�� ���� ������ - [GitHub releases](https://github.com/hun1451/PhotoSwipe/releases)�������� ���� ������ ������Ʈ �˴ϴ�.
��� ���������� [Atom feed](https://github.com/hun1451/PhotoSwipe/releases.atom)�� �ֽ��ϴ�., �ǵ尡 ������Ʈ �Ǹ� �̸��� �˸��� ������ �� �ֽ��ϴ� [using IFTTT](https://ifttt.com/recipes/230902-photoswipe-update-notification).

���� ���� [email newsletter](http://dimsemenov.com/subscribe.html?i=pswp) (1�⿡ 3~4ȸ �߽�), [@PhotoSwipe on Twitter](http://twitter.com/photoswipe)�� �ȷο� �ϼ���. �׸���  [PhotoSwipe on GitHub](https://github.com/hun1451/PhotoSwipe/)���� star�� �����ð� �о��ּ���.

### <a name="wordpress-release"></a> WordPress �÷������� ��� �� ��?

�÷������� ���� ���̸� 2015�⿡ ��� �� �����Դϴ�. �˸��� �������� [�������� ����](http://dimsemenov.com/subscribe.html?i=pswp-wp)�ϼ���.


### <a name="can-i-use-in-theme"></a> WordPress / Magento / Joomla ... PhotoSwipe�� ����ϰ� �ͽ��ϴ�. ���ø��� ����� �� �ֽ��ϱ�?

�׷����ϴ�. PhotoSwipe�� ���Ѿ��� ���� �Ǵ� ����� �׸��� ����� �� �ֽ��ϴ�. ������ ��� �׸� ������ ���� ������ ũ���� (PhotoSwipe Ȩ������ ��ũ)�� ���� �νʽÿ�.


<div style="margin-top:30px;"><p>�� �������� ������ �� �ִ� ����� �˰� �ֽ��ϱ�? ������ ������ �߰� �߽��ϱ�? <a href="https://github.com/hun1451/PhotoSwipe/blob/master/website/documentation/responsive-images.md">������ �����Ͻʽÿ�!</a></p></div>
