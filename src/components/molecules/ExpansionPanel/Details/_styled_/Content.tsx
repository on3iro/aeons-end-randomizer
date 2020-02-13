import styled from 'styled-components/macro'

type Props = {
  isExpanded: boolean
}

const Content = styled('div')<Props>`
  padding: ${props => (props.isExpanded ? '8px 24px 24px' : '0')};
  transition: padding-top 0.1s ease, padding-bottom 0.1s ease;
`

export default Content
