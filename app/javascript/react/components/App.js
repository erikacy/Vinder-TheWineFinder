import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import WineContainer from './wines/WineContainer';
import WineShowContainer from './wines/WineShowContainer';

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={WineContainer} />
        <Route exact path='/wines' component={WineContainer} />
        <Route exact path='/wines/:id' component={WineShowContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
