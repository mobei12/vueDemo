<template>
    <div class="donut"></div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {}
        },
        methods: {},
        created() {
        },
        updated() {
        }
    }
</script>

<style scoped>
    @keyframes donut-spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    .donut {
        display: inline-block;
        border: 4px solid rgba(0, 0, 0, 0.1);
        border-top-color: #7983ff;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        animation: donut-spin 1.2s linear infinite;
        margin: 0 auto
    }
</style>

