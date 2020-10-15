import styled from 'styled-components'

const PageLayout = styled.div`
  max-width: 1440px;
  width: 100%;
  padding: 0 4rem;
  margin: 0 auto;

  ${({ theme }) => `
    @media ${theme.screenSizes.tablet}{
      padding: 0 12rem;
    }
  `}
`

export default PageLayout
