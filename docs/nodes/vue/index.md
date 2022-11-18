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
    let data  = {}
    Object.defineProperty(data,'',{
      get(){

      },
      set(){

      }
    })
  ```


  ## vue3.x

  :::tip
  * 通过 `Proxy` 进行代理，拦截对象中的任意属性变化操作（13种），包括属性值的读写，添加和删除等。
  * 通过 `Reflect`，动态对被代理的对象的相应属性进行特定的操作
  :::
  ``` js
    let data = {name:'zhang',age:0}

    const p = new Proxy(data,{
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
  * 直接通过下标修改数组，也无法更新视图
  #### 优点
  

