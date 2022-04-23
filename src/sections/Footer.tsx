import { Link, Text } from '@gnosis.pm/safe-react-components'
import styled from 'styled-components'
import { ReactComponent as DiscordIcon } from '../images/icons/discord.svg'
import { ReactComponent as GithubIcon } from '../images/icons/github.svg'
import { ReactComponent as TwitterIcon } from '../images/icons/twitter.svg'
import Shield from '../images/Shield.png'

const FooterContainer = styled.footer`
  position: relative;
  padding-top: 130px;
  padding-bottom: 120px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
`

const SText = styled(Text)`
  font-size: 20px;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 50px;
`

const SocialBlock = styled.div`
  display: flex;
  width: 180px;
  margin: 0 auto;
  justify-content: space-between;
`

const Icon = styled.div`
  height: 42px;
  width: 42px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 21px;
  & > * {
    fill: #162832;
  }
`

const ShieldImg = styled.img`
  position: absolute;
  bottom: -280px;
  width: 330px;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
`

function Footer() {
  return (
    <FooterContainer>
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
      <div>
        <SText color="white" size="lg">
          ©2022 Gnosis Safe
        </SText>
      </div>
      <ShieldImg src={Shield} />
    </FooterContainer>
  )
}

export default Footer
