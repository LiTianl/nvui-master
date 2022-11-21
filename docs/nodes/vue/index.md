# 响应式数据

## 概念

::: tip
  * `vue2.x` 中使用 `Object.defineProperty()`
  * `vue3.x` 中使用 `Object.Proxy()`
:::
  * 数据更新时视图会自动更新
  * 追踪数据变化，在读写数据时进行数据劫持



----------------------------------------------------------------

# 对比
  ## vue2.x
::: tip
  * 遍历和递归data，使用 `defineProperty` 对所有数据进行劫持
  * 当用户操作视图时，会触发 `setter`，先改变当前的数据，然后通知 `watcher` 从而重新渲染组件
 
:::
  ``` js
    let data  = {
      name:'xiaoli',
      age:18
    }
    let _data = {}
    Object.keys(data).forEach((key)=>{
      Object.defineProperty(_data, key,{
        enumerable:true,  //可枚举
        configurable:true, // 可配置
        get(){
          return data[key]
        },
        set(val){
          if(val === data[key]) return
          data[key] = val
        }
      })
    })
  ```

  ## vue3.x
  :::tip
  * 通过 `Proxy` 进行代理，拦截对象中的任意属性变化操作（13种），包括属性值的读写，添加和删除等。
  * 通过 `Reflect`，动态对被代理的对象的相应属性进行特定的操作
  :::

  ``` js
    let data = {name:'zhang',age:18}

    const _data = new Proxy(data,{
      // target 表示代理的目标对象
      get(target,propName){
        console.log(`读取了${propName}`)
        // return target[propName]
        return Reflect.get(target,propName) //反射
      },
      set(target,propName,value){
        //return target[propName] = value
        return Reflect.set(target,propName,value)
      },
      deleteProperty(target,propName){
        // return delete target[propName]
        return Reflect.deleteProperty(target,propName)
      }
    })
  ```
  

## 总结

  ### vue2.x
  #### 缺点
  * 新增，删除属性，无法更新视图。
  * 直接通过下标修改数组，也无法更新视图。
  * 对象过多会损耗效率
  #### 优点
  * 能够支持绝大多数浏览器版本（兼容ES5）

  ### vue3.x
  #### 缺点
  * 基于ES6的proxy语法，对低版本的浏览器不支持
  #### 优点
  * 速度快，只有get数据时才会添加响应式，不用初始化深层次递归。
  * 可以检测到代理对象的动态添加和删除。
  * 可以检测到数组下标和length属性的改变
  

