import React from 'react'

import AmountPicker from 'components/molecules/AmountPicker'

type Props = {
  selectedValue: string
  handleAmountChange: (e: React.ChangeEvent<any>) => void
}

const PlayerAmountPicker = ({ selectedValue, handleAmountChange }: Props) => {
  return (
    <AmountPicker
      label="Amount of Players"
      selectedValue={selectedValue}
      handleAmountChange={handleAmountChange}
      optionsCount={4}
    />
  )
}

export default React.memo(PlayerAmountPicker)
