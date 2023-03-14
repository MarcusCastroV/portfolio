import styled from 'styled-components'

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  gap: 32px;
  max-width: 100%;
  padding: 36px 64px;
  align-items: center;
  height: 30px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  text-align: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
`
