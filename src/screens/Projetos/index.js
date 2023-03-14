import { ProjectContainer } from './styles'
import { Title, ProjectCard } from 'components'

export const ProjectScreen = () => {
  return (
    <ProjectContainer>
      <Title
        fontSize="52"
        align
        color={({ theme }) => theme.colors.primary}
        mb="64"
        mt="100"
      >
        #Últimos Projetos
      </Title>
      <ProjectCard name="bookClub" number=" 3" subtitle="BookClub" vercelLink="https://bookclub-web-app.vercel.app/" GithubLink="https://github.com/MarcusCastroV/bookclub-web" description="O projeto consiste na criação de uma estante de livros virtual, com o objetivo de organizar melhor as leituras atuais e futuras de um usuário. "/>
      <ProjectCard name="supermarketApp" number=" 2" subtitle="Supermarket App"/>
      <ProjectCard name="walletApp" number=" 1" subtitle="Wallet App"/>
    </ProjectContainer>
  )
}
