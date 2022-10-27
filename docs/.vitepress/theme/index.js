import NVUI from '../../../packages/components'
import '../../../packages/components/style/index.scss'
import Theme from 'vitepress/theme'
import './index.css'
import 'vitepress-theme-demoblock/theme/styles/index.css'
import { registerComponents } from './register-components'

export default {
  ...Theme,
  enhanceApp({app}){
    app.use(NVUI)
    registerComponents(app)
  }
}