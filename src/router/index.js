import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PointLoader from '@/components/PointLoader'
import CircleLoader from '@/components/CircleLoader'
import lottieDemo from '@/components/lottieDemo'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/pointLoader',
            name: 'pointLoader',
            component: PointLoader
        },
        {
            path: '/CircleLoader',
            name: 'CircleLoader',
            component: CircleLoader
        },
        {
            path: '/lottieDemo',
            name: 'lottieDemo',
            component: lottieDemo
        }
    ]
})
