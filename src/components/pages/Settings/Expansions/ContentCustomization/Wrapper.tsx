import styled from 'styled-components'

import Link from 'components/molecules/BackLink/Link'
import AdditionalInfo from 'components/molecules/AdditionalInfo'
import { Wrapper as CheckboxWithDetailsWrapper } from 'components/molecules/CheckboxWithDetails'
import { Select } from 'components/atoms/SelectField'

const Wrapper = styled('div')`
  ${Link} {
    margin-bottom: 24px;
  }

  ${Select} {
    margin: 16px 0 0;
  }

  ${AdditionalInfo} {
    display: block;
  }

  ${CheckboxWithDetailsWrapper} {
    margin: 4px 0;
    display: flex;
  }
`

export default Wrapper
