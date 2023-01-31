import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        --font-sans:'Montserrat', sans-serif;
        --background: #F9F9F9;
        --primary: #0F52BA;
        --white: #fff
    }
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-family: var(--font-sans);
        background: var(--background);
    }
    html {
    scrollbar-width: thin;
    scrollbar-color: #0F52BA;
  }
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: #F9F9F9;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #0F52BA;
    border: 3px solid #0F52BA;
    border-radius: 10px;
  }
`;