import updateValue from '../updateValue';
import { initialState } from '../../index';
import { updateValue as updateValueAction } from '../../../actions';

test('updateValueController zero start', () => {
  const state = {
    ...initialState,
    currentValue: 0,
    displayValue: 'currentValue'
  };
  expect(updateValue(state, updateValueAction(5))).toEqual({
    ...state,
    currentValue: 5,
    displayValue: 'currentValue',
    opValue: null,
    lastValue: null
  });
});
test('updateValueController nonzero start', () => {
  const state = {
    ...initialState,
    currentValue: 2,
    displayValue: 'currentValue'
  };
  expect(updateValue(state, updateValueAction(5))).toEqual({
    ...state,
    currentValue: 25,
    displayValue: 'currentValue',
    opValue: null,
    lastValue: null
  });
});
test('updateValueController with opValue', () => {
  const state = {
    ...initialState,
    opValue: 2,
    currentValue: 2,
    displayValue: 'currentValue'
  };
  expect(updateValue(state, updateValueAction(5))).toEqual({
    ...state,
    currentValue: 5,
    displayValue: 'currentValue',
    opValue: null,
    lastValue: 2
  });
});

