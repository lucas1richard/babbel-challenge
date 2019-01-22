function operationController(state, action) {
  return {
    ...state,
    operation: action.operation,
    lastValue: state.currentValue,
    displayValue: 'lastValue',
    currentValue: 0,
    opValue: null
  };
}

export default operationController;
