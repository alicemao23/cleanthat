import React from 'react'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import { Field } from 'formik'

import { PageHeader, CardHeader, SectionHeader } from '../components/Header'
import TextField from '../components/TextField'
import Select from '../components/Select'
import HeroBackground from '../media/residentialHero.svg'
import Form from '../components/Form'
import Button from '../components/Button/CTAButton'
import TestimonyCarousel from '../components/Carousel'
import TestimonialTile from '../components/TestimonialTile'

import { COMMERCIAL_SERVICES_LOGO_MAP } from '../shared/constants'

const TESTIMONIALS = [
  {
    name: 'Christine Pratt',
    headerLabel: 'Our clients come clean',
    description:
      'We are extremely happy with the level of service CleanThat provides. You can trust their staff to be very thorough and clean. The microwave and keyboards were spotless, even our sugar bowl for coffee was sparkling. It’s the little extra care they take that make a big difference. Rest assured they will leave your office smelling fresh and clean. We highly recommend CleanThat!',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60'
  }
  // {
  //   name: 'Christine Pratt',
  //   headerLabel: 'Our clients come clean',
  //   description:
  //     'We are extremely happy with the level of service CleanThat provides. You can trust their staff to be very thorough and clean. The microwave and keyboards were spotless, even our sugar bowl for coffee was sparkling. It’s the little extra care they take that make a big difference. Rest assured they will leave your office smelling fresh and clean. We highly recommend CleanThat!',
  //   imgPath:
  //     'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60'
  // }
]

const ContainerLayout = styled.div`
  padding: 8rem 4rem;

  ${({ theme }) => `
    @media ${theme.screenSizes.laptopL} {
      padding: 8rem 12rem;
    }
  `}
`
const HeroContainer = styled(ContainerLayout)`
  padding: 8rem 2rem;

  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  ${({ theme }) => `
    @media ${theme.screenSizes.laptop} {
      padding: 8rem 4rem;
      flex-direction: row;
    }
    @media ${theme.screenSizes.laptopL} {
      padding: 8rem 12rem;
    }
  `}
`
const CarouselContainer = styled(ContainerLayout)`
  padding-bottom: 19rem;
  position: relative;
  :before {
    content: '';
    width: 50%;
    height: 30%;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.commercial.primary};
    bottom: 0;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -30%) rotate(12deg);
    z-index: -1;
  }
  ${({ theme }) => `
    @media ${theme.screenSizes.laptop} {
      padding-bottom: 19rem;

    }
  `}
`
const HeroDetails = styled.div`
  padding-left: 2rem;
  padding-right: 2rem;
  ${({ theme }) => `
    @media ${theme.screenSizes.laptop} {
      width: 50rem;
      padding: 0;
    }
  `}
`

const BackgroundContainer = styled.div`
  background-image: ${() => `url(${HeroBackground})`};
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  overflow: auto;
  padding-left: 4rem;

  ${({ theme }) => `
    @media ${theme.screenSizes.tablet} {
      padding-left: 9rem;
    }
    @media ${theme.screenSizes.laptopL} {
      padding-left: 12rem;
    }
  `}
`
const ServicesIconContainer = styled(ContainerLayout)`
  background-color: ${({ theme }) => theme.colors.commercial.background};
  display: flex;
  flex-direction: column;
  align-items: center;

  > .header {
    margin-bottom: 5rem;
  }
`

const ServiceIcons = styled.div`
  ${({ theme }) => `
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  > * {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-basis: 45%;
      @media ${theme.screenSizes.tablet} {
        flex-basis: 30%;
      }
 
      .label {
        margin-top: 3.5rem;
      }
    }
    @media ${theme.screenSizes.laptopL} {
     flex-wrap: nowrap;
    }
  `}
`

const Icon = styled.img`
  width: 140px;
  height: 140px;
`

const StyledCardHeader = styled(CardHeader)`
  margin-bottom: 3.5rem;
`

const DescriptionBody = styled(Typography)`
  margin-bottom: 5rem;
`

