import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import Container from '../../components/Containers/PageContainer.style'

export const FooterContainer = styled(Container)`
  ${({ theme }) => `
  font-family: ${theme.fonts.secondary};
  width: 100%;
  padding-top: 5rem;
  padding-bottom: 4rem;
  margin: auto;
  background-color: ${(props) => props.theme.colors.footer.background};
  color: ${(props) => props.theme.colors.footer.text};
  
  @media ${theme.screenSizes.tablet} {
    padding: 0 6rem;
  }
  @media ${theme.screenSizes.laptop} {
    max-height: 34.4rem;
    padding-top: 6rem;
  }
  `}
`

export const ContentLayout = styled.div`
  ${({ theme }) => `
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  @media ${theme.screenSizes.laptop} {
    flex-direction: row;
  }
  `}
`

export const Nav = styled.div`
  ${({ theme }) => `
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding-top: 3.5rem;
  > * {
    margin: 0 0 2rem 0;
  }

  @media ${theme.screenSizes.laptop} {
    width: 50%;
    padding: 0 0 0 12rem;
    height: 16rem;
  }
  `}
`

export const Slogan = styled(Typography)`
  ${({ theme }) => `
  line-height: 115%;
  margin-top: 2rem;
  
  @media ${theme.screenSizes.laptop} {
    margin: 0;
    width: 32rem;
  }
  
  `}
`

export const NAV_LINKS = [
  'Home',
  'About us',
  'Commercial services',
  'Residential services',
  'Careers',
  'Contact us',
  'Blog'
]

export const StyledDivider = styled.hr`
  background-color: ${(props) => props.theme.colors.primaryLight};
  margin-top: 3rem;
  margin-bottom: 1.5rem;
`

export const BrandContent = styled.div`
  ${({ theme }) => `
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding-bottom: 10rem;
  border-bottom: 1px solid white;
  width: 100%;

  img {
    margin-right: 2rem;
  }

  @media ${theme.screenSizes.tablet} {
    padding: 5rem 0;
  }
  @media ${theme.screenSizes.laptop} {
    align-items: start;
    flex-direction: row;
    padding: 0;
    width: 50%;
    border: none;
  }
  `}
`

export const Background = styled.div`
  background-color: ${(props) => props.theme.colors.footer.background};
  width: 100vw;
`
