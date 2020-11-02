import React from 'react'
import styled from 'styled-components'
import { SectionHeader } from '../../components/Header'

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
const Icon = styled.img`
  width: 100%;
  height: 5rem;
`
const PartnershipSection = (props) => (
  <Background>
    <Container {...props}>
      <SectionHeader align="center">Who we’ve worked with</SectionHeader>
      <div>
        <Icon src="" alt="logo" />
        <Icon src="" alt="logo" />
        <Icon src="" alt="logo" />
        <Icon src="" alt="logo" />
        <Icon src="" alt="logo" />
        <Icon src="" alt="logo" />
      </div>
    </Container>
  </Background>
)

export default PartnershipSection
