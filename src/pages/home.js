import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import ServiceBannerLayout from '../components/Containers/BannerCardContainer.js'
import Button from '../components/Button/CTAButton'
import CommercialFeatureImg from '../media/commercial-feature.png'
import ResidentialFeatureImg from '../media/residential-feature.png'

import TestimonialSection from '../sections/HomePage/Testimonials'
import HeroBanner from '../sections/HomePage/HeroBanner'
import CTAContainer from '../sections/HomePage/CTAContainer'

// TODO: query banner from Contentful
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
          {/* <CommercialFeatureCard /> */}
          {/* <ResidentialFeatureCard /> */}
          {/* <TestimonialSection /> */}
        </>
      )
    }}
  />
)

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
