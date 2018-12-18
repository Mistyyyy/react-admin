import React, { PureComponent as Component } from 'react'
import { Input, InputNumber, Form } from 'antd'
import EditContext from './context'

const { Consumer } = EditContext
const { Item: FormItem } = Form


class EditCell extends Component {
  getInput = () => {
    return this.props.inputType === 'number'
      ? <InputNumber />
      : <Input />
  }
  render() {
    const {
      editing,
      dataIndex,
      title,
      inputType,
      record,
      index,
      ...restProps
    } = this.props
    return (
      <Consumer>
        {
          form => {
            const { getFieldDecorator } = form
            return (
              <td {...restProps}>
                {editing ? (
                  <FormItem style={{ margin: 0 }}>
                    {getFieldDecorator(dataIndex, {
                      rules: [{
                        required: true,
                        message: `Please Input ${title}!`,
                      }],
                      initialValue: record[dataIndex],
                    })(this.getInput())}
                  </FormItem>
                ) : restProps.children}
              </td>
            );
          }
        }
      </Consumer>
    )
  }
}

export default EditCell