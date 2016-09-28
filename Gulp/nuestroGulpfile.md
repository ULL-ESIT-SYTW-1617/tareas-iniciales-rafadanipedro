Nuestro Gulpfile
====================================

Nuestro gulpfile está escrito usando ES7 y Gulp 4. Lo que hemos hecho ha sido convertir los scriptsde bash que estaban en la plantilla y pasarlos a funciones asíncronas que luego son exportadas por el gulpfile.

Tareas
------------------------------------
* **contributors**: Generar el fichero MAINTAINERS con los datos de quienes hayan hecho commits.

* **generateGitbook**: Convertir los MD a HTML usando `gitbook` y colocarlo en el directorio `gh-pages`.

* **generateWiki**: Desplegar el contenido del directorio `gh-pages` en las [Gh-pages](https://ull-esit-sytw-1617.github.io/tareas-iniciales-rafadanipedro/).

* **deployWiki**: Desplegar el contenido del directorio `wiki` en la  [wiki](https://github.com/ULL-ESIT-SYTW-1617/tareas-iniciales-rafadanipedro/wiki) del repo (aunque aquí no funcionan los plugins de `gitbook`).

* **serve**: Lanza un servidor que se recarga automáticamente cuando hay algún cambio.

* **install**: Instala los plugins de gitbook.

### Otras tareas

* **build**: Instala los plugins y genera la `wiki` y las `gh-pages`.
* **deploy**: Despliga los contenido de la `wiki` y las `gh-pages` en los lugares correspondientes.
* **default**: La tarea por defecto apunta a `build`.
