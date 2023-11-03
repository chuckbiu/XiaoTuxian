import './assets/main.css'
// 1 每个 Vue 应用都是通过 createApp 函数创建一个新的 应用实例
import { createApp } from 'vue'
// 2 我们传入 createApp 的对象实际上是一个组件，每个应用都需要一个“根组件”，其他组件将作为其子组件
//  从一个单文件组件中导入根组件
import App from './App.vue'
// 3 挂载应用
// 应用实例必须在调用了 .mount() 方法后才会渲染出来。
// 1. 导入createpinia
import { createPinia } from "pinia"
// 2.执行方法得到实例
const pinia = createPinia()

// 该方法接收一个“容器”参数，可以是一个实际的 DOM 元素或是一个 CSS 选择器字符串：
createApp(App).use(pinia).mount('#app')
