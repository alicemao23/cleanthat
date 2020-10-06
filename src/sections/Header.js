import React, { useState } from 'react'
import Headroom from 'react-headroom'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

import { NavLink, MenuLink } from '../components/Links'
import Button from '../components/Button/CTAButton'
import MAIN_LOGO from '../media/main-logo.svg'

const HeaderContainer = styled(Headroom)`
  font-family: Din;
  font-weight: 700;
  width: 100%;
  padding: 0 8.33%;
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.25);
  margin: auto;
`

const Layout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 8rem;
  background-color: white;
`

const Logo = () => <img src={MAIN_LOGO} />

const Nav = styled.div`
  display: flex;
  flex-basis: 864px;
  flex-shrink: 2;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  > * :not(:last-child) {
    margin: 0 45px;
  }
`
const NavigationContainer = () => {
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const linkStyle = {
    textDecoration: 'none',
    fontFamily: 'Din'
  }

  return (
    <Nav>
      <NavLink
        // selected
        key={0}
        path="about-us"
        name="About us"
      />
      <NavLink
        type="button"
        key={1}
        path="services"
        onClick={handleClick}
        name="Cleaning Services"
      />
      <Menu
        disableScrollLock
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      >
        <MenuItem onClick={handleClose}>
          <MenuLink
            // selected
            key={0}
            to="residential-services"
          >
            Residential Services
          </MenuLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <MenuLink
            // selected
            key={1}
            to="commercial-services"
          >
            Commercial Services
          </MenuLink>
        </MenuItem>
      </Menu>
      <NavLink key={2} path="contact-us" onClick={() => {}} name="Contact us" />
      <NavLink key={3} path="blog" onClick={() => {}} name="Blog" />
      <Button variant="commercial">Get a Quote</Button>
    </Nav>
  )
}

const Header = () => {
  return (
    <HeaderContainer>
      <Fade top>
        <Layout>
          <Logo />
          <NavigationContainer />
        </Layout>
      </Fade>
    </HeaderContainer>
  )
}

export default Header
