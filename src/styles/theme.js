module.exports = {
  screens: {
    xs: 375,
    sm: 425,
    md: 768,
    lg: 1024,
    xl: 1440
  },
  screenSizes: {
    mobileXS: '(min-width: 375px))',
    mobileS: '(min-width: 425px)',
    tablet: '(min-width: 768px)',
    laptop: '(min-width: 1024px)',
    laptopL: '(min-width: 1440px)',
    desktop: '(min-width: 2560px)'
  },
  colors: {
    primaryLight: '#FFFFFF',
    textPrimary: '#000000',
    textSecondary: '#FFFFFF',
    placeholder: '#A6A6A6',
    accent: '#F08D86',
    error: '#E20F00',
    background: '#F5F5F5',
    commercial: {
      primary: '#1933D3',
      primaryLight: '#D2E6FD',
      text: '#FFFFFF',
      background: '#D2E6FD'
    },
    residential: {
      primary: '#FACE6F',
      primaryDark: '#CF9914',
      primaryLight: '#FFF5E2',
      text: '#000000',
      background: '#FFF5E2'
    },
    footer: {
      text: '#FFFFFF',
      background: '#1933D3'
    },
    shadow: '8px 8px 16px rgba(0, 0, 0, 0.1)'
  },
  fonts: {
    primary: 'Poppins',
    secondary: 'Din'
  }
}
