import React from 'react'

import AdditionalInfo from './AdditionalInfo'

type Props = {
  label: string
  additionalInfo: string
}

const Label = ({ label, additionalInfo }: Props) => {
  return (
    <>
      <span>{label}</span>
      <AdditionalInfo>{additionalInfo}</AdditionalInfo>
    </>
  )
}

export default React.memo(Label)
