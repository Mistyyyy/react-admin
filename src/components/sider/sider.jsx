import React, { Component } from 'react'
import styles from './index.css'
import mockData from '../../mock'
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom'

const {  SubMenu, Item } = Menu

const menuList = mockData.map(item => {
  return item.children
    ? (<SubMenu key={item.id} title={<span><Icon type={item.icon} /><span>{item.title}</span></span>} >
      {
        item.children.map(key => {
          return  !key.children
            ? (
              <Item key={key.id} link={key.link}>
                <Link to={key.link}>
                  <Icon type={key.icon} />
                  {key.title}
                </Link>
              </Item>
            )
            : (
              <SubMenu key={key.id} title={<span><Icon type={key.icon} /><span>{key.title}</span></span>} >
                {
                  key.children.map(ele => {
                    return (<Item key={ele.id} link={ele.link}>
                      <Icon type={ele.icon} />
                      {ele.title}
                    </Item>)
                  })
                }
              </SubMenu>
            )
        })
      }
    </SubMenu>)
    : (
        <Item key={item.id} link={item.link}>
          <Link to={item.link}>
            <Icon type={item.icon} />
            {item.title}
          </Link>
        </Item>
      )
})

class Sider extends Component {
  handleClick = this.handleClick.bind(this)

  handleClick(e) {
    // const { item } = e
    // const { props } = item
    // history.push(props.link)
  }

  
  render() {
    return (
      <div className={styles.siderWrapper}>
        <Menu
        onClick={this.handleClick}
        style={{ width: 280 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        >
        {
          menuList
        }
        </Menu>
      </div>
    )
  }
}

export default Sider