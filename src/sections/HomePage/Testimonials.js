import React from 'react'
import styled from 'styled-components'

import { SectionHeader } from '../../components/Header'
import ClayIcon from '../../shared/clay-icon.svg'

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
  p {
    line-height: 2rem;
    margin: 0;
  }

  span {
    font-family: ${(props) => props.theme.fonts.headings};
    font-weight: bold;
  }
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
  padding: 8rem 12rem 19rem;
`

const Layout = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 40rem;
  position: relative;

  :after {
    z-index: -1;
    content: '';
    position: absolute;
    height: 75%;
    width: 60%;
    bottom: -50%;
    left: 50%;
    transform: translate(-50%, -25%);
    background: center/ contain no-repeat ${() => `url(${ClayIcon})`};
  }
`

const TestimonialSection = () => {
  const details =
    'We are extremely happy with the level of service CleanThat provides. You can trust their staff to be very thorough and clean. The microwave and keyboards were spotless, even our sugar bowl for coffee was sparkling. It’s the little extra care they take that make a big difference. Rest assured they will leave your office smelling fresh and clean. We highly recommend CleanThat!'
  const author = 'Christine, PCK'

  return (
    <Container>
      <SectionHeader>Our clients come clean</SectionHeader>
      <Layout>
        <TestimonialTile details={details} author={author} />
        <TestimonialTile details={details} author={author} />
        <TestimonialTile details={details} author={author} />
      </Layout>
    </Container>
  )
}
export default TestimonialSection
