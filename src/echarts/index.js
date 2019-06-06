export function hourlyLine (xdata, ydata) {
  return {
    title: {
      show: true,
      text: '24小时天气预报',
      textStyle: {
        fontSize: 14,
        fontWeight: 'normal'
      },
      left: 10,
      top: 16
    },
    grid: {
      right: 0
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      axisLabel: {
        align: 'left'
      },
      axisTick: {
        show: false
      },
      data: xdata
    },
    yAxis: {
      type: 'value',
      min: '18',
      max: 'dataMax',
      minInterval: 100,
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: true,
        showMinLabel: true,
        showMaxLabel: true,
        formatter: '{value}°'
      }
    },
    dataZoom: [{
      type: 'inside',
      start: 1,
      end: 50

    }],
    series: [{
      data: ydata,
      type: 'line',
      smooth: true,
      itemStyle: {
        color: '#587FF3',
        opacity: 0
      },
      lineStyle: {
        color: '#587FF3'
      },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [{
            offset: 0, color: '#C5D2FA' // 0% 处的颜色
          }, {
            offset: 1, color: '#E9E9EF' // 100% 处的颜色
          }],
          global: false // 缺省为 false
        }
      }
    }]
  };
}
