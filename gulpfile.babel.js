import { series, parallel } from 'gulp'

export {default as contributors} from './scripts/contributors'
import generateGitbook from './scripts/generate-gitbook'
import generateWiki from './scripts/generate-wiki'
import deployGitbook from './scripts/deploy-gitbook'
import deployWiki from './scripts/deploy-wiki'
import serve from './scripts/serve'
import install from './scripts/gitbook-install'

export { generateGitbook, generateWiki, deployGitbook, deployWiki, serve }

export const build = series(install, parallel(generateGitbook, generateWiki))
export const deploy = parallel(deployGitbook, deployWiki)

export default build
