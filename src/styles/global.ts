import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100vh;
    min-height: 100vh;
  }

  a {
    color:inherit;
    text-decoration: none;
  }

  body{
    background:#FAFAFA;
    color: #424242;
    -webkit-font-smoothing: antialiased;
    ::-webkit-scrollbar {
      display: none;
    }
  }

  body, input, button{
    font-family:'Roboto Slab', serif;
  }

  h1,h2,h3,h4,h5,h6, strong{
    font-weight : 500;
  }

 ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }

`;
