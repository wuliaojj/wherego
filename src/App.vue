<template>
  <div id="app" >
    <transition name='transitionName' keep-alive>
    <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    onSwipeLeft () {
      this.$router.go(-1)
    }
  },
  beforeRouteUpdate(to,from,next){
        let isBack = this.$router.isBack;
        if( isBack ){
            this.transitionName = 'slide-right'
        }else{
            this.transitionName = 'slide-left'
        }
        this.$router.isBack = false;
    }
}
</script>

<style lang="stylus">
@import './assets/css/global';

</style>
