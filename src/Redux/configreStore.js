import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import allCountriesReducer from './allCountries/allCountries';
import regionReducer from './region/region';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
  allCountries: allCountriesReducer,
  region: regionReducer,
});

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk, logger)),
);

export default store;
