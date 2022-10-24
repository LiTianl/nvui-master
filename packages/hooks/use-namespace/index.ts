import {unref} from 'vue'

export const defaultNamespace = 'nv' //默认命名前缀

const statePrefix = 'is-' // 默认状态前缀

// 类名生成
const _be = (
  namespace:string, // 前缀名
  block:string, // 块名
  blockSuffix:string, //块后缀
  modifier:string // 修饰
) =>{
  let cls = `${namespace}-${block}`
  if (blockSuffix) {
    cls += `-${blockSuffix}`
  }
  if (modifier) {
    cls += `--${modifier}`
  }
  return cls
}


export const useNamespace = (block:string) =>{
  const namespace = defaultNamespace
  
  const b = (blockSuffix = '') => _be(unref(namespace), block, blockSuffix , '')

  const m = (modifier?:string) => modifier? _be(unref(namespace), block,'',modifier) : ''
  
  const is: {
    (name: string, state: boolean | undefined): string
    (name: string): string
  } = (name: string, ...args: [boolean | undefined] | []) => {
    const state = args.length >= 1 ? args[0]! : true
    return name && state ? `${statePrefix}${name}` : ''
  }

  return {
    namespace,
    b,
    m,
    is
  }
}

export type UseNamespaceReturn = ReturnType<typeof useNamespace>


