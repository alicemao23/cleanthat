import React from 'react'
import styled from 'styled-components'
import { SectionHeader } from '../../components/Header'

const Container = styled.div`
  max-width: 1440px;
  padding: 8rem 4rem;
  background-color: ${({ theme, backgroundColor }) =>
    theme.colors[backgroundColor]};
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
const PartnershipSection = (props) =>
  console.log(props) || (
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
  )

export default PartnershipSection
