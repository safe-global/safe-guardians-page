import { Title } from '@gnosis.pm/safe-react-components'
import styled from 'styled-components'
import MissionImage from '../../images/section2.png'
import Section2Stain from '../../images/section2Stain.png'

const Block = styled.div`
  --border: 1px solid green;
  display: flex;
  justify-content: center;
  margin-bottom: 150px;
  z-index: 0;
  padding: 16px;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`

const LeftColumn = styled.div`
  --border: 1px solid red;
  width: 500px;
  min-width: 500px;
  margin-top: 100px;
  z-index: 1;
  @media (max-width: 800px) {
    margin: 0;
    width: 100%;
    min-width: 100%;
  }
`

const RightColumn = styled.div`
  --border: 1px solid yellow;
  margin-left: 50px;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 800px) {
    margin: 0;
  }
`

const Header = styled.div`
  @media (max-width: 800px) {
    text-align: center;
  }
`

const STitle = styled(Title)`
  color: white;
`

const SGreenTitle = styled(Title)`
  color: #008c73;
`

const MissionImg = styled.img`
  width: 100%;
  max-width: 708px;
`

const StainImg = styled.img`
  position: absolute;
  width: 100%;
  margin-top: -50px;
  z-index: 0;
  @media (max-width: 800px) {
    margin: 0;
    left: 0;
  }
`

function NextMission() {
  return (
    <Block>
      <StainImg src={Section2Stain} />
      <LeftColumn>
        <Header>
          <STitle size="xl" strong withoutMargin>
            Our next
          </STitle>
          <SGreenTitle size="xl" strong withoutMargin>
            mission
          </SGreenTitle>
        </Header>
        <STitle size="xs">
          As Gnosis Safe launches the <b>safeDAO</b> and <b>SAFE token</b> to become an independent
          community-owned public good, our next step is to retroactively reward initial Guardians
          with soon-to-launch SAFE governance tokens.
        </STitle>
        <STitle size="xs">
          <b>50,000,000 SAFE tokens</b> (5% of supply) will be rewarded to these superhuman
          contributors. This is our thank you for their hard work and commitment to creating a more
          secure and accessible Web3 for all.
        </STitle>
      </LeftColumn>
      <RightColumn>
        <MissionImg src={MissionImage} />
      </RightColumn>
    </Block>
  )
}

export default NextMission
