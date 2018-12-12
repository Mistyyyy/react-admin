import React, { Component } from 'react'
// import history from '../../utils/histoty'

import styles from './index.css'

class SidePage extends Component {
  render() {
    return (
      <div className={styles.sidePage}>
        {
          this.props.children
        }
      </div>
    )
  }
}

export default SidePage