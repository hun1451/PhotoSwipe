---

layout: �⺻��

title: SEOFriendlyJavaScriptImageGallery(����ũ ���� ������)��.

h1_title: �̹��� ������ SEO

description: �ڹ� ��ũ��Ʈ �̹��� �������� ���� �̻����� HTML��ũ�� ���(lightboxtype).

addjs: true

canonical_url: http://photoswipe.com/documentation/seo.html

buildtool: true

markdownpage: true

---

PhotoSwipe�� HTML�� �ϳ��� ����Ǵ� ���� �������� ������, ������ �������� ������ �ִ�. ���� �ܼ��� ��ũ���� ���� ������ ����, ���� ������ �̹����� ����Ǵ� �̸� ���� ����Դϴ�.

```html
<a href="large-image.jpg">
    <img src="small-image.jpg" alt="Image description" />
</a>
...
```

 `alt`�� ���� �ʰų� HTML �±װ� ���ԵǾ� ���� ���� �� ĸ���� ������ `<figure>`��`<figcaption>`�� ����� �� �ֽ��ϴ�.:

```html
<figure>
	<a href="large-image.jpg">
	    <img src="small-image.jpg" alt="Image description" />
	</a>
	<figcaption>Long image description</figcaption>
</figure>
...
```

[ImagePalleryforImaging](http://schema.org/ImageGallery)��[ImageObject](Im)��[ImageObject](http://schema.org/ImageObject)�� ����Ͻ� �� �ֽ��ϴ�.

```html
<div itemscope itemtype="http://schema.org/ImageGallery">

	<figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">
		<a href="large-image.jpg" itemprop="contentUrl">
		    <img src="small-image.jpg" itemprop="thumbnail" alt="Image description" />
		</a>

		<!-- optionally use this method to store image dimensions for PhotoSwipe -->
		<meta itemprop="width" content="300">
		<meta itemprop="height" content="600">

		<figcaption itemprop="caption description">
			Long image description

			<!-- optionally define copyright -->
			<span itemprop="copyrightHolder">Photo: AP</span>
		</figcaption>
	</figure>

	<figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">
		<a href="large-image.jpg" itemprop="contentUrl">
		    <img src="small-image.jpg" itemprop="thumbnail" alt="Image description" />
		</a>
		<figcaption itemprop="caption description">Long image description</figcaption>
	</figure>

	...

</div>
```


���� ��� ���⿡�� �̸� ���⸦ ǥ������ �������� �������� 50���� ������ ������, ó������ ������ �̸� ����+��ũ"��� ����(50)"�� ���� �ݴϴ�.�ݵ�� [Schema.org markup](http://schema.org/ImageGallery)�� ����ؾ� �մϴ�. �׸��� DOM �ȿ� �ִ� ����� ������ �ִ� 50���� ��� ��ũ����  (����� ��ſ� ��ũ ����� ���� �ؽ�Ʈ ����)  (`display:none`�� �Բ� ���� �� �ֽ��ϴ�). ����:

```html
<div itemscope itemtype="http://schema.org/ImageGallery">

	<figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">
		<a href="large-image-1.jpg" itemprop="contentUrl">
		    <figcaption itemprop="caption description">Long image description 1</figcaption>
		</a>
	</figure>

	<figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">
		<a href="large-image-2.jpg" itemprop="contentUrl">
		    <figcaption itemprop="caption description">Long image description 2</figcaption>
		</a>
	</figure>

	...

</div>
```

����쿡, `large-image.jpg`�� �Ϻ��ϰ� ����ȭ �� ���Դϴ�. ĸ�� ��Ұ� �� ���Դϴ�. ��� `display:none`�� ���� ���� ����� , ������ ���õ� ������ �����ϰ�, ���� ������ �ƴ� ������� Ű���带 ������� �ʽ��ϴ�.



### �߰� ���� ����


- `alt`�� �Ӽ��� ª�� �����ϰ� �����Ѵ�. ĸ�� ��ҿ� ���� �� ���� ����ϴ�
- [Google image publishing guidelines](https://support.google.com/webmasters/answer/114016).
- Use [Google](https://developers.google.com/webmasters/structured-data/testing-tool/) or [Yandex](https://webmaster.yandex.com/microtest.xml) structured data testing tool to validate your Schema.org markup. 
-�ػ󵵰� ���� �̹����� �� ���� ���̸�, �밳 1680px������ �� �������� �� ����.
- �ʱ� ������ �ε忡�� �� �� �ִ� �̹��� ĸ���� �׻� ������ �ͺ��� �����ϴ�. �ʱ⿡ �̸� ����� ĸ���� ��� �����ϴ� �� ����ϴ� ������ ���̾ƿ��� ���� ���� [the new Guardian gallery page]�Դϴ�.(http://www.theguardian.com/science/gallery/2015/mar/13/satellites-as-youve-never-seen-them-before-in-pictures).
- �̹��� ũ�� �� ���� ����ȭ:  
	- [Good guide by Ilya Grigorik](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization).
	- Tools: Mac �� seaTools �� ���⿡ [ImageOptim](https://imageoptim.com/), ��������� ���⿡; [FileOptimizer](http://nikkhokkho.sourceforge.net/static.php?page=FileOptimizer) or [JPEGmini](http://www.jpegmini.com/windows) (limited lite version). ����, ������ ���� ������ ����� �� �ִ� ���� ���� ���� �ֽ��ϴ�.
[ImageMagick](http://www.imagemagick.org/) or [jpegtran](http://jpegclub.org/jpegtran/).
	- JPEG(��:VAAI)ȭ�鿡 �پ��� �̹����� �����ϴ� ��� JPEGȭ���� ����Ͽ� ���� ũ�⸦ 20~40% ���� �� �ֽ��ϴ�.
[good article about this](http://www.netvlies.nl/blog/design-interactie/retina-revolution). 
- �̹����� ���� ��ũ�� ���� ��� �̹����� ������ �ʿ䰡 �����ϴ�. �̹����� ���� ��ũ�� �ʿ��ѵ�, �̴� Schema.org markup�� ����������, ������ �� �� �ֽ��ϴ�.
[track how well they are indexed](http://webmasters.stackexchange.com/a/5151).
- �̸� ���⸦ ����`srcset`�Ǵ�`<picture>`�� ����ϼŵ� �˴ϴ�.
-������ �������� �̸� ���⿡ �����ϰ�, ���� ������ �ε� �ӵ��� ������ �ջ��ų �� �ֽ��ϴ�.
- �˻� ������ Ư�� �̹��� ���Ͽ� ���� �������� ��ũ�� ����� �� ���� �ְ� �ִ�. Ư�� Schema.org markup �׷��� �� �̹����� ���� ������ HTML�������� ���� ���� �������̰� ��Ư�� ����, ����, ������ ���� �� �� �����ϴ�.


�� �������� ������ �� �ִ� ����� �˰� ��ʴϱ�? [������ �����Ͻñ� �ٶ��ϴ�.](https://github.com/dimsemenov/PhotoSwipe/blob/master/website/documentation/seo.md)






