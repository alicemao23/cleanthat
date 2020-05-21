import React, { useState } from 'react'

import Headroom from 'react-headroom'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

import RouteLink from '../components/RouteLink'
import Button from '../components/Button/CTAButton'

const LINKS = ['About us', 'Cleaning Services', 'Contact us', 'blog']

const HeaderContainer = styled(Headroom)`
  // position: absolute;
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

const Logo = () => 'LOGO'

const Nav = styled.div`
  display: flex;
  flex-basis: 864px;
  flex-shrink: 2;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  * :not(:last-child) {
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

  return (
    <Nav>
      <RouteLink
        // selected
        key={0}
        path="about-us"
        onClick={() => {}}
        name="About us"
      />
      <RouteLink
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
        <MenuItem onClick={handleClose}>Residential Services</MenuItem>
        <MenuItem onClick={handleClose}>Commercial Services</MenuItem>
      </Menu>
      <RouteLink
        key={2}
        path="contact-us"
        onClick={() => {}}
        name="Contact us"
      />
      <RouteLink key={3} path="blog" onClick={() => {}} name="blog" />
      <Button type="commercial" label="Get a Quote" />
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
