import {src, dest, parallel, series} from 'gulp'

import 'babel-polyfill'

// Importar scripts
import scriptContributors from './scripts/contributors.js'
import scriptGenerateGitbook from './scripts/generate-gitbook.js'
import scriptGenerateWiki from './scripts/generate-wiki.js'
import scriptDeployGitbook from './scripts/deploy-gitbook.js'
import scriptDeployWiki from './scripts/deploy-wiki.js'

export const contributors = () => scriptContributors()
export const generateGitbook = () => scriptGenerateGitbook()
export const generateWiki = () => scriptGenerateWiki()
export const deployGitbook = () => scriptDeployGitbook()
export const deployWiki = () => scriptDeployWiki()

export const build = parallel(generateGitbook, generateWiki)
export const deploy = parallel(deployGitbook, deployWiki)

export default build
