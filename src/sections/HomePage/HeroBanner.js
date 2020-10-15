import React from 'react'
import Typography from '@material-ui/core/Typography'
import BannerImage from '../../media/home-banner.svg'
import {
  HeroInfoContainer,
  IllustrationContainer,
  StyledContainer
} from './HeroBanner.style'

const HeroBanner = () => (
  <StyledContainer>
    <HeroInfoContainer>
      <Typography variant="h1" className="header">
        Cleaning isn’t just our day job
      </Typography>
      <Typography variant="subtitle1">
        Cleanliness is our middle name. Whether you’re a corporate multi-floor
        office building, a small business with spunk, or you’re in need of a
        residential deep clean, we’ve got this. No corner is ignored, no garbage
        can goes unemptied.
      </Typography>
    </HeroInfoContainer>
    <IllustrationContainer src={BannerImage} />
  </StyledContainer>
)

export default HeroBanner
