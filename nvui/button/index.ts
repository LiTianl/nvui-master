import type { App } from 'vue'
import button from './src/button.vue'

// 声明为插件，可以引入组件
button.install = function (app: App): void {
  app.component(button.name, button)
}

export default button

export * from './src/button'
