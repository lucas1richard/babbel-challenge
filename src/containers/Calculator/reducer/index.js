import equalsController from './controllers/equals';
import updateValueController from './controllers/updateValue';
import {
  SAVE_MEMORY,
  UPDATE_VALUE,
  OPRERATION,
  EQUALS,
  CLEAR,
  RESTORE_MEMORY
} from '../constants';
import saveMemoryController from './controllers/saveMemory';
import restoreMemoryController from './controllers/restoreMemory';
import operationController from './controllers/operation';

export const initialState = {
  memory: 0,
  currentValue: 0,
  opValue: null,
  lastValue: null,
  displayValue: 'currentValue',
  operation: null
}

const calculatorReducer = (state = initialState, action) => {
  switch(action.type) {
    case CLEAR:
      return initialState;
    case SAVE_MEMORY:
      return saveMemoryController(state);
    case RESTORE_MEMORY:
      return restoreMemoryController(state);
    case UPDATE_VALUE:
      return updateValueController(state, action);
    case OPRERATION:
      return operationController(state, action);
    case EQUALS:
      return equalsController(state);
    default:
      return state;
  }
}

export default calculatorReducer;
