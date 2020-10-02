import React from 'react'
import styled from 'styled-components'
import ServiceBannerLayout from './BannerCardContainer.js'

const BannerImage = styled.div`
  background: center / cover no-repeat ${(props) => `url(${props.source})`};
  flex-grow: 1;
  flex-basis: 50%;
  height: 100%;
`

const SplitBanner = ({ imgUrl, children, ...props }) => {
  return (
    <ServiceBannerLayout {...props}>
      <BannerImage source={imgUrl} />
      {children}
    </ServiceBannerLayout>
  )
}

export default SplitBanner
