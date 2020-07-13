import React from 'react'
import styled from 'styled-components'
import LinkAnimated from './LinkAnimated'

const LinkContainer = styled.div`
  ${({ selected, theme }) =>
    selected && `border-bottom:  5px solid ${theme.colors.commercial.primary}`};
  ${({ theme, onClick }) => `
    display: flex;
    height: 100%;
    transition: 0.4s;
    position: relative;
    cursor: ${onClick ? 'pointer' : 'default'};
    align-items: center;
    &:after {
      content: '';
      position: absolute;
      left: 0;
      width: 0;
      bottom: 0px;
      background: ${theme.colors.commercial.primary};
      height: 5px;
      transition-property: width;
      transition-duration: 0.3s;
      transition-timing-function: ease-out;
    }

    &:hover:after {
      width: 100%;
    }
  `}

  ${LinkAnimated} {
    font-size: 1.6rem;
    margin: auto;
  }

  span {
    font-size: 1.6rem;
  }
`

const NavLink = ({
  onClick = () => {},
  name = '',
  path = '',
  selected,
  type
}) => {
  return type === 'button' ? (
    <LinkContainer selected={selected} onClick={onClick}>
      <span>{name}</span>
    </LinkContainer>
  ) : (
    <LinkContainer selected={selected}>
      <LinkAnimated to={path}>{name}</LinkAnimated>
    </LinkContainer>
  )
}

export default NavLink
