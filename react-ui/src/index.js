import React from 'react'
import ReactDOM from 'react-dom'

import AppRoutes from './AppRoutes'
import 'assets/scss/material-kit-react.scss?v=1.8.0'
import { CssBaseline } from '@material-ui/core'

const render = (Component) => {
  ReactDOM.render(
    <React.Fragment>
      <CssBaseline />
      <Component />
      </React.Fragment>,
    document.getElementById('root')
  )
}

render(AppRoutes)
