Cómo usar Gh-pages para automatizar despliegues
====================================

En esta práctica hemos usado el mismo script que venía en el boilerplate. Este script de Node.js usa el módulo [gh-pages](https://www.npmjs.com/package/gh-pages) como interfaz para interactuar con el repositorio.

```javascript
import GhPages from 'gh-pages'

export default function deployGitbook () {
  return new Promise((resolve, reject) => {
    GhPages.publish('./gh-pages', {
      repo: require('../package.json').repository.url,
      logger: console.log
    }, resolve)
  })
}
```

Delegamos totalmente la tarea de despliegue en este script. Le pasamos como parámetro el campo `repository.url` del fichero `package.json`, que contiene la dirección del repositorio.