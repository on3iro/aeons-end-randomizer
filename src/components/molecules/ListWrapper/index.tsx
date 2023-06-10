import React from 'react'

import FormGroup from '@material-ui/core/FormGroup'
import FormLabel from '@material-ui/core/FormLabel'

type Props = {
  label: string
  children: React.ReactChild
  row?: boolean
}

const ListWrapper = ({ label, children, row = false, ...rest }: Props) => (
  <React.Fragment>
    <FormLabel {...rest} style={{ marginTop: '24px' }}>
      {label}
    </FormLabel>
    <FormGroup row={row} {...rest}>{children}</FormGroup>
  </React.Fragment>
)

export default React.memo(ListWrapper)
