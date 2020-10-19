import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import MobileStepper from '@material-ui/core/MobileStepper'
import Paper from '@material-ui/core/Paper'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

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

function SwipeableTextMobileStepper({ children }) {
  const classes = useStyles()
  const theme = useTheme()
  const [activeStep, setActiveStep] = React.useState(0)
  const maxSteps = children.length

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
          {children}
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
