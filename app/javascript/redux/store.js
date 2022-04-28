import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import greetingsReducer from './greetings/greetings.js';

const reducer = combineReducers({
  greetingsReducer
});

const store = createStore(
  reducer, applyMiddleware(thunk),
);

export default store;