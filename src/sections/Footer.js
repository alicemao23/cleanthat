import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Container from '../components/Containers/PageContainer.style'
import LOGO from '../shared/full-logo.svg'

const FooterContainer = styled(Container)`
  font-family: Din;
  width: 100%;
  padding-top: 6rem;
  padding-bottom: 4rem;
  margin: auto;
  background-color: ${(props) => props.theme.colors.footer.background};
  color: ${(props) => props.theme.colors.footer.text};
`

const ContentLayout = styled.div`
  display: flex;
  align-items: flex-start;
`

const Nav = styled.div`
  display: flex;
  flex-basis: 864px;
  flex-shrink: 2;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  * :not(:last-child) {
    margin: 0 45px;
  }
`

const Slogan = styled.p`
  font-size: 2.4rem;
  line-height: 115%;
  margin: 0;
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

function formatNavPath(navName) {
  return navName.toLowerCase().replace(' ', '-')
}

const FormatedLink = styled(Link)`
  color: ${(props) => props.theme.colors.footer.text};
`
const Footer = () => {
  const CLEANTHAT_SLOGAN =
    'If it’s a residential or commercial space — we clean that. '
  const NavLinks = NAV_LINKS.map((name) => {
    const path = formatNavPath(name)
    return <FormatedLink to={path}>{name}</FormatedLink>
  })

  return (
    <FooterContainer>
      <ContentLayout>
        <img src={LOGO} alt="cleanthat logo" />
        <Slogan>{CLEANTHAT_SLOGAN}</Slogan>
        <Nav>{NavLinks}</Nav>
      </ContentLayout>
    </FooterContainer>
  )
}

export default Footer
