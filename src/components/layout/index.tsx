import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../../styles/globalStyles'
import theme from '../../styles/theme'
import HTMLHead from './HTMLHead'

interface ILayoutProps {
  children: any
  title: string
}

const Layout: React.FC<ILayoutProps> = ({ children, title }) => {
  return (
    <div>
      <GlobalStyle />
      <HTMLHead title={title} />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </div>
  )
}

export default Layout
