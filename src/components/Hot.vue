<template>
<div class="s-bgcolor f-mt">
    <div class="g-commonwrap">
        <div class="m-nartitle">
            <span>
                <img src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png" alt="" class="hotimg">
                <span class="title">本周热门榜单</span>
            </span>
            <div class="more">
                全部订单>
            </div>
        </div>
        <ul class="m-slide">
            <router-link tag="li" :to="'/detail/' + index" class="hotitem" v-for="(item, index) in hotList" :key="index" >
                <span class="top" v-if="index >= 0 && index < 3">
                    <img :src="topIcon[index]" class="topimg" />
                </span>
                <img :src="item.imgUrl" class="hotimg">
                <p class="title">{{item.title}}</p>
                <p class="price">
                <span class="orange">{{item.price}}</span>起
                </p>
            </router-link>
        </ul>
    </div>
</div>
    
</template>

<script type="text/ecmascript-6">
export default {
    props:{
        hotList:Array,
        topIcon:Array
    },
    data() {
    return {

    }
    },
    components: {

    }
}
</script>

<style>
</style>
