<template>
    <div class="g-city">
        <v-touch v-on:swipeleft="leftChangeImg" v-on:swiperight="leftChangeImg">
            <city-header></city-header>
            <city-search :cities="cities"></city-search>
            <address-list :cities='cities' :hotCities='hotCities' :letter="letter"></address-list>
            <letter :cities="cities" @changeLetter="handleLetterChange"></letter>
        </v-touch>
    </div>
</template>

<script type="text/ecmascript-6">
import CityHeader from './components/Cityheader'
import CitySearch from './components/CitySearch'
import AddressList from './components/AddressList'
import Letter from './components/Letter'
import Api from '../../api/api'
import axios from 'axios'
export default {
    data() {
        return {
            cities: {},
            hotCities: [],
            letter:''
        }
    },
    components: {
        CityHeader,
        CitySearch,
        AddressList,
        Letter
    },
    methods:{
        getCityinfo(){
            let that = this
            // Api.api+'city.json'
            axios.get('https://www.wuliaojj.top/wherego/dist/static/mock/city.json').then(function(res){
                that.cities = res.data.data.cities
                that.hotCities = res.data.data.hotCities
            })  
        },
        handleLetterChange(letter){
            // alert(letter)
            this.letter=letter
        },
        leftChangeImg(event){
            console.log(event);
            if(event.deltaX>=200){
                this.$router.go(-1)
            }
            
        }
    },
    created(){
        this.getCityinfo()
    },
    // mounted(){
    //     console.log(this.$store.state.city);
    // }
    
}
</script>

<style lang="stylus">
@import '../../assets/css/global';
</style>
