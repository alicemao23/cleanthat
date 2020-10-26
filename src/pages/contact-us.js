import React from 'react'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'

import {
  PageHeader,
  CardHeader,
  SectionHeader,
  StyledTypography
} from '../components/Header'
import Container from '../components/Containers/PageContainer.style'

import addressDivider from '../media/address-divider.svg'
import phoneDivider from '../media/phone-divider.svg'
import hoursDivider from '../media/hours-divider.svg'
import serviceAreaDivider from '../media/service-area-divider.svg'
import residentialMap from '../media/residential-map.svg'
import commercialMap from '../media/commercial-map.svg'

const CardContainer = styled.div`
  position: relative;
  padding-top: 2.5rem;
  padding-bottom: 5rem;

  .serviceArea& {
    flex-basis: 100%;
  }
  :before {
    content: '';
    width: 100%;
    height: 10px;
    position: absolute;
    top: -10px;
    left: 0;
    right: 0;
    background-size: 100%;
    background-position: left;
    background-repeat: no-repeat;
    .address& {
      background-image: url(${addressDivider});
    }

    .phoneNumber& {
      background-image: url(${phoneDivider});
    }

    .hours& {
      background-image: url(${hoursDivider});
    }

    .serviceArea& {
      background-image: url(${serviceAreaDivider});
      flex-basis: 100%;
    }
  }
  ${({ theme }) => `
    @media ${theme.screenSizes.laptop} {
      flex-basis: 37.3rem;
    }
    @media ${theme.screenSizes.laptopL} {
     margin-bottom: 4rem;
    }
  `}
`

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${({ theme }) => `
    @media ${theme.screenSizes.tablet} {
      justify-content: space-between;
    }
    @media ${theme.screenSizes.laptop} {
      flex-direction: row;
      justify-content: space-between;
      > *:not(:last-child) {
        margin-right: 4rem;
      }
    }
  `}
`

const ServiceInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${({ theme }) => `
    @media ${theme.screenSizes.laptopL} {
      height: 44.3rem;
      flex-direction: row;
      justify-content: space-between;
    }
  `}
`
const ServiceMap = styled.div`
  ${({ url = '' }) => `
    height: 26.7rem;
    flex-basis: 35rem; 
    flex-shrink: 0;
    background:  center / contain no-repeat url(${url});
  `}
`
const ServiceMapInfo = styled.div`
  width: 100%;
  ul {
    list-style: none;
    padding: 0;
    span {
      font-weight: 900;
    }
  }
  ${({ theme }) => `
    @media ${theme.screenSizes.tablet} {
      width: 50%;
      margin: 3rem auto auto;

    }
    @media ${theme.screenSizes.laptopL} {
      width: 20rem;
    }
  `}
`
const AddressCard = () => {
  return (
    <CardContainer className="address">
      <CardHeader>Where To Find Us</CardHeader>
      <Typography variant="subtitle1">180 John St.</Typography>
      <Typography variant="subtitle1">Toronto ON</Typography>
      <Typography variant="subtitle1">M5T 1X5</Typography>
    </CardContainer>
  )
}

const ContactCard = () => {
  return (
    <CardContainer className="phoneNumber">
      <CardHeader>How to reach us</CardHeader>
      <Typography variant="subtitle1">416.951.4100</Typography>
      <Typography variant="subtitle1">
        <a href="mailto:clean@cleanthat.ca?subject=Inquiry for CleanThat">
          clean@cleanthat.ca
        </a>
      </Typography>
    </CardContainer>
  )
}

const HoursCard = () => {
  return (
    <CardContainer className="hours">
      <CardHeader>When to call</CardHeader>
      <StyledTypography variant="h5">OPERATING HOURS</StyledTypography>
      <Typography variant="subtitle1">9:00 - 6:00</Typography>
    </CardContainer>
  )
}

const ServiceMapContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${({ theme }) => `
    @media ${theme.screenSizes.tablet} {
     
    }
    @media ${theme.screenSizes.laptop} {
      flex-direction: row;
    }
    @media ${theme.screenSizes.laptopL} {
    }
  `}
`
const ServiceAreaCard = () => {
  return (
    <CardContainer className="serviceArea">
      <SectionHeader>Service Area</SectionHeader>
      <ServiceInfoContainer>
        <ServiceMapContainer>
          <ServiceMap url={commercialMap} />
          <ServiceMapInfo>
            <CardHeader color="primary">Commercial</CardHeader>
            <Typography variant="body1" color="primary">
              <ul>
                <li>
                  <span>Halton: </span>
                  Oakville
                </li>
                <li>
                  <span>Peel: </span>
                  Mississauga
                </li>
                <li>
                  <span>York Region: </span>
                  Markham, Richmond Hill, Vaughan
                </li>
                <li>
                  <span>Durham: </span>
                  Pickering
                </li>
                <li>
                  <span>City of Toronto: </span>
                  Etobicoke, North York, East York, Toronto, Scarborough
                </li>
              </ul>
            </Typography>
          </ServiceMapInfo>
        </ServiceMapContainer>
        <ServiceMapContainer>
          <ServiceMap url={residentialMap} />
          <ServiceMapInfo>
            <CardHeader color="secondary">Residential</CardHeader>
            <Typography variant="body1" color="secondary">
              <ul>
                <li>
                  <span>City of Toronto </span>
                </li>
              </ul>
            </Typography>
          </ServiceMapInfo>
        </ServiceMapContainer>
      </ServiceInfoContainer>
    </CardContainer>
  )
}

const ContactUsPage = () => {
  return (
    <Container>
      <PageHeader>Contact Us</PageHeader>
      <StyledContainer>
        <AddressCard />
        <ContactCard />
        <HoursCard />
      </StyledContainer>
      <ServiceAreaCard />
    </Container>
  )
}

export default ContactUsPage
