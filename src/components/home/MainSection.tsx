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
  @media (max-width: 800px) {
    bottom: 7%;
  }
`

const SVol1 = styled.div`
  position: absolute;
  bottom: 25%;
  right: 23%;
  @media (max-width: 800px) {
    bottom: 24%;
    right: 5%;
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
        src="/images/MobileAnimationwithMasthead-cropped.mp4"
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
    </Section>
  )
}

export default MainSection
