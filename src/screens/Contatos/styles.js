import styled from 'styled-components'

export const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  padding-top: 56px;
`
export const ContactContainer = styled.div`
  display: flex;
  margin-top: 56px;
  width: 434px;
  height: 90%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 56px;
  padding-bottom: 132px;
`
export const ContactInfo = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
`

export const FooterContent = styled.footer`
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 64px;
  width: 100%;
  color: white;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`

export const SocialMedia = styled.div`
  display: flex;
  width: 30%;
  justify-content: space-around;
`
