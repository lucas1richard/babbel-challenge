import saveMemory from '../saveMemory';
import { initialState } from '../../index';

test('saveMemoryController', () => {
  const state = {
    ...initialState,
    currentValue: 5,
    displayValue: 'currentValue'
  };
  expect(saveMemory(state)).toEqual({
    ...state,
    memory: state[state.displayValue],
    displayValue: 'currentValue'
  });
});
