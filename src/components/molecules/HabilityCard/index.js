import { Title, Subtitle } from 'components'
import { Li, SkillCard, SkillIcon, SkillList, Ul } from './styles'

const NomeItem = (props) => {
  return <Li>{props.nome}</Li>
}

// Componente que representa a lista de skills
export const Cards = (props) => {
  const skills = props.skills
  const itensLista = skills.map((nome) => <NomeItem key={nome} nome={nome} />)
  return (
    <SkillCard>
      <SkillIcon src={`./images/${props.icon}.png`} />
      <Title mt="20" mb="20">
        {props.title}
      </Title>
      <Subtitle mw="234">
        {props.subtitle}
      </Subtitle>
      <SkillList>
        <Ul>{itensLista}</Ul>
      </SkillList>
    </SkillCard>
  )
}
