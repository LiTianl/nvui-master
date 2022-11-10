import type { App } from 'vue'
import card from './src/card.vue'

// 声明为插件，可以引入组件
card.install = function (app: App): void {
  app.component(card.name, card)
}

export default card

export * from './src/card'
