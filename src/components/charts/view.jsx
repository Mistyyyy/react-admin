import React, { Component } from 'react'
import BarChart from './barCharts'
import LineChart from './lineCharts'
class Container extends Component {
  render() {
    return (
      <div>
        <div>
          <BarChart />
          {/* <PieChart /> */}
        </div>
        <div>
          <LineChart />
        </div>
      </div>
    )
  }
}

export default Container