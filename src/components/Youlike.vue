<template>
    <div class="g-commonwrap f-mt s-bgcolor">
        <div class="m-nartitle">
            <span>
                <img src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="" class="hotimg">
                <span class="title">猜你喜欢</span>
            </span>
            <!-- <div class="more">
                全部订单>
            </div> -->
        </div>
        <div class="m-list border-top" v-for="(item,index) in itemList">
            <img :src="item.imgUrl" alt="" class="listimg">
            <div class="box">
                <div class="title">{{item.title}}</div>
                <div class="star">
                    {{item.start}}
                    <span>{{item.comment_num}}</span>
                </div>
                <div class="wrap">
                    <div class="price">￥{{item.price}}</div>
                    <span class="address">{{item.address}}</span>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    props:{
        itemList:Array
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
