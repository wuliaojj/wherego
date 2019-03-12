<template>
    <div class="g-header">
        <div class="headerleft">
            <span class="iconfont backicon">&#xe624;</span>
        </div>
        <div class="headersearch">
            <span class="iconfont icon">&#xe632;</span>
            <span class="title">输入城市/景点/游玩主题</span>
        </div>
        
        <router-link to="/city">
            <div class="headerright">
                <!-- <span class="city-name">{{city}}</span> -->
                <span class="cityname">{{this.$store.state.city}}</span>
                <span class="iconfont arrow-bottom">&#xe64a;</span>
            </div>
        </router-link>
        
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    data() {
    return {

    }
    },
    components: {

    },

}
</script>

<style>


</style>
