import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { DefaultPage } from './pages/DefaultPage'
import { GlobalStyle } from './styles'


export const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/post/:url' render={() => <DefaultPage title='Pagina de Propiedad' />} />
        <Route render={() => <DefaultPage title='Pagina no encontrada' />} />
      </Switch>
    </Router>
  )
}

