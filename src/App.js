import { HomeScreen } from 'screen'
import { ThemeProvider } from 'styled-components'
import { theme } from 'styles/themes'
import { GlobalStyle } from 'styles'
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <HomeScreen />
    </ThemeProvider>
  )
}

export default App
