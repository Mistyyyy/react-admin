import React, { PureComponent as Component } from 'react'
import { tableData } from '../../../mock'
import { Table, Divider, Button } from 'antd'
import style from '../styles.css'

const columns = [{
  title: 'name',
  dataIndex: 'name',
  key: 'name'
}, {
  title: 'age',
  dataIndex: 'age',
  key: 'age'
}, {
  title: 'credictId',
  dataIndex: 'credictId',
  key: 'credictId'
}, {
  title: 'city',
  dataIndex: 'city',
  key: 'city'
}, {
  title: 'address',
  dataIndex: 'address',
  key: 'address'
}, {
  title: 'Action',
  key: 'Action',
  render: (t, r) => (
    <span>
      <Button type="primary" size="small">edit</Button>
      <Divider type="vertical" />
      <Button type="primary" size="small">Delete</Button>
    </span>
  )
}]

class Container extends Component {

  render() {
    return (
      <div className={style.normalWrapper}>
        <Table dataSource={tableData} columns={columns} rowKey="id"/>
      </div>
    )
  }
}

export default Container