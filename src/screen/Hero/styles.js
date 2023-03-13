import styled from 'styled-components'

export const ScreenContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url('./images/herobg.png');
  background-position: center;
  background-size: cover;
`
export const Herocontainer = styled.div`
  display: flex;
  height: 90%;
  width: 100%;
  justify-content: center;
`
export const HeroSection = styled.div`
  display: flex;
  height: 100%;
  width: 90%;
`
export const ImageContainer = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`
export const Image = styled.img`
  height: 500px;
  width: auto;
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 50%;
`

export const InfosContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-content: center;
`
