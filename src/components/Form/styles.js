import styled from 'styled-components';

export const Form = styled.form`
  position: fixed;
  right: ${(props) => props.opened ? 30 : 50}px;
  bottom: ${(props) => props.opened ? 30 : 50}px;
  display: block;
  width: ${(props) => props.opened ? 600 : 40}px;
  height: ${(props) => props.opened ? 80 : 40}px;
  border-radius: 80px;
  box-shadow: 0 0 8px rgba(0, 0, 0, .3);
  background: #FFF;
  opacity: ${(props) => props.opened ? 1 : 0};
  transition: all 250ms linear;
`;

export const LabelFixed = styled.label`
  position: absolute;
  top: -26px;
  left: 32px;
  display: flex;
  align-items: center;
  color: #FFF; 
  font-size: 14px;
  cursor: pointer;

  svg {
    margin-right: 6px;
  }
`;

export const Input = styled.input`
  width: calc(100% - 80px);
  height: 62px;
  padding: 8px 0;
  margin: 8px;
  font-size: 20px;
  text-align: center;
  color: rgba(0, 0, 0, .5);
  border: none;
  background: transparent;
`;

export const Button = styled.button`
  position: fixed;
  right: 40px;
  bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border: none;
  border-radius: 30px;
  box-shadow: 0 0 8px rgba(0, 0, 0, .3);
  transform: scale(.9) ${(props) => props.opened ? 'rotate(0)' : 'rotate(180deg)'};
  transition: all 250ms linear;
  background-color: ${(props) => props.opened ? '#2ECC71' : '#FFF'};

  &:disabled {
    background: rgba(0, 0, 0, .4);
    opacity: .5;
    pointer-events: none;
  }

  &:hover {
    transform: scale(1) ${(props) => props.opened ? 'rotate(0)' : 'rotate(180deg)'};
    cursor: pointer;
  }
`;
