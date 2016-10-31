import React from 'react';
import BenchIndexItem from './bench_index_item';

class BenchIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestBenches();
  }

  render() {
    console.log("Render props", this.props);
    let comp;
    if (this.props.benches.length) {
      comp = (
        <ul>
          {this.props.benches.map(
            (bench) => < BenchIndexItem key={bench.id} bench={bench}/>
          )}
        </ul>
      );
    } else {
      comp = <p>No benches found</p>;
    }
    return comp;
  }
}

export default BenchIndex;
