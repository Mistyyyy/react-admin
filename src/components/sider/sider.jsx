import React, { Component } from 'react'
import styles from './index.css'
import mockData from '../../mock'
import { Menu, Icon, Button } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const menuList = mockData.map(item => {
  return item.children
    ? (<SubMenu key={item.id} title={<span><Icon type={item.icon} /><span>{item.title}</span></span>} >
      {
        item.children.map(key => {
          return  !key.children
            ? (
              <Menu.Item key={key.id} link={key.link}>
                <Icon type={key.icon} />
                {key.title}
              </Menu.Item>
            )
            : (
              <SubMenu key={key.id} title={<span><Icon type={key.icon} /><span>{key.title}</span></span>} >
                {
                  key.children.map(ele => {
                    return (<Menu.Item key={ele.id} link={ele.link}>
                      <Icon type={ele.icon} />
                      {ele.title}
                    </Menu.Item>)
                  })
                }
              </SubMenu>
            )
        })
      }
    </SubMenu>)
    : (
        <Menu.Item key={item.id} link={item.link}>
          <Icon type={item.icon} />
          {item.title}
        </Menu.Item>
      )
})

class Sider extends Component {
  handleClick = this.handleClick.bind(this)

  handleClick(e) {
    console.log(e)
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