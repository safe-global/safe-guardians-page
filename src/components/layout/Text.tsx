import React from 'react'
import styled from 'styled-components'
import theme from '../../styles/theme'

type Props = {
  children: string | React.ReactNode
  size: 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs'
  withoutMargin?: boolean
  strong?: boolean
  color?: string
  noLineHeight?: boolean
}

const StyledH1 = styled.h1<{
  withoutMargin?: boolean
  strong?: boolean
  color?: string
  noLineHeight?: boolean
}>`
  font-family: ${theme.fonts.fontFamily};
  font-size: ${theme.text.size.xxl.fontSize};
  line-height: ${({ noLineHeight }) =>
    !noLineHeight && theme.text.size.xxl.lineHeight};
  font-weight: ${({ strong }) => (strong ? 'bold' : 'normal')};
  margin: ${({ withoutMargin }) => (withoutMargin ? 0 : '30px')} 0;
  color: ${({ color }) => (color ? color : 'white')};
  @media (max-width: 800px) {
    font-size: 40px;
    line-height: 49px;
  }
`

const StyledH2 = styled.h2<{
  withoutMargin?: boolean
  strong?: boolean
  color?: string
  noLineHeight?: boolean
}>`
  font-family: ${theme.fonts.fontFamily};
  font-size: ${theme.text.size.xl.fontSize};
  line-height: ${({ noLineHeight }) =>
    !noLineHeight && theme.text.size.xl.lineHeight};
  font-weight: ${({ strong }) => (strong ? 'bold' : 'normal')};
  margin: ${({ withoutMargin }) => (withoutMargin ? 0 : '28px')} 0;
  color: ${({ color }) => (color ? color : 'white')};
  @media (max-width: 800px) {
    font-size: ${theme.text.size.md.fontSize};
    line-height: ${theme.text.size.md.lineHeight};
  }
`

const StyledH3 = styled.h3<{
  withoutMargin?: boolean
  strong?: boolean
  color?: string
  noLineHeight?: boolean
}>`
  font-family: ${theme.fonts.fontFamily};
  font-size: ${theme.text.size.lg.fontSize};
  line-height: ${({ noLineHeight }) =>
    !noLineHeight && theme.text.size.lg.lineHeight};
  font-weight: ${({ strong }) => (strong ? 'bold' : 'normal')};
  margin: ${({ withoutMargin }) => (withoutMargin ? 0 : '26px')} 0;
  color: ${({ color }) => (color ? color : 'white')};
  @media (max-width: 800px) {
    font-size: ${theme.text.size.md.fontSize};
    line-height: ${theme.text.size.md.lineHeight};
  }
`

const StyledH4 = styled.h4<{
  withoutMargin?: boolean
  strong?: boolean
  color?: string
  noLineHeight?: boolean
}>`
  font-family: ${theme.fonts.fontFamily};
  font-size: ${theme.text.size.md.fontSize};
  line-height: ${({ noLineHeight }) =>
    !noLineHeight && theme.text.size.md.lineHeight};
  font-weight: ${({ strong }) => (strong ? 'bold' : 'normal')};
  margin: ${({ withoutMargin }) => (withoutMargin ? 0 : '22px')} 0;
  color: ${({ color }) => (color ? color : 'white')};
  @media (max-width: 800px) {
    font-size: ${theme.text.size.sm.fontSize};
    line-height: ${theme.text.size.sm.lineHeight};
  }
`

const StyledH5 = styled.h5<{
  withoutMargin?: boolean
  strong?: boolean
  color?: string
  noLineHeight?: boolean
}>`
  font-family: ${theme.fonts.fontFamily};
  font-size: ${theme.text.size.sm.fontSize};
  line-height: ${({ noLineHeight }) =>
    !noLineHeight && theme.text.size.sm.lineHeight};
  font-weight: ${({ strong }) => (strong ? 'bold' : 'normal')};
  margin: ${({ withoutMargin }) => (withoutMargin ? 0 : '18px')} 0;
  color: ${({ color }) => (color ? color : 'white')};
  @media (max-width: 800px) {
    font-size: ${theme.text.size.xs.fontSize};
    line-height: ${theme.text.size.xs.lineHeight};
  }
`

const StyledP = styled.p<{
  withoutMargin?: boolean
  strong?: boolean
  color?: string
  noLineHeight?: boolean
}>`
  font-family: ${theme.fonts.fontFamily};
  font-size: ${theme.text.size.xs.fontSize};
  line-height: ${({ noLineHeight }) =>
    !noLineHeight && theme.text.size.xs.lineHeight};
  font-weight: ${({ strong }) => (strong ? 'bold' : 'normal')};
  margin: ${({ withoutMargin }) => (withoutMargin ? 0 : '18px')} 0;
  color: ${({ color }) => (color ? color : 'white')};
`

const Text = ({ children, size, ...rest }: Props): React.ReactElement => {
  switch (size) {
    case 'xxl': {
      return <StyledH1 {...rest}>{children}</StyledH1>
    }
    case 'xl': {
      return <StyledH2 {...rest}>{children}</StyledH2>
    }
    case 'lg': {
      return <StyledH3 {...rest}>{children}</StyledH3>
    }
    case 'md': {
      return <StyledH4 {...rest}>{children}</StyledH4>
    }
    case 'sm': {
      return <StyledH5 {...rest}>{children}</StyledH5>
    }
    case 'xs': {
      return <StyledP {...rest}>{children}</StyledP>
    }
  }
}

export default Text
