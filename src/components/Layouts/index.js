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

import globalTheme from '../../styles/theme'

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
const palette = {
  palette: {
    primary: {
      main: globalTheme.colors.commercial.primary
    },
    secondary: {
      main: globalTheme.colors.residential.primary
    },
    text: {
      primary: globalTheme.colors.textPrimary,
      secondary: globalTheme.colors.textSecondary
    }
  }
}

const typography = {
  typography: {
    htmlFontSize: 10,
    fontFamily: [globalTheme.fonts.primary],
    h1: {
      fontSize: '5.4rem'
    },
    h2: {
      fontSize: '4.8rem',
      fontWeight: 'bold'
    },
    h3: {
      fontSize: '3.6rem',
      fontWeight: 900
    },
    h4: {
      fontSize: '2.4rem',
      fontWeight: 900
    },
    h5: {
      fontSize: '1.4rem',
      fontWeight: 900,
      lineHeight: '110%'
    },
    h6: {},
    subtitle1: {
      fontSize: '2.4rem',
      fontFamily: globalTheme.fonts.secondary,
      lineHeight: '2.8rem'
    },
    subtitle2: {
      fontSize: '1.6rem',
      fontFamily: globalTheme.fonts.secondary
    },
    body1: {
      fontSize: '1.6rem',
      fontFamily: globalTheme.fonts.secondary
    },
    caption: {
      fontSize: '1.6rem',
      fontFamily: globalTheme.fonts.secondary,
      lineHeight: '122%'
    },
    button: {
      fontSize: '1.2rem',
      fontWeight: 900,
      letterSpacing: 3,
      textTransform: 'uppercase'
    }
  }
}

const theme = createMuiTheme({
  props: {
    MuiTypography: {
      variantMapping: {
        h1: 'h2',
        h2: 'h2',
        h3: 'h3',
        h4: 'h4',
        h5: 'h5',
        h6: 'h6',
        subtitle1: 'p',
        subtitle2: 'h2'
      }
    }
  },
  ...palette,
  ...typography,
  ...globalTheme
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
