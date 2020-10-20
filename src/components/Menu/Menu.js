import React, { useState } from 'react'
import clsx from 'clsx'
import styled from 'styled-components'
import Menu from '@material-ui/core/Menu'
import MuiMenuItem from '@material-ui/core/MenuItem'

import { NavLink, Dropdown } from '../Links'
import Button from '../Button/CTAButton'

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

const MenuItem = styled(MuiMenuItem)`
  height: 5.4rem;
  :hover {
    background-color: initial;
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
      <NavLink key={0} to="/" activeClassName="active">
        Home
      </NavLink>
      <NavLink key={0} to="about-us" activeClassName="active">
        About us
      </NavLink>
      <Dropdown
        type="button"
        key={1}
        onClick={handleClick}
        className={clsx(anchorEl ? 'isOpen' : '')}
      >
        Cleaning Services
      </Dropdown>
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
          <NavLink key={0} to="residential-services" activeClassName="active">
            Residential Services
          </NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <NavLink key={1} to="commercial-services" activeClassName="active">
            Commercial Services
          </NavLink>
        </MenuItem>
      </Menu>
      <NavLink
        key={2}
        to="contact-us"
        onClick={() => {}}
        activeClassName="active"
      >
        Contact us
      </NavLink>
      {/* <NavLink key={3} path="blog" onClick={() => {}} name="Blog" /> */}
      <Button variant="commercial">Get a Quote</Button>
    </Nav>
  )
}
export default NavigationContainer
