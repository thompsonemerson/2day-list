import React from 'react';
import styled from 'styled-components';

const Progress = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 5px;
  background: transparent;
`;

const _Bar = styled.div`
  display: block;
  width: 0%;
  height: 100%;
  background: rgba(0, 0, 0, .3);
`;

export default ({ percentage }) => {
  const Bar = styled(_Bar)`
    width: ${percentage}%;
  `;

  return (
    <Progress>
      <Bar/>
    </Progress>
  );
}
