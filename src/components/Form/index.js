import React from 'react'
import styled from 'styled-components'
import { useForm, Controller } from 'react-hook-form'
import emailjs from 'emailjs-com'
import { object, string } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import get from 'lodash.get'

import { CardHeader } from '../Header'
import Button from '../Button/CTAButton'
import TextField from '../TextField'
import Select from '../Select'
import Error from '../Error'

const FormContainer = styled.form`
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
const inquiryValidationSchema = object().shape({
  name: string().required('Required'),
  email: string().email().required('Required'),
  inquiry: string().required('Please let us know how we can help')
})

const Form = ({ initialFormValue, children, header = 'Lets get started' }) => {
  const { register, handleSubmit, watch, errors, control } = useForm({
    resolver: yupResolver(inquiryValidationSchema)
  })
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
      )
      .join('&')
  }

  const onSubmit = (data) => {
    emailjs
      .send(
        'service_cp93y5p',
        'template_02zqx6a',
        data,
        'user_rg33pSLAdt3sM76j1g2jL'
      )
      .then(
        (result) => {
          console.log(result.text)

          alert('Success!', result.text)
        },
        (error) => {
          console.log(error.text)
          alert(error.text)
        }
      )
  }
  return (
    <FormContainer
      className="commercial-form"
      onSubmit={handleSubmit(onSubmit)}
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
    </FormContainer>
  )
}

export default Form
