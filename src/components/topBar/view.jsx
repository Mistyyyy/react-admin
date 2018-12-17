import React, { PureComponent } from 'react'
import { Button } from 'antd'
import styles from './index.css'
import history from '../../utils/histoty'

class TopBar extends PureComponent {
  backMenu = this.backMenu.bind(this)
  backMenu() {
    history.push('/')
  }
  render() {
    return (
      <div className={styles.topWrapper}>
        <h4 onClick={this.backMenu} style={{ cursor:'pointer' }}>the logo placeholder</h4>
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