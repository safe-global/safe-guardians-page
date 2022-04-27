import React from 'react'
import styled from 'styled-components'
import GnosisSafe from '../../images/GnosisSafe.svg'
import SafeLogo from '../../images/SafeLogo.svg'
import Vol1 from '../../images/Vol1.svg'
import Text from '../layout/Text'

const Section = styled.div`
  position: relative;
  z-index: 0;
`

const BgDesktopImage = styled.video`
  width: 100%;
  display: block;
  @media (max-width: 800px) {
    display: none;
  }
`

const BgMobileImage = styled.video`
  width: 100%;
  display: block;
  @media (min-width: 801px) {
    display: none;
  }
`

const PoweredBy = styled.div`
  position: absolute;
  width: 215px;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  bottom: 5.5%;
  & > * {
    margin-right: 3px;
  }
`

const SVol1 = styled.div`
  position: absolute;
  bottom: 25%;
  right: 23%;
  @media (max-width: 800px) {
    bottom: 34%;
    right: 5%;
  }
`

const LinkSubmit = styled.a`
  @media (min-width: 801px) {
    display: none;
  }
`

const Button = styled.div`
  -webkit-tap-highlight-color: transparent;
  position: absolute;
  padding: 20px 31px;
  background: #029f7f;
  color: white;
  border-radius: 13px;
  left: 50%;
  width: 280px;
  text-align: center;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  bottom: 14%;
  &:hover {
    background: #005546;
    transition: all 0.2s ease;
    -webkit-transition: 0.2s ease;
  }
`

function MainSection() {
  return (
    <Section>
      <BgDesktopImage
        loop
        autoPlay
        muted
        src="/images/DesktopAnimationwithMasthead.mp4"
      />
      <BgMobileImage
        loop
        autoPlay
        muted
        src="/images/MobileAnimationwithMasthead.mp4"
      />
      <a
        href="https://gnosis-safe.io"
        target="_blank"
        rel="noopener noreferrer"
      >
        <PoweredBy>
          <Text color="white" size="xs" withoutMargin>
            Powered by
          </Text>
          <SafeLogo />
          <GnosisSafe />
        </PoweredBy>
      </a>
      <SVol1>
        <Vol1 />
      </SVol1>
      <LinkSubmit href="/form">
        <Button>
          <Text color="white" size="md" strong withoutMargin>
            Submit an application
          </Text>
        </Button>
      </LinkSubmit>
    </Section>
  )
}

export default MainSection
