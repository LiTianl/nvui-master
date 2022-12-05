# 响应式

## 概念

::: tip
  * `vue2.x` 中使用 `Object.defineProperty()`
  * `vue3.x` 中使用 `Object.Proxy()`
:::
  * 数据更新时视图会自动更新
  * 追踪数据变化，在读写数据时进行数据劫持

## 对比
  ### vue2.x
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

  ### vue3.x
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
## 响应式数据
  ::: tip
  #### 什么是响应式数据？
  响应式数据就是当数据发生改变时，视图会进行相应的更新。
  :::

  在 `在vue2` 中由于vue会在初始化实例的时候对property执行 getter/setter 转化，所以 property 必须在 `data` 对象上存在才能让 Vue 将它转换为响应式的。简单的来说参数必须放在`data`对象上数据才会转换成响应式。
  ```vue 
  <script>
    export default {
      data(){
        return{
          a:1,
          object:{},
          items:[
            {id:1, name:'xiaoming'},
            {id:2 name:'xiaojun'}
          ]
        }
      }
    }
  </script>
  ```
  对于已经创建的实例，vue2不允许动态添加根级别的响应式property。但是vue提供了 `this.$set()` 方法向嵌套对象添加响应式 property。
  ```js
    this.$set(this.object,'b',2)
  ``` 
  数组也同样如此, 需要通过vue提供的 `this.$set()` 或 数组自带的 `splice` 方法进行响应式操作。
  ::: tip 
  `vue` 通过原型拦截的方式重写了数组的七个方法。`push`、`pop`、`shift`、`unshift`、`splice`、`sort`、`reverse`,以达到变更通知给其订阅者实现数据响应。
  :::
  ``` js 
    //向数组最后添加对象,一下两者效果一样
    //this.$set(要更改的数组，数组下标，要更改的值)
    this.$set(this.items,this.items.length,{id:3,name:'xiaoli'}) 
    //splice(更改数组的起始下标，更改的数量，更改的值)
    this.items.splice(this.items.length,1,{id:3,name:'xiaoli'})
  ```

## 总结
  ### vue2.x
  #### 缺点
  * 新增，删除属性，无法更新视图。需要使用vue提供的 `this.$set` 和 `this.$delete` 方法添加和删除。
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
  

