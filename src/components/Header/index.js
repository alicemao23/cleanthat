import styled from 'styled-components'
import PageHeader from './PageHeader'

const SectionHeader = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: bold;
  font-size: 3.6rem;
  text-align: center;
`

export { SectionHeader, PageHeader }
