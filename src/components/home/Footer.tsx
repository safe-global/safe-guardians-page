import React from 'react'
import styled from 'styled-components'
import Text from '../layout/Text'
import SocialBlock from './SocialBlock'

const FooterContainer = styled.footer`
  position: relative;
  padding-top: 160px;
  padding-bottom: 120px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  @media (max-width: 800px) {
    padding-top: 130px;
  }
`

const SText = styled(Text)`
  text-align: center;
  margin-top: 30px;
  margin-bottom: 50px;
`

const SocialContainer = styled.div`
  margin: 0 auto;
`

const ShieldImg = styled.div`
  position: absolute;
  bottom: -285px;
  width: 330px;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  transition: all 0.5s ease;
  -webkit-transition: all 0.5s ease;
  &:hover {
    bottom: -245px;
  }
`

function Footer() {
  return (
    <FooterContainer>
      <SocialContainer>
        <SocialBlock />
      </SocialContainer>
      <div>
        <SText color="white" size="sm">
          ©2022 Gnosis Safe
        </SText>
      </div>
      <ShieldImg>
        <img src="/images/Shield.png" width="100%" />
      </ShieldImg>
    </FooterContainer>
  )
}

export default Footer
