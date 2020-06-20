
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/index.js'

const middleware = [thunk]

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and
  // other options if needed
})

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
  // other store enhancers if any
)

export default function () {
  const store = createStore(rootReducer, enhancer)

  if (module.hot) {
    module.hot.accept('../reducers',
      () => store.replaceReducer(require('../reducers').default)) //eslint-disable-line
  }

  return store
}
