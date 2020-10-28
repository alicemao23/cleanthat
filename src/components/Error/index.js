import React from 'react'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import ErrorIcon from '@material-ui/icons/Error'

const ErrorContainer = styled.div`
  color: ${({ theme }) => theme.colors.error};
  display: flex;
  align-items: center;
  margin-top: 5px;
`
const Icon = styled(ErrorIcon)`
  fill: ${({ theme }) => theme.colors.error};
  font-size: 1.8rem;
  margin-right: 4px;
`
const Error = ({ name, children }) => (
  <ErrorContainer name={name}>
    <Icon />
    <Typography>{children}</Typography>
  </ErrorContainer>
)

export default Error
