import React from 'react'
import clsx from 'clsx'
import Headroom from 'react-headroom'
import { navigate } from 'gatsby'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import { Menu, MobileMenu } from '../components/Menu'
import MAIN_LOGO from '../media/main-logo.svg'
import MIN_LOGO from '../media/mini-logo.svg'

const HeaderContainer = styled(Headroom)`
  font-family: Din;
  font-weight: 700;
  width: 100%;
  padding: 0 8.33%;
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.25);
  margin: auto;
  .cleanthat-logo {
    background: ${() => `left / contain no-repeat url(${MAIN_LOGO})`};
    &.mobile {
      background: ${() => `no-repeat left url(${MIN_LOGO})`};
    }
  }

  .headroom--pinned {
    padding: 0 8.33%;
    background-color: white;
    max-width: 100vw;
    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.25);
    .cleanthat-logo {
      background: ${() => `no-repeat left url(${MIN_LOGO})`};
    }
  }
`

const Layout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 8rem;
  background-color: white;
`

const Logo = styled.div`
  width: 24rem;
  height: 100%;
  -webkit-transition: background-image 0.2s ease-in-out;
  transition: background-image 0.2s ease-in-out;
`

const Header = () => {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'))
  return (
    <HeaderContainer>
      <Fade top>
        <Layout>
          <Logo
            onClick={() => {
              navigate('/home')
            }}
            className={clsx(isDesktop ? 'desktop' : 'mobile', 'cleanthat-logo')}
          />
          {isDesktop ? <Menu /> : <MobileMenu />}
        </Layout>
      </Fade>
    </HeaderContainer>
  )
}

export default Header
