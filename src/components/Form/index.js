import React from 'react'
import styled from 'styled-components'
import { useForm, Controller } from 'react-hook-form'
import { CardHeader } from '../Header'
import Button from '../Button/CTAButton'
import TextField from '../TextField'
import Select from '../Select'

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

const Form = ({ initialFormValue, children, header = 'Lets get started' }) => {
  const { register, handleSubmit, watch, errors, control } = useForm()
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
      )
      .join('&')
  }

  const onSubmit = (data) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'commercial-cleaning-inquiry', ...data })
    })
      .then(() => alert('Success!'))
      .catch((error) => alert(error))
  }
  return (
    <FormContainer name="contact" onSubmit={handleSubmit(onSubmit)}>
      <CardHeader>{header}</CardHeader>
      <input
        type="hidden"
        name="form-name"
        value="commercial-cleaning-inquiry"
      />
      <TextField
        inputRef={register}
        name="name"
        type="text"
        placeholder="Your first and last name"
        label="name"
        // required
      />
      <TextField
        inputRef={register}
        name="email"
        type="email"
        label="email"
        id="email"
        placeholder="johndoe@email.com"
        // required
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
      />
      <Select
        type="text"
        name="officeType"
        inputRef={register}
        label="Office type"
        id="office-type"
        displayEmpty
        selectOptions={[
          'commericial',
          'retail',
          'Advertising',
          'Community  Center',
          'Others'
        ]}
      />
      <Select
        type="text"
        name="frequency"
        inputRef={register}
        label="Frequency of clean"
        id="frenquency"
        placeholder="select one"
        displayEmpty
        selectOptions={[
          'commercial',
          'retail',
          'Advertising',
          'Community  Center',
          'Others'
        ]}
        renderValue={(val) => {
          return val || 'Select one'
        }}
      />
      <Button type="submit" variant="commercial">
        send
      </Button>{' '}
    </FormContainer>
  )
}

export default Form
