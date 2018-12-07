import React, { Component } from 'react'
import styles from '../style/main.css'
import TopBar from '../components/topBar/topBar'
import Sider from '../components/sider/sider'
import SidePage from '../components/sidePage/sidePage'
class Main extends Component {
  render() {
    return (
      <div className={styles.mainWrapper}>
        <TopBar />
        <div className={styles.contentWrapper}>
          <Sider />
          <SidePage />
        </div>
      </div>
    )
  }
}

export default Main