import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'

const StyledButton = styled(Button)`
  min-width: 16.5rem;
  height: 4rem;
  font-size: 1.4rem;
  border-radius: 5.4rem;
  font-family: Poppins;
  font-weight: bold;
  ${({ theme, type }) =>`
    background-color: ${theme.colors[type].primary};
    color: ${theme.colors[type].text};
  `}
`

const CTAButton = ({ label = '', onClick = () => {}, type =''}) => {
  return <StyledButton type={type} onClick={onClick}>{label}</StyledButton>
}

export default CTAButton
