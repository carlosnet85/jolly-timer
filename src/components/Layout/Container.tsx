import styled from "styled-components";

const Container = styled.div<{ isTransparent?: boolean }>`
  width: ${props => props.isTransparent ? "auto" : "100vw"};
  height: ${props => props.isTransparent ? "auto" : "100vh"};

  font-size: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: white;
  
  background-color: ${props => props.isTransparent ? "transparent" : "var(--background-color)"};
  
  ${props => props.isTransparent ? '&:hover{background-color: var(--background-holding-color)}' : ''}
  
  border-radius: ${props => props.isTransparent ? "0" : "1rem"};
  transition: background-color 200ms ease-in-out;

`;

export default Container;

