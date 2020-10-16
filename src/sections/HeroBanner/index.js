import React from 'react'

import {
  HeroInfoContainer,
  IllustrationContainer,
  StyledContainer
} from './HeroBanner.style'

const HeroBanner = ({ children, image = '' }) => (
  <StyledContainer>
    <HeroInfoContainer>{children}</HeroInfoContainer>
    <IllustrationContainer src={image} />
  </StyledContainer>
)

export default HeroBanner
