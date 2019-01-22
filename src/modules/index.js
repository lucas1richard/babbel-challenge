import { combineReducers } from 'redux'
import counter from './counter'
import calculator from './../containers/Calculator/reducer';

export default combineReducers({
  counter,
  calculator
});
