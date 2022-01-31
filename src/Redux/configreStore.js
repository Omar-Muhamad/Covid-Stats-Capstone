import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import allCountriesReducer from './allCountries/allCountries';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
  allCountries: allCountriesReducer,
});

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk, logger)),
);

export default store;
