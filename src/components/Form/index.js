import React from 'react'
import styled from 'styled-components'
import { Formik } from 'formik'
import Typography from '@material-ui/core/Typography'

const FormContainer = styled.div`
  min-width: 335px;
  padding: 6rem 4rem;
  border-radius: 8px;
  margin-top: -18rem;
  background-color: white;
`
const Form = ({ initialFormValue, children, header = 'Lets get started' }) => {
  return (
    <FormContainer>
      <Typography variant="h4">{header}</Typography>
      <Formik
        initialValues={initialFormValue}
        validate={(values) => {
          const errors = {}
          if (!values.email) {
            errors.email = 'Required'
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address'
          }
          return errors
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
          }, 400)
        }}
      >
        {({ handleSubmit }) => <form onSubmit={handleSubmit}>{children}</form>}
      </Formik>
    </FormContainer>
  )
}

export default Form
