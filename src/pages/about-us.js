import React from 'react'
import styled from 'styled-components'
import { PageHeader } from '../components/Header/index'
import Layout from '../components/Layout'
import Container from '../components/Containers/PageContainer.style.js'

const CardHeader = styled.h4`
  font-size: 2.4rem;
  margin: 2.5rem 0;
`
const StyledContainer = styled(Container)``
const CardInfo = styled.p``
const AddressCard = () => {
  return (
    <>
      <CardHeader>Where To Find Us</CardHeader>
      <CardInfo>123 Toronto, ON M5J 0A7</CardInfo>
    </>
  )
}

const ContactCard = () => {
  return (
    <>
      <CardHeader>How to reach us</CardHeader>
      <CardInfo> 416.951.4100 clean@cleanthat.ca</CardInfo>
    </>
  )
}

const HoursCard = () => {
  return (
    <>
      <CardHeader>When to call</CardHeader>
      <CardInfo> 9:00 - 5:00</CardInfo>
    </>
  )
}

const AboutUsPage = () => {
  return (
    <Layout>
      <StyledContainer>
        <PageHeader label="Contact Us" />
        <AddressCard />
        <ContactCard />
        <HoursCard />
      </StyledContainer>
    </Layout>
  )
}

export default AboutUsPage
