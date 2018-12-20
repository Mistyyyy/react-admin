import React, {
  PureComponent as Component
} from 'react'
import echarts from 'echarts/lib/echarts'

import 'echarts/lib/chart/pie'
//引入提示框和标题
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';


class Container extends Component {
  componentDidMount() {
    // 基于准备好的dom，初始化echarts实例
    let myChart = echarts.init(document.getElementById('pie'));
    // 绘制图表
    myChart.setOption(this.props.option)
  }
  render() {
    return ( <
      div id = "pie"
      style = {
        {
          width: 500,
          height: 500
        }
      }
      />
    )
  }
}

export default Container