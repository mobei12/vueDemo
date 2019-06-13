<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <h2>内容链接</h2>
        <ul>
            <li v-for="routerItem in routerList" :title="routerItem.title">
                <router-link :to="routerItem.link">
                    {{routerItem.link}}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'vue动画测试',
        data() {
            return {
                msg: 'vue动画测试',
                routerList: [{title: '圆圈加载', link: 'CircleLoader'},{title: '圆点加载', link: 'pointLoader'},{title: 'lottie动画', link: 'lottieDemo'},]
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
