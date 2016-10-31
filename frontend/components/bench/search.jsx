import React from 'react';
import BenchMap from './bench_map';
import BenchIndex from './bench_index';


export default ({benches, requestBenches}) => (
  <div>
    <BenchMap />
    <BenchIndex benches={benches} requestBenches={requestBenches}/>
  </div>
);
