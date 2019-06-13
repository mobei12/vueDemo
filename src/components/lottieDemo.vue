<template>
    <lottie :options="defaultOptions" :height="200" :width="200" v-on:animCreated="handleAnimation" />
</template>

<script>
    // 第一步：script中引入资源
    import * as animationData from "../assets/data1.json";
    export default {
        name: "lottieDemo",
        // 第三步：data里面添加相应属性
        data(){
            return {
                defaultOptions: { animationData: animationData },
                animationSpeed: 1,
                anim: {}
            }
        },
        //第四步：定义方法
        methods: {
            handleAnimation: function(anim) {
                this.anim = anim;
                console.log(anim); //这里可以看到 lottie 对象的全部属性
            },
        }
    };
</script>

<style scoped>
</style>
