import React from 'react';
import { connect } from 'react-redux';
import { requestBenches } from '../../actions/bench_actions';
import Search from './search';

const mapStateToProps = ({benches}) => ({
  benches
});

const mapDispatchToProps = (dispatch) => ({
  requestBenches: () => dispatch(requestBenches())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
