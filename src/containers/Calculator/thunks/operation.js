import { operation } from "../actions";

const operationThunk = (type) => (dispatch) => {
  dispatch(operation(type));
}

export default operationThunk;