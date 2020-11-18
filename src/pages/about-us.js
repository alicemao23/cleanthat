import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Typography from '@material-ui/core/Typography'
import HeroBanner from '../sections/HeroBanner'
import CTAContainer from '../sections/CTAContainer'
import SplitBanner from '../sections/AboutUsPage/SplitBanner'
import PreferredPartner from '../sections/AboutUsPage/PreferredPartner'
import PartnershipSection from '../sections/PartnershipSection'

import BannerImage from '../media/about-us-herobanner.svg'
import FeatureCardImage from '../media/feature-card-image1.png'
import ReverseFeatureCardImage from '../media/feature-card-image2.png'

// TODO: query banner from Contentful
const AboutUsPage = () => (
  // <StaticQuery
  //   query={graphql`
  //     query AboutMeQuery {
  //       contentfulAbout {
  //         aboutMe {
  //           childMarkdownRemark {
  //             rawMarkdownBody
  //           }
  //         }
  //         profile {
  //           title
  //           image: resize(width: 450, quality: 100) {
  //             src
  //           }
  //         }
  //       }
  //     }
  //   `}
  //   render={(data) => {
  //     const { aboutMe, profile } = data.contentfulAbout
  //     return (
  <>
    <HeroBanner image={BannerImage}>
      <Typography variant="h1" className="header">
        About Us
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        So who are we? Although we see ourselves as still young, we already have
        a decade of stories to tell. Over the years, we’ve grown from just one
        residential client to servicing ad agencies, co-working spaces,
        commercial clients, and residential spaces. We’re proud to now have
        reliable partners, along with over 30 years of collective experience in
        managing the cleaning business. We work best without the middleman,
        providing service quickly and efficiently.
      </Typography>
      <Typography variant="subtitle2" className="bold">
        Here’s the lowdown: We’re experienced, fully trained experts in our
        field of customer service. So the question remains, how can we help you?
      </Typography>
      <Typography variant="h3" className="bold subheader">
        Our Mission
      </Typography>
      <Typography variant="subtitle2">
        High energy, flexible schedule, and an eagerness to get things done.
        There’s a reason our clients are long term. Delivering reliability in
        all aspects of our service means that cleaning isn’t just our day job,
        it’s our philosophy.
      </Typography>
    </HeroBanner>
    <CTAContainer />
    {/* <PreferredPartner /> */}
    <PartnershipSection />
    <FeatureCard />
    <ReverseFeatureCard />
  </>
  //     )
  //   }}
  // />
)

const FeatureCard = () => {
  const headerTitle = 'Licensed, bonded, and insured'
  const description =
    'At CleanThat, we are committed to providing a safe working environment for all our staff. Our cleaners are insured and bonded to $5M and also protected by WSIB.'
  return (
    <SplitBanner
      headerTitle={headerTitle}
      description={description}
      variant="commercial"
      direction="row-reverse"
      imgUrl="https://images.unsplash.com/photo-1595332997730-1cc9c994f652?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3451&q=80"
    />
  )
}

const ReverseFeatureCard = () => {
  const headerTitle = 'We’re cleaning up the planet, too'
  const description =
    'Our focus lies on your needs but also on our planet’s. That’s why we use environmentally-friendly cleaning supplies and provide all of your consumables at 20% lower than retail suppliers.'
  return (
    <SplitBanner
      headerTitle={headerTitle}
      description={description}
      variant="residential"
      direction="row"
      imgUrl={ReverseFeatureCardImage}
    />
  )
}
export default AboutUsPage
