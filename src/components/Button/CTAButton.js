import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'

const StyledButton = styled(Button)`
  min-width: 16.5rem;
  height: 4rem;
  font-size: 1.4rem;
  border-radius: 5.4rem;
  ${({ theme }) => `
    background-color: ${theme.colors.commercial.primary};
    color: ${theme.colors.light};
  `}
`

const CTAButton = ({ label = '', onClick = () => {} }) => {
  return <StyledButton onClick={onClick}>{label}</StyledButton>
}

export default CTAButton
