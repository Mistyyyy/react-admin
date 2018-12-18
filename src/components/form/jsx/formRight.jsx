import React, { PureComponent as Component } from 'react'
import { Form, Input, Icon, Checkbox, Button } from 'antd'

const { Item: FormItem } = Form

class Container extends Component {
  render() {
    console.dir(this.props.form)
    const { getFieldDecorator } = this.props.form;
    return (
      <Form>
        <FormItem key="userName">
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem key="password">
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem key="confirmPassword">
          {getFieldDecorator('confirm password', {
            rules: [{ required: true, message: 'Please confirm your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Confirm Password" />
          )}
        </FormItem>
        <FormItem key="loginLogic">
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <a href>Forgot password</a>
          <div style={{ display: 'flex', justifyContent: 'space-between'}}>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            <a href>register now!</a>  
          </div>
        </FormItem>	
      </Form>
    )
  }
}
const WrappedNormalLoginForm = Form.create()(Container);

export default WrappedNormalLoginForm
