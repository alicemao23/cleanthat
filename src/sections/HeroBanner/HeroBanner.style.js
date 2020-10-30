import styled from 'styled-components'
import PageLayout from '../../components/Containers/PageContainer.style'

export const HeroInfoContainer = styled.div`
  padding: 4rem 0 3.5rem;
  flex-shrink: 0;
  flex-grow: 1;

  .header {
    margin-bottom: 5rem;
  }

  .subheader {
    margin: 5rem 0 3.5rem;
  }

  .bold {
    font-weight: 700;
  }

  ${({ theme }) => `
    @media ${theme.screenSizes.tablet} {
      .header {
        margin-top: 2.5rem;
      }
    }
    @media ${theme.screenSizes.laptop} {
      min-width: 40%;
      flex: 1;  
      padding-bottom: 4rem;

    }
    @media ${theme.screenSizes.laptopL} {
      padding-bottom: 8rem;
      .header {
        margin-top: 8rem;
      }
    }
  `}
`
export const IllustrationContainer = styled.img`
  flex-grow: 1;
  flex-shrink: 0;
`

export const StyledContainer = styled(PageLayout)`
  ${({ theme }) => `
    display: flex;
    flex-direction: column;
    padding-bottom: 3.5rem;
    ${IllustrationContainer} {
      width: 100%;
    }
    
    @media ${theme.screenSizes.tablet} {
      padding-bottom: 3.5rem;
  
    }
    @media ${theme.screenSizes.laptop} {
      flex-direction: row;
      padding: 0 6rem;
      ${IllustrationContainer} {
        width: 50%;
      }
    }
    
    @media ${theme.screenSizes.laptopL} {
      padding: 5rem 12rem 0;
      ${IllustrationContainer} {
        margin-left: 4rem;
      }
    }
  `}
`
