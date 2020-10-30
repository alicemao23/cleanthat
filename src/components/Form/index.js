import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useForm, Controller } from 'react-hook-form'
import emailjs from 'emailjs-com'
import { object, string } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import get from 'lodash.get'

import Button from '../Button'
import { CardHeader } from '../Header'
import Error from '../Error'
import FormSuccess from './FormSuccess'
import Select from '../Select'
import TextField from '../TextField'

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
  box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.1);

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
const inquiryValidationSchema = object().shape({
  name: string().required('Required'),
  email: string().email().required('Required'),
  inquiry: string().required('Please let us know how we can help')
})

const Form = ({ children, header = "Let's get started" }) => {
  const [formCompleted, setFormCompleted] = useState(false)

  useEffect(() => {
    return () => setFormCompleted(false)
  }, [])

  const { register, handleSubmit, errors, control, reset } = useForm({
    resolver: yupResolver(inquiryValidationSchema)
  })

  const onSubmit = (data) => {
    emailjs
      .send(
        process.env.GATSBY_EMAILJS_SERVICE_ID,
        process.env.GATSBY_EMAILJS_TEMPLATE_ID,
        data,
        process.env.GATSBY_EMAILJS_USER_ID
      )
      .then(() => {
        setFormCompleted(true)
      })
  }

  const resetForm = () => {
    reset()
    setFormCompleted(false)
  }
  return (
    <FormContainer>
      {!formCompleted ? (
        <form
          className="commercial-form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <CardHeader>{header}</CardHeader>

          <input type="hidden" name="contact_number" />
          <TextField
            inputRef={register}
            name="name"
            type="text"
            placeholder="Your first and last name"
            label="name"
            error={!!errors.name}
            helperText={get(errors, 'name.message', '')}
            FormHelperTextProps={{
              component: (props) => <Error name="fullName" {...props} />
            }}
            required
          />
          <TextField
            inputRef={register}
            name="email"
            type="text"
            label="email"
            id="email"
            placeholder="johndoe@email.com"
            error={!!errors.email}
            helperText={get(errors, 'email.message', '')}
            FormHelperTextProps={{
              component: (props) => <Error name="email" {...props} />
            }}
            required
          />
          <TextField
            inputRef={register}
            name="phone"
            label="phone (optional)"
            id="phone"
            placeholder="123-456-7890"
          />
          <TextField
            inputRef={register}
            name="inquiry"
            label="How can we help you?"
            id="inquiry"
            placeholder="Your inquiry"
            error={!!errors.inquiry}
            helperText={get(errors, 'inquiry.message', '')}
            FormHelperTextProps={{
              component: (props) => <Error name="inquiry" {...props} />
            }}
            required
          />
          <Controller
            render={({ onChange, value }) => (
              <Select
                type="text"
                label="Office type"
                id="office-type"
                displayEmpty
                onChange={onChange}
                value={value}
                selectOptions={[
                  'commericial',
                  'retail',
                  'Advertising',
                  'Community  Center',
                  'Others'
                ]}
              />
            )}
            name="officeType"
            control={control}
            defaultValue=""
            inputRef={register}
            label="Office type"
            id="office-type"
            displayEmpty
            selectOptions={[
              'Office space',
              'Retail space',
              'Coworking space',
              'Advertising',
              'Com',
              'Others'
            ]}
          />

          <Controller
            render={({ onChange, value }) => (
              <Select
                type="text"
                label="Frequency of clean"
                id="frenquency"
                displayEmpty
                onChange={onChange}
                value={value}
                selectOptions={[
                  'Daily',
                  '1 - 3 times a week',
                  'Weekly',
                  'Bi-weekly'
                ]}
              />
            )}
            name="frequency"
            control={control}
            defaultValue=""
          />

          <Button type="submit" variant="commercial">
            send
          </Button>
        </form>
      ) : (
        <FormSuccess handleClick={resetForm} />
      )}
    </FormContainer>
  )
}

export default Form
