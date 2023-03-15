import styled from 'styled-components'

export const Li = styled.li`
  display: flex;
  width: 230px;
  font-size: 16px;
  color: white;
  margin-bottom: 12px;
`
export const Ul = styled.ul`
  width: 100%;
`
export const SkillIcon = styled.img`
  width: 80px;
  height: auto;
  padding: 12px;
`

export const SkillCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 312px;
  height: 620px;
  margin-top: 50px;
  padding: 12px;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 10px;
`

export const SkillList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
