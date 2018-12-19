import React, { PureComponent as Component } from 'react'
import { tableData } from '../../../mock'
import { Table, Tag, Divider, Button } from 'antd'
import style from '../styles.css'

const columns = [{
  title: 'name',
  dataIndex: 'name',
  key: 'name'
}, {
  title: 'age',
  dataIndex: 'age',
  key: 'age',
  defaultSortOrder: 'descend',
  sorter: (a, b) => a.age - b.age,
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
  state = {
    selectedRowKeys: [], // Check here to configure the default column
    loading: false,
  }
  start = () => {
    this.setState({ loading: true });
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    }, 1000);
  }
  onSelectChange = (selectedRowKeys) => {
    this.setState({ selectedRowKeys })
  }

  render() {
    const { loading, selectedRowKeys } = this.state
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    }
    const hasSelected = selectedRowKeys.length > 0;
    return (
      <div className={style.normalWrapper}>
        <div>
          <div style={{ marginBottom: '5px',marginTop: '5px'}}>
            <Button
              type="primary"
              onClick={this.start}
              disabled={!hasSelected}
              loading={loading}
            >
              Reload
            </Button>
            <span style={{ marginLeft: 8 }}>
              {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
            </span>
          </div>
          <Table dataSource={tableData} columns={columns} rowKey="id" rowSelection={rowSelection}/>
        </div>
      </div>
    )
  }
}

export default Container