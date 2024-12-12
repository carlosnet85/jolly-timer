import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --primary-color: rgb(237, 113, 121);
        --primary-color-dark: rgb(215, 93, 101);
        --background-color: rgb(56, 57, 77);
        --background-holding-color: rgba(255, 0, 0, 0.5);
        --foreground-color: rgb(92, 94, 121);
        --foreground-color-transparent: rgba(56, 57, 77, 0.5);
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body { 
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        min-width: 100vw;

        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; 

        overflow: hidden;
      
    }
`;
