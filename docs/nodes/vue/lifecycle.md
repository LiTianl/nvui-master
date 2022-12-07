# 生命周期

## 对比
  `vue2.x` <-----------------> `vue3.x`
  > beforecreate() **创建实例** ---> setup()  **开始创建组件之前，创建的是data和method** <br />
  > created() **初始化data和method，尚未挂载实例**---> setup() <br />
  > beforeMount() ---> onBeforeMount() **组件被挂载之前被调用**<br />
  > mounted()  ---> onMounted() **组件挂载完成后执行**<br />
  > beforeUpdate() ---> onBeforeUpdate() **组件更新完成前执行** <br />
  > updated() ---> onUpdated() **组件更新完成后执行** <br />
  > beforeDestroy() ---> onBeforeUnmount() **组件实例被卸载之前调用** <br />
  > destroyed() ---> onUnmounted() **组件实例被卸载之后调用** <br />
  > errorCaptured() ---> onErrorCaptured() **捕获一个来自后代组件的错误时被调用**

  `beforecreate` 和 `created` 钩子函数在 `vue3.x` 中被 `setup`替代。

  基本上，每个主要的vue生命周期事件都会对应2个钩子函数，分别在开始和结束时调用。

## Options API中使用生命周期钩子
使用Options API（选项式）时，生命周期钩子暴露在Vue实例的选项中。不需要我们进行导入任何东西。只需要直接调用对应的生命周期函数即可。`vue2.x` 就是这么做的。

假设我们想访问 `mounted` 和 `updated` 生命周期钩子：
``` vue
<script>
  export default {
    mounted() {
      // ...
    },
    updated() {
      // ...
    }
  }
</script>
```
在 `vue3.x` 和 `vue2.7` 中有了新的写法，Composition API（组合式）

## Composition API中使用生命周期钩子
在 Composition API中，我们需要将对应的钩子函数进行导入才能使用，这样可以使项目尽量变得轻量化。

代码可能如下：
``` vue
<script>
  import { onMounted } from 'vue'
  export default {
    setup(){
      onMounted(()=>{
        // ...
      })
    }
  }
</script>
```

