import { Title } from '@gnosis.pm/safe-react-components'
import styled from 'styled-components'
import GuardiansImage from '../../images/section1.png'

const Block = styled.div`
  position: relative;
  --border: 1px solid green;
  display: flex;
  justify-content: center;
  margin-bottom: 150px;
  padding: 16px;
  @media (max-width: 800px) {
    flex-direction: column-reverse;
  }
`

const LeftColumn = styled.div`
  --border: 1px solid red;
  z-index: 1;
  max-width: 678px;
  @media (max-width: 800px) {
    display: flex;
    justify-content: center;
    margin: 0;
    min-width: 100%;
  }
`

const RightColumn = styled.div`
  --border: 1px solid yellow;
  margin-top: 150px;
  margin-left: 50px;
  width: 365px;
  min-width: 365px;
  @media (max-width: 800px) {
    margin: 0;
    margin-top: 80px;
    width: 100%;
    min-width: 100%;
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
  display: inline-block;
`

const Img = styled.img`
  margin-top: 180px;
  width: 100%;
  @media (max-width: 800px) {
    margin-top: 50px;
  }
`

function WhatAreGuardians() {
  return (
    <Block>
      <LeftColumn>
        <Img src={GuardiansImage} />
      </LeftColumn>
      <RightColumn>
        <Header>
          <STitle size="lg" strong withoutMargin>
            What are
          </STitle>
          <SGreenTitle size="lg" strong withoutMargin>
            Safe Guardians?
          </SGreenTitle>
        </Header>
        <STitle size="sm">
          Safe Guardians are active members of the Safe community, who use their powers to
          contribute positively to the ecosystem.
        </STitle>
        <STitle size="xs">
          Safe Guardians join us in the fight against painful UX and shady security practices in
          Web3. They align with our vision to drive the adoption of smart contract accounts, and
          have verifiably proven their commitment to this vision.
        </STitle>
      </RightColumn>
    </Block>
  )
}

export default WhatAreGuardians
