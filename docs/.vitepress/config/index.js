import nav from './nav'
import sidebar from './sidebar'
// import lang from './lang'
import markdown from './markdown'
import head from './head'

const config = {
  title: 'Vue Nvui',
  description: "Vue Nvui 组件库",
  dest:'./dist',
  head,
  lang:'zh-CN',
  markdown,
  themeConfig: {
    search: true,
    searchMaxSuggestions: 10,
    smoothScroll: true,
    nav,
    sidebar
  }
}

export default config