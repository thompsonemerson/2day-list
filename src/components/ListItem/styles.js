import styled from 'styled-components';

export const Item = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  height: 60px;
  font-size: 22px;
  color: #FFF;
  padding: 0 24px;
  transition: all 250ms linear;

  & > svg {
    margin-right: 8px;
    fill: rgba(255, 255, 255, .2);
  }

  & + li {
    border-top: 1px solid rgba(0, 0, 0, .2);
  }

  &:hover {
    background: rgba(0, 0, 0, .2);
    cursor: pointer;

    button {
      width: 60px;
      opacity: 1;
    }
  }

  &.checked {
    color: rgba(255, 255, 255, .2);

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: -10px;
      width: calc(100% + 20px);
      height: 1px;
      background: rgba(255, 255, 255, .2);
    }
  }
`;

export const Icon = styled.button`
  position: absolute;
  width: 0;
  height: 100%;
  left: 100%;
  border: none;
  background: #E74C3C;
  transition: all 250ms linear;
  opacity: 0;

  &:hover {
    background: #C0392B;
    cursor: pointer;
  }
`;
