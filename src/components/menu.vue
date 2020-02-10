<template>
  <div class="menu-container">
    <div class="content-container">
      <div class="person-info">
        <span>i am right menu</span>
      </div>
      <div class="sub-menu">
        <li v-for="item in subMenus">
          {{item.name}}
        </li>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        subMenus: [{
          name: '我的关注'
        }, {
          name: '天气预警'
        }, {
          name: '一周总结'
        }]
      }
    }
  }
</script>
<style lang="less" scoped>
  .content-container {
    position: absolute;
    width: 100%;
    background-color: #fff;
    right: 0;
    top: 0;
    bottom: 0;
    border-left: 1px solid #ccc;
  }
  .person-info {
    height: 60px;
    text-align: center;
    padding: 0 12px;
  }
  .sub-menu li{
      line-height: 44px;
      padding-left: 12px;
      font-size: 14px;
      border-bottom: 1px solid #ccc;
  }
</style>
