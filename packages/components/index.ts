import button from './button'
import type { App, Plugin } from 'vue'

const component = [button]

const NVUI = {
  install: (app: App) => {
    component.forEach((item) => {
      app.component(item.name, item)
    })
  }
}

export { button }

export default NVUI
