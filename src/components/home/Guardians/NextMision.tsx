import React from 'react'
import styled from 'styled-components'
import Text from '../../layout/Text'

const Block = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
  z-index: 0;
  padding: 16px;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`

const LeftColumn = styled.div`
  width: 500px;
  min-width: 400px;
  --margin-top: 100px;
  z-index: 1;
  @media (max-width: 800px) {
    margin: 0;
    width: 100%;
    min-width: 100%;
  }
`

const RightColumn = styled.div`
  margin-left: 50px;
  width: 708px;
  z-index: 1;
  @media (max-width: 800px) {
    margin: 0;
    margin-top: 90px;
    max-width: 100%;
  }
`

const Header = styled.div`
  width: 400px;
  @media (max-width: 800px) {
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    width: 310px;
    text-align: center;
  }
`

const MissionImg = styled.img`
  width: 100%;
  max-width: 708px;
`

const StainImg = styled.div`
  position: absolute;
  width: 100%;
  height: 110%;
  max-height: 130%;
  margin-top: 130px;
  z-index: 0;
  @media (max-width: 800px) {
    margin: 0;
    width: 300%;
    margin-top: -400px;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
  }
`

function NextMission() {
  return (
    <Block>
      <StainImg>
        <img src="/images/section2Stain.png" width="100%" />
      </StainImg>
      <LeftColumn>
        <Header>
          <Text size="xxl" strong withoutMargin>
            Our next
          </Text>
          <Text color="#008c73" size="xxl" strong withoutMargin>
            mission
          </Text>
        </Header>
        <Text size="sm">
          As Gnosis Safe launches the <b>safeDAO</b> and <b>SAFE token</b> to
          become an independent community-owned public good, our next step is to
          retroactively reward initial Guardians with soon-to-launch SAFE
          governance tokens.
        </Text>
        <Text size="sm">
          <b>50,000,000 SAFE tokens</b> (5% of supply) will be rewarded to these
          superhuman contributors. This is our thank you for their hard work and
          commitment to creating a more secure and accessible Web3 for all.
        </Text>
      </LeftColumn>
      <RightColumn>
        <MissionImg src="/images/section2.png" />
      </RightColumn>
    </Block>
  )
}

export default NextMission
