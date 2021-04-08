import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #ffffff;
    --background-header:  #C72828;
    --card-image: #FFB84D;
    --card-body: #F0F0F5;
    --card-footer: #E4E4EB;
    --texts: #6C6C80;
    --titles: #3D3D4D;
    --text-input: #B7B7CC;
    --background-input: #ffffff;
    --background-btn: #39B100;
    --text-btn: #ffffff;
    --positive: #39B100;
    --negative: #C72828;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  html {
    @media(max-width: 1080px) {
      font-size: 93.75%;
    }
    @media(max-width: 728px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }
`;
