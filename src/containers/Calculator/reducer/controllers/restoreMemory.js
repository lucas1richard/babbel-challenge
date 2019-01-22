function restoreMemoryController(state) {
  return {
    ...state,
    currentValue: state.memory,
    displayValue: 'currentValue'
  };
}

export default restoreMemoryController;
