import styled from 'styled-components'

export const Link = styled.a`
  text-decoration: none;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.secondary};
  cursor: pointer;
`
export const LinkContainer = styled.div`
  display: flex;
  gap: 32px;
`
