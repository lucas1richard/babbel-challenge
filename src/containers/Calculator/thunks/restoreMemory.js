import { restoreMemory } from "../actions";

const restoreMemoryThunk = () => (dispatch) => {
  dispatch(restoreMemory());
}

export default restoreMemoryThunk;