import React from 'react'
import styled from 'styled-components'
import Container from '../components/Containers/PageContainer.style'
import LOGO from '../shared/full-logo.svg'
import { RouteLink } from '../components/Links'

const FooterContainer = styled(Container)`
  font-family: Din;
  width: 100%;
  padding-top: 6rem;
  padding-bottom: 4rem;
  margin: auto;
  max-height: 34.4rem;
  background-color: ${(props) => props.theme.colors.footer.background};
  color: ${(props) => props.theme.colors.footer.text};
`

const ContentLayout = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`

const Nav = styled.div`
  display: flex;
  width: 464px;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: left;
  height: 18rem;
  > * {
    margin: 10px 0;
  }
`

const Slogan = styled.p`
  font-size: 2.4rem;
  line-height: 115%;
  margin: 0;
  width: 332px;
`

const NAV_LINKS = [
  'Home',
  'About us',
  'Commercial cleaning',
  'Residential cleaning',
  'Careers',
  'Contact us',
  'Blog'
]

const StyledDivider = styled.hr`
  background-color: ${(props) => props.theme.colors.primaryLight};
  margin-top: 3rem;
  margin-bottom: 1.5rem;
`

const BrandContent = styled.div`
  display: flex;
  align-items: flex-start;
  img {
    margin-right: 2rem;
  }
`
function formatNavPath(navName) {
  return navName.toLowerCase().replace(' ', '-')
}

const Footer = () => {
  const CLEANTHAT_SLOGAN =
    'If it’s a residential or commercial space — we clean that. '
  const NavLinks = NAV_LINKS.map((name) => {
    const path = formatNavPath(name)
    return <RouteLink to={path}>{name}</RouteLink>
  })

  return (
    <FooterContainer>
      <ContentLayout>
        <BrandContent>
          <img src={LOGO} alt="cleanthat logo" />
          <Slogan>{CLEANTHAT_SLOGAN}</Slogan>
        </BrandContent>
        <Nav>{NavLinks}</Nav>
      </ContentLayout>
      <StyledDivider />
      <ContentLayout>
        <p>c CleanThat </p>
        <RouteLink to="privacy-policy">Privacy Policy</RouteLink>
      </ContentLayout>
    </FooterContainer>
  )
}

export default Footer
