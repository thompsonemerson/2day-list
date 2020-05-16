import React from 'react';

import { Progress, Bar } from './styles';

export default ({ percentage }) => {
  return (
    <Progress>
      <Bar percentage={percentage}/>
    </Progress>
  );
}
