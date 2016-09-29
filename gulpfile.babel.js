import { series, parallel } from 'gulp'

export {default as contributors} from './scripts/contributors'
import generateGhPages from './scripts/generate-gh-pages'
import generateWiki from './scripts/generate-wiki'
import deployGhPages from './scripts/deploy-gh-pages'
import deployWiki from './scripts/deploy-wiki'
import serve from './scripts/gitbook-serve'
import install from './scripts/gitbook-install'

export { generateGhPages, generateWiki, deployGhPages, deployWiki, serve }

export const build = series(install, parallel(generateGhPages, generateWiki))
export const deploy = parallel(deployGhPages, deployWiki)

const errorGitbook = () => console.log('Para desplegar en gitbook sólo hace falta hacer push')

export const generateGitbook = errorGitbook
export const deployGitbook = errorGitbook

export default build
