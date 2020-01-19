import styled from 'styled-components/macro'

type Props = {
  theme: any
}

const P = styled('p')<Props>`
  margin: 12px 0;
`

P.displayName = 'P'

export default P
