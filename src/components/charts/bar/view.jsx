import React from 'react'
import style from '../style.css'
import BarCharts from '../jsx/barCharts'
import { barChartData } from '../../../mock'

const BarChart = props => (
  <div className={style.chartWrapper}>
    <BarCharts option={barChartData}/>
  </div>
)

export default BarChart

