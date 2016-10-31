import { RECEIVE_BENCHES } from '../actions/bench_actions';
import { merge } from 'lodash';

const BenchesReducer = (state, action) => {
  Object.freeze(state);
  var newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_BENCHES:
      console.log("BenchesReducer RECEIVE_BENCHES caught", action);
      return action.benches;
    default:
      console.log("BenchesReducer default caught", action);
      return newState;
  }
};

export default BenchesReducer;
