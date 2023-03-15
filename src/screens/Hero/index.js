import { Header, Title, Subtitle } from 'components'
import { Card } from 'components/molecules/CodeCard'
import {
  Herocontainer,
  HeroSection,
  Image,
  ImageContainer,
  InfosContainer,
  ScreenContainer
} from './styles'

export const HomeScreen = () => {
  return (
    <ScreenContainer>
      <Header />
      <Herocontainer data-aos="fade-up" id="home">
        <HeroSection>
          <ImageContainer>
            <Image />
          </ImageContainer>
          <InfosContainer>
            <Title
              fontSize="104"
              align
              color={({ theme }) => theme.colors.primary}
              mb="0"
              mt="56"
            >
              Olá
            </Title>
            <Subtitle
              fontSize="48"
              w="600"
              mb="0"
              fontWeight="300"
              align
              color={({ theme }) => theme.colors.secondary}
            >
              Me chamo Marcus
            </Subtitle>
            <Card

              comentario="// Apresentação"
              tag="dados"
              desc1="Nome:"
              info1="Marcus,"
              desc2="Sobrenome:"
              info2="Castro"
            />
            <Card
              tag="info"
              desc1="Stack:"
              info1="Front-end,"
              desc2="Projetos:"
              info2="10+"
            />
          </InfosContainer>
        </HeroSection>
      </Herocontainer>
    </ScreenContainer>
  )
}
