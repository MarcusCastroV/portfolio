import styled from 'styled-components'

export const ScreenContainer = styled.div`
  max-width: 100vw;
  height: 100vh;
  background-position: center;
  background-size: cover;
`
export const Herocontainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
`
export const HeroSection = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  padding: 0 150px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.border};
`
export const ImageContainer = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`
export const Image = styled.img`
  height: auto;
  border-color: ${({ theme }) => theme.colors.secondary};
`

export const InfosContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-content: center;
`
