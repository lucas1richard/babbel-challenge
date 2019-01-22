function updateValueController(state, action) {
  let currentVal;
  let lastVal;

  if (state.opValue !== null) {
    currentVal = action.number;
    lastVal = state.opValue;
  } else {
    currentVal = parseFloat(state.currentValue + action.number.toString())
    lastVal = state.lastValue;
  }

  return {
    ...state,
    currentValue: currentVal,
    displayValue: 'currentValue',
    opValue: null,
    lastValue: lastVal
  };
}

export default updateValueController;
