
import styled from 'styled-components'

const BannerCardLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${({direction = 'row'})=> direction};
`

export default BannerCardLayout
