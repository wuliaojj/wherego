<template>
    <div class="g-list" ref="wrapper" :style="{height:clientHeight+'px'}">
        <div>
            <div class="m-area">
            <!-- border-topbottom 1像素边框-->
            <div class="title border-topbottom">当前城市</div>
            <div class="listbtn">
                <div class="btnwrap">
                <div class="u-listbtn">{{currentCity}}</div>
                </div>
            </div>
            </div>
                <div class="m-area">
                <!-- border-topbottom 1像素边框-->
                <div class="title border-topbottom">当前城市</div>
                <div class="listbtn">
                    <div class="btnwrap" v-for="(item,index) in hotCities" :key="index">
                    <div class="u-listbtn" @click="handleCityClick(item.name)">{{item.name}}</div>
                    </div>
                </div>
            </div>
            <div class="m-sortlist" v-for="(item,key) in cities" :key="key" :ref="key">
                <div class="title border-topbottom">{{key}}</div>
                <div class="listbox" v-for="innerItem of item" :key="innerItem.id">
                    <div class="u-sortlist border-bottom"  @click="handleCityClick(innerItem.name)">{{innerItem.name}}</div>
                <!-- 最好加个判断，最后不加 border-bottom <div class="item ">阿拉尔</div> -->
                </div>
            </div>
        </div>
        
    </div>
</template>

<script type="text/ecmascript-6">
import Bscroll from 'better-scroll'
export default {
    props:{
        cities:Object,
        hotCities:Array,
        letter:String,
    },
    data() {
    return {
        clientHeight:'',
        currentCity:''
    }
    },
    components: {

    },
    mounted(){
        this.clientHeight=document.documentElement.clientHeight-80
        console.log(this.clientHeight);
        
        const options = {
        // 处理在better-scroll在安卓手机上不能点击的问题
        // 更多配置见
        // https://ustbhuangyi.github.io/better-scroll/doc/zh-hans/options.html#click
        click: true,
        tap: true
        }
        // this.$nextTick(()=>{this.scroll = new Bscroll(this.$refs.wrapper, {})})
        this.scroll = new Bscroll(this.$refs.wrapper, options)
        this.currentCity = this.$store.state.city
        // console.log(this.currentCity);
        
    },
    watch: {
        letter () {
        if (this.letter) {
            const element = this.$refs[this.letter][0]
            console.log(element) //这是个数组
            this.scroll.scrollToElement(element)
        }
        }
    },
    methods:{
        handleCityClick(address){
            this.currentCity = address
            this.$store.commit('toChangeCity', address)
            this.$router.push('/')
        }
    }
}
</script>

<style>
</style>
