import {
  addition,
  subtraction,
  multiplication,
  division
} from '../../constants';

function equalsController(state) {
  let currentVal = state.currentValue;
  let lastVal = state.lastValue;

  if (state.operation === addition) {
    if (state.opValue !== null) {
      currentVal = state.opValue + state.currentValue;
    } else {
      currentVal = state.lastValue + state.currentValue;
    }
    lastVal = state.currentValue;
  }

  if (state.operation === subtraction) {
    if (state.opValue !== null) {
      currentVal = state.currentValue - state.opValue;
    } else {
      currentVal = state.lastValue - state.currentValue
    }
  }

  if (state.operation === multiplication) {
    if (state.opValue !== null) {
      currentVal = state.currentValue * state.opValue;
    } else {
      currentVal = state.lastValue * state.currentValue
    }
  }

  if (state.operation === division) {
    if (state.opValue !== null) {
      currentVal = state.currentValue / state.opValue;
    } else {
      currentVal = state.lastValue / state.currentValue
    }
  }
  
  return {
    ...state,
    currentValue: currentVal,
    lastValue: lastVal,
    opValue: state.opValue || state.currentValue
  };
}

export default equalsController;
