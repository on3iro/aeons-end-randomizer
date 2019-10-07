import React from 'react'
import { connect } from 'react-redux'

import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import FormControl from '@material-ui/core/FormControl'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'

import { RootState, selectors, actions } from '../../../../../Redux/Store'
import * as types from '../../../../../types'

import CheckboxList from '../../../../CheckboxList'
import BackLink from './BackLink'

const entitiesToItems = (
  entities: ReadonlyArray<
    | types.ICard & { selected: boolean }
    | types.ICreature & { selected: boolean }
  >
) =>
  entities.map(entity => ({
    name: entity.name,
    id: entity.id,
    label: entity.name,
    checked: entity.selected,
  }))

const mapStateToProps = (state: RootState, props: { expansionId: string }) => ({
  selectedNemeses: selectors.Settings.Expansions.SelectedNemeses.getNemesesByExpansionId(
    state,
    props.expansionId
  ),
  selectedMages: selectors.Settings.Expansions.SelectedMages.getMagesByExpansionId(
    state,
    props.expansionId
  ),
  selectedGems: selectors.Settings.Expansions.SelectedCards.getGemsByExpansionId(
    state,
    props.expansionId
  ),
  selectedRelics: selectors.Settings.Expansions.SelectedCards.getRelicsByExpansionId(
    state,
    props.expansionId
  ),
  selectedSpells: selectors.Settings.Expansions.SelectedCards.getSpellsByExpansionId(
    state,
    props.expansionId
  ),
})

const mapDispatchToProps = {
  handleCardChange: actions.Settings.Expansions.SelectedCards.toggleCard,
  handleNemesisChange:
    actions.Settings.Expansions.SelectedNemeses.toggleNemesis,
  handleMageChange: actions.Settings.Expansions.SelectedMages.toggleMage,
}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps & { expansionId: string }

const ContentCustomization = React.memo(
  ({
    selectedGems,
    selectedRelics,
    selectedSpells,
    selectedNemeses,
    selectedMages,
    handleCardChange,
    handleNemesisChange,
    handleMageChange,
  }: Props) => (
    <Card>
      <CardContent>
        <Typography>
          <BackLink to="/settings">
            <ChevronLeftIcon /> Back to settings
          </BackLink>
        </Typography>
        <FormControl component={'fieldset' as 'div'}>
          <CheckboxList
            label="Nemeses"
            items={entitiesToItems(selectedNemeses)}
            changeHandler={handleNemesisChange}
          />
          <CheckboxList
            label="Mages"
            items={entitiesToItems(selectedMages)}
            changeHandler={handleMageChange}
          />
          <CheckboxList
            label="Gems"
            items={entitiesToItems(selectedGems)}
            changeHandler={handleCardChange}
          />
          <CheckboxList
            label="Relics"
            items={entitiesToItems(selectedRelics)}
            changeHandler={handleCardChange}
          />
          <CheckboxList
            label="Spells"
            items={entitiesToItems(selectedSpells)}
            changeHandler={handleCardChange}
          />
        </FormControl>
      </CardContent>
    </Card>
  )
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContentCustomization)
