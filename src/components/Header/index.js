import styled from 'styled-components'

import React from 'react'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const StyledTypography = withStyles((theme) => ({
  h2: {
    marginTop: '4rem',
    marginBottom: '8rem'
  },
  '@media (min-width: 960px)': {
    h2: {
      marginTop: '9rem',
      marginBottom: '12rem'
    }
  }
}))(Typography)

const PageHeader = ({ children, ...props }) => (
  <StyledTypography variant="h2" {...props}>
    {children}
  </StyledTypography>
)

const SectionHeader = ({ children, ...props }) => (
  <Typography variant="h3" {...props}>
    {children}
  </Typography>
)
const CardHeader = ({ children, ...props }) => (
  <Typography variant="h4" {...props}>
    {children}
  </Typography>
)

export { SectionHeader, PageHeader, CardHeader }
