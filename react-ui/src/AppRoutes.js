import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Loadable from 'react-loadable'
import { AppContainer, hot } from 'react-hot-loader'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import configureStore from './store/index'
import Loading from './components/Loading/index.js'
import ProtectedRoute from './ProtectedRoutes'

const AsyncHome = Loadable({
  loader: () => import('./containers/Home/index.js'),
  modules: ['./containers/Home/index.js'],
  loading: Loading,
})

const AsyncAuth = Loadable({
  loader: () => import('./containers/Auth/index.js'),
  modules: ['./containers/Auth/index.js'],
  loading: Loading,
})

const AsyncFeedback = Loadable({
  loader: () => import('./containers/Feedback/index.js'),
  modules: ['./containers/Feedback/index.js'],
  loading: Loading,
})

const AsyncDevelopers = Loadable({
  loader: () => import('./containers/Developers/index.js'),
  modules: ['./containers/Developers/index.js'],
  loading: Loading,
})

const AsyncFaq = Loadable({
  loader: () => import('./containers/FAQs/index.js'),
  modules: ['./containers/FAQs/index.js'],
  loading: Loading,
})

const AsyncChat = Loadable({
  loader: () => import('./containers/ChatBox/Chat/Chat.js'),
  modules: ['./containers/ChatBox/Chat/Chat.js'],
  loading: Loading,
})

const AsyncJoin = Loadable({
  loader: () => import('./containers/ChatBox/Join/Join.js'),
  modules: ['./containers/ChatBox/Join/Join.js'],
  loading: Loading,
})

const AsyncDR = Loadable({
  loader: () => import('./containers/Models/drModel/index.js'),
  modules: ['./containers/Models/drModel/index.js'],
  loading: Loading,
})

const AsyncBT = Loadable({
  loader: () => import('./containers/Models/btModel/index.js'),
  modules: ['./containers/Models/btModel/index.js'],
  loading: Loading,
})

const AsyncSC = Loadable({
  loader: () => import('./containers/Models/scModel/index.js'),
  modules: ['./containers/Models/scModel/index.js'],
  loading: Loading,
})

const store = configureStore()

class AppRoutes extends Component {
  render() {
    return (
      <AppContainer>
        <Provider store={store}>
          <BrowserRouter>
            <Switch>
              <Route exact path='/' component={AsyncHome} />
              <Route exact path='/auth' component={AsyncAuth} />
              <Route exact path='/developers' component={AsyncDevelopers} />
              <Route exact path='/faq' component={AsyncFaq} />
              <ProtectedRoute exact path='/feedback' component={AsyncFeedback} />
              <ProtectedRoute exact path='/join' component={AsyncJoin} />
              <ProtectedRoute exact path='/chat' component={AsyncChat} />
              <ProtectedRoute exact path='/diabetic_retinopathy' component={AsyncDR} />
              <ProtectedRoute exact path='/brain_tumor' component={AsyncBT} />
              <ProtectedRoute exact path='/skin_cancer' component={AsyncSC} />
            </Switch>
          </BrowserRouter>
        </Provider>
      </AppContainer>
    )
  }
}

export default hot(module)(AppRoutes)
