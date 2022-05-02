import { Widget } from '@typeform/embed-react'
import { Link } from 'gatsby'
import * as React from 'react'
import styled from 'styled-components'
import Header from '../components/home/Header'
import Layout from '../components/layout'
import Text from '../components/layout/Text'
import GnosisSafe from '../images/GnosisSafe.svg'
import SafeLogo from '../images/SafeLogo.svg'

const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-image: url('/images/Desktop.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
`

const PoweredBy = styled.div`
  position: absolute;
  width: 215px;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  bottom: 30px;
  & > * {
    margin-right: 3px;
  }
`

const WidgetStyle = {
  position: 'absolute',
  top: '95px',
  bottom: '80px',
  left: '15px',
  right: '15px',
}

export default () => (
  <Container>
    <Layout title="Safe Guardians Application">
      <Link to="/">
        <Header onlyTitle noMaxWidth />
      </Link>
      <Widget id="o0HCFW4k" style={WidgetStyle} />
      <a
        href="https://gnosis-safe.io"
        target="_blank"
        rel="noopener noreferrer"
      >
        <PoweredBy>
          <Text color="white" size="xs" withoutMargin>
            Powered by
          </Text>
          <SafeLogo />
          <GnosisSafe />
        </PoweredBy>
      </a>
    </Layout>
  </Container>
)
