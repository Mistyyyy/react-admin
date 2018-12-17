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

export default menuList