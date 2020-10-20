import React, { useState } from 'react'
import styled from 'styled-components'
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

import Button from '../Button/CTAButton'

import { NavLink } from '../Links'

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 375px;
  justify-content: space-between;
  height: 100vh;
  padding: 3rem 3.5rem;
`

const Nav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  > * :not(:last-child) {
    // margin: 0 45px;
  }
`
const MenuDrawer = () => {
  return (
    <MenuContainer>
      <Nav>
        <NavLink key={1} to="/" activeClassName="active">
          Home
        </NavLink>
        <NavLink key={2} to="about-us" activeClassName="active">
          About us
        </NavLink>
        <NavLink key={3} to="commercial-services" activeClassName="active">
          Commercial Services
        </NavLink>
        <NavLink key={4} to="residential-services" activeClassName="active">
          Residential Services
        </NavLink>

        <NavLink key={5} to="contact-us" activeClassName="active">
          Contact us
        </NavLink>
        {/* <NavLink key={6} to="blog" activeClassName="active">
          Blog
        </NavLink> */}
      </Nav>
      <Button variant="commercial">Get a Quote</Button>
    </MenuContainer>
  )
}
const MobileMenu = () => {
  const [open, isOpen] = useState(false)

  const toggleDrawer = (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    isOpen(!open)
  }

  const closeDrawer = () => isOpen(false)
  return (
    <>
      <IconButton onClick={toggleDrawer}>
        <MenuIcon />
      </IconButton>
      <Drawer open={open} onClose={closeDrawer}>
        <MenuDrawer />
      </Drawer>
    </>
  )
}

export default MobileMenu
