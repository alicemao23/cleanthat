import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import PageLayout from '../components/Containers/PageContainer.style.js'
import ServiceBannerLayout from '../components/Containers/BannerCardContainer.js'
import Button from '../components/Button/CTAButton'
import banner from '../media/home-banner.svg'
import CommercialFeatureImg from '../media/commercial-feature.png'
import ResidentialFeatureImg from '../media/residential-feature.png'

import TestimonialSection from '../sections/HomePage/Testimonials'
// HERO BANNER
// TODO: query banner from Contentful
const StyledContainer = styled(PageLayout)`
  display: flex;
  flex-direction: row;
  padding-top: 5rem;
  padding-bottom: 5rem;
  padding-right: 0;
`

const HomePage = () => (
  <StaticQuery
    query={graphql`
      query AboutMeQuery {
        contentfulAbout {
          aboutMe {
            childMarkdownRemark {
              rawMarkdownBody
            }
          }
          profile {
            title
            image: resize(width: 450, quality: 100) {
              src
            }
          }
        }
      }
    `}
    render={(data) => {
      const { aboutMe, profile } = data.contentfulAbout
      return (
        <>
          <HeroBanner />
          <CTAContainer />
          <CommercialFeatureCard />
          <ResidentialFeatureCard />
          <TestimonialSection />
        </>
      )
    }}
  />
)

const HeroInfoContainer = styled.div`
  flex: 0 1 48.7rem;
  padding-top: 4rem;
  padding-bottom: 8rem;
`

const BannerHeader = styled.h1`
  font-size: 5.4rem;
`

const InfoStyle = styled.p`
  font-size: 2.4rem;
  font-family: Din;
`

const IllustrationContainer = styled.div`
  background: center / cover no-repeat ${(props) => `url(${props.source})`};
  flex-grow: 1;
`

const HeroBanner = () => {
  return (
    <StyledContainer>
      <HeroInfoContainer>
        <BannerHeader>Cleaning isn’t just our day job</BannerHeader>
        <InfoStyle>
          Cleanliness is our middle name. Whether you’re a corporate multi-floor
          office building, a small business with spunk, or you’re in need of a
          residential deep clean, we’ve got this. No corner is ignored, no
          garbage can goes unemptied.{' '}
        </InfoStyle>
      </HeroInfoContainer>
      <IllustrationContainer source={banner} />
    </StyledContainer>
  )
}

// CTA CONTAINER

const StyledCTAContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 9rem;
`
const CTACard = styled.div`
  display: flex;
  flex-basis: 47.9rem;
  align-items: center;
  justify-content: space-between;
  font-family: Poppins;
  font-size: 1.4rem;
  font-weight: bold;
  letter-spacing: 0.1rem;
  padding-left: 3.5rem;
  padding-right: 3.5rem;
  background-color: ${({ theme, type }) => theme.colors[type].primaryLight};
  height: 10rem;
  :first-child {
    margin-right: 2rem;
  }
`
const CTAContainer = () => {
  return (
    <StyledCTAContainer>
      <CTACard type="commercial">
        <p>Commercial Cleaning</p>
        <Button variant="commercial">Get a Quote</Button>
      </CTACard>
      <CTACard type="residential">
        <p>Residential Cleaning</p>
        <Button variant="residential">Book Now</Button>
      </CTACard>
    </StyledCTAContainer>
  )
}

// Service Specific banner
const ServiceBannerContainer = styled(ServiceBannerLayout)`
  height: 44.3rem;
`

const BannerImage = styled.div`
  background: center / cover no-repeat ${(props) => `url(${props.source})`};
  flex-grow: 1;
  flex-basis: 50%;
  height: 100%;
`
const Container = styled.div`
  width: 50%;
  padding: 8rem 12rem;
`
const Label = styled.span`
  font-size: 1.4rem;
  font-weight: bold;
  color: ${({ theme, type = 'commercial' }) => theme.colors[type].primary};
  text-transform: uppercase;
`

const Header = styled.h3`
  font-size: 3.5rem;
  margin-top: 1rem;
  margin-bottom: 3.5rem;
`

const Info = styled.p`
  font-family: Din;
  font-size: 1.6rem;
  line-height: 122%;
`
const BannerHeroContent = ({
  headerLabel = '',
  headerTitle = '',
  description = '',
  type = ''
}) => {
  return (
    <Container>
      <Label type={type}>{headerLabel}</Label>
      <Header>{headerTitle}</Header>
      <Info>{description}</Info>
      <Button variant={type}>Get Details</Button>
    </Container>
  )
}
const CommercialFeatureCard = () => {
  const headerLabel = 'commercial cleaning'
  const headerTitle = 'We are the GTA’s most reliable cleaning partner'
  const description =
    'With 10 years of experience under our belt we understand the importance of responsiveness with clients, consistency in service, and effectiveness of our work.'
  return (
    <ServiceBannerContainer>
      <BannerImage source={CommercialFeatureImg} />
      <BannerHeroContent
        type="commercial"
        headerLabel={headerLabel}
        headerTitle={headerTitle}
        description={description}
      />
    </ServiceBannerContainer>
  )
}

const ResidentialFeatureCard = () => {
  const headerLabel = 'residential cleaning'
  const headerTitle = 'Life happens — we’ll clean it up'
  const description =
    'We’re not a big franchise. A family first mentality is what we were built on. Experience, communication, and skill culminate for expert service that’s delivered quickly and efficiently in your most important dwellings.'
  return (
    <ServiceBannerContainer direction="row-reverse">
      <BannerImage source={ResidentialFeatureImg} />
      <BannerHeroContent
        type="residential"
        headerLabel={headerLabel}
        headerTitle={headerTitle}
        description={description}
      />
    </ServiceBannerContainer>
  )
}
export default HomePage
