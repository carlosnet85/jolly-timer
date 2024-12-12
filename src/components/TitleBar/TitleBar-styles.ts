import styled from "styled-components";

export const TitleBar = styled.div<{ isTransparent: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  
  height: ${props => props.isTransparent ? "0" : "40px"};
  place-items: center;
  place-content: space-between;

  overflow: hidden;
  background-color: ${props => props.isTransparent ? "transparent" : "var(--foreground-color)"};
  border-radius: ${props => props.isTransparent ? "0" : "1rem 1rem 0 0"};
`;