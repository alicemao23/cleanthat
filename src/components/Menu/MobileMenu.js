import React, { useState } from 'react'
import styled from 'styled-components'
import { navigate } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

import Button from '../Button'
import { NavLink } from '../Links'

import CloseIcon from '../../media/close-icon.svg'

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 375px;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  padding: 3rem 3.5rem;
`

const Nav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  height: max-content;
  width: 100%;
  > * {
    width: max-content;
  }
  & > *:not(:first-child) {
    margin: 2.5rem 0;
  }
`

const useStyles = makeStyles((theme) => ({
  icon: {
    fill: theme.colors.accent
  },
  closeBtn: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 25,
    height: 25
  }
}))
const MenuDrawer = ({ closeMenu }) => {
  const classes = useStyles()
  return (
    <MenuContainer>
      <Nav>
        <IconButton onClick={closeMenu} className={classes.closeBtn}>
          <img src={CloseIcon} className={classes.icon} alt="close menu" />
        </IconButton>
        <NavLink onClick={closeMenu} key={1} to="/" activeClassName="active">
          Home
        </NavLink>
        <NavLink
          onClick={closeMenu}
          key={2}
          to="about-us"
          activeClassName="active"
        >
          About Us
        </NavLink>
        <NavLink
          onClick={closeMenu}
          key={3}
          to="commercial-services"
          activeClassName="active"
        >
          Commercial Services
        </NavLink>
        <NavLink
          onClick={closeMenu}
          key={4}
          to="residential-services"
          activeClassName="active"
        >
          Residential Services
        </NavLink>

        <NavLink
          onClick={closeMenu}
          key={5}
          to="contact-us"
          activeClassName="active"
        >
          Contact Us
        </NavLink>
        {/* <NavLink key={6} to="blog" activeClassName="active">
          Blog
        </NavLink> */}
      </Nav>
      <Button
        variant="commercial"
        onClick={() => navigate('/commercial-services')}
      >
        Get a Quote
      </Button>
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
      <SwipeableDrawer anchor="right" open={open} onClose={closeDrawer}>
        <MenuDrawer closeMenu={closeDrawer} />
      </SwipeableDrawer>
    </>
  )
}

export default MobileMenu
