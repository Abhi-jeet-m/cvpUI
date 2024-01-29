import {routerReducer as routing} from 'react-router-redux';
import {combineReducers} from 'redux';

import bots from './botReducers';

import * as types from '../actions/types';

const rootReducer = combineReducers({
  bots,
  routing
});

export default rootReducer;
