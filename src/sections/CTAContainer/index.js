import React from 'react'
import { navigate } from 'gatsby'
import { StyledCTAContainer, CTACard } from './CTAContainer.style'
import Button from '../../components/Button/CTAButton'

const CTAContainer = () => (
  <StyledCTAContainer>
    <CTACard variant="commercial">
      <p>Commercial Cleaning</p>
      <Button
        variant="commercial"
        onClick={() => navigate('/commercial-services')}
      >
        Get a Quote
      </Button>
    </CTACard>
    <CTACard variant="residential">
      <p>Residential Cleaning</p>
      <Button
        variant="residential"
        target="_blank"
        rel="noopener noreferrer"
        variant="residential"
        href="https://app.acuityscheduling.com/schedule.php?owner=20681726&calendarID=4467111"
      >
        Book Now
      </Button>
    </CTACard>
  </StyledCTAContainer>
)

export default CTAContainer
