import React from 'react'
import styled from 'styled-components'
import LinkAnimated from './LinkAnimated'

const Link = styled(LinkAnimated)`
  font-size: 1.6rem;
  margin: auto;
`

const LinkContainer = styled.div`
  ${({ selected, theme }) =>
    selected && `border-bottom:  5px solid ${theme.colors.commercial.primary}`};
  ${({ theme, onClick }) => `
  display: flex;
  height: 100%;
  transition: 0.4s;
  position: relative;
  cursor: ${onClick ? 'pointer' : 'default'};

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
`

const RouteLink = ({ onClick = () => {}, name = '', path = '', selected }) => (
  <LinkContainer selected={selected}>
    <Link to={path} onClick={onClick}>
      {name}
    </Link>
  </LinkContainer>
)

export default RouteLink
