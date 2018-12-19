const menuList = [
  {
    title: 'dashbord',
    link: '/dashbord',
    id: 'dashbord',
    icon: 'mail'
  }, {
    title: '引导页',
    id: 'direct',
    icon: 'mail',
    link: '/direct-page'
  }, {
    title: '权限切换',
    link: '/permission',
    id: 'permission',
    icon: 'calendar'
  }, {
    title: '表单',
    link: '/form',
    id: 'form',
    icon: 'mail'
  }, {
    title: '表格',
    id: 'table',
    icon: 'mail',
    children: [{
      title: '普通表格',
      id: 'normal table',
      icon: 'mail',
      link: '/normal-table'
    }, {
      title: '可选排序表格',
      id: 'select and sort',
      icon: 'setting',
      link: '/select-sort-table'
    }, {
      title: '树形表格',
      id: 'tree tab;e',
      icon: 'calendar',
      link: '/tree-table'
    }, {
      title: '可编辑表格',
      id: 'edit table',
      icon: 'setting',
      link: '/editor-table'
    }, {
      title: '可拖拽表格',
      id: 'drag table',
      icon: 'setting',
      link: '/drag-table'
    }]
  },{
    title: '图标',
    link: '/icon',
    id: 'icon',
    icon: 'calendar'
  }, {
    title: '数据可视化',
    id: 'view-data',
    icon: 'mail',
    children: [
      {
        title: '饼状图',
        id: 'pie',
        icon: 'mail',
        link: '/pie'
      },
      {
        title: '折线图',
        id: 'charts',
        icon: 'mail',
        link: '/charts'
      },
      {
        title: '其他图',
        id: 'others',
        icon: 'mail',
        link: '/others'
      },
    ]
  }, {
    title: '组件',
    id: 'components',
    icon: 'calendar',
    children: [
      {
        title: '文本编辑器',
        id: 'editor text',
        icon: 'calendar',
        link: '/editor'
      },
      {
        title: 'Markdown',
        id: 'Markdown text',
        icon: 'calendar',
        link: '/Markdown'
      },{
        title: '文章编辑列表',
        id: 'artical list',
        icon: 'calendar',
        link: '/artical-list'
      },
      {
        title: '可拖拽的组件',
        id: 'can drag',
        icon: 'calendar',
        link: '/can-drag'
      },
    ]
  }, {
    title: '路由嵌套',
    id: 'router nest',
    icon: 'mail',
    children: [
      {
        title: 'subMenu 1',
        id: 'subMenu 1',
        icon: 'mail',
        children: [
          {
            title: 'subMenu1-1',
            id: 'subMenu1-1',
            icon: 'mail',
            link: '/subMenu1/subMenu1-1'
          },
          {
            title: 'subMenu1-2',
            id: 'subMenu1-2',
            icon: 'mail',
            link: '/subMenu1/subMenu1-2'
          },
          {
            title: 'subMenu1-3',
            id: 'subMenu1-3',
            icon: 'mail',
            children: [
              {
                title: 'subMenu1-3-1',
                id: 'subMenu1-3-1',
                icon: 'mail',
                link: '/subMenu1-3-1'
              }, 
              {
                title: 'subMenu1-3-2',
                id: 'subMenu1-3-2',
                icon: 'mail',
                link: '/subMenu1-3-2'
              }
            ]
          }
        ]
      },
      {
        title: 'subMenu 2',
        id: 'subMenu 2',
        icon: 'mail',
        link: '/subMenu2'
      },
    ]
  }, {
    title: '错误页面',
    id: 'error-page',
    icon: 'calendar',
    children: [
      {
        title: '404 page',
        id: '404 page',
        icon: 'mail',
        link: '/notFound'
      }
    ]
  }, {
    title: '动画展示',
    id: 'show animation',
    icon: 'calendar',
    children: [{
      title: '动画1⃣️',
      id: 'animated 1',
      icon: 'calendar',
      link: '/animated1'
    }, {
      title: '动画2⃣️',
      id: 'animated 2',
      icon: 'calendar',
      link: '/animated2'
    }, {
      title: '动画3⃣️',
      id: 'animated 3',
      icon: 'calendar',
      link: '/animated3'
    }, {
      title: '动画4⃣️',
      id: 'animated 4',
      icon: 'calendar',
      link: '/animated4'
    }]
  }, {
    title: '设置',
    id: 'setting',
    icon: 'setting',
    link: '/setting'
  }, {
    title: '语言',
    id: 'language',
    icon: 'setting',
    link: '/language'
  }, {
    title: '关于项目',
    id: 'about',
    icon: 'mail',
    link: '/about'
  }
]

