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

[ImagePalleryforImaging](http://schema.org/ImageGallery)및[ImageObject](Im)및[ImageObject](http://schema.org/ImageObject)를 사용하실 수 있습니다.

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


예를 들어 보기에서 미리 보기를 표시하지 않으려면 갤러리에 50개의 영상이 있으며, 처음에는 세개의 미리 보기+링크"모든 영상(50)"을 보여 줍니다.반드시 [Schema.org markup](http://schema.org/ImageGallery)를 사용해야 합니다. 그리고 DOM 안에 있는 당신이 가지고 있는 50개의 모든 링크들을  (썸네일 대신에 링크 요소의 내용 텍스트 포함)  (`display:none`과 함께 숨길 수 있습니다). 에제:

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

모든경우에, `large-image.jpg`는 완벽하게 색인화 될 것입니다. 캡션 요소가 길 것입니다. 비록 `display:none`을 숨겨 놓을 지라고 , 원문에 관련된 내용을 보관하고, 스펨 메일이 아닌 사람들은 키워드를 사용하지 않습니다.



### 추가 권장 사항


- `alt`의 속성을 짧고 간결하게 유지한다. 캡션 요소에 대한 긴 설명 남깁니다
- [Google image publishing guidelines](https://support.google.com/webmasters/answer/114016).
- Use [Google](https://developers.google.com/webmasters/structured-data/testing-tool/) or [Yandex](https://webmaster.yandex.com/microtest.xml) structured data testing tool to validate your Schema.org markup. 
-해상도가 높은 이미지는 더 높은 편이며, 대개 1680px정도가 더 넓을수록 더 좋다.
- 초기 페이지 로드에서 볼 수 있는 이미지 캡션은 항상 숨겨진 것보다 낫습니다. 초기에 미리 보기와 캡션을 모두 유지하는 데 사용하는 갤러리 레이아웃의 좋은 예는 [the new Guardian gallery page]입니다.(http://www.theguardian.com/science/gallery/2015/mar/13/satellites-as-youve-never-seen-them-before-in-pictures).
- 이미지 크기 및 포맷 최적화:  
	- [Good guide by Ilya Grigorik](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization).
	- Tools: Mac 용 seaTools 는 여기에 [ImageOptim](https://imageoptim.com/), 윈도우용은 여기에; [FileOptimizer](http://nikkhokkho.sourceforge.net/static.php?page=FileOptimizer) or [JPEGmini](http://www.jpegmini.com/windows) (limited lite version). 또한, 수많은 서버 측에서 사용할 수 있는 공통 툴이 많이 있습니다.
[ImageMagick](http://www.imagemagick.org/) or [jpegtran](http://jpegclub.org/jpegtran/).
	- JPEG(예:VAAI)화면에 다양한 이미지를 제공하는 경우 JPEG화질을 사용하여 파일 크기를 20~40% 줄일 수 있습니다.
[good article about this](http://www.netvlies.nl/blog/design-interactie/retina-revolution). 
- 이미지에 대한 링크가 있을 경우 이미지를 생성할 필요가 없습니다. 이미지에 대한 링크가 필요한데, 이는 Schema.org markup에 유용하지만, 도움이 될 수 있습니다.
[track how well they are indexed](http://webmasters.stackexchange.com/a/5151).
- 미리 보기를 위해`srcset`또는`<picture>`를 사용하셔도 됩니다.
-갤러리 페이지의 미리 보기에 주의하고, 느린 페이지 로드 속도는 순위를 손상시킬 수 있습니다.
- 검색 엔진은 특히 이미지 파일에 대한 직접적인 링크를 상당히 잘 보여 주고 있다. 특히 Schema.org markup 그러나 각 이미지에 대해 별도의 HTML페이지를 갖는 것은 서술적이고 독특한 제목, 설명, 설명이 있을 때 더 좋습니다.


이 페이지를 개선할 수 있는 방법을 알고 계십니까? [편집을 제안하시기 바랍니다.](https://github.com/dimsemenov/PhotoSwipe/blob/master/website/documentation/seo.md)






