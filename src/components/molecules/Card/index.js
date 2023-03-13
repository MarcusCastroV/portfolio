import { SmallText, Subtitle } from 'components/atoms'
import { CodeItem } from './styles'

export const Card = ({ comentario, tag, desc1, info1, desc2, info2 }) => {
  return (
    <CodeItem>
      <Subtitle mb="8" align="left" color="#c8c8c8">
        {comentario}
      </Subtitle>
      <Subtitle mb="8" align="left" color="#edb5fa">
        {tag}
        <SmallText>{' \u007B'}</SmallText>
      </Subtitle>
      <Subtitle
        ml="24"
        mb="8"
        align="left"
      >
        {desc1} <SmallText color={({ theme }) => theme.colors.secondary}>{info1}</SmallText>
      </Subtitle>
      <Subtitle ml="24" mb="8" align="left">
        {desc2} <SmallText color={({ theme }) => theme.colors.secondary}>{info2}</SmallText>
      </Subtitle>
      {'\u007D'}
    </CodeItem>
  )
}
