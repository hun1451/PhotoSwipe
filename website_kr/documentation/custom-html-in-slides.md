---

layout: �⺻��

title: PhotoSwipe �����̵��� ����� ���� HTML������

hi_title: �����̵��� ����� ���� HTML������

description: ���� �Ǵ� ���� ������ ���ó�� PhotoSwipe �����̵忡 ���� HTML�� �߰��ϴ� ���

addjs: true

����_URL: http://photoswipe.com/documentation/custom-html-in-slides.html

buildtool: true

markdownpage: true

---

PhotoSwipe�� �����̵忡 HTML�������� ǥ���ϰ� �Ϸ��� �����̵� ��ü���� 'html'�Ӽ��� ���� �ؾ� ��. HTML ���ڿ� �Ǵ� DOM ��� ��ü�� �����ؾ� ��.

```javascript

var items = [
	// slide 1 with HTML
	{
		html: '<div><h1>Any HTML <a href="http://example.com">content</a></h1></div>'
	},

	// slide 2 with image
	{
		src: 'path/to/image.jpg',
		w:600,
		h:200
	}
];


// initialise as usual
var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);

// You don't necessarily need to have "html" property in slide object initially.
// You may create it dynamically in gettingData event:
/*
	gallery.listen('gettingData', function(index, item) {
		if(index === 3) {
			item.html = '<div>Dynamically generated HTML ' + Math.random() + '</div>';
		}

	});
*/

// Note that init() method is called after gettingData event is bound
gallery.init();
```

�߰����� �߿� �޸�:

- �� 3�� ������ �浹�� ���ϱ� ����, 'html' �Ӽ��� ���� �����̵�� 'src'(�̹���)�Ӽ��� ������ �ʾƾ� �մϴ�.
- PhotoSwipe�� �ؽ�Ʈ�������� ��ũ�ѷ��� �ƴ� �̹��������� ���� �Ǿ����ϴ�. "���� HTML"����� �߰��� ����ϼ���.(��: ���� �������� �ִ� �����̵�, �Ұ������̵�Ǵ� �̹��� ������ ����)
- �� ���(Youtube, Vimeo ���� iframe ����)�� ����Ͽ� ������ �Ǵ� ����� ��Ҹ� Ǫ���ϴ� ���� �������� �ʽ��ϴ�. HTML5 ���� ����� ���� ����� ���������� �̺�Ʈ�� ��ġ�ϹǷ� ����ڰ� ���������� �Ҽ� �����ϴ�. PhotoSwipe�� ������ ������ �ʿ��� ���, ����ڰ� ���� �����̵带 ���� �� ��Ÿ���� modal�� �߰� �Ҽ� �ֽ��ϴ�. DOM�� modal�� �������� ����� `.pswp__scroll-wrap` ��� �ڿ� �߰� �� �� �ֽ��ϴ�.
- �ʱ� ���� (zoom-in) / �ܾƿ�(zoom-out)��ȯ�� Ȱ��ȭ �� ���, PhotoSwipe �� ���� �����̵忡 `html`�� ������ �ڵ����� ��Ȱ��ȭ �մϴ�. ��� �ܼ��� ���̵� ��ȯ�� ���˴ϴ�
- �⺻������ PhotosSwipe�� ��ũ('<a>')�� �� �ڽ� ��ҵ鿡 ���ؼ��� Ŭ�� �̺�Ʈ�� ����մϴ�. �� �ൿ��`isClickableElement` �ɼ��̳� `preventDragEvent` �̺�Ʈ�� �����ϼ���.
- HTML �����̵忡 ���� ��(zoom)�� ���� �������� �ʽ��ϴ�.

��:

<div class="codepen-embed">
	<p data-height="600" data-theme-id="10447" data-slug-hash="MYexrm" data-default-tab="result" data-user="dimsemenov" class='codepen'>
		<a href="http://codepen.io/dimsemenov/pen/MYexrm/" target="_blank"><strong>View example on CodePen &rarr;</strong></a>
	</p>
</div>

Tip: CodePen���� ������ �ٿ�ε��Ͽ� ���÷� ��� �� �� �ֽ��ϴ�. (`Edit on CodePen` -> `Share` -> `Export .zip`)

�� �������� �����Ҽ� �ִ� ����� �˰� ��ó���? [������ ���� ���ּ���!](https://github.com/dimsemenov/PhotoSwipe/blob/master/website/documentation/custom-html-in-slides.md)


