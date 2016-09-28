Cómo automatizar tareas con Gulp
====================================

En esta sección veremos cómo usar gulpfile, tomando de ejemplo un desarrollo simple de frontend.

Fichero `gulpfile.js`
------------------------------------
Al igual que otros automatizadores de tareas, ncesitaremos un fichero de configuración donde almacenaremos nuestras tareas y otras cosas que necesitemos. Gulp sigue la convención de llamar a su fichero por el nombre del programa y la palabra `file`, como `makefile`, `rakefile` o `gruntfile`.

Plugins para Gulp
------------------------------------
Gulp cuenta con una gran cantidad de plugins (alrededor de 15.000) en forma de paquetes de Node. Estos plugins los usaremos para realizar nuestras tareas, por ejemplo podríamos usar [`gulp-uglify`](https://www.npmjs.com/package/gulp-uglify) para minificar ficheros. Estos plugins se pueden concatenar unos con otros haciendo uso de [`Stream.pipe`](https://nodejs.org/api/stream.html#stream_readable_pipe_destination_options).

Existen plugins de todo tipo, para compilar pseudolenguages como SASS o Coffescript, minificación de ficheros, concatenación, etc. Incluso podemos crear nuestros propios plugins.

Creando una tarea
------------------------------------
Para poder crear una tarea, necesitamos llamar a la función `task` de gulp, y pasarle como parámetros el nombre de la tarea y la función que se ejecutará al ser llamada. Por ejemplo, para minificar ficheros y almacenarlos en el directorio `dist`:

```javascript
var gulp = require('gulp');
var minify = require('gulp-minifier');

gulp.task('minify', function() {
  return gulp.src(['index.html', 'styles.css', 'main.js'])
    .pipe(minify())
    .pipe(gulp.dest('dist'));
})
```

De este modo, minificaríamos los ficheros `index.html`, `styles.css` y `main.js` y los almacenaríamos en `dist`.

Dependencias en tareas
------------------------------------
Puede que nos encontremos ante el caso en el que para ejecutar una tarea, dependamos de ralizar una con anterioridad. Por ejemplo, haciendo uso de la tarea anterior, puede que necesitamos primero limpiar el directorio `dist` antes de colocar los ficheros minificados. Para este propósito existe un segundo parámetro a la hora de crear una tarea, que es un array con los nombres de las tareas de las que se depende. Por ejemplo:

```javascript
var gulp = require('gulp');
var minify = require('gulp-minifier');
var clean = require('gulp-clean');

gulp.task('minify', ['clean'], function() { // En esta línea le indicamos que queremos ejecutar clean antes que minify
  return gulp.src(['index.html', 'styles.css', 'main.js'])
    .pipe(minify())
    .pipe(gulp.dest('dist'));
})

gulp.task('clean', function() {
  return gulp.src('dist', {read: false})
    .pipe(clean());
})
```

De este modo, gulp ejecutará primero la tarea `clean`.

*NOTA*: Si especificamos múltiples dependencias, éstas se ejecutarán de forma asíncrona, por lo que necesitaremos algún plugin como [gulp-sync](https://www.npmjs.com/package/gulp-sync). Esto queda solucionado en la versión 4 de Gulp.

Tareas asíncronas
------------------------------------
Para usar gulp no hay que usar obligatioriamente los pipes, podemos crear una función que simplemente sea un `console.log` y nos salude, por ejemplo:

```javascript
gulp.task('hello-world', function() {
  console.log('Hello World!')
})
```

Esto está bien cuando no encontremos el plugin necesario, o sea una tarea muy sencilla. Esta función que le pasamos a la tarea, puede recibir un parámetro con una [`callback`](https://es.wikipedia.org/wiki/Callback_(inform%C3%A1tica), que ejecutaremos cuando nuestra tarea haya terminado.

```javascript
gulp.task('hello-world', function(cb) {
  funcionAsincrona('prueba', function() {
    otraFuncion('prueba2', cb)
  })
})
```

De este modo, cuando `otraFuncion` termine de ejecutarse llamará a la callback y Gulp quedará notificado de que la tarea ha finalizado.

Otro modo de hacer uso de tareas asíncronas, es devolver una  [Promesa](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

```javascript
gulp.task('hello-world', function(cb) {
  return funcionAsincrona()
    .then(function(resolve, reject) {
      ...
    })
    .then(function(resolve, reject) {
      ...
    })
  })
})
```
