import React from 'react'
import styled from 'styled-components'
import Dots23 from '../../../images/dots-23.svg'
import CheckIcon from '../../../images/icons/check.svg'
import ShareIcon from '../../../images/icons/share.svg'
import Text from '../../layout/Text'

const Block = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  z-index: 1;
  margin: 16px;
  margin-bottom: 150px;
  @media (max-width: 800px) {
    margin-bottom: 90px;
  }
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
  display: flex;
  justify-content: center;
  @media (max-width: 800px) {
    flex-direction: column-reverse;
  }
`

const LeftColumn = styled.div`
  position: relative;
  width: 650px;
  margin-right: 30px;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 800px) {
    width: 100%;
    margin: 0;
    margin-top: 40px;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
  }
`

const RightColumn = styled.div`
  width: 560px;
  min-width: 360px;
  @media (max-width: 800px) {
    width: 100%;
  }
`

const ContentStep = styled(Text)<{ noBorder?: boolean }>`
  color: white;
  padding-left: 40px;
  ${({ noBorder }) =>
    !noBorder && { borderLeft: '2px solid rgba(255, 255, 255, 0.15)' }}
  margin-left: 15px;
  padding-bottom: 15px;
`

const STextContentTitle = styled(Text)`
  color: white;
  padding-left: 24px;
`

const STextTop = styled(Text)`
  display: inline-block;
  margin-right: 20px;
  color: white;
`

const SGreenTitle = styled(Text)`
  color: #008c73;
  display: flex;
  align-items: center;
`

const AnonsImage = styled.div`
  position: relative;
  z-index: 1;
`

const SDots23 = styled(Dots23)`
  position: absolute;
  left: 0px;
  bottom: -80px;
  @media (max-width: 800px) {
    display: none;
  }
`

const BecomingAGuardianImg = styled.img`
  width: 100%;
  position: relative;
  max-width: 440px;
  margin-top: 50px;
  z-index: 2;
  @media (max-width: 800px) {
    margin: 0;
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
  padding: 9px;
  padding-top: 14px;
`

const Submission = styled.div`
  margin-top: 45px;
  @media (max-width: 800px) {
    margin: 0;
    margin-bottom: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: 991px) {
    margin-left: 66px;
    margin-top: 90px;
  }
`

const SubmissionButton = styled.div`
  display: inline-block;
  -webkit-tap-highlight-color: transparent;
  padding: 20px 31px;
  background: #029f7f;
  border-radius: 16px;
  margin-bottom: 15px;
  &:hover {
    background: #005546;
    transition: all 0.2s ease;
    -webkit-transition: 0.2s ease;
  }
`

const ShareLink = styled.div`
  transition: all 0.2s ease;
  -webkit-transition: 0.2s ease;
  cursor: pointer;
  display: flex;
  &:hover {
    & * {
      color: #005546;
      fill: #005546;
    }
  }
`

const ShareDescription = styled(SGreenTitle)`
  margin-left: 8px;
`

function copyToClipboard() {
  navigator.clipboard.writeText('https://guardians.gnosis-safe.io')
}

function BecomingAGuardian() {
  return (
    <Block>
      <Forces>
        <Text size="xs" color="#029F7F" withoutMargin>
          Join the forces
        </Text>
      </Forces>
      <TopColumn>
        <STextTop size="xxl" strong withoutMargin>
          Becoming a
        </STextTop>
        <SGreenTitle size="xxl" strong withoutMargin>
          Guardian
        </SGreenTitle>
      </TopColumn>
      <Content>
        <LeftColumn>
          <AnonsImage>
            <SDots23 />
            <BecomingAGuardianImg src="/images/section3.png" />
          </AnonsImage>
          <Submission>
            <a href="/form">
              <SubmissionButton>
                <Text size="md" color="white" strong withoutMargin>
                  Submit an application
                </Text>
              </SubmissionButton>
            </a>
            <Text size="sm" color="white">
              Know someone who can be a Guardian?
            </Text>
            <ShareLink onClick={copyToClipboard}>
              <ShareIcon />
              <ShareDescription size="md" color="#029F7F" strong withoutMargin>
                Share this link
              </ShareDescription>
            </ShareLink>
          </Submission>
        </LeftColumn>
        <RightColumn>
          <Text size="sm" color="white" withoutMargin>
            We are now opening up applications so we can fairly reward all
            Gnosis Safe ecosystem contributors for their previous contributions.
          </Text>
          <TitleSection>
            <Number>
              <Text size="sm" strong withoutMargin>
                1
              </Text>
            </Number>
            <STextContentTitle size="md" strong withoutMargin>
              Application rules
            </STextContentTitle>
          </TitleSection>
          <ContentStep size="sm">
            Anyone who previously contributed to the Safe ecosystem is free to
            apply and become a Guardian! No matter if it was merging a PR,
            creating an educational tutorial or developing a tool.
          </ContentStep>
          <TitleSection>
            <Number>
              <Text size="sm" color="white" strong withoutMargin>
                2
              </Text>
            </Number>
            <STextContentTitle size="md" strong withoutMargin>
              Document the contributions
            </STextContentTitle>
          </TitleSection>
          <ContentStep size="sm">
            Document the contribution(s) you’ve made to the Gnosis Safe
            ecosystem in the application, and submit for review.
          </ContentStep>
          <TitleSection>
            <GreenNumber>
              <CheckIcon />
            </GreenNumber>
            <STextContentTitle size="md" strong withoutMargin>
              Get rewarded!
            </STextContentTitle>
          </TitleSection>
          <ContentStep size="sm" noBorder>
            Our internal council will review each submission, validate the
            previous contribution and assign a reward.
          </ContentStep>
          <Box>
            <Text color="white" size="xs" withoutMargin>
              SAFE tokens will not be given by default. Only those who have
              verifiably contributed will be allocated tokens and assigned as a
              Guardian. They will also be entrusted with a ‘Guardian’ role
              within our Discord!
            </Text>
          </Box>
        </RightColumn>
      </Content>
    </Block>
  )
}

export default BecomingAGuardian
