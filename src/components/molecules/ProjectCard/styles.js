import styled from 'styled-components'

export const Projeto = styled.div`
  display: flex;
  width: 100%;
  height: 400px;
  margin-bottom: 56px;
  flex-direction: row;
  position: relative;
  border: 1px solid ${({ theme }) => theme.colors.border};
  &:nth-child(odd) {
    flex-direction: row-reverse;
  }
`

export const ImageContent = styled.img`
  height: auto;
  width: 60%;
  opacity: 0.75;
  transition: 0.5s;

  &:hover {
    opacity: 1
  }
`
export const InfoContainer = styled.div`
  height: 100%;
  width: 40%;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  margin-top: 40px;
`

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 36px;
  width: 30%;
  justify-content: space-around;
  align-items: center;
`
