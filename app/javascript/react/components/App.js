import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import WineContainer from './wines/WineContainer';

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={WineContainer} />
        <Route exact path='/wines' component={WineContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
