import { HomeScreen, ProjectScreen } from 'screens'
import { ThemeProvider } from 'styled-components'
import { theme } from 'styles/themes'
import { GlobalStyle } from 'styles'
import { Habilidades } from 'screens/Habilidades'
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <HomeScreen />
      <Habilidades/>
      <ProjectScreen />
    </ThemeProvider>
  )
}

export default App
