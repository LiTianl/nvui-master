import NVUI from '../../../packages/components'
import '../../../packages/components/style/index.scss'
import Theme from 'vitepress/dist/client/theme-default/index'
import './code.scss'
import demo from '../../components/demo.vue'

export default {
  ...Theme,
  enhanceApp({app}){
    app.use(NVUI)
    app.component('demo', demo)
  }
}