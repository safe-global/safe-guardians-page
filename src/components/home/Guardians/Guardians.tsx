import React from 'react'
import styled from 'styled-components'
import Text from '../../layout/Text'

const Block = styled.div`
  position: relative;
  display: flex;
  margin: 0 auto;
  max-width: 1440px;
  justify-content: center;
  align-items: center;
  margin-bottom: 170px;
  margin-top: 150px;
  padding: 16px;
  z-index: 1;
  @media (max-width: 800px) {
    flex-direction: column-reverse;
    margin-top: 80px;
  }
`

const LeftColumn = styled.div`
  display: flex;
  width: 770px;
  justify-content: start;
  --margin-right: 50px;
  z-index: 1;
  @media (max-width: 800px) {
    margin: 0;
    margin-top: 50px;
    width: 100%;
    justify-content: center;
  }
`

const RightColumn = styled.div`
  width: 485px;
  min-width: 450px;
  @media (max-width: 800px) {
    margin: 0;
    width: 100%;
    min-width: 100%;
  }
`

const Header = styled.div`
  @media (max-width: 800px) {
    text-align: center;
  }
`

const SGreenTitle = styled(Text)`
  color: #008c73;
  display: inline-block;
`

const Img = styled.img`
  width: 678px;
  max-width: 100%;
  @media (max-width: 800px) {
    margin-top: 50px;
    width: 100%;
  }
`

function WhatAreGuardians() {
  return (
    <Block>
      <LeftColumn>
        <Img src="/images/section1.png" />
      </LeftColumn>
      <RightColumn>
        <Header>
          <Text size="xxl" strong withoutMargin>
            What are
          </Text>
          <SGreenTitle size="xxl" color="#029F7F" strong withoutMargin>
            Safe Guardians?
          </SGreenTitle>
        </Header>
        <Text size="lg">
          Safe Guardians are active members of the Safe community, who use their
          powers to contribute positively to the ecosystem.
        </Text>
        <Text size="sm">
          Safe Guardians join us in the fight against painful UX and shady
          security practices in Web3. They align with our vision to drive the
          adoption of smart contract accounts, and have verifiably proven their
          commitment to this vision.
        </Text>
      </RightColumn>
    </Block>
  )
}

export default WhatAreGuardians
