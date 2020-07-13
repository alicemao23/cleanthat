import React from 'react'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'

import { PageHeader, CardHeader, SectionHeader } from '../components/Header'
import Layout from '../components/Layouts'
import Container from '../components/Containers/PageContainer.style'

import addressDivider from '../shared/address-divider.svg'
import phoneDivider from '../shared/phone-divider.svg'
import hoursDivider from '../shared/hours-divider.svg'
import serviceAreaDivider from '../shared/service-area-divider.svg'
import residentialMap from '../shared/residential-map.svg'
import commercialMap from '../shared/commercial-map.svg'

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const CardContainer = styled.div`
  flex-basis: 37.3rem;
  position: relative;
  padding-top: 2.5rem;
  padding-bottom: 5rem;

  h3 {
    margin-bottom: 5rem;
  }
  h4 {
    margin-bottom: 3.5rem;
  }

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
`

const ServiceInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const ServiceMap = styled.div`
  ${({ url }) => `
  height: 26.7rem;
  flex-basis: 35rem; 
  flex-shrink: 0;
  background:  no-repeat url(${url});
`}
`
const ServiceMapInfo = styled.div`
  width: 20rem;
  ul {
    list-style: none;
    padding: 0;
    span {
      font-weight: 900;
    }
  }
`
const AddressCard = () => {
  return (
    <CardContainer className="address">
      <CardHeader>Where To Find Us</CardHeader>
      <Typography variant="subtitle1">123 Main Street</Typography>
      <Typography variant="subtitle1">Toronto ON</Typography>
      <Typography variant="subtitle1">M5J 0A7</Typography>
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
      <Typography variant="h5" style={{ marginBottom: '10px' }}>
        Operating hours
      </Typography>
      <Typography variant="subtitle1">9:00 - 5:00</Typography>
    </CardContainer>
  )
}
const ServiceAreaCard = () => {
  return (
    <CardContainer className="serviceArea">
      <SectionHeader>Service Area</SectionHeader>
      <ServiceInfoContainer>
        <ServiceMap url={commercialMap} />
        <ServiceMapInfo>
          <CardHeader color="primary">Commercial</CardHeader>
          <Typography variant="body1" color="primary">
            <ul>
              <li>
                <span>Halton: </span>Oakville
              </li>
              <li>
                <span>Peel: </span>Mississauga
              </li>
              <li>
                <span>York Region: </span>Markham, Richmond Hill, Vaughan
              </li>
              <li>
                <span>Durham: </span>Pickering
              </li>
              <li>
                <span>City of Toronto: </span>Etobicoke, North York, East York,
                Toronto, Scarborough
              </li>
            </ul>
          </Typography>
        </ServiceMapInfo>
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
      </ServiceInfoContainer>
    </CardContainer>
  )
}

const ContactUsPage = () => {
  return (
    <Layout>
      <Container>
        <PageHeader>Contact Us</PageHeader>
        <StyledContainer>
          <AddressCard />
          <ContactCard />
          <HoursCard />
          <ServiceAreaCard />
        </StyledContainer>
      </Container>
    </Layout>
  )
}

export default ContactUsPage
