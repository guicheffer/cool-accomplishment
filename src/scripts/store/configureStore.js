import { createStore, applyMiddleware, compose } from 'redux';
import promise from 'redux-promise';

import * as isProduction from '../helpers/env'

const enhancer = applyMiddleware(promise);

export default function configureStore(reducers, initialState) {
  if (isProduction) {
    return createStore(reducers, initialState, enhancer);
  } else {
    const finalCreateStore = compose(
      applyMiddleware(promise),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )(createStore);

    const store = finalCreateStore(reducers, initialState);

    if (module.hot) {
      // Enable Webpack hot module replacement for reducers
      module.hot.accept('../reducers', () => {
        const nextReducer = require('../reducers');
        store.replaceReducer(nextReducer);
      });
    }

    return store;
  }
};
