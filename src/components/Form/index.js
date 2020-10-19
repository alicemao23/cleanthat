import React from 'react'
import styled from 'styled-components'
import { Formik } from 'formik'
import { CardHeader } from '../Header'

const FormContainer = styled.div`
  ${({ theme }) => `
  height: max-content;
  min-width: 33.5rem;
  padding: 6rem 4rem;
  border-radius: 8px;
  background-color: white;
  margin-top: -14rem;
  margin-bottom: 12rem;
  position: relative;
  :before {
    content: '';
    width: 100%;
    height: 17rem;
    border-radius: 50%;
    background-color: ${theme.colors.commercial.primary};
    bottom: 0;
    left: 50%;
    position: absolute;
    transform: translate(-38%, 50%) rotate(-15deg);
    z-index: -1;
  }
    @media ${theme.screenSizes.laptop} {
      margin-top: -14rem;
      width: 41.3rem;
    }
    @media ${theme.screenSizes.laptopL} {
      margin-top: -18rem;
    }
  `}
`

const Form = ({ initialFormValue, children, header = 'Lets get started' }) => {
  return (
    <FormContainer>
      <CardHeader>{header}</CardHeader>
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