const ServiceList = styled.ul`
  margin: 0;
  padding-left: 1.5rem;

  > * {
    font-size: 1.6rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
  }
`

const CommercialServicesPage = () => {
  const initialFormValue = {
    name: '',
    email: '',
    phone: '',
    inquiry: '',
    officeType: 'commercial',
    frequency: ''
  }
  return (
    <>
      <BackgroundContainer>
        <PageHeader>Commercial Cleaning</PageHeader>
      </BackgroundContainer>

      <HeroContainer>
        <HeroDetails>
          <StyledCardHeader>
            You’ve got work to do, so forget about cleaning.
          </StyledCardHeader>
          <DescriptionBody variant="body1">
            Your workspace is a reflection of your business, so rely on our
            detail-oriented, timely cleaning service team. We focus on what you
            can’t see as much as what you can. We’re serious about cleaning —
            client parties, office lobbies, kitchen mayhem — it’s in all of our
            expansive portfolios.
          </DescriptionBody>
          <StyledCardHeader>Here’s how it works</StyledCardHeader>
          <DescriptionBody variant="body1">
            In the fast-paced business of commercial properties, you need a team
            that is reliable and responsive. We will review your requirements
            and suggest a schedule to meet your needs and budget. The same
            cleaning staff is assigned to your account as well as a quality
            control supervisor who performs regular quality control checks. This
            is a partnership, and we’ve got your back every day, every week, or
            just this one time.
          </DescriptionBody>
          <ServiceList>
            <li>Advertising Agents</li>
            <li>Start-ups and innovation sector</li>
            <li>Office buildings / complexes</li>
            <li>Low to mid-rise condo buildings</li>
            <li>Shared office spaces</li>
          </ServiceList>
        </HeroDetails>
        <Form initialFormValue={initialFormValue}>
          <Field
            type="text"
            name="name"
            component={TextField}
            label="Name"
            id="name"
            placeholder="Your first and last name"
            required
          />
          <Field
            type="text"
            name="email"
            component={TextField}
            label="email"
            id="email"
            placeholder="johndoe@email.com"
            required
          />
          <Field
            type="text"
            name="phone"
            component={TextField}
            label="phone (optional)"
            id="phone"
            placeholder="123-456-7890"
          />
          <Field
            type="text"
            name="inquiry"
            component={TextField}
            label="How can we help you?"
            id="inquiry"
            placeholder="Your inquiry"
          />
          <Field
            type="text"
            name="officeType"
            component={Select}
            label="Office type"
            id="office-type"
            displayEmpty
            selectOptions={[
              'commericial',
              'retail',
              'Advertising',
              'Community  Center',
              'Others'
            ]}
          />
          <Field
            type="text"
            name="frequency"
            component={Select}
            label="Frequency of clean"
            id="frenquency"
            placeholder="select one"
            displayEmpty
            selectOptions={[
              'commercial',
              'retail',
              'Advertising',
              'Community  Center',
              'Others'
            ]}
            renderValue={(val) => {
              return val || 'Select one'
            }}
          />
          <Button variant="commercial"> send </Button>
        </Form>
      </HeroContainer>
      <ServicesIconContainer>
        <SectionHeader className="header">What we do</SectionHeader>
        <ServiceIcons>
          {COMMERCIAL_SERVICES_LOGO_MAP.map(({ label, icon }) => {
            return (
              <div>
                <Icon src={icon} />
                <Typography className="label" variant="h5" color="primary">
                  {label}
                </Typography>
              </div>
            )
          })}
        </ServiceIcons>
      </ServicesIconContainer>
      <CarouselContainer>
        <TestimonyCarousel>
          {TESTIMONIALS.map(({ headerLabel, description, name, imgPath }) => (
            <TestimonialTile
              headerTitle="Our clients come clean"
              description={description}
              headerLabe={headerLabel}
              imgUrl={imgPath}
              name={name}
            />
          ))}
        </TestimonyCarousel>
      </CarouselContainer>
    </>
  )
}

export default CommercialServicesPage
