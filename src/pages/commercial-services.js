import React from 'react'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import { Field } from 'formik'

import { PageHeader, CardHeader, SectionHeader } from '../components/Header'
import Layout from '../components/Layouts'
import TextField from '../components/TextField'
import Select from '../components/Select'
import Container from '../components/Containers/PageContainer.style'
import HeroBackground from '../media/residentialHero.svg'
import Form from '../components/Form'
import Button from '../components/Button/CTAButton'

import { COMMERCIAL_SERVICES_LOGO_MAP } from '../shared/constants'

const ContainerLayout = styled.div`
  padding: 8rem 12rem;
`
const HeroContainer = styled(ContainerLayout)`
  display: flex;
  justify-content: space-between;
`

const HeroDetails = styled.div`
  width: 500px;
`

const BackgroundContainer = styled.div`
  background-image: ${() => `url(${HeroBackground})`};
  background-size: 100%;
  background-repeat: no-repeat;
  width: 100%;
  overflow: auto;
  padding-left: 12rem;
`
const ServicesIconContainer = styled(ContainerLayout)`
  background-color: #d2e6fd;
  display: flex;
  flex-direction: column;
  align-items: center;

  > .header {
    margin-bottom: 5rem;
  }
`

const ServiceIcons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  > * {
    display: flex;
    flex-direction: column;
    align-items: center;

    .label {
      margin-top: 3.5rem;
    }
  }
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
    <Layout>
      <BackgroundContainer>
        <PageHeader>Commercial Cleaning</PageHeader>{' '}
      </BackgroundContainer>

      <Container></Container>
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
            placeholder={'Your first and last name'}
            required
            // classes={classes.textField}
          />
          <Field
            type="text"
            name="email"
            component={TextField}
            label="email"
            id="email"
            placeholder={'johndoe@email.com'}
            required
            // classes={classes.textField}
          />
          <Field
            type="text"
            name="phone"
            component={TextField}
            label="phone (optional)"
            id="phone"
            placeholder={'123-456-7890'}
            // classes={classes.textField}
          />
          <Field
            type="text"
            name="inquiry"
            component={TextField}
            label="How can we help you?"
            id="inquiry"
            placeholder={'Your inquiry'}
            // classes={classes.textField}
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
            // classes={classes.textField}
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
              return val ? val : 'Select one'
            }}
            // classes={classes.textField}
          />
          <Button type="commercial" label="send" />
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
    </Layout>
  )
}

export default CommercialServicesPage
