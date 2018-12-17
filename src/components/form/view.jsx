import React, { Component } from 'react'
import style from './styles.css'
import { Input, Button, Radio, Checkbox, Select, DatePicker} from 'antd'

const { Option } = Select
const { Group: CGroup } = Checkbox
const { Group: RGroup } = Radio
const plainOptions = ['Apple', 'Pear', 'Orange'];
const selectOptions = [{
  label: '全部', id: 'all'
}, {
  label: '游泳', id: 'swim'
}, {
  label: '唱歌', id: 'sing'
}, {
  label: '健身', id: 'pratice'
}, {
  label: '代码', id: 'code'
}]
const hobbyJSX = selectOptions.map(item => (
  <Option key={item.id} value={item.id}>
    {
      item.label
    }
  </Option>
))

class Container extends Component {
  state = {
    value1: 'Apple',
    value2: 'Apple',
    value3: 'Apple',
  }
  render() {
    return (
      <div className={style.formWrapper}>
        <div className={style.formItem}>
          <label htmlFor="user">userName</label>
          <Input placeholder="input userName" className={style.inputItem}/>
        </div>
        <div className={style.formItem}>
          <label htmlFor="password">password</label>
          <Input placeholder="input password" type="password" className={style.inputItem}/>
        </div>
        <div className={style.formItem}>
          <label htmlFor="startTime">开始时间</label>
          <DatePicker className={style.inputItem}/>
        </div>
        <div className={style.formItem}>
          <label htmlFor="endTime">结束时间</label>
          <DatePicker className={style.inputItem}/>
        </div>
        <div className={style.formItem}>
          <label htmlFor="Hobby">兴趣爱好</label>
          <Select style={{ width: 200 }} defaultValue="全部">
            {
              hobbyJSX
            }
          </Select>
        </div>
        <div className={style.formItem}>
          <label htmlFor="">多选</label>
          <CGroup options={plainOptions} defaultValue={['Apple']}  />
        </div>
        <div className={style.formItem}>
          <label htmlFor="">单选</label>
          <RGroup options={plainOptions} onChange={this.onChange1} value={this.state.value1} />
        </div>
        <div className={style.formItem}>
          <Button type="primary" style={{ marginLeft: '20px' }}>serach</Button>
        </div>
      </div>
    )
  }
}

export default Container