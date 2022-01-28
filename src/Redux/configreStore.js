import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import counterReducer from './counter/counter';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
  counter: counterReducer,
});

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk, logger)),
);

export default store;
