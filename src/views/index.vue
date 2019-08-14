<template>
  <div class="container">
    <header  class="flex-middle">
      <div id="input-box" class="flex-middle">
        <i class="iconfont icon-sousuo"></i><input type="text" placeholder="搜索城市或者查看关注城市" readonly @click="$router.push('search')">
      </div>
      <a href="#" class="menu"><i class="iconfont icon-caidan"></i></a>
    </header>
    <city-info></city-info>
  </div>
</template>
<script>
import CityInfo from '../components/city-info'
export default {
  components: {
    CityInfo
  }
}
</script>
<style lang="less" scoped>
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
</style>
