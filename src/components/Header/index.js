import React from 'react'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const StyledTypography = withStyles(() => ({
  h2: {
    marginTop: '4rem',
    marginBottom: '8rem',
    '@media (min-width: 960px)': {
      h2: {
        marginTop: '9rem',
        marginBottom: '12rem'
      }
    }
  },
  h3: {
    marginBottom: '5rem'
  },
  h4: {
    marginBottom: '3.5rem'
  },
  h5: {
    marginBottom: '1rem'
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
  <StyledTypography variant="h4" {...props}>
    {children}
  </StyledTypography>
)

export { SectionHeader, PageHeader, CardHeader, StyledTypography }
