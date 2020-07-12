import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
  }
  body {
      background: #f0f0f0;
      height: 100vh;
      margin: 30px auto;
      overscroll-behavior: none;
      width: 100%;
        }
        
  *, *::before, *::after {
    box-sizing: inherit;
  }
        
  ul, li, h1, h2, p, button {
    margin: 0;
  }

  h3{
    color:#393939;
    margin:10px 0px;
  }

  hr{
    border-top: 1px #9D9D9D;
  }

  ul {
    list-style: none;
  }

  button {
    background: transparent;
    border: 0;
    outline: 0;
  }
  a{
    text-decoration:none;
  }
`

