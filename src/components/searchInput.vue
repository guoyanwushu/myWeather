<template>
  <div class="container">
    <header  class="flex-middle">
      <div id="input-box" class="flex-middle">
        <i class="iconfont icon-sousuo"></i><input type="text" placeholder="搜索城市或者查看关注城市">
      </div>
      <a href="#" class="menu"><i class="iconfont icon-caidan"></i></a>
    </header>

  </div>
</template>
<style lang="less" scoped>
  .container {
    position: fixed;
    top: 10px;
    width: 100%;
    padding: 0 12px 5px;
  }
  #input-box {
    flex: 1;
    padding: 6px 8px;
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
    height: 30px;
    line-height: 30px;
    border-radius: 5px;
    background-color: #fff;
    font-size: 18px;
    text-align: center;
    i {
      font-size: 30px;
    }
  }
</style>
