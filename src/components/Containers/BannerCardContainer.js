import styled from 'styled-components'

const BannerCardLayout = styled.div`
  margin: auto;
  max-width: 1440px;
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  border-radius: ${({ borderRadius = 0 }) => borderRadius};
  overflow: hidden;
  ${({ theme, direction = 'row' }) => `
    @media ${theme.screenSizes.laptop} {
      height: ${({ height = '44rem' }) => height};
      flex-direction: ${direction};
    }
  `}
`

export default BannerCardLayout
