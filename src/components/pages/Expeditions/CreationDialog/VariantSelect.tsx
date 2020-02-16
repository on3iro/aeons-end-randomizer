import React from 'react'
import { connect } from 'react-redux'

import { RootState, selectors } from 'Redux/Store/'

import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormLabel from '@material-ui/core/FormLabel'
import FormControl from '../FormControl'

const mapStateToProps = (state: RootState) => {
  return {
    variants: selectors.Expeditions.Variants.getVariantList(state),
  }
}

type OwnProps = {
  selectedVariantId: string
  handleVariantChange: (e: React.ChangeEvent<{}>) => void
}

type Props = ReturnType<typeof mapStateToProps> & OwnProps

const VariantSelect = ({
  selectedVariantId,
  handleVariantChange,
  variants,
}: Props) => {
  return (
    <FormControl component={'fieldset' as 'div'}>
      <FormLabel>Expedition Variant</FormLabel>
      <RadioGroup
        aria-label="Expedition Variant"
        name="variant"
        value={selectedVariantId}
        onChange={handleVariantChange}
      >
        {variants.map(variant => (
          <FormControlLabel
            id={variant.id}
            value={variant.id}
            control={<Radio />}
            label={variant.name}
          />
        ))}
      </RadioGroup>
    </FormControl>
  )
}

export default connect(mapStateToProps, {})(React.memo(VariantSelect))
