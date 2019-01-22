import { saveMemory } from "../actions";

const saveMemoryThunk = () => (dispatch) => {
  dispatch(saveMemory());
}

export default saveMemoryThunk;