<template>
  <div class="container">
    <header  class="flex-middle">
      <div id="input-box" class="flex-middle">
        <i class="iconfont icon-sousuo"></i><input type="text" placeholder="搜索城市或者查看关注城市" readonly @click="$router.push('search')">
      </div>
      <a href="#" class="menu" @click="isMenuShowFlag=true"><i class="iconfont icon-caidan"></i></a>
    </header>
    <city-info></city-info>
    <transition name="side">
      <div v-if="isMenuShowFlag" class="side-menu">
        <side-menu></side-menu>
      </div>
    </transition>
    <div class="shield" v-if="isMenuShowFlag" @click="isMenuShowFlag=false"></div>
  </div>
</template>
<script>
import CityInfo from '../components/city-info'
import SideMenu from '../components/menu'
export default {
  data () {
    return {
      isMenuShowFlag: false
    }
  },
  components: {
    CityInfo,
    SideMenu
  }
}
</script>
<style lang="less" scoped>
  .side-enter-active, .side-leave-active {
    transition: all .2s linear;
  }
  .side-enter, .side-leave-to {
    transform: translate(100%, 0);
  }
  .shield {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5);
    z-index: 99;
  }
  .container {
    width: 100%;
    height: 100%;
    background-color: #fff;
  }
  header {
    padding: 10px;
    background-color: #666;
  }
  #input-box {
    flex: 1;
    padding: 11px 8px;
    margin-right: 5px;
    background-color: #fff;
    border-radius: 5px;
    input {
      border: none;
      outline: none;
      width: 90%;
      margin-left: 5px;
    }
  }
  .menu {
    width: 40px;
    height: 40px;
    line-height: 40px;
    border-radius: 5px;
    background-color: #fff;
    font-size: 18px;
    text-align: center;
    i {
      font-size: 30px;
    }
  }
  .side-menu {
    z-index: 100;
    position: fixed;
    top: 0;
    left: 30%;
    right: 0;
    bottom: 0;
  }
</style>
