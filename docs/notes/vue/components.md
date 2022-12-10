# 组件基础
  组件（component）是vue.js的重要功能之一，主要的作用是封装代码，提高代码可复用性，把代码进行模块化，降低维护成本。
  
## 定义一个组件
在vue3中使用`<script setup>`组合式API，props应该使用`defineProps()`来声明。
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
## 组件之间的通讯




