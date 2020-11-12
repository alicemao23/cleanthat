import React from 'react'
import styled from 'styled-components'
import { SectionHeader } from '../../components/Header'
import VerkSpaceLogo from '../../media/verkspace-logo.png'
import BlackCartLogo from '../../media/black-cart-logo.png'
import LookaLogo from '../../media/looka-logo.png'
import GreyLogo from '../../media/grey-logo.png'
import CSILogo from '../../media/csi-logo.png'
import EastRoomLogo from '../../media/east-room-logo.png'

const Background = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
`
const Container = styled.div`
  max-width: 1440px;
  padding: 8rem 4rem;
  margin: auto;
  ${({ theme }) => `
  @media ${theme.screenSizes.laptop} {
      padding: 8rem 12rem;
    }
  `};
`

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${({ theme }) => `
    @media ${theme.screenSizes.tablet} {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: start;
    }
  `};
`
const Icon = styled.img`
  height: 5rem;
  width: auto;
  object-fit: contain;
  margin-bottom: 3rem;
  ${({ theme }) => `
    @media ${theme.screenSizes.tablet} {
      margin-bottom: 5rem;
      width: 50%;
      }
      @media ${theme.screenSizes.laptop} {
        width: 33.333%;
      }
  `};
`
const LOGOS = [
  EastRoomLogo,
  VerkSpaceLogo,
  CSILogo,
  BlackCartLogo,
  LookaLogo,
  GreyLogo
]
const PartnershipSection = (props) => (
  <Background>
    <Container {...props}>
      <SectionHeader align="center">Who we’ve worked with</SectionHeader>
      <IconContainer>
        {LOGOS.map((logoUrl) => (
          <Icon src={logoUrl} alt="logo" />
        ))}
      </IconContainer>
    </Container>
  </Background>
)

export default PartnershipSection
