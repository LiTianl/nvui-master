# 简介

::: info
  * 文档主要记录一些vue代码的使用方法，并对比。
  
:::

## 安装

创建项目，该命令可以通过选择配置创建vue2.x项目
``` sh
  vue create <your-project-name>
```

使用 `vite` 创建vue3项目，使用下列其中一个命令即可
``` sh
npm init vite-app <your-project-name>
#npm 6.x
  npm create vite@latest <your-project-name> --template vue
#npm 7.x
  npm create vite@latest <your-project-name> -- --template vue
#yarn
  yarn create vite <your-project-name> --template vue
```
然后按照提示安装依赖即可运行项目。

::: tip
 该过程中如有报错，应检查 node 版本是否为16.0或更高版本、脚手架版本 或 网络环境是否存在问题
:::

