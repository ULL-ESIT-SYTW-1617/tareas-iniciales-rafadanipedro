import { series, parallel, src } from 'gulp'
import gclean from 'gulp-clean'

export {default as contributors} from './scripts/contributors'
import generateGhPages from './scripts/generate-gh-pages'
import generateWiki from './scripts/generate-wiki'
import deployGhPages from './scripts/deploy-gh-pages'
import deployWiki from './scripts/deploy-wiki'
import deployIaas from './scripts/deploy-iaas'
import serve from './scripts/gitbook-serve'
import install from './scripts/gitbook-install'

export { generateGhPages, generateWiki, deployGhPages, deployWiki, serve, deployIaas }

export const build = series(install, parallel(generateGhPages, generateWiki))
export const deploy = parallel(deployGhPages, deployWiki, deployIaas)

export const clean = () => src(['gh-pages', 'wiki', '_book']).pipe(gclean())

const errorGitbook = () => console.log('Para desplegar en gitbook sólo hace falta hacer push')

export const generateGitbook = errorGitbook
export const deployGitbook = errorGitbook

export default build
