import { HomeScreen, ProjectScreen, SkillsScreen } from 'screens'
import { ThemeProvider } from 'styled-components'
import { theme } from 'styles/themes'
import { GlobalStyle } from 'styles'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { ContactScreen } from 'screens/Contatos'

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <HomeScreen />
      <SkillsScreen id="habilidades"/>
      <ProjectScreen id="projetos"/>
      <ContactScreen id="contatos"/>
    </ThemeProvider>
  )
}

export default App
