import React from 'react'
import styled from 'styled-components'
import { SectionHeader } from '../../components/Header'
import EdenLogo from '../../media/partner-logo-eden.png'
import WPLogo from '../../media/partner-logo-wp.png'

const Background = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
`
const Container = styled.div`
  ${({ theme }) => `
  padding: 8rem 4rem;
  
 
    @media ${theme.screenSizes.tablet} {
      padding: 8rem 18%;
      .header: {
        padding: 0;
      }
    }
  `}
`

const Icon = styled.img`
  width: auto;
  object-fit: contain;
  height: 6rem;
  margin-bottom: 3rem;
  ${({ theme }) => `
    @media ${theme.screenSizes.laptop} {
      height: 8rem;
    }
  `}
`

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${({ theme }) => `
    @media ${theme.screenSizes.tablet} {
      flex-direction: row;
      justify-content: space-between;
    }
  `};
`
const PreferredPartner = () => (
  <Background>
    <Container>
      <SectionHeader align="center" className="header">
        Preferred cleaning service of
      </SectionHeader>
      <IconContainer>
        <Icon src={EdenLogo} alt="eden logo" />
        <Icon src={WPLogo} alt="wpp logo" />
      </IconContainer>
    </Container>
  </Background>
)

export default PreferredPartner
