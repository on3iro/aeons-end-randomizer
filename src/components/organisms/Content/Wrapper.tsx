import styled from 'styled-components/macro'

type Props = {
  isLoading: boolean
}

const Wrapper = styled('div')<Props>`
  padding: ${props => props.theme.spacing.unit * 3}px;

  ${props =>
    props.isLoading
      ? `
      text-align: center;
      padding-top: 150px;
    `
      : ''}
`

export default Wrapper
