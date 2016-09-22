import { parallel } from 'gulp'

export {default as contributors} from './scripts/contributors.js'
import generateGitbook from './scripts/generate-gitbook.js'
import generateWiki from './scripts/generate-wiki.js'
import deployGitbook from './scripts/deploy-gitbook.js'
import deployWiki from './scripts/deploy-wiki.js'

export { generateGitbook, generateWiki, deployGitbook, deployWiki }

export const build = parallel(generateGitbook, generateWiki)
export const deploy = parallel(deployGitbook, deployWiki)

export default build
