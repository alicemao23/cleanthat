import React from 'react'

import Button from '../../components/Button/CTAButton'

import {
  ServiceBannerContainer,
  BannerImage,
  Container,
  Label,
  Info,
  Header
} from './ServicesBanner.style'

const ServicesBanner = ({
  headerLabel = '',
  headerTitle = '',
  description = '',
  variant = '',
  direction,
  imgUrl
}) => {
  return (
    <ServiceBannerContainer variant={variant} direction={direction}>
      <Container>
        <div>
          <Label variant={variant}>{headerLabel}</Label>
          <Header variant="h3">{headerTitle}</Header>
          <Info>{description}</Info>
        </div>
        <Button variant={variant}>Get Details</Button>
      </Container>
      <BannerImage src={imgUrl} />
    </ServiceBannerContainer>
  )
}

export default ServicesBanner
