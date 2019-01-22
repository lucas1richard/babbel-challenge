import { updateValue } from "../actions";

const updateValueThunk = (number, valueType) => (dispatch) => {
  dispatch(updateValue(number, valueType));
}

export default updateValueThunk;