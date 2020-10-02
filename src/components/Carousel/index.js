import React from 'react'
import styled from 'styled-components'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import MobileStepper from '@material-ui/core/MobileStepper'
import Paper from '@material-ui/core/Paper'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'

import SplitBanner from '../Containers/SplitBanner'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

const TESTIMONIALS = [
  {
    name: 'Christine Pratt',
    headerLabel: 'Our clients come clean',
    description:
      'We are extremely happy with the level of service CleanThat provides. You can trust their staff to be very thorough and clean. The microwave and keyboards were spotless, even our sugar bowl for coffee was sparkling. It’s the little extra care they take that make a big difference. Rest assured they will leave your office smelling fresh and clean. We highly recommend CleanThat!',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60'
  },
  {
    name: 'Christine Pratt',
    headerLabel: 'Our clients come clean',
    description:
      'We are extremely happy with the level of service CleanThat provides. You can trust their staff to be very thorough and clean. The microwave and keyboards were spotless, even our sugar bowl for coffee was sparkling. It’s the little extra care they take that make a big difference. Rest assured they will leave your office smelling fresh and clean. We highly recommend CleanThat!',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60'
  }
]

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 8
  },
  stepper: {
    '&.MuiMobileStepper-root': {
      justifyContent: 'center',
      backgroundColor: 'transparent',
      width: 'max-content',
      margin: '5rem auto 0'
    },
    '& .MuiMobileStepper-dot': {
      width: 45,
      height: 9,
      borderRadius: 40,
      border: '1px solid #FFFFFF',
      backgroundColor: 'transparent'
    },
    '& .MuiMobileStepper-dotActive': {
      backgroundColor: '#ffffff'
    }
  },
  img: {
    height: 255,
    display: 'block',
    maxWidth: 400,
    overflow: 'hidden',
    width: '100%'
  }
}))

const Container = styled.div`
  width: 50%;
  padding: 8rem 9rem 5rem 6rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
`
const Label = styled.span`
  font-size: 2.4rem;
  margin-bottom: 3.5rem;
  font-weight: bold;
`

const Name = styled.h3`
  font-size: 1.4rem;
  font-weight: bold;
  letter-spacing: 0.1em;
  color: ${({ theme, type = 'commercial' }) => theme.colors[type].primary};
  text-transform: uppercase;
`

const Info = styled.p`
  font-family: Din;
  font-size: 1.6rem;
  line-height: 2rem;
`

function SwipeableTextMobileStepper() {
  const classes = useStyles()
  const theme = useTheme()
  const [activeStep, setActiveStep] = React.useState(0)
  const maxSteps = TESTIMONIALS.length

  const handleStepChange = (step) => {
    setActiveStep(step)
  }

  return (
    <>
      <Paper elevation={1} className={classes.root}>
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {TESTIMONIALS.map(({ headerLabel, description, name, imgPath }) => (
            <SplitBanner imgUrl={imgPath} borderRadius="8px">
              <Container>
                <div>
                  <Label>{headerLabel}</Label>
                  <Info>{`"${description}"`}</Info>
                </div>
                <Name>{name}</Name>
              </Container>
            </SplitBanner>
          ))}
        </AutoPlaySwipeableViews>
      </Paper>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="dots"
        activeStep={activeStep}
        className={classes.stepper}
      />
    </>
  )
}

export default SwipeableTextMobileStepper
