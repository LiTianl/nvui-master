import button from './src/button.vue'
import { withInstall } from '@nv/utils'

// 声明为插件，可以引入组件
// button.install = function (app: App): void {
//   app.component(button.name, button)
// }

// export default button

export const NvButton = withInstall(button)
export default NvButton
export * from './src/button'
