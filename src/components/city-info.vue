<template>
  <div class="container">
    <header class="flex-middle-between search">
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
    <p class="life-desc">{{lifeDesc}}</p>
    <section id="line-chart" ref="hourly"></section>
    <daily-weather :city="city"></daily-weather>
  </div>
</template>
<script>
import { getWeatherDetail, getRainInfo} from '../apis';
import {hourlyLine} from "../echarts";
import echarts from 'echarts'
import SearchInput from './SearchInput'
import DailyWeather from  './dailyWeather'
export default {
  data () {
    return {
      isLoading: false,
      city: '成都',
      time: '',
      tmp: '',
      cond_txt: '',
      wind_deg: '',
      wind_dir: '',
      wind_sc: '',
      wind_spd: '',
      pcpn: 0,
      daily: [],
      lifeDesc: '',
    }
  },
  computed: {
    rainInfo () {
      return this.pcpn == 0?'未来两小时无降水':`未来两小时降雨量${this.pcpn}ml`
    }
  },
  components: {
    SearchInput,
    DailyWeather
  },
  mounted () {
    this.init();
  },
  activated () {
    this.$route.query.city?this.city = this.$route.query.city:'';
    this.init();
  },
  methods: {
    init () {
      this.getWeatherInfo();
      this.getLifeInfo('comf');
      this.getHourlyWeather();
    },
    /* 获取天气信息
     *  这里不能写死，第一次进来由定位取到当前吃屎工会是
     * */
    getWeatherInfo () {
      this.isLoading = true;
      getWeatherDetail(this.city).then(res => {
        setTimeout(() => {
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
    /* 获取生活指数信息 */
    getLifeInfo (type) {
      getWeatherDetail(this.city, 'lifestyle').then(res => {
        const liftObject = res.HeWeather6[0].lifestyle;
        liftObject.some((lifeItem) => {
          if (lifeItem.type === type) {
            console.log(this);
            this.lifeDesc = lifeItem.txt;
            return true
          }
        })
      })
    },
    /* 这个接口调不了 */
    getRainInfo () {
      getRainInfo(this.city).then(res => {
        this.rainInfo = res.HeWeather6[0]
      })
    },
    /* 获取24小时预报 */
    getHourlyWeather () {
      getWeatherDetail(this.city, 'hourly').then(res => {
        const hourly = res.HeWeather6[0].hourly;
        const hours = hourly.map(item => {
          return item.time.match(/^[^\s]+\s+([^\s]+)$/)[1]
        });
        const tmps = hourly.map(item => item.tmp);
        echarts.init(this.$refs.hourly, '', {render: 'svg'}).setOption(hourlyLine(hours, tmps))
      })
    },
    careCity () {
    }
  }
}
</script>
<style lang="less" scoped>
  .container {
    background-color: #F7F7F9;
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
      display: inline-block;
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
  .life-desc {
    padding: 8px 12px;
    background-color: #E9E9EF;
    line-height: 1.5;
    font-size: 14px;
  }
  #line-chart {
    height: 200px;
    border-bottom: 8px solid #E9E9EF;
  }
</style>
