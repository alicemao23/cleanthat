import React from 'react'

import {
  ServiceBannerContainer,
  BannerImage,
  Container,
  Info,
  Header
} from './SplitBanner.style'

const SplitBanner = ({
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
          <Header variant="h3">{headerTitle}</Header>
          <Info>{description}</Info>
        </div>
      </Container>
      <BannerImage src={imgUrl} />
    </ServiceBannerContainer>
  )
}

export default SplitBanner
