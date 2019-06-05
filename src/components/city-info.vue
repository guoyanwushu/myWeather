<template>
  <div class="container">
    <header class="flex-middle-between">
      <div class="city flex-middle">
        <span>{{city}}</span>
        <a href="#" @click="careCity"><i class="iconfont icon-xihuan"></i> </a>
      </div>
      <div class="update-info flex-middle">
        <span>{{this.time}}</span>
        <a href="#" @click="getWeatherInfo"><i class="iconfont icon-shuaxin" :class="{loading: isLoading}"></i></a>
      </div>
    </header>
    <section id="weather-detail" class="flex">
      <div class="degree">
        <span class="tmp">{{tmp}}</span>
        <p class="rain-info">{{rainInfo}}<i class="iconfont icon-jiantou"></i></p>
      </div>
      <div class="wind">
        <p>
          {{cond_txt}}
        </p>
        <p>
          {{wind_dir+wind_sc}}级
        </p>
      </div>
    </section>
    <p class="weather-desc"></p>
    <section></section>
  </div>
</template>
<script>
import {getWeatherNow} from "../apis";

export default {
  data () {
    return {
      isLoading: false,
      city: '成都',
      time: '',
      tmp: '',
      cond_txt: '',
      wind_deg: "",
      wind_dir: "",
      wind_sc: "",
      wind_spd: "",
      pcpn: 0
    }
  },
  computed: {
    rainInfo () {
      return this.pcpn == 0?'未来两小时无降水':`未来两小时降雨量${this.pcpn}ml`
    }
  },
  mounted () {
    this.getWeatherInfo();
  },
  methods: {
    getWeatherInfo () {
      this.isLoading = true;
      getWeatherNow(this.city).then( (res)=> {
        setTimeout( ()=> {
          this.isLoading = false;
        }, 1000)
        this.time = res.HeWeather6[0].update.loc.match(/^[^\s]+\s+([^\s]+)$/)[1] + ' 更新'
        const now = res.HeWeather6[0].now;
        this.wind_dir = now.wind_dir
        this.tmp = now.tmp;
        this.cond_txt = now.cond_txt
        this.wind_deg = now.wind_deg
        this.wind_sc = now.wind_sc
      })
    },
    careCity () {
    },
    unpdateWeatherInfo () {
    }
  }
}
</script>
<style lang="less">
  @import "../styles/common";
  .container {
    background-color: #fff;
    border-radius: 10px 10px 0 0;
    padding: 5px 0 0;
    position: relative;
    &:before {
      content: '';
      display: block;
      position: relative;
      left: 50%;
      margin-left: -30px;
      width: 60px;
      height: 4px;
      border-radius: 5px;
      background-color: #ccc;

    }
  }
  header {
    padding: 0 12px 0px;
    margin-top: 5px;
    height: 44px;
    line-height: 44px;
    border-bottom: 1px solid #cccccc4f;
  }
  .city {
    color: #000;
    font-size: 16px;
    span {
      margin-right: 5px;
    }
    i {
      color: #ccc;
      font-size: 18px;
    }
  }
  .update-info {
    color: #666;
    font-size: 12px;
    span {
      margin-right: 5px;
    }
    i {
      color: #ccc;
    }
  }
  .loading {
    transition: all 2s linear;
    transform: rotate(360deg);
    transform-origin: 50% 50%;
  }
  #weather-detail {
    padding: 12px 12px 25px;
    .rain-info {
      font-size: 12px;
      color: #c0c0c0
    }
    .wind {
      flex: 1;
      display: flex;
      padding: 10px 0 20px 20px;
      flex-direction: column;
      justify-content: space-between;
    }
  }
  .wind p {}
  .degree {
    width: 120px;
    .tmp {
      position: relative;
      display: inline-block;
      font-size: 60px;
      &:after {
        content: '';
        display: block;
        position: absolute;
        right: -17px;
        top: 12px;
        width: 6px;
        height: 6px;
        border: 4px solid #000;
        border-radius: 50%;
      }
    }
  }
</style>
