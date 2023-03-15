import { SmallText, Subtitle, Title } from 'components'
import { ImageContent, InfoContainer, IconsContainer, Projeto } from './styles'
import { FaLink, FaGithub } from 'react-icons/fa'
import { Link } from 'components/atoms/Link/styles'
export const ProjectCard = ({
  name,
  number,
  subtitle,
  description,
  vercelLink,
  GithubLink
}) => {
  return (
    <Projeto data-aos="fade-left">
      <ImageContent src={`./images/${name}.png`} />
      <InfoContainer data-aos="fade-up">
        <Title
          fontSize="36"
          mb="30"
          mt="50"
          color={({ theme }) => theme.colors.primary}
        >
          {`Projeto #${number}`}
        </Title>
        <Subtitle
          align="center"
          fontSize="28"
          color={({ theme }) => theme.colors.secondary}
        >
          {subtitle}
        </Subtitle>
        <SmallText mw="300" align>{description}</SmallText>
        <IconsContainer>
          <Link href={vercelLink}>
            <FaLink />
          </Link>
          <Link href={GithubLink}>
            <FaGithub />
          </Link>
        </IconsContainer>
      </InfoContainer>
    </Projeto>
  )
}
