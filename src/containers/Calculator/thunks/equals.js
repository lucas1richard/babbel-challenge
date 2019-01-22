import { equals } from "../actions";

const equalsThunk = () => (dispatch) => {
  dispatch(equals());
}

export default equalsThunk;