import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import '@/presentation/styles/global.scss'

import { Login } from '@/presentation/pages'

export const Router: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login/" exact component={Login} />
    </Switch>
  </BrowserRouter>
)
