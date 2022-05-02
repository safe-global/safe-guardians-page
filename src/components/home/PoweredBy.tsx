import React from 'react'
import styled from 'styled-components'
import Dots24 from '../../images/dots-24.svg'
import Dots25 from '../../images/dots-25.svg'
import Text from '../layout/Text'
import SocialBlock from './SocialBlock'

const Section = styled.div`
  position: relative;
  background: #008c73;
  display: flex;
  justify-content: center;
  min-height: 500px;
  z-index: 1;
  padding: 16px;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`

const LeftColumn = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  @media (max-width: 800px) {
    width: 100%;
    align-items: center;
  }
`

const RightColumn = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  @media (max-width: 800px) {
    width: 100%;
    align-items: center;
  }
`

const Power = styled(Text)`
  margin-top: 110px;
  margin-bottom: 16px;
  text-transform: uppercase;
  font-family: 'AvertaBold';
  letter-spacing: 2px;
`

const SocialContainer = styled.div`
  display: flex;
  margin-top: 30px;
  width: 180px;
  justify-content: start !important;
  @media (max-width: 800px) {
    margin-top: 55px;
  }
  & * {
    fill: #029f7f;
  }
`

const Details = styled(Text)`
  margin-top: 180px;
  margin-bottom: 20px;
  @media (max-width: 800px) {
    margin-top: 70px;
  }
`

const Button = styled.div`
  -webkit-tap-highlight-color: transparent;
  padding: 20px;
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: 16px;
  text-align: center;
  height: 64px;
  &:hover {
    background: #b3b5c6;
    transition: all 0.2s ease;
    -webkit-transition: 0.2s ease;
  }
  @media (max-width: 800px) {
    background: none;
    border: 2px solid white;
    margin-bottom: 140px;
    & > * {
      color: white;
    }
    &:hover {
      border: 2px solid #b3b5c6;
      transition: all 0.2s ease;
      -webkit-transition: 0.2s ease;
    }
  }
`

const SDots24 = styled(Dots24)`
  position: absolute;
  left: 0;
  bottom: 80px;
`

const SDots25 = styled(Dots25)`
  position: absolute;
  right: 0;
  top: 0;
`

function PoweredBy() {
  return (
    <Section>
      <SDots24 />
      <SDots25 />
      <LeftColumn>
        <Power size="xs" color="white" withoutMargin>
          Powered by
        </Power>
        <Text size="xxl" strong withoutMargin>
          Gnosis Safe
        </Text>
        <SocialContainer>
          <SocialBlock />
        </SocialContainer>
      </LeftColumn>
      <RightColumn>
        <Details size="xl">Want to know more details?</Details>
        <a
          href="https://safe.mirror.xyz/JTOFLIYkTF8C61-DZFBB3QzhrFSsaB8kAIx153rl9Y0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>
            <Text size="md" color="#162D45" strong withoutMargin>
              Read the blog post
            </Text>
          </Button>
        </a>
      </RightColumn>
    </Section>
  )
}

export default PoweredBy
