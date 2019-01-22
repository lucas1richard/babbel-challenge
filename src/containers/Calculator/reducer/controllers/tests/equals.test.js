import equals from '../equals';
import { initialState } from '../../index';
import {
  addition,
  subtraction,
  multiplication,
  division
} from '../../../constants';

test('equalsController multiplication', () => {
  const state = {
    ...initialState,
    operation: multiplication,
    currentValue: 3,
    lastValue: 2
  }
  expect(equals(state).currentValue).toBe(6);
  state.opValue = 3;
  expect(equals(state).currentValue).toBe(9);
});

test('equalsController addition', () => {
  const state = {
    ...initialState,
    operation: addition,
    currentValue: 3,
    lastValue: 2
  }
  expect(equals(state).currentValue).toBe(5);
  state.opValue = 3;
  expect(equals(state).currentValue).toBe(6);
});

test('equalsController subtraction', () => {
  const state = {
    ...initialState,
    operation: subtraction,
    currentValue: 3,
    lastValue: 2
  }
  expect(equals(state).currentValue).toBe(-1);
  state.opValue = 3;
  expect(equals(state).currentValue).toBe(0);
});

test('equalsController division', () => {
  const state = {
    ...initialState,
    operation: division,
    currentValue: 3,
    lastValue: 2
  }
  expect(equals(state).currentValue).toBe(2/3);
  state.opValue = 3;
  expect(equals(state).currentValue).toBe(1);
});

