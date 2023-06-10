import React from 'react'

import AmountPicker from 'components/molecules/AmountPicker'

type Props = {
  selectedValue: string
  handleAmountChange: (e: React.ChangeEvent<any>) => void
}

const MageCountPicker = ({ selectedValue, handleAmountChange }: Props) => (
  <AmountPicker
    label="Amount of Mages"
    selectedValue={selectedValue}
    handleAmountChange={handleAmountChange}
    optionsCount={4}
  />
)

export default React.memo(MageCountPicker)
