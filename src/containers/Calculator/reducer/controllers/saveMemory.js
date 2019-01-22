function saveMemoryController(state) {
  return {
    ...state,
    memory: state[state.displayValue]
  };
}

export default saveMemoryController;
