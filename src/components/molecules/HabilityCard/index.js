import { Title, Subtitle } from 'components'
import { Li, SkillCard, Ul } from './styles'

const NomeItem = (props) => {
  return <Li>{props.nome}</Li>
}

// Componente que representa a lista de nomes
export const NomeLista = (props) => {
  const nomes = props.nomes
  const itensLista = nomes.map((nome) => <NomeItem key={nome} nome={nome} />)
  return (
    <SkillCard>
      <Title>Habilidades Gerais</Title>
      <Subtitle> Tecnologias que uso no dia a dia na programação</Subtitle>
      <Ul>{itensLista}</Ul>
    </SkillCard>
  )
}
