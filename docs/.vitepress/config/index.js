import nav from './nav'
import sidebar from './sidebar'
import lang from './lang'
import markdown from './markdown'
import head from './head'

const config = {
  title: 'Vue Nvui',
  description: "Vue Nvui 组件库",
  dest:'./dist',
  head,
  markdown,
  themeConfig: {
    smoothscroll: true,
    nav,
    sidebar,
    demoblock:lang
  }
}

export default config