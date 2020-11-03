# Photos

Here are some pictures I took. They still have the exif data, so if you want to know what camera settings I was using, you can use a program like [`exiftool`](https://github.com/exiftool/exiftool) or [imagemagick](https://imagemagick.org/index.php)

{% set images = ["IMG_0978", "IMG_1019", "IMG_1062", "IMG_1064", "IMG_1605", "IMG_1629", "IMG_1645", "IMG_2094", "IMG_2099", "IMG_2115", "IMG_2121", "IMG_2131", "IMG_6640", "IMG_6840", "IMG_6864", "IMG_7500", "IMG_7525", "IMG_7548", "IMG_7549" ] %}

{% macro srcset(dir, ext='jpg') %}/photos/images/{{ dir }}/small.{{ ext }} .5x, /photos/images/{{ dir }}/medium.{{ ext }} 1x, /photos/images/{{ dir }}/large.{{ ext }} 2x, /photos/images/{{ dir }}/original.{{ ext }} 4x{% endmacro %}

{% for dir in images %}<a href="/photos/images/{{ dir }}/original.jpg" style="display: block;"><picture><source type="image/webp" srcset="{{ srcset(dir, 'webp') }}" /><source type="image/jp2" srcset="{{ srcset(dir, 'jp2') }}" /><source type="image/jpg" srcset="{{ srcset(dir, 'jpg') }}" /><img srcset="{{ srcset(dir) }}" src="/photos/images/{{ dir }}/medium.jpg" /></picture></a>{% endfor %}
