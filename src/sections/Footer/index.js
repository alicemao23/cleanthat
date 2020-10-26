import React from 'react'

import { RouteLink, ExternalStyledLink } from '../../components/Links'
import LOGO from '../../media/full-logo.svg'
import {
  FooterContainer,
  ContentLayout,
  Nav,
  Slogan,
  StyledDivider,
  BrandContent,
  Background
} from './footer.style'

function formatNavPath(navName) {
  return navName.toLowerCase().replace(' ', '-')
}

const NAV_LINKS = [
  'Home',
  'About us',
  'Commercial services',
  'Residential services',
  'Careers',
  'Contact us'
  // 'Blog'
]

const Footer = () => {
  const CLEANTHAT_SLOGAN =
    'If it’s a residential or commercial space — we clean that. '
  const NavLinks = NAV_LINKS.map((name) => {
    const path = formatNavPath(name)
    if (name === 'Careers') {
      return (
        <ExternalStyledLink href="https://ca.indeed.com/cmp/Cleanthat">
          {name}
        </ExternalStyledLink>
      )
    }
    return <RouteLink to={path}>{name}</RouteLink>
  })

  return (
    <Background>
      <FooterContainer>
        <ContentLayout>
          <BrandContent>
            <img src={LOGO} alt="cleanthat logo" />
            <Slogan variant="subtitle1" color="textSecondary">
              {CLEANTHAT_SLOGAN}
            </Slogan>
          </BrandContent>
          <Nav>{NavLinks}</Nav>
        </ContentLayout>
        <StyledDivider />
        <ContentLayout>
          <p>c CleanThat </p>
          <RouteLink to="privacy-policy">Privacy Policy</RouteLink>
        </ContentLayout>
      </FooterContainer>
    </Background>
  )
}

export default Footer
