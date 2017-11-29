---

layout: 기본값

title: SEOFriendlyJavaScriptImageGallery(마스크 영상 갤러리)맵.

h1_title: 이미지 갤러리 SEO

description: 자바 스크립트 이미지 갤러리에 대한 이상적인 HTML마크업 언어(lightboxtype).

addjs: true

canonical_url: http://photoswipe.com/documentation/seo.html

buildtool: true

markdownpage: true

---

PhotoSwipe는 HTML과 하나로 연결되는 것을 강요하지 않으며, 완전한 통제력을 가지고 있다. 가장 단순한 마크업의 가장 간단한 예로, 가장 간단한 이미지로 연결되는 미리 보기 목록입니다.

```html
<a href="large-image.jpg">
    <img src="small-image.jpg" alt="Image description" />
</a>
...
```

 `alt`에 맞지 않거나 HTML 태그가 포함되어 있지 않은 긴 캡션이 있으면 `<figure>`과`<figcaption>`을 사용할 수 있습니다.:

```html
<figure>
	<a href="large-image.jpg">
	    <img src="small-image.jpg" alt="Image description" />
	</a>
	<figcaption>Long image description</figcaption>
</figure>
...
```

You can go further and use [Schema.org markup for ImageGallery](http://schema.org/ImageGallery) and [ImageObject](http://schema.org/ImageObject), it should look like this:

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


If you don't want thumbnails to be visible on page, e.g. you have 50 images in gallery and you show just first 3 thumbnails + link "view all images (50)", you definitely should use [Schema.org markup](http://schema.org/ImageGallery) and you should have all 50 links (with text in contents of link element instead of thumbnail) in DOM (you may hide them with `display:none`). Example:

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

In all above cases, `large-image.jpg` will be perfectly indexed. The caption element will be crawled even if you hide it with `display:none`, just keep the text relevant, non-spammy &ndash; don't stuff it with keywords.



### Additional recommendations


- Keep `alt` attribute short and descriptive. Leave long description for caption element.
- [Google image publishing guidelines](https://support.google.com/webmasters/answer/114016).
- Use [Google](https://developers.google.com/webmasters/structured-data/testing-tool/) or [Yandex](https://webmaster.yandex.com/microtest.xml) structured data testing tool to validate your Schema.org markup. 
- High-resolution images rank better, usually 1680px on a wider side is more than enough.
- Image caption that is visible on initial page load will always rank better than hidden one. A good example of gallery layout that manages to keep both thumbnails and caption visible initially on page is [the new Guardian gallery page](http://www.theguardian.com/science/gallery/2015/mar/13/satellites-as-youve-never-seen-them-before-in-pictures).
- Optimize images size and format:  
	- [Good guide by Ilya Grigorik](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization).
	- Tools: for Mac there is [ImageOptim](https://imageoptim.com/), for Windows &ndash; [FileOptimizer](http://nikkhokkho.sourceforge.net/static.php?page=FileOptimizer) or [JPEGmini](http://www.jpegmini.com/windows) (limited lite version). Also, there are a lot of server-side/command-line tools like [ImageMagick](http://www.imagemagick.org/) or [jpegtran](http://jpegclub.org/jpegtran/).
	- If you serve different images for high-DPI (e.g. retina) screens, reduce their JPEG quality to 20-40% to save file size, [good article about this](http://www.netvlies.nl/blog/design-interactie/retina-revolution). 
- You don't need to create image sitemap if you have links to images or/and valid Schema.org markup, but it can help you [track how well they are indexed](http://webmasters.stackexchange.com/a/5151).
- Feel free to use `srcset` or `<picture>` for thumbnails.
- Be careful with number of thumbnails on a gallery page, slow page load speed can hurt rankings.
- Search engines index the direct link to the image file quite well, especially with Schema.org markup. But having a separate HTML page for each image is better when it has a descriptive and unique title, description and comments.


Know how this page can be improved? [Please suggest an edit!](https://github.com/dimsemenov/PhotoSwipe/blob/master/website/documentation/seo.md)






