<template>
  <div id="app">
    <transition :name="transitionName">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive == true"/>
      </keep-alive>
    </transition>
    <transition :name="transitionName" mode="out-in">
      <router-view v-if="$route.meta.keepAlive != true"/>
    </transition>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        transitionName: ''
      }
    },
    watch: {
      '$route': function (to, from) {
        if (to.name == 'search' && from.name == 'cityinfo') {
          this.transitionName = 'slide'
        }
        if (to.name == 'cityinfo' && from.name == 'search') {
          this.transitionName = 'xslide'
        }
      }
    }
  }
</script>
<style lang="less">
@import "styles/common";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
