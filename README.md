# PhotoSwipe Repository  
 
[![Build Status](https://travis-ci.org/dimsemenov/PhotoSwipe.svg)](https://travis-ci.org/dimsemenov/PhotoSwipe)  
[![devDependency Status](https://david-dm.org/dimsemenov/PhotoSwipe/dev-status.svg)](https://david-dm.org/dimsemenov/PhotoSwipe#info=devDependencies) 
[![Flattr](http://api.flattr.com/button/flattr-badge-large.png)](http://flattr.com/thing/3698358/dimsemenovPhotoSwipe-on-GitHub) 

모바일 및 데스크탑용 JavaScript 이미지 갤러리. 
 
- [**오픈소스소프트웨어 보고서**](http://github.com/hun1451/PhotoSwipe/tree/master/REPORT.md) <<--------**REPORT** ! ! 
- [설명서 및 시작 안내서](https://github.com/hun1451/PhotoSwipe/tree/master/website_kr/documentation/getting-started.md). 
- [데모 및 스크립트 홈 페이지](http://photoswipe.com/). 
- [NPM](https://www.npmjs.com/package/photoswipe) `npm install photoswipe`. 
- Bower `bower install photoswipe`. 
 
## 파일 위치  

- 컴파일 된 PhotoSwipe JS 및 CSS 파일, SVG 및 PNG 스프라이트는[dist/](https://github.com/hun1451/PhotoSwipe/tree/master/dist) 폴더. 
- 소스 파일(.JS and .SCSS)은 [src/](https://github.com/hun1451/PhotoSwipe/tree/master/src) 폴더에 있습니다. PhotoSwipe는 SASS 파일을 컴파일 할 때 Autoprefixer를 사용합니다. 
- 데모 웹사이트는 [website/](https://github.com/hun1451/PhotoSwipe/tree/master/website_kr) 폴더에 있습니다. 
- 문서 마크 업 파일은 [웹 사이트/문서/](https://github.com/hun1451/PhotoSwipe/tree/master/website_kr/documentation)에 있습니다. 

## 플러그인 / 확장기능 / 애드온 

- [Ruby gem](https://rubygems.org/gems/photoswipe-rails). 
- [Ember.js addon](https://github.com/poetic/ember-cli-photoswipe). 
- [Eager app](https://eager.io/app/DvuKIoU8iTOt). 
- [Koken CMS plugin](https://github.com/DanielMuller/koken-plugin-photoswipe). 
- [Orchard CMS module](https://gallery.orchardproject.net/List/Modules/Orchard.Module.Cascade.PhotoSwipe). 
- [Yellow CMS plugin](https://github.com/datenstrom/yellow-plugins/tree/master/gallery). 
- [Kirby CMS plugin](https://github.com/SiteMarina/guggenheim). 
- [Drupal CMF module](https://www.drupal.org/project/photoswipe). 
- [ProcessWire CMS module](https://github.com/blynx/MarkupProcesswirePhotoswipe). 
- [SPIP CMS module](https://plugins.spip.net/photoswipe.html). 
- [Fork CMS MediaLibrary widget](https://github.com/forkcms/forkcms). 
 
유용한 코드가 있습니까? <a href='mailto:diiiimaaaa@gmail.com?subject="PhotoSwipe Plugin"'>Email me</a> 저에게 이메일을 보내주십시오 </a>. 여기에 대한 링크를 게시합니다. 

## 빌드 

PhotoSwipe를 직접 컴파일하려면 [Node.js](http://nodejs.org/),[Grunt.js](https://github.com/cowboy/grunt),[Ruby](http://www.ruby-lang.org/) 및 [Jekyll](https://github.com/mojombo/jekyll/)이 설치된 경우 : 

1) 저장소 복제(Clone the repository) 

	git clone 
	https://github.com/hun1451/PhotoSwipe.git 

2) 가져온 PhotoSwipe 폴더로 이동하여 노드 종속성을 설치하십시오. 
	cd PhotoSwipe && npm install 

3) 'grunt'을 실행하여 'dist'폴더에 JS파일과 CSS파일을 생성하고 '_site/'폴더에 사이트를 생성하십시오. 
