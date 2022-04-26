import { Link, Text, Title } from '@gnosis.pm/safe-react-components'
import styled from 'styled-components'
import DesktopStaticWithMasthead from '../images/DesktopAnimationwithMasthead.mp4'
import { ReactComponent as GnosisSafe } from '../images/GnosisSafe.svg'
import MobileStaticWithMasthead from '../images/MobileAnimationwithMasthead.mp4'
import { ReactComponent as SafeLogo } from '../images/SafeLogo.svg'
import { ReactComponent as Vol1 } from '../images/Vol1.svg'

const Section = styled.div`
  --border: 1px solid red;
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
  --border: 1px solid yellow;
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 6%;
`

const SSafeLogo = styled(SafeLogo)`
  margin-left: 10px;
  margin-right: 5px;
`

const SVol1 = styled.div`
  --border: 3px solid red;
  position: absolute;
  bottom: 26%;
  right: 23%;
  @media (max-width: 800px) {
    bottom: 34%;
    right: 5%;
  }
`

const LinkSubmit = styled(Link)`
  & > :hover {
    background: #005546;
    transition: all 0.2s ease;
    -webkit-transition: 0.2s ease;
  }
  @media (min-width: 801px) {
    display: none;
  }
`

const Button = styled.div`
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
`

const STitle = styled(Title)`
  color: white;
`

function MainSection() {
  return (
    <Section>
      <BgDesktopImage loop autoPlay muted src={DesktopStaticWithMasthead} />
      <BgMobileImage loop autoPlay muted src={MobileStaticWithMasthead} />
      <Link href="https://gnosis-safe.io" target="_blank" rel="noopener noreferrer">
        <PoweredBy>
          <Text color="white" size="xl">
            Powered by
          </Text>
          <SSafeLogo />
          <GnosisSafe />
        </PoweredBy>
      </Link>
      <SVol1>
        <Vol1 />
      </SVol1>
      <LinkSubmit
        href="https://gnosis1.typeform.com/to/o0HCFW4k"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button>
          <STitle size="xs" strong withoutMargin>
            Submit an application
          </STitle>
        </Button>
      </LinkSubmit>
    </Section>
  )
}

export default MainSection
