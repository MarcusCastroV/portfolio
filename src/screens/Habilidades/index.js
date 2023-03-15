import { Cards, Title } from 'components'
import { SkillsCards, ScreenContainer } from './styles'
const skill = ['Git', 'Github', 'Docker', 'Insomnia']
const front = [
  'JavaScript',
  'HTML',
  'CSS',
  'React.js',
  'Redux',
  'Styled Components',
  'Context API',
  'Axios',
  'React Query',
  'Atomic Design',
  'React Router'
]
const back = [
  'JavaScript',
  'Node.js',
  'SQL',
  'Express',
  'Autenticação JWT',
  'Sequelize',
  'Mongoose',
  'Postgres',
  'MongoDB',
  'MongoDB Atlas',
  'Heroku',
  'AWS'
]
export const SkillsScreen = () => {
  return (
    <ScreenContainer id="habilidades">
      <Title
        data-aos="fade-right"
        fontSize="52"
        mw="auto"
        color={({ theme }) => theme.colors.secondary}
        align="center"
      >
        Habilidades que
      </Title>
      <Title
        data-aos="fade-right"
        fontSize="52"
        mw="auto"
        color={({ theme }) => theme.colors.primary}
      >
        domino.
      </Title>
      <SkillsCards data-aos="zoom-in">
        <Cards
          icon="skill-icon"
          title="Habilidades Gerais"
          subtitle="Tecnologias que utilizo no dia a dia da programação."
          skills={skill}
        />
        <Cards
          icon="front-end"
          title="Front-End"
          subtitle="Ferramentas utilizadas para criação de sistemas web"
          skills={front}
        />
        <Cards
          icon="back-end"
          title="Back-End"
          subtitle="Controle de banco de dados e aplições na nuvem"
          skills={back}
        />
      </SkillsCards>
    </ScreenContainer>
  )
}
