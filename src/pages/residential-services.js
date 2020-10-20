import React from 'react'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'

import { PageHeader, CardHeader, SectionHeader } from '../components/Header'

import HeroBackground from '../media/commercial-hero.svg'
import { StyledLink as Button } from '../components/Button/CTAButton'
import TestimonyCarousel from '../components/Carousel'
import TestimonialTile from '../components/TestimonialTile'

import { RESIDENTIAL_SERVICES_LOGO_MAP } from '../shared/constants'

const TESTIMONIALS = [
  {
    name: 'Christine Pratt',
    headerLabel: 'Our clients come clean',
    description:
      'We are extremely happy with the level of service CleanThat provides. You can trust their staff to be very thorough and clean. The microwave and keyboards were spotless, even our sugar bowl for coffee was sparkling. It’s the little extra care they take that make a big difference. Rest assured they will leave your office smelling fresh and clean. We highly recommend CleanThat!',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60'
  },
  {
    name: 'Christine Pratt',
    headerLabel: 'Our clients come clean',
    description:
      'We are extremely happy with the level of service CleanThat provides. You can trust their staff to be very thorough and clean. The microwave and keyboards were spotless, even our sugar bowl for coffee was sparkling. It’s the little extra care they take that make a big difference. Rest assured they will leave your office smelling fresh and clean. We highly recommend CleanThat!',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60'
  }
]
const ContainerLayout = styled.div`
  padding: 8rem 4rem;

  ${({ theme }) => `
    @media ${theme.screenSizes.laptopL} {
      padding: 8rem 12rem;
    }
  `}
`
const HeroContainer = styled(ContainerLayout)`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  ${({ theme }) => `
    @media ${theme.screenSizes.laptop} {
      flex-direction: row;
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
    background-color: ${({ theme }) => theme.colors.residential.primary};
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
  width: 100%;
  ${({ theme }) => `
  @media ${theme.screenSizes.laptop} {
    width: 70%;
  }
  `}
`

const BackgroundContainer = styled.div`
  background-image: ${() => `url(${HeroBackground})`};
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  overflow: auto;
  padding-left: 4rem;

  ${({ theme }) => `
    @media ${theme.screenSizes.tablet} {
      padding-left: 9rem;
    }
    @media ${theme.screenSizes.laptopL} {
      padding-left: 12rem;
    }
  `}
`

const ServicesIconContainer = styled(ContainerLayout)`
  background-color: ${({ theme }) => theme.colors.residential.background};
  display: flex;
  flex-direction: column;
  align-items: center;

  > .header {
    margin-bottom: 5rem;
  }
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
  margin: 0 0 3rem 0;
  padding-left: 1.5rem;

  > * {
    font-size: 1.6rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
  }
`
const ResidentialServicesPage = () => {
  return (
    <>
      <BackgroundContainer>
        <PageHeader>Residential Cleaning</PageHeader>
      </BackgroundContainer>

      <HeroContainer>
        <HeroDetails>
          <StyledCardHeader>
            Your residence is where life happens, we’re here to clean it up.
          </StyledCardHeader>
          <DescriptionBody variant="body1">
            Life moves pretty quick — so don’t spend it cleaning. Your home is a
            reflection of who you are. Family dinners, birthday parties,
            important guests arriving, or just wanting to relax — It all happens
            here. We specialize in restoring or maintaining your residence’s
            glory. As they say, cleanliness is next to godliness.
          </DescriptionBody>
          <StyledCardHeader>Here’s how it works</StyledCardHeader>
          <DescriptionBody variant="body1">
            Focus on your life, we’ll handle the rest. Based on your schedule,
            we will review your requirements and suggest a reservation that
            meets your needs and defined budget. The same cleaning staff is
            assigned to your account as well as a quality control supervisor who
            performs regular quality control checks. This is a partnership, and
            we’ve got your back every day, every week, or just this one time.
          </DescriptionBody>
          <ServiceList>
            <li>Airbnbs</li>
            <li>Condos and apartments</li>
            <li>Any-sized homes</li>
            <li>Garages</li>
            <li>... and more!</li>
          </ServiceList>
          <Button
            target="_blank"
            rel="noopener noreferrer"
            variant="residential"
            href="https://app.acuityscheduling.com/schedule.php?owner=20681726&calendarID=4467111"
          >
            Book
          </Button>
        </HeroDetails>
      </HeroContainer>
      <ServicesIconContainer>
        <SectionHeader className="header">What we do</SectionHeader>
        <ServiceIcons>
          {RESIDENTIAL_SERVICES_LOGO_MAP.map(({ label, icon }) => {
            return (
              <div>
                <Icon src={icon} />
                <Typography className="label" variant="h5" color="secondary">
                  {label}
                </Typography>
              </div>
            )
          })}
        </ServiceIcons>
      </ServicesIconContainer>
      <CarouselContainer>
        <TestimonyCarousel>
          {TESTIMONIALS.map(({ headerLabel, description, name, imgPath }) => (
            <TestimonialTile
              type="residential"
              headerTitle="Our clients come clean"
              description={description}
              headerLabe={headerLabel}
              imgUrl={imgPath}
              name={name}
            />
          ))}
        </TestimonyCarousel>
      </CarouselContainer>
    </>
  )
}

export default ResidentialServicesPage
