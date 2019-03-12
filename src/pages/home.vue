<template>
    <div class="g-home">
        <v-header></v-header>
        <swiper :swiperList='swiperList'></swiper>
        <iconlist :iconList='iconList'></iconlist>
        <sale></sale>
        <hot :hotList='hotList' :topIcon='topIcon'></hot>
        <youlike :itemList='itemList'></youlike>
        <weekgo :weekendList='weekendList'></weekgo>
        <v-footer></v-footer>
    </div>
</template>

<script type="text/ecmascript-6">
import Api from '../api/api'
import axios from 'axios'
import Header from '../components/Header'
import Swiper from '../components/Swiper'
import Iconlist from '../components/Iconlist'
import Sale from '../components/Sale'
import Hot from '../components/Hot'
import Youlike from '../components/Youlike'
import Weekgo from '../components/Weekgo'
import Footer from '../components/Footer'
export default {
    data() {
    return {
        info:'',
        swiperList: [],     //轮播数据
        iconList: [],       //图标菜单信息       
        hotList: [],        //热门景点信息
        topIcon: [],        //前三名信息
        itemList: [],       //景点列表
        weekendList: []     //周末去哪里列表
    }
    },
    components: {
        'v-header':Header,
        Swiper,
        Iconlist,
        Sale,
        Hot,
        Youlike,
        Weekgo,
        'v-footer':Footer
    },
    methods:{
        getInfo(){
            let that=this
            // Api.api+
            axios.get('/static/mock/index.json').then(function(res){
                // console.log(res);
                if(res.data.data && res.data.ret){
                    that.swiperList = res.data.data.swiperList
                    that.iconList = res.data.data.iconList
                    that.hotList = res.data.data.hotList
                    that.topIcon = res.data.data.topIcon
                    that.itemList = res.data.data.itemList
                    that.weekendList = res.data.data.weekendList
                }
            })
        }
    },
    mounted () {
        this.getInfo()
        // console.log(this.swiperList);
        
    }
}
</script>

<style lang="stylus">

</style>
