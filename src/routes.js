import React from 'react'
import { Route, Switch } from 'react-router'
import ListPage from './pages/ListPage'
import ItemPage from './pages/ItemPage'
import FormsPage from './pages/FormsPage'

/*
 @see https://github.com/supasate/connected-react-router/blob/master/FAQ.md
 */
const routes = (
  <div>
    <Switch>
      <Route exact path="/" component={ListPage} />
      <Route path="/:name/forms" component={FormsPage} />
      <Route path="/:name" component={ItemPage} />
    </Switch>
  </div>
)

export default routes
