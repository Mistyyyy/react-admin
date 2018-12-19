import React, { PureComponent as Component } from 'react'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import update from 'immutability-helper'
import { Table, Tag, Divider } from 'antd'
import DragableBodyRow from './dragBodyRow'

import { tableData } from '../../../mock'
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

class DragSortingTable extends Component {
  state = {
    data: tableData
  }

  components = {
    body: {
      row: DragableBodyRow,
    },
  }

  moveRow = (dragIndex, hoverIndex) => {
    const { data } = this.state;
    const dragRow = data[dragIndex];

    this.setState(
      update(this.state, {
        data: {
          $splice: [[dragIndex, 1], [hoverIndex, 0, dragRow]],
        },
      }),
    );
  }

  render() {
    return (
      <div className={style.normalWrapper}>
      <Table
        rowKey="id"
        columns={columns}
        dataSource={this.state.data}
        components={this.components}
        onRow={(record, index) => ({
          index,
          moveRow: this.moveRow,
        })}
      />
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(DragSortingTable)


