# 生命周期

## 对比
  `vue2.x` ----------------- `vue3.x`
  > beforecreate() **创建实例** ---> setup()  **开始创建组件之前，创建的是data和method** <br />
  > create() **初始化data和method，尚未挂载实例**---> setup() <br />
  > beforeMount() ---> onBeforeMount() **组件被挂载之前被调用**<br />
  > mounted()  ---> onMounted() **组件挂载完成后执行**<br />
  > beforeUpdate() ---> onBeforeUpdate() **组件更新完成前执行** <br />
  > updated() ---> onUpdated() **组件更新完成后执行** <br />
  > beforeDestroy() ---> onBeforeUnmount() **组件实例被卸载之前调用** <br />
  > destroyed() ---> onUnmounted() **组件实例被卸载之后调用** <br />

## 基本使用
  ### `beforeUpdate` 和 `create`
  ::: tip
  在 `beforeCreate()`钩子函数中无法调用 `data` 和 `method` 中的数据或方法，此时数据和事件侦听还未配置。
  :::
  ``` vue 
    <script>
      export default {
        data(){
          return{
            message:'Welcome'
          }
        },
        beforeCreate(){
          console.log(this.message) // undefined
          this.doSomething() // doSometiong is not a function
        },
        created(){
          // 最早能调用data 和 methods 的钩子函数
          console.log(this.message) // Welcome
          this.doSomething() // change message
        },
        methods:{
          doSomething(){
            this.message = 'change message'
            console.log(this.message)
          }
        }
      }
    </script>
  ```
  ### `beforeMount` 和 `mounted`

  ::: tip
    `beforeMount` 钩子函数中无法操作dom节点，此时实例还未挂载
  :::
  ``` vue
    <template>
      <h1 id="message">{{message}}</h1>
    </template>
    <script>
      export default {
        data(){
          return{
            message : 'Welcome'
          }
        },
         beforeMount(){
          var doc = document.getElementById('message'); // null
          },
          mounted(){
            // 此时
            var doc = document.getElementById('message');
            this.$nextTick(() => {
              // 仅在整个视图都被渲染之后才会运行的代码
            })
          },
      }
    </script>
  ```



  这是一个基础的代码片段，接下来在这个代码基础上进行生命钩子的使用
  ``` vue 
    <template>
      <h1 id="message">{{message}}</h1>
    </template>
    <script>
      export default {
        data(){
          return {
            message: 'Welcome'
          }
        },
        beforeCreate(){
          // 此时数据和事件侦听还未配置 所以无法调用
          console.log(this.message) // undefined
          this.doSomething() // doSometiong is not a function
        },
        created(){
          // 最早能调用data 和 methods 的钩子函数
          console.log(this.message) // Welcome
          this.doSomething() // change message
        },
        beforeMount(){
          var doc = document.getElementById('message');
          console.log(doc) // null
        },
        mounted(){
          var doc = document.getElementById('message');
          console.log(doc) 
        },
        methods:{
          doSomething(){
            this.message = 'change message'
            console.log(this.message)
          }
        }
      }
    </script>

