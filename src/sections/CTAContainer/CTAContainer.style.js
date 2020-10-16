import styled from 'styled-components'

export const StyledCTAContainer = styled.div`
  ${({ theme }) => `
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 3.5rem;
    padding-left: 3.5rem;
    margin-bottom: 9rem;
    @media ${theme.screenSizes.tablet} {
      padding: 0 12rem;
    }
    @media ${theme.screenSizes.laptop} {
      flex-direction: row;
    }
    @media ${theme.screenSizes.laptopL} {
      .header {
        margin-top: 8rem;
      }
    }
  `}
`
export const CTACard = styled.div`
  ${({ theme, variant }) => `
    display: flex;
    flex-basis: 14.7rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    :first-child {
      margin-bottom: 2rem;
    }
    font-family: ${theme.fonts.primary};
    font-size: 1.4rem;
    font-weight: bold;
    letter-spacing: 0.1rem;
    
    padding: 0 3.5rem;
    background-color: ${theme.colors[variant].primaryLight};
    @media ${theme.screenSizes.laptop} {
      flex-basis: 47.9rem;
      align-items: center;
      flex-direction: row;
      justify-content: space-between;
      height: 10rem;
      :first-child {
        margin-right: 2rem;
      }
    }
  `}
`
