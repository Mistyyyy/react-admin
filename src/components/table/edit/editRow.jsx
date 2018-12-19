import React from 'react'
import { Form } from 'antd'
import EditContext from './context'

const { Provider } = EditContext

const EditableRow = ({ form, index, ...props }) => (
  <Provider value={form}>
    <tr {...props} />
  </Provider>
)

export default Form.create()(EditableRow)