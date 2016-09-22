import GhPages from 'gh-pages'

export default function deployGitbook() {
  return new Promise((res, rej) => {
    GhPages.publish('./gh-pages', {
      repo: require('../package.json').repository.url,
      logger: console.error
    }, res)
  })
}
