import styled from 'styled-components';

export const Form = styled.form`
  position: relative;
  display: flex;
  width: 100%;
  margin-top: 32px;
`;

export const Input = styled.input`
  width: 100%;
  height: 60px;
  padding: 0 80px 0 24px;
  font-size: 18px;
  color: #FFF;
  background: transparent;
  border: 1px solid rgba(0, 0, 0, .2);
`;

export const Button = styled.button`
  position: absolute;
  top: calc(50% - 25px);
  right: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background: rgba(0, 0, 0, 0);
  border: none;
  border-radius: 25px;
  transition: all 250ms linear;
  transform: scale(0);

  &:hover {
    background: rgba(0, 0, 0, .2);
    cursor: pointer;
  }

  &.show {
    transform: scale(1) rotate(180deg);
  }
`;
