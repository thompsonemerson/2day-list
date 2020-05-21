import styled from 'styled-components';

export const Progress = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 5px;
  background: transparent;
`;

export const Bar = styled.div`
  display: block;
  width: ${(props) => props.percentage}%;
  height: 100%;
  background: #FFF;
`;
