# 组件基础
  组件（component）是vue.js的重要功能之一，主要的作用是封装代码，提高代码可复用性，把代码进行模块化，降低维护成本。
  
## 定义一个组件
在vue3中使用`<script setup>`组合式API，props应该使用`defineProps()`来声明。并且无需使用import导入。
```vue
// 子组件
<script setup>
// defineProps 无需手动导入
const props = defineProps({
  name:{
    type:String,
    default:''
  }
});
</script>
```
```vue 
//父组件
<script setup>
  import {ref} from 'vue'
  import child from './child.vue'
  const name = ref('xiaoming')
</script>
<template>
  <child :name="name"></child>
</template>
```
## 组件注册
  组件注册分局部注册和全局注册，上面的方式就是局部注册，如果组件的使用频率很高，不希望一直频繁的导入，这时候应该使用全局注册组件。

  可以通过vue实例的app.component()方法来进行全局注册。通常在main.js下进行。
  ```js
  import {createApp} from 'vue'
  const app = createApp({})
  app.component(
    //组件名称
    'myComponent',
    // 组件实现
    {
    }
  )
  ```
  如果使用的是单文件组件。

  ```js 
  import myComponent from '/App.vue'
  app.component('myComponent',myComponent)
  ```
  更多信息应该参考[官方文档](https://cn.vuejs.org/guide/components/registration.html#global-registration)
## 组件之间的通讯




