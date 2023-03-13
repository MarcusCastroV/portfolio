import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`  
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  
  font-family: 'Avenir Next', sans-serif;
  color: ${({ theme }) => theme.colors.text};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
  monospace;
}

`
