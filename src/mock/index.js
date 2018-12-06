const menuList = [
  {
    title: '第一项',
    link: '/one',
    id: 'first item',
    icon: 'mail'
  }, {
    title: '第二项',
    link: '/two',
    id: 'second item',
    icon: 'calendar'
  }, {
    title: '第三项',
    link: '/three',
    id: 'third item',
    icon: 'mail'
  }, {
    title: '第四项',
    link: '/four',
    id: 'fourth item',
    icon: 'calendar'
  }, {
    title: '第五项',
    link: '/five',
    id: 'fifth item',
    icon: 'mail'
  }, {
    title: '第六项',
    link: '/six',
    id: 'sixth item',
    icon: 'calendar'
  }, {
    title: '第七项',
    link: '/seven',
    id: 'sevent item',
    icon: 'mail'
  }, {
    title: '第八项',
    link: '/eight',
    id: 'eight item',
    icon: 'calendar'
  }, {
    title: '第一项二级菜单',
    id: 'sub one',
    icon: 'mail',
    children: [{
      title: 'option 1',
      id: 'option 1',
      icon: 'mail',
      link: 'sub/one'
    }, {
      title: 'option 2',
      id: 'option 2',
      icon: 'setting',
      link: 'sub/two'
    }, {
      title: '三级子菜单',
      id: 'option 3',
      icon: 'calendar',
      children: [
        {
          title: 'option 3',
          id: 'option 13',
          icon: 'mail',
          link: 'sub/sub/1'
        }, {
          title: 'option 4',
          id: 'option 3',
          icon: 'calendar',
          link: 'sub/sub/2'
        }
      ]
    }]
  }, {
    title: '第二项二级菜单',
    id: 'sub two',
    icon: 'calendar',
    children: [{
      title: 'option 1',
      id: 'option 11',
      icon: 'calendar',
      link: 'sub1/one'
    }, {
      title: 'option 2',
      id: 'option 22',
      icon: 'calendar',
      link: 'sub1/two'
    }]
  }, {
    title: '第三项二级菜单',
    id: 'sub three',
    icon: 'appstore',
    children: [{
      title: 'option 1',
      id: 'option 14',
      icon: 'appstore',
      link: 'sub2/one'
    }, {
      title: 'option 2',
      id: 'option 24',
      icon: 'appstore',
      link: 'sub2/two'
    }]
  }, {
    title: '第四项二级菜单',
    id: 'sub four',
    icon: 'mail',
    children: [{
      title: 'option 1',
      id: 'option 15',
      icon: 'mail',
      link: 'sub3/one'
    }, {
      title: 'option 2',
      id: 'option 25',
      icon: 'setting',
      link: 'sub3/two'
    }]
  }, {
    title: '第五项二级菜单',
    id: 'sub five',
    icon: 'calendar',
    children: [{
      title: 'option 1',
      id: 'option 16',
      icon: 'calendar',
      link: 'sub4/one'
    }, {
      title: 'option 2',
      id: 'option 26',
      icon: 'calendar',
      link: 'sub4/two'
    }]
  }, {
    title: '第六项二级菜单',
    id: 'sub six',
    icon: 'appstore',
    children: [{
      title: 'option ',
      id: 'option 17',
      icon: 'appstore',
      link: 'sub5/one'
    }, {
      title: 'option 2',
      id: 'option 27',
      icon: 'appstore',
      link: 'sub5/two'
    }]
  }
]

export default menuList