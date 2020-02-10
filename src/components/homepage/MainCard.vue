<template>
  <div>
    <div class="flex-middle-between">
      <p>
        {{city}}
        <i class="iconfont "></i>
      </p>
      <p>
        {{updateTime}}
        <i class="iconfont"></i>
      </p>
    </div>
    <div class="flex-middle-between">
      <p>{{tempature}}</p>
      <div>
        <p class="cloud">{{cloud}}</p>
        <p class="air-status">
          <span class="pollution">{{pollution}}</span>
          <span class="wind">{{wind}}</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {

    }
  }
</script>
