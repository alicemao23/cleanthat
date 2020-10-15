import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'

import ServiceBannerLayout from '../../components/Containers/BannerCardContainer'

export const ServiceBannerContainer = styled(ServiceBannerLayout)`
  background-color: ${({ theme, variant = '' }) =>
    theme.colors[variant].background};
  ${({ theme, direction }) => `
    @media ${theme.screenSizes.laptop} {
      height: 44.3rem;
      flex-direction: ${direction};
    }
    @media ${theme.screenSizes.laptopL} {
    }
  `}
`

export const BannerImage = styled.img`
  flex-grow: 1;
  width: 100%;
  height: auto;
  ${({ theme }) => `
    @media ${theme.screenSizes.laptop} {
      width: 50%;
    }
    @media ${theme.screenSizes.laptopL} {
    }
  `}
`
export const Container = styled.div`
  width: 100%;
  padding: 8rem 4rem;
  ${({ theme }) => `
    @media ${theme.screenSizes.laptop} {
      width: 50%;
      padding: 7rem 6rem;
    }
    @media ${theme.screenSizes.laptopL} {
      padding: 8rem 12rem;
    }
  `}
`
export const Label = styled.span`
  font-size: 1.4rem;
  font-weight: bold;
  color: ${({ theme, variant = 'commercial' }) =>
    theme.colors[variant].primary};
  text-transform: uppercase;
`

export const Header = styled(Typography)`
  margin-top: 1rem;
  margin-bottom: 3.5rem;
  ${({ theme }) => `
  @media ${theme.screenSizes.laptop} {
  }
  @media ${theme.screenSizes.laptopL} {
  }
`}
`

export const Info = styled.p`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 1.6rem;
  line-height: 122%;
  margin: 0;
  margin-bottom: 5rem;
  ${({ theme }) => `
    @media ${theme.screenSizes.tablet} {
      margin-bottom: 4rem;
    }
    @media ${theme.screenSizes.laptop} {
      margin-bottom: 3.5rem;
    }
  `}
`
