import Icon from './src/icon.vue'
import type { App } from 'vue'
import './icons/iconfont.js'
Icon.install = function (app: App) {
  app.component(Icon.name, Icon)
}

export default Icon

export * from './src/icon'
