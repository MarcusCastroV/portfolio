import styled from 'styled-components'

export const CodeItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  background: ${({ theme }) => theme.colors.gradient};
  justify-content: flex-start;
  width: 356px;
  margin-right: 28px;
  padding: 24px;
  font-weight: 300;
  color: #fff;
  transition: 1s;
  align-self: flex-start;
  &:last-child {
    align-self: flex-end;
  }
`
