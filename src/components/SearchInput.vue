<template>
  <div class="container">
    <header  class="flex-middle">
      <a href="#" class="back" @click="$router.push('/')"><i class="iconfont icon-jiantou-copy"></i></a>
      <div id="input-box" class="flex-middle">
        <i class="iconfont icon-sousuo"></i><input type="text" placeholder="搜索城市或者查看关注城市" v-model="city">
      </div>
    </header>
    <ul >
      <li class="flex flex-middle" v-for="city in results" :key="city.id">
        <span class="location">{{city.location}}</span>
        <span class="tmp">{{city.tmp}}</span>
      </li>
    </ul>

  </div>
</template>
<script>
  // TODO: 1.默认展示热门城市及对应的温度， 根据搜索的字动态展示搜索结果
  import {citySearch, getWeatherDetail, hotCitySearch} from "../apis";

  export default {
    data () {
      return {
        city: '',
        results: []
      }
    },
    mounted () {
      hotCitySearch().then(res => {
        if (res.HeWeather6[0].status == 'ok') {
          this.results = res.HeWeather6[0].basic.reduce((results, item)=>{
            if (item.type == 'city') {
              results.push({location: item.location, id: item.cid})
            }
            return results
          }, [])
          this.results.map(result=>{
            this.searchWeather(result)
          })
        } else {
          this.results = []
        }
      })
    },
    methods: {
      getHotCity() {
        if (res.HeWeather6[0].status == 'ok') {
          this.results = res.HeWeather6[0].basic.reduce((results, item)=>{
            if (item.type == 'city') {
              results.push({location: item.location, id: item.cid})
            }
            return results
          }, [])
          this.results.map(result=>{
            this.searchWeather(result)
          })
        } else {
          this.results = []
        }
      },
      search (location) {
        citySearch(location).then(res => {
          if (res.HeWeather6[0].status == 'ok') {
            this.results = res.HeWeather6[0].basic.reduce((results, item)=>{
              if (item.type == 'city') {
                results.push({location: item.location, id: item.cid})
              }
              return results
            }, [])
            this.results.map(result=>{
              this.searchWeather(result)
            })
          } else {
            this.results = []
          }
        })
      },
      searchWeather (city) {
        getWeatherDetail(city.id).then(res=>{
          this.$set(city, 'tmp', res.HeWeather6[0].now.tmp+'')
        })
      }
    },
    watch: {
      city: function (newVal, oldVal) {
        this.search(newVal);

      }
    }
  }
</script>
<style lang="less" scoped>
  .container {
    position: fixed;
    top: 10px;
    width: 100%;
  }
  #input-box {
    flex: 1;
    padding: 6px 8px;
    margin-right: 5px;
    background-color: #F4F4F4;
    border-radius: 5px;
    input {
      border: none;
      outline: none;
      background-color: #F4F4F4;
      width: 90%;
      margin-left: 5px;
    }
  }
  .back {
    width: 40px;
    height: 30px;
    line-height: 30px;
    border-radius: 5px;
    background-color: #fff;
    font-size: 18px;
    color: #666;
    text-align: center;
    i {
      font-size: 20px;
    }
  }
  ul {
    padding-top: 15px;
    padding-left: 0;
    li {
      padding: 15px;
      border-bottom: 0.5px solid #f3f3f3;
      .location {
        flex: 1;
      }
      .tmp {
        padding-left: 5px;
      }
    }
  }

</style>
