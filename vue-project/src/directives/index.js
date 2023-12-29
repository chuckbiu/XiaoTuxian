// 使用vueUse
import { useIntersectionObserver } from '@vueuse/core'

export const lazyPlugin = {
    install(app) {
        app.directive('img-lazy',(el, binding) => {
            /* ... */
            const { stop } = useIntersectionObserver(
                el,
                ([{ isIntersecting }], observerElement) =>{
                    // console.log(el, binding)
                    if (isIntersecting){
                        el.src = binding.value
                        // 性能优化
                        // 阻止多次监听，造成内存浪费
                        stop()
                    }
                }
            )   
            // console.log(el, binding)
        })
    }
}