import React from 'react'
import styled from 'styled-components'
import Text from '../layout/Text'

const Section = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  padding-top: 220px;
  align-items: center;
  @media (max-width: 800px) {
    padding-top: 100px;
  }
`

const Description = styled.div`
  max-width: 630px;
  margin: 40px auto 50px;
  text-align: center;
`

const CallsToAction = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 32px;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`

const Button = styled.div`
  -webkit-tap-highlight-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 31px;
  color: white;
  text-align: center;
`

const GreenButton = styled(Button)`
  background: #008c73;
  border-radius: 16px;
  &:hover {
    background: #005546;
    transition: all 0.2s ease;
    -webkit-transition: 0.2s ease;
  }
`

const WhiteButton = styled(Button)`
  border: 2px solid white;
  border-radius: 16px;
  &:hover {
    border: 2px solid #b3b5c6;
    background: #b3b5c6;
    transition: all 0.2s ease;
    -webkit-transition: 0.2s ease;
  }
`

const SText = styled(Text)`
  text-align: center;
`

function GetInvolved() {
  return (
    <Section>
      <SText size="xxl" color="white" strong withoutMargin>
        How else can I get involved?
      </SText>
      <Description>
        <Text size="lg" color="white" withoutMargin>
          Join the conversation in our Discord or start a proposal on the Gnosis
          Safe Forum.
        </Text>
      </Description>
      <CallsToAction>
        <a
          href="https://discord.com/invite/AjG7AQD9Qn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GreenButton>
            <Text size="md" strong withoutMargin noLineHeight>
              Join our Discord
            </Text>
          </GreenButton>
        </a>
        <a
          href="https://forum.gnosis-safe.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhiteButton>
            <Text size="md" strong withoutMargin noLineHeight>
              Start a proposal
            </Text>
          </WhiteButton>
        </a>
      </CallsToAction>
    </Section>
  )
}

export default GetInvolved
