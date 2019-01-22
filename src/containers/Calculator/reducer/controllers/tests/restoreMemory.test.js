import restoreMemory from '../restoreMemory';
import { initialState } from '../../index';

test('restoreMemoryController', () => {
  const state = {
    ...initialState,
    memory: 5
  }
  expect(restoreMemory(state)).toEqual({
    ...state,
    currentValue: state.memory,
    displayValue: 'currentValue'
  });
});
