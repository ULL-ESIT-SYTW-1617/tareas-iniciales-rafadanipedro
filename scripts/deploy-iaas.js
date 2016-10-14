import GulpSSH from 'gulp-ssh'
import fs from 'fs-promise'

var config = {
  host: '10.6.128.185',
  port: 22,
  username: 'usuario',
  privateKey: fs.readFileSync('/home/$USER/.ssh/id_rsa')
}

var gulpSSH = new GulpSSH({
  ignoreErrors: false,
  sshConfig: config
})

export function deployIaas() {
  return gulpSSH
    .shell(['cd /home/usuario/Practica3/gh-pages', 'git pull'], {filePath: 'shell.log'})
    .pipe(gulp.dest('logs'))
}
