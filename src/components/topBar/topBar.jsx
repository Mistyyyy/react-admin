import React, { Component } from 'react'
import { Button } from 'antd'
import styles from './index.css'

class TopBar extends Component {
  render() {
    return (
      <div className={styles.topWrapper}>
        <h4>the logo placeholder</h4>
        <div>the current menu name</div>
        <div className={styles.userInfo}>
          <div>the userInfo</div>
          <Button type="default">login ou</Button>
        </div>
      </div>
    )
  }
}

export default TopBar