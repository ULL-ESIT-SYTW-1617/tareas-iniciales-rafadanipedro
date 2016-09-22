import { parallel } from 'gulp'

export {default as contributors} from './scripts/contributors'
import generateGitbook from './scripts/generate-gitbook'
import generateWiki from './scripts/generate-wiki'
import deployGitbook from './scripts/deploy-gitbook'
import deployWiki from './scripts/deploy-wiki'

export { generateGitbook, generateWiki, deployGitbook, deployWiki }

export const build = parallel(generateGitbook, generateWiki)
export const deploy = parallel(deployGitbook, deployWiki)

export default build
