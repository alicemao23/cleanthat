import React from 'react'
import styled from 'styled-components'
import { SectionHeader } from '../../components/Header'

const Background = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
`
const Container = styled.div`
  ${({ theme }) => `
  padding: 8rem 4rem;
  
  .header {
    padding: 0 2rem;
  }

  @media ${theme.screenSizes.laptop} {
    padding: 8rem 12rem;
    .header: {
      padding: 0;
    }
  }
  `}
`

const Icon = styled.img`
  width: 100%;
  height: 5rem;
`
const PreferredPartner = () => (
  <Background>
    <Container>
      <SectionHeader align="center" className="header">
        Preferred cleaning service of
      </SectionHeader>
      <div>
        <Icon src="" alt="eden logo" />
        <Icon src="" alt="wpp logo" />
      </div>
    </Container>
  </Background>
)

export default PreferredPartner
