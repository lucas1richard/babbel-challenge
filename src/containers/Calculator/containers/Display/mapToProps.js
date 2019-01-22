import { connect } from 'react-redux';

function mapStateToProps(state) {
  const { calculator } = state;
  return {
    displayValue: calculator[calculator.displayValue],
  };
}


const mapToProps = connect(mapStateToProps);

export default mapToProps;
