<template>
    <div>
        <div class="m-iconwrap">
            <van-swipe>
                <van-swipe-item v-for="(listpage,index) in list" :key="index">
                    <div class="g-wrap">
                        <div class="iconbox"  v-for="(item,index) in listpage">
                            <img :src="item.imgUrl" alt="" class="iconimg">
                            <div class="title">{{item.title}}</div>
                        </div>  
                    </div>
                </van-swipe-item>
            </van-swipe>
        </div>
        <div class="g-discount">
            <div class="discount border-right"><span class="iconfont">&#xe611;</span>定位失败</div>
            <div class="discount"><span class="iconfont">&#xe642;</span>5折泡温泉</div>
        </div>
    </div>
    
</template>

<script type="text/ecmascript-6">
export default {
    props:{
        iconList:Array
    },
    data() {
    return {

    }
    },
    components: {

    },
    computed:{
        list(){
            const res = []
            for (let i in this.iconList) {
                const k = Math.floor(i / 8)
                if (!res[k]) {
                res[k] = []     //生成两个数组
                console.log(res[k]);
                }
                res[k].push(this.iconList[i])       //将两个数组组成一个新数组
            }
            return res
        }
    },
    methods:{
        
    }
}
</script>

<style>
</style>
