import { Link, Text } from '@gnosis.pm/safe-react-components'
import styled from 'styled-components'
import { ReactComponent as DiscordIcon } from '../images/icons/discord.svg'
import { ReactComponent as GithubIcon } from '../images/icons/github.svg'
import { ReactComponent as TwitterIcon } from '../images/icons/twitter.svg'
import { ReactComponent as LogoHorizontal } from '../images/LogoHorizontal.svg'

const HeaderContainer = styled.header`
  position: absolute;
  width: 100%;
  max-width: 1300px;
  padding: 30px;
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
  & > * {
    padding: 1.5px;
    fill: #162832;
  }
`

const LinkSubmit = styled(Link)`
  @media (max-width: 800px) {
    display: none;
  }
  & > :hover {
    background: #005546;
    transition: all 0.2s ease;
    -webkit-transition: 0.2s ease;
  }
`

const Button = styled.div`
  height: 42px;
  padding: 11px 24px;
  display: inline-block;
  background: #029f7f;
  color: white;
  border-radius: 10px;
`

function Header() {
  return (
    <HeaderContainer>
      <SLogoHorizontal />
      <Right>
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
        <LinkSubmit href="https://gnosis1.typeform.com/to/o0HCFW4k" target="_blank">
          <Button>
            <Text size="lg" color="white" strong>
              Submit
            </Text>
          </Button>
        </LinkSubmit>
      </Right>
    </HeaderContainer>
  )
}

export default Header
