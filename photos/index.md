# Photos

Here are some pictures I took. They still have the exif data, so if you want to know what camera settings I was using, you can use a program like [`exiftool`](https://github.com/exiftool/exiftool) or [imagemagick](https://imagemagick.org/index.php)

{% macro image(url, alt) %}
<a href="{{ url | safe }}" title="{{ alt | safe }}"><img src="{{ url | safe }}" alt="{{ alt | safe }}"></a>
{% endmacro %}

{% call image("images/streetlight-snow.jpg", "Falling Snow") %}{% endcall %}
{% call image("images/bee.jpg", "Bee taking flight") %}{% endcall %}
{% call image("images/butterfly.jpg", "Butterfly enjoying a meal") %}{% endcall %}
{% call image("images/birds.jpg", "Bird stretching") %}{% endcall %}
{% call image("images/sunset.jpg", "A pink and blue sunset") %}{% endcall %}
{% call image("images/sapling.jpg", "A sapling") %}{% endcall %}
{% call image("images/squirrel.jpg", "A squirrel making eye contact") %}{% endcall %}
