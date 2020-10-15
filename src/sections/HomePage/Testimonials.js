import React from 'react'
import styled from 'styled-components'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import Carousel from '../../components/Carousel'

import { SectionHeader } from '../../components/Header'

const TestimonialContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-basis: 37.5rem;
  flex-grow: 0;
  background-color: white;
  padding: 5rem 3.5rem;
  box-shadow: ${(props) => props.theme.colors.shadow};
  font-size: 1.6rem;
  font-family: ${(props) => props.theme.fonts.body};
  border-radius: 8px;
  p {
    line-height: 2rem;
    margin: 0;
    margin-bottom: 4.5rem;
  }

  span {
    font-family: ${(props) => props.theme.fonts.headings};
    font-weight: bold;
  }
  ${({ theme }) => `
    @media ${theme.screenSizes.laptop} {
     height: 4rem
      padding: 5rem;
    }
  `}
`

const TestimonialTile = ({ author = '', details = '' }) => {
  return (
    <TestimonialContainer>
      <p>{details}</p>
      <span>{author}</span>
    </TestimonialContainer>
  )
}

const Container = styled.section`
  max-width: 1440px;
  margin: auto;
  overflow: hidden;
  padding: 8rem 2rem 16rem;
  position: relative;
  margin-bottom: 9rem;
  :before {
    content: '';
    width: 93rem;
    height: 31rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.accent};
    bottom: 0;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -30%) rotate(12deg);
    z-index: -1;
  }
  ${({ theme }) => `
    @media ${theme.screenSizes.laptop} {
      padding: 8rem 12rem 19rem;
    }
  `}
`

const Layout = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 40rem;
`

const TestimonialSection = () => {
  const details =
    'We are extremely happy with the level of service CleanThat provides. You can trust their staff to be very thorough and clean. The microwave and keyboards were spotless, even our sugar bowl for coffee was sparkling. It’s the little extra care they take that make a big difference. Rest assured they will leave your office smelling fresh and clean. We highly recommend CleanThat!'
  const author = 'Christine, PCK'
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('xl'))
  return isDesktop ? (
    <Container>
      <SectionHeader align="center">Our clients come clean</SectionHeader>
      <Layout>
        <TestimonialTile details={details} author={author} />
        <TestimonialTile details={details} author={author} />
        <TestimonialTile details={details} author={author} />
      </Layout>
    </Container>
  ) : (
    <Container>
      <SectionHeader align="center">Our clients come clean</SectionHeader>
      <Carousel>
        {[1, 2, 3].map(() => (
          <TestimonialTile details={details} author={author} />
        ))}
      </Carousel>
    </Container>
  )
}
export default TestimonialSection
