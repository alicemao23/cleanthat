import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import CommercialFeatureImg from '../media/commercial-feature.png'
import ResidentialFeatureImg from '../media/residential-feature.png'

import TestimonialSection from '../sections/HomePage/Testimonials'
import HeroBanner from '../sections/HomePage/HeroBanner'
import CTAContainer from '../sections/HomePage/CTAContainer'
import ServicesBanner from '../sections/HomePage/ServicesBanner'

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
          <CommercialFeatureCard />
          <ResidentialFeatureCard />
          {/* <TestimonialSection /> */}
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
      direction="row"
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
      direction="row-reverse"
      imgUrl={ResidentialFeatureImg}
    />
  )
}
export default HomePage
