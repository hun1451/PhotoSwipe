---

layout: default

title: PhotoSwipe Performance Tips

h1_title: Performance Tips

description: Suggestions on how to make gallery faster.

addjs: true

canonical_url: http://photoswipe.com/documentations/performance-tips.html

buildtool: true

markdownpage: true

---

## �ִϸ��̼�

- �ִϸ��̼� ������ �̹����� ũ�⿡ ���� ũ�� �޶����ϴ�. �� ���� �̹��� & ndash; �� �ε巯�� �ִϸ��̼�. ���� �������� �ʰ� [���� �� �̹��� ����](responsive-images.html) �Ǵ� ��� �޴� ��ȭ �� 1200x1200 �̻��� �̹����� �������� ���ʽÿ�
- ����Ʈ �Ǵ� ���̾ƿ��� ������ ���ִ� �ִϸ��̼� �߿��� �ƹ� �͵����� ���ʽÿ�. DOM�� �� ��Ҹ� �߰����� ���ʽÿ�. `ǥ��`�Ǵ� `���ü�`�� �������� ���ʽÿ�. `����`�� `������`�� ������ �� �ֽ��ϴ�. �ִϸ��̼��� ���� �� ��� ���� ������ �����Ͻʽÿ�. & ndash; `beforeChange` (�����̵� ��ȯ),`initialZoomInEnd` (�ִϸ��̼��� �ʱ� Ȯ�밡 ����) ��`initialZoomOutEnd` (�ʱ� ��� �ִϸ��̼��� ���� ��) �̺�Ʈ�� ����մϴ�.
- Ȯ�� / ��� �ִϸ��̼��� Ȱ��ȭ �� ��� (ù ��° ��Ģ ����) PhotoSwipe�� ���� ����ǿ� ������`: hover` ��`: active` ȿ���� ���Ͻʽÿ�.
- PhotoSwipe �����̵� ������ ���� UI�� ������ ��Ÿ���� ������ Ȯ���Ͻʽÿ�. ���� ���, ĸ�� �ؽ�Ʈ��`text-shadow`�� ������ ����ų �� �ֽ��ϴ�.

�� �ܰ踦 �����ϰ� �������� ������ [PhotoSwipe Ȩ������](http://photoswipe.com)�� �ٸ� ��� ���õ��� ���� ��� JS / CSS / HTML �ڵ带 �����Ͽ� ���������� PhotoSwipe�� �ݸ��Ͻʽÿ�. PhotoSwipe �ڿ� ����ؼ� �ִϸ��̼��� �����ϴ� ��� �������Ͱ� ������ Ȯ���Ͻʽÿ�.

PhotoSwipe�� �и� �� �Ŀ��� ������ �۵����� ������ & ndash; [GitHub�� ����](https://github.com/hun1451/PhotoSwipe/issues)�� ���� [��� �� �׽�Ʈ ���̽�] (http://css-tricks.com/reduced-test-cases/) ��ũ�� �����Ͻʽÿ�. .

## ���� �����ϱ� 

- �⺻ PhotoSwipe UI����`png`��`svg` ��������Ʈ�� �ֽ��ϴ�. �⺻������ PhotoSwipe�� �� �Ŀ� ���ε�˴ϴ�. ��� ��Ʈ���� ǥ���Ϸ��� ������ ��������Ʈ�� ����Ʈ "�⺻"��������Ʈ�� �����ϰų� CSS�� ���� �̸� �������� �� �� �ֽ��ϴ�.
�������� �������� �ֿ� ����� �ƴ� ��� PhotoSwipe JS ���Ϸε带 �����մϴ�.
- JS�� �����ϰ�, CSS ������ ����ϰ� �����մϴ�.

�� �������� ���� �� ���ִ� ����� �˰� �ֽ��ϱ�? [Suggest an edit!](https://github.com/hun1451/PhotoSwipe/blob/master/website/documentation/responsive-images.md)