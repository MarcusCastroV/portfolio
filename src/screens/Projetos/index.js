import { ProjectContainer } from './styles'
import { Title, ProjectCard } from 'components'

export const ProjectScreen = () => {
  return (
    <ProjectContainer id="projetos">
      <Title
        data-aos="zoom-in"
        fontSize="52"
        align="center"
        mw="auto"
        color={({ theme }) => theme.colors.primary}
        mt="100"
      >
        Portfólio de
        <Title
          fontSize="52"
          align="center"
          color={({ theme }) => theme.colors.secondary}
          mw="auto"
          mb="64"
        >
          Projetos
        </Title>
      </Title>
      <ProjectCard
        name="bookClub"
        number=" 3"
        subtitle="BookClub"
        vercelLink="https://bookclub-web-app.vercel.app/"
        GithubLink="https://github.com/MarcusCastroV/bookclub-web"
        description="O projeto consiste na criação de uma estante de livros virtual, com o objetivo de organizar melhor as leituras atuais e futuras de um usuário. "
      />
      <ProjectCard
        name="supermarketApp"
        number=" 2"
        subtitle="Supermarket App"
      />
      <ProjectCard
        name="walletApp"
        number=" 1"
        subtitle="Wallet App"
      />
    </ProjectContainer>
  )
}
