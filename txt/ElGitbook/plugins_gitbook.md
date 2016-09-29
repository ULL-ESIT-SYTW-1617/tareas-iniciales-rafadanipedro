# Plugins en Gitbook

Los plugins en Gitbook nos permiten añadir nuevas funcionalidades a nuestro libro. Podemos encontrar todos los disponibles en la página de [Gitbook Plugins](https://plugins.gitbook.com).

## Instalación de plugins

En caso de querer añadir alguno de los nuevos a nuestro proyecto, tendremos que:

1. Añadirlo al _book.json_, por ejemplo:
  `"plugins": ["nombre_plugin"]`

2. Ejecutar `gitbook install` para instalar dicho plugin.
3. ¡LISTO!

A partir de aquí ya podemos utilizarlo, e incluso configurarlo según los parámetros que nos aparezca en la web.

## Plugins utilizados en esta práctica

Para la realización de este Gitbook hemos utilizado como prueba dos plugins, uno para dar soporte a vídeos de YouTube y otro para poder utilizar los conocidos emojis.

### youtube

Podemos descargar el plugin desde [esta página](https://plugins.gitbook.com/plugin/youtube). El resultado es el siguiente con un vídeo de prueba:

{% youtube %}
https://www.youtube.com/watch?v=EZy1Dl5KJNg
{% endyoutube %}

### advanced-emoji

Podemos descargar el plugin desde [esta página](https://plugins.gitbook.com/plugin/advanced-emoji). Gracias a este plugins contaremos con los famosos emojis desde nuestro libro. La lista completa de los códigos se encuentra disponible en [aquí](http://www.webpagefx.com/tools/emoji-cheat-sheet/). El resultado lo podemos ver a continuación:
:cat: :dog: :mouse: :hamster: :rabbit: :frog: :tiger: :koala: :bear: :pig: :cow: :boar: :monkey: :horse: :camel: :sheep: :elephant: :panda_face: :snake: :squirrel: :octocat:
