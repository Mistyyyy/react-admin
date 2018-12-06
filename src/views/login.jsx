import React, { Component } from 'react'
import { Button, Input, Select } from 'antd'
import styles from '../style/index.css' 
const InputGroup = Input.Group;
const Option = Select.Option;
class Login extends Component {

  constructor(props) {
    super(props)
    this.changePass = this.changePass.bind(this)
    this.changeUser = this.changeUser.bind(this)
    this.changeType = this.changeType.bind(this)
  }
  state = {
    username: '',
    password: '',
    userType: 'Sign Up',
    keys: 'Sign Up'
  }

  changeUser(e) {
    this.setState({
      username: e.target.value
    })
  }

  changePass(e) {
    this.setState({
      password: e.target.value
    })
  }

  changeType(value) {
    if (this.state.userType !== value) {
      this.setState({
        userType: value,
        username: '',
        password: ''
      })
    }
  }

  render() {
    return (
      <div className={styles.loginWrapper}>
        <div className={styles.loginContent}>
          <div className={styles.signTitle}>
            <h1 style={{ color: '#fff' }}>SIGN IN</h1>
          </div>
          <div className={styles.signContent}>
            <div className={styles.inputItem}>
              <label htmlFor="username" className={styles.labelName}>username</label>
              <InputGroup>
                <Select 
                  defaultValue='Sign Up' 
                  value={this.state.userType}
                  onSelect={this.changeType}>
                  <Option value="Sign Up">普通用户</Option>
                  <Option value="Sign In">管理员</Option>
                </Select>
                <Input
                  value={this.state.username}
                  placeholder="username"
                  onChange={this.changeUser}
                />
              </InputGroup>
            </div>
            <div className={styles.inputItem}>
              <label htmlFor="password" className={styles.labelName}>password</label>
              <Input 
                type="password"
                placeholder="password"
                value={this.state.password}
                onChange={this.changePass}
              />
            </div>
            <div className={styles.inputItem}>
              <Button type="primary">Login</Button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login