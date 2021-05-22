import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';  
import rootReducer, {rootSaga} from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createWrapper } from 'next-redux-wrapper';

const configureStore = (initialState, options) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  
  const enhancer = process.env.NODE_ENV === 'production' ? 
    compose(
      applyMiddleware(...middlewares)) : 
        composeWithDevTools(
          applyMiddleware(...middlewares)
        );

  const store = createStore(rootReducer, initialState, enhancer);
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
}

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === 'development'
});

export default wrapper;