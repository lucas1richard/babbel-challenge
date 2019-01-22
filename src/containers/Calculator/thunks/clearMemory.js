import { clearMemory } from "../actions";

const clearMemoryThunk = () => (dispatch) => {
  dispatch(clearMemory());
}

export default clearMemoryThunk;