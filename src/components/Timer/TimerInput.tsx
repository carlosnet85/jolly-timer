import styled from "styled-components";


const TimerInput = styled.input<{isVisible?: boolean}>`
  outline: none;
  border: none;
  text-align: center;

  color: white;
  border-radius: 5px;
  font-size: calc(10vh + 10vw); 
  opacity: ${props => props.isVisible ? 1 : 0.2};
  margin: 0;

  appearance: textfield;
  -moz-appearance: textfield;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  transition: all 100ms ease-in-out;
`;

export default TimerInput;