import { NomeLista } from 'components'
import { Habilidadecontainer } from './styles'
const nomes = ['João', 'Maria', 'José', 'Ana']

export const Habilidades = () => {
  return (
    <Habilidadecontainer>
      <NomeLista nomes={nomes} />
    </Habilidadecontainer>
  )
}
