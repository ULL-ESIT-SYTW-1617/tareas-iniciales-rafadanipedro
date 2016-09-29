Gulp 4 y ES7
====================================

Dentro de poco saldrá la [versión 4 de Gulp](https://github.com/gulpjs/gulp/blob/4.0/CHANGELOG.md). En esta sección comentaremos algunas de sus novedades así como su combinación con nuevas funciones de [ECMAScript 2016 (ES7)](https://h3manth.com/new/blog/2015/es7-features/). La versión 4 de gulp y su documentación correspondiente está disponible en la [rama "4.0"](https://github.com/gulpjs/gulp/tree/4.0) del repositorio de Github.

Instalación
------------------------------------
Para poder hacer uso de estas novedades bleeding edge, necesitaremos hacer una incialización algo más compleja que la normal.

### 1. Instalar Gulp 4, babel, sus presets y plugins

Necesitaremos babel para poder transpilar el código de ES7 a uno que pueda ejecutar node, ya que estas características nuevas de javascript no están disponibles ni siquiera usando el parámetro `--harmony`. Vamos a necesitar el perset para transpilar a ES2015, `stage-0`, y el plugin `babel-polyfill`. Con toda esta sopa de paquetes podremos emular un entorno de ES7.

`npm install babel-register babel-preset-es2015 babel-preset-stage-0 babel-polyfill`

Para usar Gulp 4 necesitamos eliminar las versiones anteriores de Gulp e instalar las nuevas, ya que no son compatibles:
```
npm rm -g gulp
npm install -g gulp-cli
npm install -D 'gulpjs/gulp.git#4.0'
```

### 2. Crear el fichero `.babelrc`
Este fichero lo usaremos para almacenar la configuración de babel, que en nuestro caso es muy sencillito:

```json
{
  "presets": ["es2015", "stage-0"],
  "plugins": [
    "babel-polyfill"
  ]
}
```

### 2. Crear el `gulpfile`
La particularidad de este gulpfile, es que tiene que llamarse `gulpfile.babel.js`, de esta manera cuando sea ejecutado se llamará automáticamente a babel para transpilar neustro código.

ES6, `import` y `export`
------------------------------------
Una de las novedades de ES6 es el sistema de módulos. Con estas nuevas palabras claves podemos importar y exportar con una sintaxis más clara, además de otras ventajas.

```javascript
// Importando un paquete
import _ from 'lodash'

// Deconstruyendo las variables que exporta gulp
import { src, dest } from 'gulp'

// Reenombrando un paquete al importar
import * as test from 'gulp'

const foo = 3
const bar = () => console.log('Hola Mundo!')

// Exporando nuestras variables
export { foo, bar }
```

ES7, `async` y `await`
------------------------------------
Una de las novedades de ES7 (que está un poco verde todavía), son las nuevas palabras claves `async` y `await`. Con ellas podemos crear funciones asíncronas de una forma mucho más legible que con callbacks o promesas, y así evitando un callback hell.

**Usando callbacks**
```javascript
import fs from 'fs'

function foo(src, dst, callback) {
  fs.readFile(src, function(err, data) {
    if (err) {return callback(err) }
    fs.writeFile(dst, data, callback)
  })
}

foo('srcDir', 'destDir', function(err) {
  if(err) { return console.error(err) }
  console.log('Terminado')
})
```

**Con promesas**
```javascript
import fs from 'fs-promise'

function foo(src, dst) {
  return new Promise((res, rej) => {
    fs.readFile(src).then((data) => {
      fs.writeFile(dst, data).then(res)
    })
  })
}

foo('srcDir', 'destDir').then(() => console.log('Terminado'))
```

**Con async y await**
```javascript
import fs from 'fs-promise'

async function foo(src, dst) {
  let data = await fs.readFile(src)
  await fs.writeFile(dst, data)
}

foo('srcDir', 'destDir').then(() => console.log('Terminado'))
```

El efecto que provocan `async` y `await`, es devolver un promesa en una función asíncrona, y resolverla cuando se produzca un return.

Gulp 4, `series` y `parallel`
------------------------------------
Gulp 4 elimina el parámetro de dependencias y los reemplaza con dos nuevas funciones, `series` y `parallel`, que nos permiten ejecutar distintas tareas y mantener un flujo entre ellas. Por ejemplo, podemos minificar los HTML, CSS y JS cada uno con su tarea de forma paralela y al final moverlo a un directorio.

```javascript
gulp.task('default', gulp.series('clean', gulp.parallel('styles', 'html', 'scripts'), 'release'))
```

Combinando todo esto
------------------------------------
Combinando ES7 y Gulp 4 es una gran idea. Podemos exportar una función en el gulpfile y Gulp lo interpetrará como una tarea ejecutable. Y además estas funciones pueden ser asíncronas (ya que devuelven una promesa).

```javascript
import { series, parallel } from 'gulp'

export async function minify () {
  // Hacer cosas asíncronas
}

export async function clean () {
  // Hacer más cosas asíncronas
}

const build = series(minify, clean)

export default build
```

Al final quedará una estructura como esta:
```
├─┬ build
│ └─┬ <series>
│   ├── minify
│   └── clean
└─┬ default
  └─┬ <series>
    ├── minify
    └── clean
```

Esta práctica la hemos hecho usando esta tecnología, [aquí](https://github.com/ULL-ESIT-SYTW-1617/tareas-iniciales-rafadanipedro/blob/master/gulpfile.babel.js) el link al Gulpfile. En él se importan funciones asíncronas desde el directorio `scripts` para tenerlo más organizado, y se exportan en el `gulpfile`.
