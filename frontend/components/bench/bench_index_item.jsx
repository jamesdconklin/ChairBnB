import React from 'react';

export default ({bench}) => (
  <li>{bench.description} @ ({bench.lat},{bench.lng})</li>
);
