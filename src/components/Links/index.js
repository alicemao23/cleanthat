import styled from 'styled-components'
import { Link } from 'gatsby'

import NavLink from './NavLink'

export const StyledLink = styled(Link)`
  ${({ theme }) => `
    text-decoration: none;
    font-family: ${theme.fonts.secondary};
    `}
`
export const RouteLink = styled(StyledLink)`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`

export const MenuLink = styled(StyledLink)`
  color: ${({ theme }) => theme.colors.textPrimary};
`

export const Dropdown = styled.div`
  ${({ onClick = () => {} }) => `
  cursor: ${onClick ? 'pointer' : 'default'};
  display: flex;
  align-items: center;
  margin: auto;
  font-size: 1.6rem;
  height: 100%; 
  position: relative; 

  &:after {
    content: '';
    position: absolute; 
    right: -20px; 
    top: 50%;
    width: 8px; 
    height: 8px; 
    border-right: 2px solid black; 
    border-bottom: 2px solid black;
    transform: translateY(-6px) rotate(45deg);
    transition: transform 0.2s;
  }

  &.isOpen:after {
    transition: transform 0.2s;
      transform: translateY(-2px) rotate(225deg);
  }
`}
`
export { NavLink }
