import * as React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import Text from '../components/layout/Text'

interface IndexPageProps {
  location: {
    pathname: string
  }
  data: {
    image: {
      childImageSharp: {
        fluid: any
      }
    }
    site: {
      siteMetadata: {
        title: string
        description: string
      }
    }
  }
}

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: linear-gradient(
    180deg,
    #1f3044 16.37%,
    #0a111f 59.27%,
    #162333 100%
  );
`

export default ({ data, location }: IndexPageProps) => {
  return (
    <Layout title="Not found">
      <Wrapper>
        <Text size="xxl" strong withoutMargin>
          Error 404:
        </Text>
        <Text size="xxl" strong withoutMargin>
          Page not found!
        </Text>
      </Wrapper>
    </Layout>
  )
}
