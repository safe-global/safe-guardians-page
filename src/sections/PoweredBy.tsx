import { Link, Text, Title } from '@gnosis.pm/safe-react-components'
import styled from 'styled-components'
import { ReactComponent as DiscordIcon } from '../images/icons/discord.svg'
import { ReactComponent as GithubIcon } from '../images/icons/github.svg'
import { ReactComponent as TwitterIcon } from '../images/icons/twitter.svg'

const Section = styled.div`
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
  --border: 1px solid red;
  display: flex;
  flex-direction: column;
  @media (max-width: 800px) {
    width: 100%;
    align-items: center;
  }
`

const RightColumn = styled.div`
  width: 600px;
  --border: 1px solid red;
  display: flex;
  flex-direction: column;
  @media (max-width: 800px) {
    width: 100%;
    align-items: center;
  }
`

const STitle = styled(Title)`
  color: white;
`

const Power = styled(Text)`
  margin-top: 132px;
  margin-bottom: 16px;
  text-transform: uppercase;
  font-family: 'AvertaBold';
`

const SocialBlock = styled.div`
  display: flex;
  margin-top: 50px;
  width: 180px;
  justify-content: space-between;
`

const Icon = styled.div`
  height: 42px;
  width: 42px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 22px;
  & > * {
    fill: #008c73;
  }
`

const Details = styled(STitle)`
  margin-top: 100px;
  margin-bottom: 32px;
`

const Button = styled.div`
  height: 72px;
  padding: 20px 31px;
  display: inline-block;
`

const WhiteButton = styled(Button)`
  background: white;
  color: #162d45;
  border-radius: 16px;
  @media (max-width: 800px) {
    background: none;
    border: 2px solid white;
    color: white;
    margin-bottom: 140px;
  }
`

function PoweredBy() {
  return (
    <Section>
      <LeftColumn>
        <Power size="lg" color="white">
          Powered by
        </Power>
        <STitle size="xl" strong withoutMargin>
          Gnosis Safe
        </STitle>
        <SocialBlock>
          <Link href="https://twitter.com/gnosissafe" target="_blank">
            <Icon>
              <TwitterIcon />
            </Icon>
          </Link>
          <Link href="https://github.com/safe-global" target="_blank">
            <Icon>
              <GithubIcon />
            </Icon>
          </Link>
          <Link href="https://discord.com/invite/AjG7AQD9Qn" target="_blank">
            <Icon>
              <DiscordIcon />
            </Icon>
          </Link>
        </SocialBlock>
      </LeftColumn>
      <RightColumn>
        <Details size="md" withoutMargin>
          Want to know more details?
        </Details>
        <Link href="https://gnosis-safe.io" target="_blank">
          <WhiteButton>
            <Title size="sm" strong withoutMargin>
              Read the blog post
            </Title>
          </WhiteButton>
        </Link>
      </RightColumn>
    </Section>
  )
}

export default PoweredBy
