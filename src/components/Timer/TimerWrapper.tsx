import styled from "styled-components";

const TimerWrapper = styled.div<{ isTransparent?: boolean }>`
  display: flex;
  width: 100%;
  height: 100vh;
  
  place-items: center;
  place-content: ${(props) => (props.isTransparent ? "start" : "center")};
  background: transparent;
  font-size: calc(10vh + 10vw);
  margin: 0;

  padding: ${(props) => (props.isTransparent ? "0.3rem" : "0")};

  input {
    background:
      ${(props) =>
        props.isTransparent ? "var(--foreground-color-transparent)" : "var(--foreground-color)"};
    width: ${props => props.isTransparent ? "100%" : "20%"};
    height: ${props => props.isTransparent ? "100%" : "auto"};
  }
`;

export default TimerWrapper;
