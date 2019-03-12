<template>
    <div class="g-wrap">
        <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(item,index) in swiperList" :key="index">
                <img :src="item" alt="" class="swiperimg">
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    props: {
        swiperList: Array
    },
    data() {
    return {

    }
    },
    components: {

    },
    methods:{
    },
    mounted(){
    }
}
</script>

<style>
</style>
