import React from 'react'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'

import Button from '../Button'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 57.2rem;
`

const Label = styled(Typography)`
  margin-bottom: 2.5rem;
  text-align: center;
`
const FormSuccess = ({ handleClick }) => {
  return (
    <Container>
      <Label variant="h4">Thanks! We’ll get back to you soon.</Label>
      <Button variant="commercial" onClick={handleClick}>
        Go Back
      </Button>
    </Container>
  )
}

export default FormSuccess
