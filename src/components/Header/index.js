import styled from 'styled-components'

import React from 'react'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const StyledTypography = withStyles(() => ({
  h2: {
    marginTop: '4rem',
    marginBottom: '8rem'
  },
  '@media (min-width: 960px)': {
    h2: {
      marginTop: '9rem',
      marginBottom: '12rem'
    }
  },
  h3: {
    marginBottom: '5rem'
  }
}))(Typography)

const PageHeader = ({ children, ...props }) => (
  <StyledTypography variant="h2" {...props}>
    {children}
  </StyledTypography>
)

const SectionHeader = ({ children, ...props }) => (
  <StyledTypography variant="h3" {...props}>
    {children}
  </StyledTypography>
)
const CardHeader = ({ children, ...props }) => (
  <Typography variant="h4" {...props}>
    {children}
  </Typography>
)

export { SectionHeader, PageHeader, CardHeader }
