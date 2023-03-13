import { Link, LinkContainer } from './styles'

export const Navigation = () => {
  return (
    <LinkContainer>
      <Link href="/">Home</Link>
      <Link href="/projetos">Projetos</Link>
      <Link href="/contatos">Contatos</Link>
    </LinkContainer>
  )
}
