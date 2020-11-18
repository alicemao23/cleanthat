import React from 'react'
import clsx from 'clsx'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import { CardHeader } from '../Header'

const TestimonialContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-basis: 37.5rem;
  flex-grow: 0;
  border-radius: 8px;
  background-color: white;
  box-shadow: ${(props) => props.theme.colors.shadow};
  font-size: 1.6rem;
  font-family: ${(props) => props.theme.fonts.body};
  border-radius: 8px;
  height: 100%;
  p {
    line-height: 2rem;
    margin: 0;
    margin-bottom: 4.5rem;
  }

  span {
    font-family: ${(props) => props.theme.fonts.headings};
    font-weight: bold;
  }
  ${({ theme }) => `
    @media ${theme.screenSizes.laptop} {
    min-height: 40rem;
    flex-direction: row;
    }
  `}
`

const Container = styled.div`
  padding: 5rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  width: 100%;
  flex-shrink: 0;
  ${({ theme }) => `
    @media ${theme.screenSizes.tablet} {
      padding: 5rem 3rem;
    }
    @media ${theme.screenSizes.laptop} {
      width: 50%;
    }
    @media ${theme.screenSizes.laptopL} {
      padding: 8rem 9rem 5rem 6rem;
    }
  `}
`

const Name = styled(Typography)`
  letter-spacing: 0.1em;
  text-transform: uppercase;
`

const Description = styled(Typography)`
  margin: 3.5rem auto;
`

const BannerImage = styled.img`
  width: 100%;
  flex-grow: 1;
  height: auto;
  ${({ theme }) => `
    @media ${theme.screenSizes.laptop} {
      width: 50%;
    }
  `}
`

const TestimonialTile = ({
  headerTitle = '',
  headerLabel = '',
  description = '',
  name = '',
  imgUrl = '',
  type = ''
}) => {
  return (
    <TestimonialContainer>
      <BannerImage src={imgUrl} />
      <Container>
        <div>
          <CardHeader>{headerLabel}</CardHeader>
          <Description variant="subtitle2">{`"${description}"`}</Description>
        </div>
        <Name
          variant="h5"
          color={clsx(type === 'residential' ? 'secondary' : 'primary')}
        >
          {name}
        </Name>
      </Container>
    </TestimonialContainer>
  )
}
export default TestimonialTile
