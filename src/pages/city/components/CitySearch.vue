<template>
    <div>
        <div class="m-search">
            <input v-model="keyword" class="sinp" type="text" placeholder="输入城市名或拼音">
        </div>
        <div class="content" v-show="keyword" ref="search">
            <div class="m-sortlist">
                <div class="listbox" v-for="innerItem of list" :key="innerItem.id">
                    <div class="u-sortlist border-bottom"  @click="handleCityClick(innerItem.name)">{{innerItem.name}}</div>
                </div>
                <div class="nomessage" v-show="hasNoData">
                    没用匹配到对应数据
                </div>
            </div>
        </div>
    </div>
    
</template>

<script type="text/ecmascript-6">
import Bscroll from 'better-scroll'
export default {
    props: {
        cities: Object
    },
    data() {
    return {
        keyword: '',
        list: [],
        timer: null
    }
    },
    components: {

    },
    watch: {
        keyword () {
            // alert(1)
        if (this.timer) {
            clearTimeout(this.timer)
        }
        if (!this.keyword) {
            this.list = []
            return
        }
        this.timer = setTimeout(() => {
            const result = []
            for (let i in this.cities) {
                // console.log(this.cities);
                
            this.cities[i].forEach((value) => {
                if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
                    // console.log(value);
                    
                result.push(value)
                
                }
            })
            }
            this.list = result
            // console.log(this.list);
        }, 100)
        }
        // console.log(this.list);
        
    },
    computed: {
        hasNoData () {
        return !this.list.length
        }
    },
    mounted () {
        const options = {
        click: true,
        tap: true
        }
        this.scroll = new Bscroll(this.$refs.search, options)
    },
    methods:{
        handleCityClick(address){
            // this.currentCity = address
            this.$store.commit('toChangeCity', address)
            this.$router.push('/')
        }
    }
}
</script>

<style>
</style>
