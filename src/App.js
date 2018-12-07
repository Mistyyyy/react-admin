import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Main from './views/main'
import Login from './views/login'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Main}/>
          <Route path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
