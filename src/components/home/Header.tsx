import React from 'react'
import styled from 'styled-components'
import Discord from '../../images/icons/discord.svg'
import Github from '../../images/icons/github.svg'
import Twitter from '../../images/icons/twitter.svg'
import LogoHorizontal from '../../images/LogoHorizontal.svg'
import Text from '../layout/Text'

const HeaderContainer = styled.header<{
  noMaxWidth?: boolean
}>`
  position: absolute;
  width: 100%;
  max-width: ${({ noMaxWidth }) => (noMaxWidth ? '100%' : '1440px')};
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  z-index: 1;
  @media (max-width: 800px) {
    width: 100%;
    padding: 20px;
  }
`

const SLogoHorizontal = styled(LogoHorizontal)`
  width: 340px;
  display: flex;
  align-items: start;
`

const Right = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 250px;
  @media (max-width: 800px) {
    width: auto;
    margin-left: 20px;
  }
`

const SocialBlock = styled.div`
  display: flex;
  width: 130px;
  justify-content: space-between;
`

const Icon = styled.div`
  height: 32px;
  width: 32px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  padding: 8px;
  &:hover {
    background: #b3b5c6;
    transition: all 0.2s ease;
    -webkit-transition: 0.2s ease;
  }
`

const LinkSubmit = styled.a`
  @media (max-width: 800px) {
    display: none;
  }
`

const Button = styled.div`
  -webkit-tap-highlight-color: transparent;
  height: 42px;
  padding: 11px 24px;
  display: inline-block;
  background: #029f7f;
  color: white;
  border-radius: 10px;
  &:hover {
    background: #005546;
    transition: all 0.2s ease;
    -webkit-transition: 0.2s ease;
  }
`

interface HeadProps {
  noMaxWidth?: boolean
  onlyTitle?: boolean
}

function Header({ onlyTitle, noMaxWidth }: HeadProps) {
  return (
    <HeaderContainer noMaxWidth={noMaxWidth}>
      <SLogoHorizontal />
      {!onlyTitle && (
        <Right>
          <SocialBlock>
            <a
              href="https://twitter.com/gnosissafe"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon>
                <Twitter />
              </Icon>
            </a>
            <a
              href="https://github.com/safe-global"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon>
                <Github />
              </Icon>
            </a>
            <a
              href="https://discord.com/invite/AjG7AQD9Qn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon>
                <Discord />
              </Icon>
            </a>
          </SocialBlock>
          <LinkSubmit href="/form">
            <Button>
              <Text size="xs" color="white" strong withoutMargin noLineHeight>
                Submit
              </Text>
            </Button>
          </LinkSubmit>
        </Right>
      )}
    </HeaderContainer>
  )
}

export default Header
