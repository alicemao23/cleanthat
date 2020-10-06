import React from 'react'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'

import { PageHeader, CardHeader, SectionHeader } from '../components/Header'
import Layout from '../components/Layouts'

import HeroBackground from '../media/commercial-hero.svg'
import { StyledLink as Button } from '../components/Button/CTAButton'
import TestimonyCarousel from '../components/Carousel'

import { RESIDENTIAL_SERVICES_LOGO_MAP } from '../shared/constants'

const ContainerLayout = styled.div`
  padding: 8rem 12rem;
`
const HeroContainer = styled(ContainerLayout)`
  display: flex;
  justify-content: space-between;
`
const CarouselContainer = styled(ContainerLayout)`
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
`
const HeroDetails = styled.div`
  width: 70%;
`

const BackgroundContainer = styled.div`
  background-image: ${() => `url(${HeroBackground})`};
  background-size: 100%;
  background-repeat: no-repeat;
  width: 100%;
  overflow: auto;
  padding-left: 12rem;
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
  display: flex;
  justify-content: space-between;
  width: 100%;
  > * {
    display: flex;
    flex-direction: column;
    align-items: center;

    .label {
      margin-top: 3.5rem;
    }
  }
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
    <Layout>
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
        <TestimonyCarousel type="residential" />
      </CarouselContainer>
    </Layout>
  )
}

export default ResidentialServicesPage
