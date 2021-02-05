import styled from 'styled-components'

import { TurnOrderCardType } from 'aer-types/types'

import { setTypography } from 'theme/helpers'

type Props = {
  type: TurnOrderCardType
}

const ConfigurationCardDisplay = styled('p')<Props>`
  ${setTypography('body2', { color: '#fff' })}

  display: block;
  padding: 5px 10px;
  margin: 0 0 2px;

  background: ${(props) =>
    props.theme.colors.turnOrderCards[props.type].normal};
`

export default ConfigurationCardDisplay
