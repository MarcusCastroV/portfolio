import styled from 'styled-components'

export const Link = styled.a`
  text-decoration: none;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.secondary};
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    transform: scale(1.1);
    color: ${({ theme }) => theme.colors.primary};
  }
`
export const LinkContainer = styled.div`
  display: flex;
  gap: 32px;
`
