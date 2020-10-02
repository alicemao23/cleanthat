import styled from 'styled-components'

const BannerCardLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${({ direction = 'row' }) => direction};
  height: ${({ height = '44rem' }) => height};
  border-radius: ${({ borderRadius = 'none' }) => borderRadius};
  overflow: hidden;
`

export default BannerCardLayout
