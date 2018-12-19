import React, { PureComponent as Component } from 'react'
import { tableData } from '../../../mock'
import { Table, Tag, Divider } from 'antd'
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
  title: 'tags',
  dataIndex: 'tags',
  key: 'tags',
  render: t => (
    <span>
      {t.map(tag => <Tag color="blue" key={tag}>{tag}</Tag>)}
    </span>
  ) 
}, {
  title: 'Action',
  key: 'Action',
  render: (t, r) => (
    <span>
      <a href="true">Invite {r.name}</a>
      <Divider type="vertical" />
      <a href="true">Delete</a>
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