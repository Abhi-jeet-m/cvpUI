import createHistory from 'history/createBrowserHistory';
import {applyMiddleware, createStore} from 'redux';
import {routerMiddleware} from 'react-router-redux';
import rootReducer from '../Reducers/RootReducers';
import thunk from 'redux-thunk';

export const history = createHistory();
const middleware = routerMiddleware(history);

export function configureStore(initialState) {
  return createStore(rootReducer, initialState, applyMiddleware(thunk, middleware));
}