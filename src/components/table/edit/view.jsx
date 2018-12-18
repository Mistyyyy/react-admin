import React, { PureComponent as Component } from 'react'
import { tableData } from '../../../mock'
import { Table, Button } from 'antd'
import EditContext from './context'
import EditRow from './editRow'
import EditCell from './editCell'
import style from '../styles.css'

const { Consumer } = EditContext
class Container extends Component {
  isEditing = r => r.id === this.state.editingKey
  cancel = () => {
    this.setState({ editingKey: '' });
  }
  edit(key) {
    this.setState({ editingKey: key });
  }
  save(form, key) {
    form.validateFields((error, row) => {
      if (error) {
        return;
      }
      const newData = [...this.state.data];
      const index = newData.findIndex(item => key === item.id);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        this.setState({ data: newData, editingKey: '' });
      } else {
        newData.push(row);
        this.setState({ data: newData, editingKey: '' });
      }
    })
  }
  state = { editingKey: '', data: tableData }

  columns = [{
    title: 'name',
    dataIndex: 'name',
    key: 'name',
    editable: true
  }, {
    title: 'age',
    dataIndex: 'age',
    key: 'age',
    editable: true
  }, {
    title: 'credictId',
    dataIndex: 'credictId',
    key: 'credictId',
    editable: true
  }, {
    title: 'city',
    dataIndex: 'city',
    key: 'city',
    editable: true
  }, {
    title: 'address',
    dataIndex: 'address',
    key: 'address',
    editable: true
  }, {
    title: 'Action',
    key: 'Action',
    render: (t, r) => {
      const editable = this.isEditing(r);
      return (
          <div>
            { editable ? (
              <span style={{ display: 'flex',}}>
                <Consumer>
                  {form => (
                    <Button
                      size="small"
                      type="primary"
                      onClick={() => this.save(form, r.id)}
                      style={{ marginRight: 8 }}
                    >
                      Save
                    </Button>
                  )}
                </Consumer>
                <Button size="small" type="primary">Cancel</Button>
              </span>
            ) : (
              <Button size="small" type="primary" onClick={() => this.edit(r.id)}>Edit</Button>
            )}
          </div>
      )
    }
  }]
  
  
  render() {
    const components = {
      body: {
        row: EditRow,
        cell: EditCell,
      },
    };
    const columns = this.columns.map(col => {
      if (!col.editable) {
        return col
      }
      return {
        ...col,
        onCell: record => ({
          record,
          inputType: col.dataIndex === 'age' ? 'number' : 'text',
          dataIndex: col.dataIndex,
          title: col.title,
          editing: this.isEditing(record),
        })
      }
    })
    return (
      <div className={style.normalWrapper}>
        <Table 
          dataSource={this.state.data} 
          components={components}
          columns={columns} 
          rowKey="id"/>
      </div>
    )
  }
}

export default Container