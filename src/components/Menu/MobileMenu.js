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
        <NavLink
          // selected
          key={0}
          path="home"
          name="home"
        />
        <NavLink
          // selected
          key={1}
          path="about-us"
          name="About us"
        />
        <NavLink
          // selected
          key={2}
          path="commercial-services"
          name="Commercial Services"
        />
        <NavLink
          // selected
          key={3}
          path="residential-services"
          name="Residential Services"
        />
        <NavLink
          // selected
          key={4}
          path="contact-us"
          name="Contact us"
        />
        <NavLink
          // selected
          key={5}
          path="blog"
          name="Blog"
        />
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
