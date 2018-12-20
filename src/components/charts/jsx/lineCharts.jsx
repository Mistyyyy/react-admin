import React, {
  PureComponent as Component
} from 'react'
import echarts from 'echarts/lib/echarts'

import 'echarts/lib/chart/line'
//引入提示框和标题
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
// import 'echarts/lib/component/toolbox'
// import 'echarts/lib/component/grid'
// import 'echarts/lib/component/legendScroll'
// import 'echarts/lib/component/axisPointer'
// import 'echarts/lib/component/geo'
// 数据的图表缩放
import 'echarts/lib/component/dataZoom'
// 其他可视化工具
import 'echarts/lib/component/visualMap'


class Container extends Component {
  componentDidMount() {
    // 基于准备好的dom，初始化echarts实例
    let myChart = echarts.init(document.getElementById('line'));
    // 绘制图表
    myChart.setOption(this.props.option)
  }
  render() {
    return ( <div
      id = "line"
      style = {
        {
          width: 1000,
          height: 500
        }
      }
      />
    )
  }
}

export default Container