import styled from "styled-components";

export const ButtonTip = styled.span`
    display: none;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);

    z-index: 9999;
    padding: 0.3rem;
    background-color: var(--primary-color);
    border-radius: 0 0 10px 10px;
;`

export const Button = styled.button`
  display: flex;
  place-content: center;
  place-items: center;
  overflow: hidden;

  gap: 5px;
  font-weight: 600;
  outline: none;
  background: none;
  border: none;

  height: 100%;
  
  background-color: var(--primary-color);
  padding: 0.5rem;
  
  color: white;

  transition: all 200ms ease-in-out;
  
  svg { 
    width: 20px;
    height: 20px;
  }

  cursor: pointer;

  &:hover {
    background-color: var(--primary-color-dark);
    
    ${ButtonTip} {
      display: inline-block;
      
    }
  }
`;

