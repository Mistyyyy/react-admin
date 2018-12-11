import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Main from './views/main'
import Login from './views/login'
import InitPage from './components/initPage/init'
import FirstPage from './components/firstPage/firstPage'

const NavWrapper = (props) => {
  console.log(props)
  return (
    <Main {...props}>
      <Switch>
        <Route path="/" exact component={InitPage} />
        <Route path='/one' component={FirstPage}/>
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
