import button from './button'
import icon from './icon'
import type { App, Plugin } from 'vue'

const component = [button, icon]

const NVUI = {
  install: (app: App) => {
    component.forEach((item) => {
      app.component(item.name, item)
    })
  }
}

export { button, icon }

export default NVUI
