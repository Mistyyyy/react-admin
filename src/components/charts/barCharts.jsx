import React, { PureComponent as Component } from 'react'
import echarts from 'echarts/lib/echarts'

import 'echarts/lib/chart/bar'
//引入提示框和标题
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/toolbox';
import 'echarts/lib/component/legendScroll'
import 'echarts/lib/component/title';

const xAxisData = [];
const data1 = [];
const data2 = [];
for (var i = 0; i < 100; i++) {
    xAxisData.push('类目' + i);
    data1.push((Math.sin(i / 5) * (i / 5 -10) + i / 6) * 5);
    data2.push((Math.cos(i / 5) * (i / 5 -10) + i / 6) * 5);
}
const option = {
  title: {
      text: '柱状图动画延迟'
  },
  legend: {
      data: ['bar', 'bar2'],
      align: 'left'
  },
  toolbox: {
      // y: 'bottom',
      feature: {
          magicType: {
              type: ['stack', 'tiled']
          },
          dataView: {},
          saveAsImage: {
              pixelRatio: 2
          }
      }
  },
  tooltip: {},
  xAxis: {
      data: xAxisData,
      silent: false,
      splitLine: {
          show: false
      }
  },
  yAxis: {
  },
  series: [{
      name: 'bar',
      type: 'bar',
      data: data1,
      animationDelay: function (idx) {
          return idx * 10;
      }
  }, {
      name: 'bar2',
      type: 'bar',
      data: data2,
      animationDelay: function (idx) {
          return idx * 10 + 100;
      }
  }],
  animationEasing: 'elasticOut',
  animationDelayUpdate: function (idx) {
      return idx * 5;
  }
};

class Container extends Component {
  componentDidMount() {
    // 基于准备好的dom，初始化echarts实例
    let myChart = echarts.init(document.getElementById('main'));
    // 绘制图表
    myChart.setOption(option)
  }
  render() {
    return (
      <div id="main" style={{ width: 1000, height: 400 }} />
    )
  }
}

export default Container