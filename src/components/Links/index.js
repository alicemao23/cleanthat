import styled from 'styled-components'
import { Link } from 'gatsby'

import NavLink from './NavLink'
import LinkAnimated from './LinkAnimated'
const StyledLink = styled(Link)`
  ${({ theme }) => `
    text-decoration: none;
    font-family: ${theme.fonts.secondary};
    `}
`
const RouteLink = styled(StyledLink)`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`

const MenuLink = styled(StyledLink)`
  color: ${({ theme }) => theme.colors.textPrimary};
`

export { RouteLink, NavLink, MenuLink, LinkAnimated }
