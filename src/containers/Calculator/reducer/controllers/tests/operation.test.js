import operation from '../operation';
import { initialState } from '../../index';
import { operation as operationAction } from '../../../actions';
import {
  addition,
  subtraction,
  multiplication,
  division
} from '../../../constants';

test('equalsController addition operation', () => {
  expect(operation(initialState, operationAction(addition))).toEqual({
    ...initialState,
    operation: addition,
    lastValue: initialState.currentValue,
    displayValue: 'lastValue',
    currentValue: 0,
    opValue: null
  });
});
test('equalsController subtraction operation', () => {
  expect(operation(initialState, operationAction(subtraction))).toEqual({
    ...initialState,
    operation: subtraction,
    lastValue: initialState.currentValue,
    displayValue: 'lastValue',
    currentValue: 0,
    opValue: null
  });
});
test('equalsController multiplication operation', () => {
  expect(operation(initialState, operationAction(multiplication))).toEqual({
    ...initialState,
    operation: multiplication,
    lastValue: initialState.currentValue,
    displayValue: 'lastValue',
    currentValue: 0,
    opValue: null
  });
});
test('equalsController division operation', () => {
  expect(operation(initialState, operationAction(division))).toEqual({
    ...initialState,
    operation: division,
    lastValue: initialState.currentValue,
    displayValue: 'lastValue',
    currentValue: 0,
    opValue: null
  });
});

