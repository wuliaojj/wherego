<template>
    <div class="g-week">
        <div class="title">周末去哪里</div>
        <div class="box border-bottom" v-for="(item,index) in weekendList">
            <img :src="item.imgUrl" alt="" class="weekimg">
            <div class="wrap">
                <div class="wraptitle">{{item.title}}</div>
                <div class="desc">{{item.desc}}</div>
            </div>
            
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    props:{
        weekendList:Array
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
