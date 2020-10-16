import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'

import ServiceBannerLayout from '../../components/Containers/BannerCardContainer'

export const ServiceBannerContainer = styled(ServiceBannerLayout)`
  overflow: hidden;
  background-color: ${({ theme, variant = '' }) =>
    theme.colors[variant].background};
  ${({ theme, direction }) => `
    @media ${theme.screenSizes.laptop} {
      height: 33.1rem;
      flex-direction: ${direction};
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
`}
`

export const Container = styled.div`
  width: 100%;
  padding: 8rem 4rem;
  flex-shrink: 0;
  ${({ theme }) => `
    @media ${theme.screenSizes.laptop} {
      width: 50%;
      padding: 7rem 6rem;
    }
    @media ${theme.screenSizes.laptopL} {
      padding: 9rem 11.3rem;
    }
  `}
`

export const Header = styled(Typography)`
  margin-top: 1rem;
  margin-bottom: 3.5rem;
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
