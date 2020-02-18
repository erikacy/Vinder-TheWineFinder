import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import WineContainer from './wines/WineContainer';
import WineShowContainer from './wines/WineShowContainer';
import NewWineContainer from './wineform/NewWineContainer';
import SearchPageContainer from './search/SearchPageContainer';
import PairContainer from './pairing/PairContainer';
import UserContainer from './user/UserContainer';

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={WineContainer} />
        <Route exact path='/wines' component={WineContainer} />
        <Route exact path='/new' component={NewWineContainer} />
        <Route exact path='/search' component={SearchPageContainer} />
        <Route exact path='/wines/:id' component={WineShowContainer} />
        <Route exact path='/pairs' component={PairContainer} />
        <Route exact path='/user_wines' component={UserContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
