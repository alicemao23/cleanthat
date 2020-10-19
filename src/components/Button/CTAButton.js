import styled from 'styled-components'
import Button from '@material-ui/core/Button'

const StyledButton = styled(Button)`
  ${({ theme, variant = 'commercial' }) => `
    width: 100%;  
    min-width: 16.5rem;
    height: 4rem;
    font-size: 1.4rem;
    border-radius: 5.4rem;
    font-family: Poppins;
    font-weight: bold;
    background-color: ${theme.colors[variant].primary};
    color: ${theme.colors[variant].text};
    &.MuiButton-root:hover {
      background-color: ${theme.colors[variant].primary};
    }
 
    @media ${theme.screenSizes.tablet} {
      width: 16.5rem;
    }
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
  width: 100%;
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
    @media ${theme.screenSizes.tablet} {
      width: 16.5rem;
    }
  `}
`

export default StyledButton
