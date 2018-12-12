import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Main from './views/main'
import Login from './views/login'
import InitPage from './components/initPage/view'
import FirstPage from './components/firstPage/view'

const NavWrapper = props => {
  return (
    <Main {...props}>
      <Switch>
        <Route path="/" exact component={InitPage} />
        <Route path='/dashbord' component={FirstPage}/>
        <Route path='/direct-page' component={FirstPage}/>
        <Route path='/permission' component={FirstPage}/>
        <Route path='/form' component={FirstPage}/>
        <Route path='/normal-table' component={FirstPage}/>
        <Route path='/select-sort-table' component={FirstPage}/>
        <Route path='/tree-table' component={FirstPage}/>
        <Route path='/editor-table' component={FirstPage}/>
        <Route path='/drag-table' component={FirstPage}/>
        <Route path='/icon' component={FirstPage}/>
        <Route path='/pie' component={FirstPage}/>
        <Route path='/charts' component={FirstPage}/>
        <Route path='/others' component={FirstPage}/>
        <Route path='/editor' component={FirstPage}/>
        <Route path='/Markdown' component={FirstPage}/>
        <Route path='/artical-list' component={FirstPage}/>
        <Route path='/can-drag' component={FirstPage}/>
        <Route path='/subMenu1/subMenu1-1' component={FirstPage}/>
        <Route path='/subMenu1/subMenu1-2' component={FirstPage}/>
        <Route path='/subMenu1-3-1' component={FirstPage}/>
        <Route path='/subMenu1-3-2' component={FirstPage}/>
        <Route path='/subMenu2' component={FirstPage}/>
        <Route path='/notFound' component={FirstPage}/>
        <Route path='/animated1' component={FirstPage}/>
        <Route path='/animated2' component={FirstPage}/>
        <Route path='/animated3' component={FirstPage}/>
        <Route path='/animated4' component={FirstPage}/>
        <Route path='/setting' component={FirstPage}/>
        <Route path='/language' component={FirstPage}/>
        <Route path='/about' component={FirstPage}/>
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
