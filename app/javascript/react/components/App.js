import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import WineContainer from './wines/WineContainer';
import WineShowContainer from './wines/WineShowContainer';
import NewWineContainer from './wineform/NewWineContainer'

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={WineContainer} />
        <Route exact path='/wines' component={WineContainer} />
        <Route exact path='/new' component={NewWineContainer} />
        <Route exact path='/wines/:id' component={WineShowContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
