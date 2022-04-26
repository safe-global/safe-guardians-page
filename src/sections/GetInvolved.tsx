import { Link, Title } from '@gnosis.pm/safe-react-components'
import styled from 'styled-components'

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

const STitle = styled(Title)`
  color: white;
  text-align: center;
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

const SLink = styled(Link)`
  & > :hover {
    background: #005546;
    transition: all 0.2s ease;
    -webkit-transition: 0.2s ease;
  }
`

const Button = styled.div`
  height: 72px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 31px;
  color: white;
`

const GreenButton = styled(Button)`
  background: #008c73;
  border-radius: 16px;
`

const WhiteButton = styled(Button)`
  border: 2px solid white;
  border-radius: 16px;
`

function GetInvolved() {
  return (
    <Section>
      <STitle size="xl" strong withoutMargin>
        How else can I get involved?
      </STitle>
      <Description>
        <STitle size="md" withoutMargin>
          Join the conversation in our Discord or start a proposal on the Gnosis Safe Forum.
        </STitle>
      </Description>
      <CallsToAction>
        <SLink href="https://discord.com/invite/AjG7AQD9Qn" target="_blank">
          <GreenButton>
            <Title size="sm" strong withoutMargin>
              Join our Discord
            </Title>
          </GreenButton>
        </SLink>
        <Link href="https://forum.gnosis-safe.io" target="_blank">
          <WhiteButton>
            <Title size="sm" strong withoutMargin>
              Start a proposal
            </Title>
          </WhiteButton>
        </Link>
      </CallsToAction>
    </Section>
  )
}

export default GetInvolved