const tableData = [{
  id: '1001',
  name: 'John',
  age: 32,
  credictId: '900098',
  city: 'nanjing',
  address: 'New York No. 1 Lake Park',
  tags: ['nice', 'developer'],
}, {
  id: '1002',
  name: 'Jim',
  age: 42,
  credictId: '900099',
  city: 'bejing',
  address: 'London No. 2 Lake Park',
  tags: ['loser'],
}, {
  id: '1003',
  name: 'Joe',
  credictId: '900100',
  city: 'shanghai',
  age: 28,
  address: 'Sidney No. 3 Lake Park',
  tags: ['cool', 'coder'],
}, {
  id: '1004',
  name: 'mike',
  credictId: '900101',
  city: 'suzhou',
  age: 52,
  address: 'Sidney No. 1 Lake Park',
  tags: ['programmer', 'teacher'],
}, {
  id: '1005',
  name: 'rose',
  credictId: '900102',
  city: 'nantong',
  age: 29,
  address: 'Sidney No. 4 Lake Park',
  tags: ['bad', 'student'],
}, {
  id: '1006',
  name: 'tina',
  credictId: '900103',
  city: 'tianjin',
  age: 19,
  address: 'Sidney No. 7 Lake Park',
  tags: ['sales'],
}, {
  id: '1007',
  name: 'harley',
  credictId: '900104',
  city: 'nanjing',
  age: 23,
  address: 'Sidney No. 8 Lake Park',
  tags: ['kind', 'programmer'],
}, {
  id: '1008',
  name: 'tom',
  credictId: '900105',
  city: 'shenzhen',
  age: 30,
  address: 'Sidney No. 9 Lake Park',
  tags: ['boss', 'good'],
}, {
  id: '1009',
  name: 'harson',
  credictId: '900106',
  city: 'guangzhou',
  age: 38,
  address: 'Sidney No. 10 Lake Park',
  tags: ['banker'],
}]

const treeData = [{
  id: '1001',
  name: 'John',
  age: 32,
  credictId: '900098',
  city: 'nanjing',
  address: 'New York No. 1 Lake Park',
  tags: ['nice', 'developer'],
  children: [
    {
      id: '2001',
      name: 'Jim',
      age: 42,
      credictId: '910090',
      city: 'bejing',
      address: 'London No. 2 Lake Park',
      tags: ['loser'],
    }, {
      id: '2002',
      name: 'Jim',
      age: 42,
      credictId: '910099',
      city: 'nanjing',
      address: 'London No. 2 Lake Park',
      tags: ['succsive'],
    }
  ]
}, {
  id: '1002',
  name: 'Jim',
  age: 42,
  credictId: '900099',
  city: 'bejing',
  address: 'London No. 2 Lake Park',
  tags: ['loser'],
}, {
  id: '1003',
  name: 'Joe',
  credictId: '900100',
  city: 'shanghai',
  age: 28,
  address: 'Sidney No. 3 Lake Park',
  tags: ['cool', 'coder'],
}, {
  id: '1004',
  name: 'mike',
  credictId: '900101',
  city: 'suzhou',
  age: 52,
  address: 'Sidney No. 1 Lake Park',
  tags: ['programmer', 'teacher'],
  children: [
    {
      id: '4005',
      name: 'padama',
      credictId: '900102',
      city: 'nantong',
      age: 29,
      address: 'Sidney No. 4 Lake Park',
      tags: ['bad', 'student'],
    }, {
      id: '4006',
      name: 'lily',
      credictId: '900112',
      city: 'hainan',
      age: 39,
      address: 'Sidney No. 01 Lake Park',
      tags: ['bad', 'teacher'],
      children: [
        {
          id: '4008',
          name: 'curry',
          credictId: '900312',
          city: 'shandong',
          age: 49,
          address: 'Sidney No. 08 Lake Park',
          tags: ['good', 'soilder'],
        }
      ]
    }
  ]
}, {
  id: '1005',
  name: 'rose',
  credictId: '900102',
  city: 'nantong',
  age: 29,
  address: 'Sidney No. 4 Lake Park',
  tags: ['bad', 'student'],
}, {
  id: '1006',
  name: 'tina',
  credictId: '900103',
  city: 'tianjin',
  age: 19,
  address: 'Sidney No. 7 Lake Park',
  tags: ['sales'],
}, {
  id: '1007',
  name: 'harley',
  credictId: '900104',
  city: 'nanjing',
  age: 23,
  address: 'Sidney No. 8 Lake Park',
  tags: ['kind', 'programmer'],
}, {
  id: '1008',
  name: 'tom',
  credictId: '900105',
  city: 'shenzhen',
  age: 30,
  address: 'Sidney No. 9 Lake Park',
  tags: ['boss', 'good'],
}, {
  id: '1009',
  name: 'harson',
  credictId: '900106',
  city: 'guangzhou',
  age: 38,
  address: 'Sidney No. 10 Lake Park',
  tags: ['banker'],
}]
export default menuList

export {
  tableData,
  treeData
}