import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'

import ServiceBannerLayout from '../../components/Containers/BannerCardContainer'

export const ServiceBannerContainer = styled(ServiceBannerLayout)`
  overflow: hidden;
  background-color: ${({ theme, variant = '' }) =>
    theme.colors[variant].background};
  ${({ theme, direction }) => `
    @media ${theme.screenSizes.laptop} {
      height: 44.3rem;
      flex-direction: ${direction};
    }

  `}
`

export const BannerImage = styled.img`
  flex-grow: 1;
  width: 100%;
  height: auto;
`

export const Container = styled.div`
  width: 100%;
  padding: 8rem 4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-shrink: 0;
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
    theme.colors[variant].accentText};
  text-transform: uppercase;
`

export const Header = styled(Typography)`
  margin-top: 1rem;
  margin-bottom: 3.5rem;
`

export const Info = styled(Typography)`
  font-family: ${({ theme }) => theme.fonts.secondary};
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
