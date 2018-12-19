import React, { PureComponent as Component } from 'react'
import echarts from 'echarts/lib/echarts'

import { lineData } from '../../mock'

import 'echarts/lib/chart/line'
//引入提示框和标题
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
// import 'echarts/lib/component/toolbox'
// import 'echarts/lib/component/legendScroll'
// import 'echarts/lib/component/axisPointer'
// 数据的图表缩放
import 'echarts/lib/component/dataZoom'
// 其他可视化工具
import 'echarts/lib/component/visualMap'

const option = {
  title: {
      text: 'Beijing AQI'
  },
  tooltip: {
      trigger: 'axis'
  },
  xAxis: {
      data: lineData.map(function (item) {
          return item[0];
      })
  },
  yAxis: {
      splitLine: {
          show: false
      }
  },
  toolbox: {
      left: 'center',
      feature: {
          dataZoom: {
              yAxisIndex: 'none'
          },
          restore: {},
          saveAsImage: {}
      }
  },
  dataZoom: [{
      startValue: '2014-06-01'
  }, {
      type: 'inside'
  }],
  visualMap: {
      top: 10,
      right: 10,
      pieces: [{
          gt: 0,
          lte: 50,
          color: '#096'
      }, {
          gt: 50,
          lte: 100,
          color: '#ffde33'
      }, {
          gt: 100,
          lte: 150,
          color: '#ff9933'
      }, {
          gt: 150,
          lte: 200,
          color: '#cc0033'
      }, {
          gt: 200,
          lte: 300,
          color: '#660099'
      }, {
          gt: 300,
          color: '#7e0023'
      }],
      outOfRange: {
          color: '#999'
      }
  },
  series: {
      name: 'Beijing AQI',
      type: 'line',
      data: lineData.map(function (item) {
          return item[1];
      }),
      markLine: {
          silent: true,
          data: [{
              yAxis: 50
          }, {
              yAxis: 100
          }, {
              yAxis: 150
          }, {
              yAxis: 200
          }, {
              yAxis: 300
          }]
      }
  }
}

class Container extends Component {
  componentDidMount() {
    // 基于准备好的dom，初始化echarts实例
    let myChart = echarts.init(document.getElementById('line'));
    // 绘制图表
    myChart.setOption(option)
  }
  render() {
    return (
      <div id="line" style={{ width: 1000, height: 500 }} />
    )
  }
}

export default Container