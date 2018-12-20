import React from 'react'
import style from '../style.css'
import LineCharts from '../jsx/lineCharts'
import { lineChartData } from '../../../mock'

const LineChart = props => (
  <div className={style.chartWrapper}>
    <LineCharts option={lineChartData}/>
  </div>
)

export default LineChart

