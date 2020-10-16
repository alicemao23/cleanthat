import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Typography from '@material-ui/core/Typography'

import CTAContainer from '../sections/CTAContainer'
import HeroBanner from '../sections/HeroBanner'
import PartnershipSection from '../sections/PartnershipSection'
import TestimonialSection from '../sections/HomePage/Testimonials'
import ServicesBanner from '../sections/HomePage/ServicesBanner'

import CommercialFeatureImg from '../media/commercial-feature.png'
import ResidentialFeatureImg from '../media/residential-feature.png'
import BannerImage from '../../media/home-banner.svg'

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
          <HeroBanner image={BannerImage}>
            <Typography variant="h1" className="header">
              Cleaning isn’t just our day job
            </Typography>
            <Typography variant="subtitle1">
              Cleanliness is our middle name. Whether you’re a corporate
              multi-floor office building, a small business with spunk, or
              you’re in need of a residential deep clean, we’ve got this. No
              corner is ignored, no garbage can goes unemptied.
            </Typography>
          </HeroBanner>
          <CTAContainer />
          <CommercialFeatureCard />
          <ResidentialFeatureCard />
          <TestimonialSection />
          <PartnershipSection backgroundColor="background" />
        </>
      )
    }}
  />
)

const CommercialFeatureCard = () => {
  const headerLabel = 'commercial cleaning'
  const headerTitle = 'We are the GTA’s most reliable cleaning partner'
  const description =
    'With 10 years of experience under our belt we understand the importance of responsiveness with clients, consistency in service, and effectiveness of our work.'
  return (
    <ServicesBanner
      headerLabel={headerLabel}
      headerTitle={headerTitle}
      description={description}
      variant="commercial"
      direction="row-reverse"
      imgUrl={CommercialFeatureImg}
    />
  )
}

const ResidentialFeatureCard = () => {
  const headerLabel = 'residential cleaning'
  const headerTitle = 'Life happens — we’ll clean it up'
  const description =
    'We’re not a big franchise. A family first mentality is what we were built on. Experience, communication, and skill culminate for expert service that’s delivered quickly and efficiently in your most important dwellings.'
  return (
    <ServicesBanner
      headerLabel={headerLabel}
      headerTitle={headerTitle}
      description={description}
      variant="residential"
      direction="row"
      imgUrl={ResidentialFeatureImg}
    />
  )
}
export default HomePage
