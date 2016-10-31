import { REQUEST_BENCHES, RECEIVE_BENCHES } from '../actions/bench_actions';
import { receiveBenches } from '../actions/bench_actions';
import { fetchBenches } from '../util/bench_api_util';

const BenchesMiddleware = ({ getState, dispatch }) => next => action => {
  const requestbenchesSuccess = (data) => dispatch(receiveBenches(data));
  switch (action.type) {
    case REQUEST_BENCHES:
      fetchBenches(requestbenchesSuccess);
    default:
      return next(action);
  }
};

export default BenchesMiddleware;
