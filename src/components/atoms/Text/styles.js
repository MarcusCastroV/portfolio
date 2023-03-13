import styled from 'styled-components'

export const Title = styled.h1`
  font-weight: bold;
  text-align: ${({ align }) => align || 'center'};
  max-width: ${({ mw }) => mw || 320}px;
  font-size: ${({ fontSize }) => fontSize || 24}px;
  line-height: ${({ lineHeight }) => lineHeight || 22}px;
  color: ${({ color }) => color || 'white'};
  margin-left: ${({ ml }) => ml || 0}px;
  margin-bottom: ${({ mb }) => mb || 0}px;
  margin-top: ${({ mt }) => mt || 0}px;
`

export const Subtitle = styled.h2`
  width: ${({ w }) => w || 320}px;
  font-size: ${({ fontSize }) => fontSize || 16}px;
  text-align: ${({ align }) => align || 'center'};
  font-weight: ${({ fontWeight }) => fontWeight || 500};
  margin-bottom: ${({ mb }) => mb || 48}px;
  color: ${({ color }) => color || 'white'};
  margin-left: ${({ ml }) => ml || 0}px;
`

export const SmallText = styled.span`
  font-size: ${({ fontSize }) => fontSize || 16}px;
  text-align: ${({ align }) => align || 'center'};
  margin-bottom: ${({ mb }) => mb || 0}px;
  font-weight: ${({ fontWeight }) => fontWeight || 500};
  color: ${({ color }) => color || 'white'};
`
