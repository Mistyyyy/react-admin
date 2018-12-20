import React from 'react'
import style from '../style.css'
import PieCharts from '../jsx/pieCharts'
import { pieChartsData } from '../../../mock'

const PieChart = props => (
  <div className={style.chartWrapper}>
    <PieCharts option={pieChartsData}/>
  </div>
)

export default PieChart

