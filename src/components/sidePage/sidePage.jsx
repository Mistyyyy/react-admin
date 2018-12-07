import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import InitPage from '../initPage/init'
import styles from './index.css'

class SidePage extends Component {
  render() {
    return (
      <div className={styles.sidePage}>
        <Switch>
          <Route path="/" exact component={InitPage} />
        </Switch>
      </div>
    )
  }
}

export default SidePage