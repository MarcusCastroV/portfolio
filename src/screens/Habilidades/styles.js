import styled from 'styled-components'

export const ScreenContainer = styled.div`
  max-width: 100vw;
  margin-top: 100px;
  height: auto;
  background-position: center;
  background-size: cover;
  border-bottom: 2px solid ${({ theme }) => theme.colors.border};
  padding-bottom: 80px ;
  scroll-margin-top: 100px;
`
export const SkillsCards = styled.div`
  display: flex;
  height: auto;
  max-width: 100vw;
  padding: 0 200px;
  flex-wrap: wrap;
  justify-content: space-around;
`
