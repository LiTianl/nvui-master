import icon from './src/icon.vue'
import { withInstall } from '@nv/utils'
import './icons/iconfont.js'

export const NvIcon = withInstall(icon)
export default NvIcon

export * from './src/icon'
