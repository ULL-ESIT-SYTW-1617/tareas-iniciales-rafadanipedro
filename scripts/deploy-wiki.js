import fsp from 'fs-promise'
import path from 'path'
import git from 'simple-git'

export default async function main() {
  await fsp.remove(path.resolve('wiki/.git'))
  await new Promise((res, rej) => {
    git(path.resolve('wiki'))
      .init()
      .add('./*')
      .commit('Deploy to Wiki')
      .addRemote('origin', require('../package.json').repository.wiki)
      .push(['--force', 'origin', 'master:master'], res)
  })
}
