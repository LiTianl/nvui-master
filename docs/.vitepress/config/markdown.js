import { mdPlugin } from './plugins'
const markdown = {
  config: (md) => mdPlugin(md)
}
export default markdown
