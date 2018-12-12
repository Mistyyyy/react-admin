import React, { Component } from 'react'
import styles from '../style/main.css'
import TopBar from '../components/topBar/view'
import Sider from '../components/sider/view'
import SidePage from '../components/sidePage/view'
class Main extends Component {
  render() {
    return (
      <div className={styles.mainWrapper}>
        <TopBar />
        <div className={styles.contentWrapper}>
          <Sider />
          <SidePage>
            {
              this.props.children
            }
          </SidePage>
        </div>
      </div>
    )
  }
}

export default Main