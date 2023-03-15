import { SmallText, Title } from 'components'
import {
  ContactContainer,
  ContactInfo,
  ContactSection,
  FooterContent,
  SocialMedia
} from './styles'
import { BsTelephone } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

export const ContactScreen = () => {
  return (
    <ContactSection id="contatos">
      <ContactContainer data-aos="fade-left">
        <Title fontSize="56" color={({ theme }) => theme.colors.primary}>
          Como posso{' '}
          <Title
            fontSize="56"
            mb="52"
            color={({ theme }) => theme.colors.secondary}
          >
            te ajudar?
          </Title>
        </Title>
        <SmallText mw="392" mb="50">
          Estou à diposição para ajudar o seu projeto ou sua empresa.
        </SmallText>
        <ContactInfo>
          <BsTelephone width="30px" />
          <SmallText> marcuscastrov2@gmail.com</SmallText>
        </ContactInfo>
        <ContactInfo>
          <AiOutlineMail />
          <SmallText>(31) 99141-0906</SmallText>
        </ContactInfo>
      </ContactContainer>
      <FooterContent >
        <SocialMedia>
          <FaLinkedin size="25" />
          <FaGithub size="25" />
        </SocialMedia>
      </FooterContent>
    </ContactSection>
  )
}
