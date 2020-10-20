import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`
const LinkContainer = styled(StyledLink)`
  ${({ theme, onClick }) => `
    position: relative;
    cursor: ${onClick ? 'pointer' : 'default'};
    display: flex;
    align-items: center;
    margin: auto;
    font-size: 1.6rem;
    height: 100%;
    transition: all 0.2s ease-in-out;
    &:before,
    &:after {
      content: "";
      position: absolute;
      bottom: 0px;
      left: 0;
      width: 0px;
      height: 5px;
      margin: 5px 0 0;
      transition: all 0.2s ease-in-out;;
      transition-duration: 0.4s;
      opacity: 0;
      background-color: ${theme.colors.commercial.primary};
    }

    &:hover, .active&{
      :before,
      &:after {
        width: 100%;
        opacity: 1;
      }
  `}
`

const NavLink = ({ children, ...props }) => (
  <LinkContainer {...props}>{children}</LinkContainer>
)

export default NavLink
