import React from 'react'
import styled from 'styled-components'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import Carousel from '../../components/Carousel'

import { SectionHeader } from '../../components/Header'
import TESTIMONIALS from '../../shared/testimonials'

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
  height: 100%;
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
      height: 40rem;
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
  & > *:not(:last-child) {
    margin-right: 1.5rem;
  }
`

const TestimonialSection = () => {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('xl'))
  const testimonials = TESTIMONIALS.map(({ details, author }) => (
    <TestimonialTile details={details} author={author} />
  ))
  return isDesktop ? (
    <Container>
      <SectionHeader align="center">Our clients come clean</SectionHeader>
      <Layout>{testimonials}</Layout>
    </Container>
  ) : (
    <Container>
      <SectionHeader align="center">Our clients come clean</SectionHeader>
      <Carousel>{testimonials}</Carousel>
    </Container>
  )
}
export default TestimonialSection