组合式API 通常会与 `<script setup>` 搭配使用，这个 `setup` attribute是一个标识，告诉vue需要在编译时进行一些处理，
这让我们可以更简洁的写组合式API。你也可以在官方文档中了解更多关于 [组合式API](https://cn.vuejs.org/guide/extras/composition-api-faq.html)

下面使用了 `<script setsup>` 改造后和上面的模板完全一样：

``` vue
<script setsup>
  import { onMounted } from 'vue'

  onMounted(()=>{
    // ...
  })
</script>
```


## 深入了解每一个生命周期钩子

接下来我们将按顺序了解如何使用每一个生命周期钩子，以及它们在Options API(vue2.x)和Composition API(vue3.x)中的不同。
在官方文档中有更多详细信息[vue3.x](https://cn.vuejs.org/api/composition-api-lifecycle.html) / [vue2.x](https://v2.cn.vuejs.org/v2/api/#%E9%80%89%E9%A1%B9-%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E9%92%A9%E5%AD%90)。

## beforeCreate() 和 created()

::: tip
  在 `beforeCreate()`钩子函数中，此时数据和事件侦听还未配置，无法调用 `data` 和 `method`。
:::

> Options API
``` vue
<script>
  export default {
    data(){
      return {
        value:'Welcome'
      }
    },
    beforeCreate(){
      console.log(this.value); // null
      this.doSomething() // null
    },
    created(){
      console.log(this.value); // Welcome
      this.doSomething() // Welcome
    },
    methods:{
      doSomething(){
        console.log(this.value)
      }
    }
  }
</script>
```
`beforeCreate`对那些不需要分配数据的逻辑和API调用来说十分有用。

当需要处理响应式数据进行读写时，应该使用`created`,例如 如果你需要完成一个API的调用并且将它所返回的数据进行存储，那么你应该将它写在这里。

这将比在mounted中处理更好，因为它在Vue的初始化进程中更早触发，并且你也能读写所有的数据。

### 在Composition API 中 `beforeCreate` 和 `created` 钩子函数被 `setup` 替代。

将刚刚created钩子函数 重构如下：

```vue
<script setup>
  import { ref } from 'vue' // 在vue3中 需要给对象添加ref来实现响应式

  const val = ref('Welcome')
  console.log(val.value)

  const doSomething = () =>{
    console.log(val.value)      
  }
</script>
```

## beforeMount() 和 mounted()
::: tip 
  * `beforeMount` 钩子函数中无法操作dom节点，此时实例还未挂载。
  * `mounted` 不会保证所有的子组件也都被挂载完成。如果你希望等到整个视图都渲染完毕再执行某些操作，可以在 `mounted` 内部使用 `vm.$nextTick`
:::

`beforeMount` 在组件DOM实际渲染和挂载前触发，此时根元素还不存在。如果需要进行dom操作，应该使用`mounted`钩子函数。

在Options API中，可以通过 `this.$el` 访问。
而在Composition API中，你必需通过 `ref` 来指定根元素。

> Options API
``` vue
<script>
  export default {
    beforeMount(){
      console.log(this.$el) // null
    },
    mounted(){
      this.$nextTick(()=>{
        console.log(this.$el)
      })
    }
  }
</script>
```

> Composition API
``` vue
<script setup>
  import { ref,onBeforeMount,onMounted} from 'vue'
  var root = ref()
  onBeforeMount(()=>{
    console.log(root.value) // null
  })
  onMounted(()=>{ 
    console.log(root.value)
  })
</script>
<template>
  <div ref='root'>
    Hello World
  </div>
</template>
```

## beforeUpdate() 和 updated()
`beforeUpdate`在数据发生改变后，DOM 被更新之前被调用，手动修改DOM的好地方。可以通过追踪对应的操作来实现一个“撤销”的功能。

`update` 组件因为响应式状态变更而更新其 DOM 树之后调用。
::: tip
  * 在`vue2.x`中 `updated` 不会保证所有的子组件也被重新渲染完毕，如果你希望等到整个视图都重新渲染，可以在`updated`里使用 `vm.$nextTick`。
  * 在`vue3.x`中父组件的更新钩子将在其子组件的更新钩子之后调用。
:::

> Options API
``` vue 
<template>
  <div id="app">
    <h1>{{message}}</h1>
    <button @click="doSomething">Say hello.</button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        message: 'Welcome to Vue!'
      };
    },
    beforeUpdate(){
      console.log(this.$el);
    },
    updated(){
      console.log(this.$el);
    },
    methods: {
      doSomething() {
        this.message='hello word';
      }
    }
  };
</script>
```
>Composition API
``` vue 
<script setup>
  import {onBeforeUpdate,onUpdated,ref } from 'vue';
  const app = ref();
  const message = ref('Welcome to Vue!')
  
  onBeforeUpdate(()=>{
    console.log(app.value);
  })
  onUpdated(()=>{
    console.log(app.value);
  })
  
  const doSomething = () => {
    message.value = 'hello word'
  }
</script>
<template>
  <div ref="app">
    <h1>{{message}}</h1>
    <button @click="doSomething">Say hello.</button>
  </div>
</template>
```
::: warning
  vue官方警告不要在`updated`钩子函数中更改组件状态，这可能会导致无限的更新循环！
:::

## beforeDestroy() 和 destroyed() 
`beforeDestroy` 组件实例销毁前调用，当这个钩子被调用时，组件实例依然还保有全部的功能。
`destroyed` 组件实例销毁后调用，可以用于清理一些副作用，例如 计时器，dom监听等。

> Options API
``` vue
<script>
  export default {
    data(){
      return{
        value:'default',
      }
    },
    beforeDestroy(){
      // ...
    },
    destroyed(){
      // ...
    }
  }
</script>
```
> Composition API
``` vue 
<script setup>
  import {onBeforeUnmount,onUnmounted} from 'vue'
  let intervalId
  onMounted(() => {
    intervalId = setInterval(() => {
      // ...
    })
  })
  onBeforeUnmount(()=>{
    // ...
  })
  onUnmounted(() => clearInterval(intervalId))
</script>
```
## errorCaptured() (2.5.0+)
`errorCaptured` 在捕获了后代组件传递的错误时调用。这个钩子带有三个实参：错误对象、触发该错误的组件实例，以及一个说明错误来源类型的信息字符串。
可以通过返回 false 来阻止错误继续向上传递。
默认情况下，所有的错误都会被发送到应用级的 `app.config.errorHandler`
> Options API
``` vue 
<script>
  export default {
    data(){
      return{
        // ...
      }
    },
    // error 错误对象
    // comp 触发该错误的组件实例
    // info 说明错误来源类型的信息字符串。
    errorCaptured(error,comp,info){
      // ...
      return false;//阻止错误向上传递
    }
  }
</script>
``` 
> Composition API
``` vue 
<script setup>
  import {onErrorCaptured} from 'vue'
  / error 错误对象
  // comp 触发该错误的组件实例
  // info 说明错误来源类型的信息字符串。
  onErrorCaptured((error,comp,info)=>{
    // ...
    return false;//阻止错误向上传递
  })
</script>
```



