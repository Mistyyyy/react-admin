import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Main from './views/main'
import Login from './views/login'
import InitPage from './components/initPage/view'
import Layout from './components'

const NavWrapper = props => {
  return (
    <Main {...props}>
      <Switch>
        <Route path="/" exact component={InitPage} />
        <Route path='/dashbord' component={Layout.Dashbord}/>
        <Route path='/direct-page' component={Layout.Direct}/>
        <Route path='/permission' component={Layout.Permission}/>
        <Route path='/form' component={Layout.Form}/>
        <Route path='/normal-table' component={Layout.NormalTable}/>
        <Route path='/select-sort-table' component={Layout.SortSelect}/>
        <Route path='/tree-table' component={Layout.TreeTable}/>
        <Route path='/editor-table' component={Layout.EditTable}/>
        <Route path='/drag-table' component={Layout.DragTable}/>
        <Route path='/icon' component={Layout.Icon}/>
        <Route path='/pie' component={Layout.Charts}/>
        <Route path='/charts' component={Layout.Charts}/>
        <Route path='/others' component={Layout.Charts}/>
        <Route path='/editor' component={Layout.Components}/>
        <Route path='/Markdown' component={Layout.Components}/>
        <Route path='/artical-list' component={Layout.Components}/>
        <Route path='/can-drag' component={Layout.Components}/>
        <Route path='/subMenu1/subMenu1-1' component={Layout.Nested}/>
        <Route path='/subMenu1/subMenu1-2' component={Layout.Nested}/>
        <Route path='/subMenu1-3-1' component={Layout.Nested}/>
        <Route path='/subMenu1-3-2' component={Layout.Nested}/>
        <Route path='/subMenu2' component={Layout.Nested}/>
        <Route path='/notFound' component={Layout.Error}/>
        <Route path='/animated1' component={Layout.Animate}/>
        <Route path='/animated2' component={Layout.Animate}/>
        <Route path='/animated3' component={Layout.Animate}/>
        <Route path='/animated4' component={Layout.Animate}/>
        <Route path='/setting' component={Layout.Setting}/>
        <Route path='/language' component={Layout.Language}/>
        <Route path='/about' component={Layout.About}/>
      </Switch>
    </Main>
  )
}
class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={NavWrapper}/>
        <Route path="/login" component={Login} />
      </Switch>
    )
  }
}

export default App;
