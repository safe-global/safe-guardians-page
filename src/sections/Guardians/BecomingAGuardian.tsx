import { Link, Text, Title } from '@gnosis.pm/safe-react-components'
import styled from 'styled-components'
import { ReactComponent as Check } from '../../images/icons/check.svg'
import { ReactComponent as Share } from '../../images/icons/share.svg'
import BecomingAGuardianImage from '../../images/section3.png'

const Block = styled.div`
  position: relative;
  --border: 1px solid green;
  display: flex;
  margin-bottom: 150px;
  justify-content: center;
  flex-direction: column;
  z-index: 1;
  padding: 16px;
`

const Forces = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
  margin-bottom: 30px;
  text-transform: uppercase;
  letter-spacing: 2px;
  & > * {
    font-family: 'AvertaBold';
  }
  @media (max-width: 800px) {
    margin-top: 0;
  }
`

const SText = styled(Text)`
  color: #029f7f;
`

const TopColumn = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 65px;
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
  }
`

const Content = styled.div`
  --border: 1px solid blue;
  display: flex;
  justify-content: center;
  @media (max-width: 800px) {
    flex-direction: column-reverse;
  }
`

const LeftColumn = styled.div`
  --border: 1px solid red;
  margin-right: 100px;
  width: 440px;
  min-width: 310px;
  align-items: end;
  @media (max-width: 800px) {
    width: 100%;
    display: flex;
    margin: 0;
    margin-top: 40px;
    flex-direction: column-reverse;
    align-items: center;
  }
`

const RightColumn = styled.div`
  --border: 1px solid yellow;
  width: 540px;
  min-width: 360px;
  @media (max-width: 800px) {
    width: 100%;
  }
`

const STitle = styled(Title)`
  color: white;
`

const ContentStep = styled(Title)<{ noBorder?: boolean }>`
  color: white;
  padding-left: 40px;
  ${({ noBorder }) => !noBorder && { borderLeft: '2px solid rgba(255, 255, 255, 0.15)' }}
  margin-left: 15px;
  padding-bottom: 15px;
`

const STitleContentTitle = styled(Title)`
  color: white;
  padding-left: 24px;
`

const STitleTop = styled(Title)`
  display: inline-block;
  margin-right: 20px;
  color: white;
`

const SGreenTitle = styled(Title)`
  color: #008c73;
  display: flex;
  align-items: center;
`

const BecomingAGuardianImg = styled.img`
  width: 100%;
  max-width: 440px;
  margin-top: 50px;
  @media (max-width: 800px) {
    margin: 0;
    margin-top: 100px;
  }
`

const TitleSection = styled.div`
  margin-top: 20px;
  display: flex;
`

const Box = styled.div`
  background: #1f3044;
  border-left: 2px solid #fff;
  padding: 18px;
  margin-left: 50px;
`

const Number = styled.div`
  width: 32px;
  height: 32px;
  border: 2px solid white;
  border-radius: 16px;
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 4px;
`

const GreenNumber = styled(Number)`
  background: #029f7f;
  border: 0;
`

const Submission = styled.div`
  --border: 1px solid green;
  margin-top: 50px;
  @media (max-width: 800px) {
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: 991px) {
    margin-left: 70px;
  }
`

const SLink = styled(Link)`
  & > :hover {
    background: #005546;
    transition: all 0.2s ease;
    -webkit-transition: 0.2s ease;
  }
`

const SubmissionButton = styled.div`
  display: inline-block;
  padding: 20px 31px;
  background: #029f7f;
  border-radius: 16px;
  margin-bottom: 15px;
`

const SShare = styled(Share)`
  margin-right: 8px;
`

function BecomingAGuardian() {
  return (
    <Block>
      <Forces>
        <SText size="xl" color="white">
          Join the forces
        </SText>
      </Forces>
      <TopColumn>
        <STitleTop size="xl" strong withoutMargin>
          Becoming a
        </STitleTop>
        <SGreenTitle size="xl" strong withoutMargin>
          Guardian
        </SGreenTitle>
      </TopColumn>
      <Content>
        <LeftColumn>
          <BecomingAGuardianImg src={BecomingAGuardianImage} />
          <Submission>
            <SLink
              href="https://gnosis1.typeform.com/to/o0HCFW4k"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SubmissionButton>
                <STitle size="sm" strong withoutMargin>
                  Submit an application
                </STitle>
              </SubmissionButton>
            </SLink>
            <STitle size="xs">Know someone who can be a Guardian?</STitle>
            <SGreenTitle size="sm" strong withoutMargin>
              <SShare />
              Share this link
            </SGreenTitle>
          </Submission>
        </LeftColumn>
        <RightColumn>
          <STitle size="xs">
            We are now opening up applications so we can fairly reward all Gnosis Safe ecosystem
            contributors for their previous contributions.
          </STitle>
          <TitleSection>
            <Number>
              <STitle size="xs" strong withoutMargin>
                1
              </STitle>
            </Number>
            <STitleContentTitle size="sm" strong withoutMargin>
              Application rules
            </STitleContentTitle>
          </TitleSection>
          <ContentStep size="xs">
            Anyone who previously contributed to the Safe ecosystem is free to apply and become a
            Guardian! No matter if it was merging a PR, creating an educational tutorial or
            developing a tool.
          </ContentStep>
          <TitleSection>
            <Number>
              <STitle size="xs" strong withoutMargin>
                2
              </STitle>
            </Number>
            <STitleContentTitle size="sm" strong withoutMargin>
              Document the contributions
            </STitleContentTitle>
          </TitleSection>
          <ContentStep size="xs">
            Document the contribution(s) you’ve made to the Gnosis Safe ecosystem in the
            application, and submit for review.
          </ContentStep>
          <TitleSection>
            <GreenNumber>
              <Check />
            </GreenNumber>
            <STitleContentTitle size="sm" strong withoutMargin>
              Get rewarded!
            </STitleContentTitle>
          </TitleSection>
          <ContentStep size="xs" noBorder>
            Our internal council will review each submission, validate the previous contribution and
            assign a reward.
          </ContentStep>
          <Box>
            <Text color="white" size="xl">
              SAFE tokens will not be given by default. Only those who have verifiably contributed
              will be allocated tokens and assigned as a Guardian. They will also be entrusted with
              a ‘Guardian’ role within our Discord!
            </Text>
          </Box>
        </RightColumn>
      </Content>
    </Block>
  )
}

export default BecomingAGuardian
