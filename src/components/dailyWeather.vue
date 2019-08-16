<template>
  <div class="dailyWeather">
    <p class="title">未来七天</p>
    <ul>
      <li v-for="day in daysInfo" :key="day.date">
        <span>
          {{day.name}}
        </span>
        <div class="img-box">
          <img :src="day.weatherIcon" alt="">
        </div>
      </li>
      <div id="daily" ref="daily"></div>
    </ul>
  </div>
</template>
<script>
  import {turnDateToWeek} from "../util";
  import {getWeatherDetail} from "../apis";
  import {dailyLine} from "../echarts";
  import echarts from 'echarts'
  export default {
    data () {
      return {
        daily: '',
        daysInfo: ''
      }
    },
    props: {
      city: String
    },
    mounted () {
      this.renderLine();
    },
    methods: {
      renderLine () {
        getWeatherDetail(this.city, 'forecast').then(res => {
          this.daily = res.HeWeather6[0].daily_forecast;
          this.daysInfo = this.daily.map(item => {
            return {
              name: turnDateToWeek(item.date),
              code: item.cond_code_d,
              tmp: item.tmp_max,
              weatherIcon: require(`../assets/cond-icon-heweather/${item.cond_code_d}.png`)
            }
          })
          const weeks = this.daily.map(item => item.date);
          const tmps = this.daily.map(item => item.tmp_max)
          echarts.init(this.$refs.daily, '', {render: 'svg'}).setOption(dailyLine(weeks, tmps))
        })
      }
    },
    watch: {
      city: function (newVal, oldVal) {
        if (newVal !== oldVal) {
          this.renderLine()
        }
      }
    }
  }
</script>
<style lang="less" scoped>
  .title {
    padding: 15px 12px;
  }
  ul {
    display: flex;
    height: 200px;
    padding: 0;
    position: relative;
  }
  li {
    flex: 1;
    text-align: center;
    padding-top: 15px;
    border-right: 0.5px dotted #c0c0c0;
  }
  .img-box {
    margin-top: 15px;
    height: 60px;
    text-align: center;
    img {
      width: 30px;
      height: 30px;
    }

  }
  #daily {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
  }
</style>
