import React from 'react'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'

import { PageHeader, CardHeader, SectionHeader } from '../components/Header'
import Form from '../components/Form'
import TestimonyCarousel from '../components/Carousel'
import TestimonialTile from '../components/TestimonialTile'

import { COMMERCIAL_SERVICES_LOGO_MAP } from '../shared/constants'
import TESTIMONIALS from '../shared/testimonials'

import HeroBackground from '../media/residentialHero.svg'

const ContainerLayout = styled.div`
  padding: 8rem 4rem;
  max-width: 1440px;
  margin: auto;
  ${({ theme }) => `
    @media ${theme.screenSizes.laptopL} {
      padding: 8rem 12rem;
    }
  `}
`
const HeroContainer = styled(ContainerLayout)`
  padding: 8rem 2rem;

  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  ${({ theme }) => `
    @media ${theme.screenSizes.laptop} {
      padding: 8rem 4rem;
      flex-direction: row;
    }
    @media ${theme.screenSizes.laptopL} {
      padding: 8rem 12rem;
    }
  `}
`
const CarouselContainer = styled(ContainerLayout)`
  padding-bottom: 19rem;
  position: relative;
  :before {
    content: '';
    width: 50%;
    height: 30%;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.commercial.primary};
    bottom: 0;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -30%) rotate(12deg);
    z-index: -1;
  }
  ${({ theme }) => `
    @media ${theme.screenSizes.laptop} {
      padding-bottom: 19rem;

    }
  `}
`
const HeroDetails = styled.div`
  padding-left: 2rem;
  padding-right: 2rem;
  ${({ theme }) => `
    @media ${theme.screenSizes.laptop} {
      width: 50rem;
      padding: 0;
    }
  `}
`

const BackgroundContainer = styled.div`
  background-image: ${() => `url(${HeroBackground})`};
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  overflow: auto;
  .header {
    padding-left: 4rem;
    max-width: 1440px;
    margin: auto;
    ${({ theme }) => `
    @media ${theme.screenSizes.tablet} {
      padding-left: 9rem;
    }
    @media ${theme.screenSizes.laptopL} {
      padding-left: 12rem;
    }
  `}
  }
`
const ServicesIconContainer = styled(ContainerLayout)`
  background-color: ${({ theme }) => theme.colors.commercial.background};
  display: flex;
  flex-direction: column;
  align-items: center;

  > .header {
    margin-bottom: 5rem;
  }
`
const ServicesIconBackground = styled.div`
  background-color: ${({ theme }) => theme.colors.commercial.background};
`
const ServiceIcons = styled.div`
  ${({ theme }) => `
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  > * {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-basis: 45%;
      @media ${theme.screenSizes.tablet} {
        flex-basis: 30%;
      }
 
      .label {
        margin-top: 3.5rem;
      }
    }
    @media ${theme.screenSizes.laptopL} {
     flex-wrap: nowrap;
    }
  `}
`

const Icon = styled.img`
  width: 140px;
  height: 140px;
`

const StyledCardHeader = styled(CardHeader)`
  margin-bottom: 3.5rem;
`

const DescriptionBody = styled(Typography)`
  margin-bottom: 5rem;
`

const ServiceList = styled.ul`
  margin: 0;
  padding-left: 1.5rem;

  > * {
    font-size: 1.6rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
  }
`

const CommercialServicesPage = () => {
  const initialFormValue = {
    name: '',
    email: '',
    phone: '',
    inquiry: '',
    officeType: 'commercial',
    frequency: ''
  }
  return (
    <>
      <BackgroundContainer>
        <div className="header">
          <PageHeader>Commercial Cleaning</PageHeader>
        </div>
      </BackgroundContainer>

      <HeroContainer>
        <HeroDetails>
          <StyledCardHeader>
            You’ve got work to do, so forget about cleaning.
          </StyledCardHeader>
          <DescriptionBody variant="body1">
            Your workspace is a reflection of your business, so rely on our
            detail-oriented, timely cleaning service team. We focus on what you
            can’t see as much as what you can. We’re serious about cleaning —
            client parties, office lobbies, kitchen mayhem — it’s in all of our
            expansive portfolios.
          </DescriptionBody>
          <StyledCardHeader>Here’s how it works</StyledCardHeader>
          <DescriptionBody variant="body1">
            In the fast-paced business of commercial properties, you need a team
            that is reliable and responsive. We will review your requirements
            and suggest a schedule to meet your needs and budget. The same
            cleaning staff is assigned to your account as well as a quality
            control supervisor who performs regular quality control checks. This
            is a partnership, and we’ve got your back every day, every week, or
            just this one time.
          </DescriptionBody>
          <ServiceList>
            <li>Advertising Agents</li>
            <li>Start-ups and innovation sector</li>
            <li>Office buildings / complexes</li>
            <li>Low to mid-rise condo buildings</li>
            <li>Shared office spaces</li>
          </ServiceList>
        </HeroDetails>
        <Form initialFormValue={initialFormValue} />
      </HeroContainer>
      <ServicesIconBackground>
        <ServicesIconContainer>
          <SectionHeader className="header">What we do</SectionHeader>
          <ServiceIcons>
            {COMMERCIAL_SERVICES_LOGO_MAP.map(({ label, icon }) => {
              return (
                <div>
                  <Icon src={icon} />
                  <Typography className="label" variant="h5" color="primary">
                    {label}
                  </Typography>
                </div>
              )
            })}
          </ServiceIcons>
        </ServicesIconContainer>
      </ServicesIconBackground>
      <CarouselContainer>
        <TestimonyCarousel>
          {TESTIMONIALS.map(({ details, author, imgPath }) => (
            <TestimonialTile
              headerLabel="Our clients come clean"
              description={details}
              name={author}
              imgUrl={imgPath}
            />
          ))}
        </TestimonyCarousel>
      </CarouselContainer>
    </>
  )
}

export default CommercialServicesPage
