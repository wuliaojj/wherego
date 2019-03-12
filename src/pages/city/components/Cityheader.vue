<template>
    <div class="g-cityheader">
        城市选择
        <transition name="fade">
            <router-link to="/">
            <span class="iconfont cityback">&#xe624;</span>
            </router-link>
        </transition>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    data() {
    return {

    }
    },
    components: {

    }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
