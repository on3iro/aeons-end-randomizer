import React from 'react'

import FormGroup from '@material-ui/core/FormGroup'
import FormLabel from '@material-ui/core/FormLabel'

type Props = {
  label: string
  children: React.ReactChild
}

const ListWrapper = ({ label, children, ...rest }: Props) => (
  <React.Fragment>
    <FormLabel {...rest} style={{ marginTop: '24px' }}>
      {label}
    </FormLabel>
    <FormGroup {...rest}>{children}</FormGroup>
  </React.Fragment>
)

export default React.memo(ListWrapper)
