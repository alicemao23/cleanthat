import styled from 'styled-components'
import Button from '@material-ui/core/Button'

const StyledButton = styled(Button)`
  min-width: 16.5rem;
  height: 4rem;
  font-size: 1.4rem;
  border-radius: 5.4rem;
  font-family: Poppins;
  font-weight: bold;
  ${({ theme, variant = 'commercial' }) => `
    background-color: ${theme.colors[variant].primary};
    color: ${theme.colors[variant].text};
  `}
`

export const StyledLink = styled.a`
  span {
    display: block;
    margin: auto;
  }
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;

  text-decoration: none;
  min-width: 16.5rem;
  height: 4rem;
  font-size: 1.4rem;
  border-radius: 5.4rem;
  font-family: Poppins;
  font-weight: bold;
  text-align: center;
  line-height: 4rem;
  ${({ theme, variant = 'commercial' }) => `
  background-color: ${theme.colors[variant].primary};
  color: ${theme.colors[variant].text};
`}
`

export default StyledButton
