import styled from 'styled-components'

export const ProjectContainer = styled.div`
  height: auto;
  width: 100%;
  padding: 0 200px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`
