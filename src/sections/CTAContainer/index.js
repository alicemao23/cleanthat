import React from 'react'
import { StyledCTAContainer, CTACard } from './CTAContainer.style'
import Button from '../../components/Button/CTAButton'

const CTAContainer = () => (
  <StyledCTAContainer>
    <CTACard variant="commercial">
      <p>Commercial Cleaning</p>
      <Button variant="commercial">Get a Quote</Button>
    </CTACard>
    <CTACard variant="residential">
      <p>Residential Cleaning</p>
      <Button variant="residential">Book Now</Button>
    </CTACard>
  </StyledCTAContainer>
)

export default CTAContainer
