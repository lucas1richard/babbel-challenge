import { clear } from '../actions';

const resetThunk = () => (dispatch) => {
  dispatch(clear());
}

export default resetThunk;
