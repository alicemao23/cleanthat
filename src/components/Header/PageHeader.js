import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.h2`
  font-size: 4.8rem;
`

const PageHeader = ({ label = '' }) => <StyledHeader>{label}</StyledHeader>

export default PageHeader
