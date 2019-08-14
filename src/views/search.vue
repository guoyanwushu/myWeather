<template>
  <div class="container">
    <search-input></search-input>
  </div>
</template>
<script>
import SearchInput from '../components/SearchInput'
export default {
  components: {
    SearchInput
  }
}
</script>
<style lang="less" scoped>
  .container {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }
</style>
