import React from 'react'
import styled from 'styled-components'
import Discord from '../../images/icons/discord.svg'
import Github from '../../images/icons/github.svg'
import Twitter from '../../images/icons/twitter.svg'

const Block = styled.div`
  display: flex;
  width: 180px;
  justify-content: space-between;
`

const Icon = styled.div`
  height: 42px;
  width: 42px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 21px;
  padding: 10px;
  &:hover {
    background: #b3b5c6;
    transition: all 0.2s ease;
    -webkit-transition: 0.2s ease;
  }
`

const SocialBlock = () => {
  return (
    <Block>
      <a
        href="https://twitter.com/gnosissafe"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon>
          <Twitter />
        </Icon>
      </a>
      <a
        href="https://github.com/safe-global"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon>
          <Github />
        </Icon>
      </a>
      <a
        href="https://discord.com/invite/AjG7AQD9Qn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon>
          <Discord />
        </Icon>
      </a>
    </Block>
  )
}

export default SocialBlock
