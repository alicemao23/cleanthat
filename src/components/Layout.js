import React, { useEffect } from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import {
  StylesProvider,
  createMuiTheme,
  ThemeProvider as MuiThemeProvider
} from '@material-ui/core/styles'
import { ScrollingProvider } from 'react-scroll-section'
import config from 'react-reveal/globals'
import colors from '../../colors'
import Helmet from './Helmet'
import Header from '../sections/Header'

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
    font-family: Cabin, 'Open Sans', sans-serif;
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
      primary: '#1933D3'
    },
    light: '#FFFFFF'
  }
})

const Layout = ({ children }) => {
  useEffect(() => {
    loadScript('https://use.fontawesome.com/fd58d214b9.js')
  }, [])

  return (
    <StylesProvider injectFirst>
      <main>
        <GlobalStyle />
        <MuiThemeProvider theme={theme}>
          <ThemeProvider theme={theme}>
            <ScrollingProvider>
              <Helmet />
              <Header />
              {children}
            </ScrollingProvider>
          </ThemeProvider>
        </MuiThemeProvider>
      </main>
    </StylesProvider>
  )
}

export default Layout
