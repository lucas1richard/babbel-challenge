import { connect } from 'react-redux';
import saveMemory from './thunks/saveMemory';
import updateValue from './thunks/updateValue';
import operation from './thunks/operation';
import equals from './thunks/equals';
import reset from './thunks/reset';
import restoreMemory from './thunks/restoreMemory';

export function mapStateToProps(state) {
  return state.calculator;
}

export function mapDispatchToProps(dispatch) {
  return {
    saveMemory: (number) => dispatch(saveMemory(number)),
    updateValue: (number, valueType) => dispatch(updateValue(number, valueType)),
    equals: () => dispatch(equals()),
    reset: () => dispatch(reset()),
    restoreMemory: () => dispatch(restoreMemory()),
    operation: (op) => dispatch(operation(op))
  };
}

const mapToProps = connect(mapStateToProps, mapDispatchToProps);

export default mapToProps;
