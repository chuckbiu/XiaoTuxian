// import './assets/main.css'
import './styles/common.scss'
// 1 每个 Vue 应用都是通过 createApp 函数创建一个新的 应用实例
import { createApp } from 'vue'
// 2 我们传入 createApp 的对象实际上是一个组件，每个应用都需要一个“根组件”，其他组件将作为其子组件
//  从一个单文件组件中导入根组件
import App from './App.vue'
// 3 挂载应用
// 应用实例必须在调用了 .mount() 方法后才会渲染出来。
// import './styles/element/index.scss'
// 1. 导入createpinia
import { createPinia } from "pinia"
import { router }  from './router'
import { lazyPlugin } from "@/directives/index"
// 引入全局组件插件
import { componentPlugin } from '@/utils/plugin'
// 2.执行方法得到实例
const pinia = createPinia()

// 该方法接收一个“容器”参数，可以是一个实际的 DOM 元素或是一个 CSS 选择器字符串：
const app = createApp(App)
app.use(pinia).use(router).use(lazyPlugin).use(componentPlugin).mount('#app')
// 使 v-focus 在所有组件中都可用
// 添加自定义指令

