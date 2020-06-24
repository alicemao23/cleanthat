import {
  createMuiTheme,
  StylesProvider,
  ThemeProvider as MuiThemeProvider
} from '@material-ui/core/styles'
import React from 'react'
import config from 'react-reveal/globals'
import { ScrollingProvider } from 'react-scroll-section'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import Header from '../../sections/Header'
import Footer from '../../sections/Footer'
import Helmet from '../Helmet'

// import colors from '../../colors'
const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before { 
    box-sizing: inherit;
    }

  html {
    font-size: 10px;
  }
    
  body {
    box-sizing: border-box; 
    margin: 0;
    // font-family: Cabin, 'Open Sans', sans-serif;
    font-family: Poppins;
    overflow-x: hidden;
    width: 100vw;
  }
`

config({ ssrFadeout: true })

const loadScript = (src) => {
  const tag = document.createElement('script')
  tag.src = src
  tag.defer = true

  document.getElementsByTagName('body')[0].appendChild(tag)
}

// const theme = {
//   ...preset,
//   colors,
//   fonts: {
//     body: 'Cabin, Open Sans, sans-serif',
//     heading: 'inherit',
//     monospace: 'monospace'
//   }
// }

const theme = createMuiTheme({
  status: {
    danger: 'red'
  },
  colors: {
    commercial: {
      primary: '#1933D3',
      primaryLight: '#D2E6FD',
      text: '#FFFFFF'
    },
    residential: {
      primary: '#FACE6F',
      primaryLight: '#FFF5E2',
      text: '#000000'
    },
    footer: {
      text: '#FFFFFF',
      background: '#1933D3'
    },
    shadow: '8px 8px 16px rgba(0, 0, 0, 0.1)'
  },
  fonts: {
    heading: 'Poppins',
    body: 'Din'
  }
})

const Layout = ({ children }) => {
  return (
    <StylesProvider injectFirst>
      <GlobalStyle />
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <ScrollingProvider>
            <Helmet />
            <Header />
            {children}
            <Footer />
          </ScrollingProvider>
        </ThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  )
}

export default Layout
