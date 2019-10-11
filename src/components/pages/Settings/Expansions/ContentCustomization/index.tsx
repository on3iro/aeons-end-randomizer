import React, { useState } from 'react'
import { connect } from 'react-redux'

import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import FormControl from '@material-ui/core/FormControl'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'

import { RootState, selectors, actions } from '../../../../../Redux/Store'
import * as types from '../../../../../types'

import { useModal } from '../../../../Modal'
import CheckboxList from '../../../../CheckboxList'
import BackLink from './BackLink'

import CheckboxWithDetails from './CheckboxWithDetails'
import NemesisModal from '../../../Nemeses/NemesisModal'
import SupplyModal from '../../../Supply/SupplyModal'
import MageModal from '../../../Mages/MageModal'

const entitiesToItems = (
  entities: ReadonlyArray<
    | types.ICard & { selected: boolean }
    | types.Nemesis & { selected: boolean }
    | types.Mage & { selected: boolean }
  >,
  includeEntity: boolean = false
) =>
  entities.map(entity => ({
    name: entity.name,
    id: entity.id,
    label: entity.name,
    checked: entity.selected,
    ...(includeEntity && { entity }),
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
  }: Props) => {
    const {
      show: showNemesisModal,
      renderModal: renderNemesisModal,
    } = useModal()
    const { show: showMageModal, renderModal: renderMageModal } = useModal()
    const { show: showCardModal, renderModal: renderCardModal } = useModal()

    const [modalContentId, setModalContentId] = useState<string>('')

    const handleNemesisDetails = (nemesisId: string) => {
      showNemesisModal()
      setModalContentId(nemesisId)
    }

    const handleMageDetails = (mageId: string) => {
      showMageModal()
      setModalContentId(mageId)
    }

    const handleSupplyDetails = (cardId: string) => {
      showCardModal()
      setModalContentId(cardId)
    }

    return (
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
              Component={({ checked, item, label, changeHandler }) => {
                return (
                  <CheckboxWithDetails
                    id={item.id}
                    checked={checked}
                    item={item.id}
                    label={label}
                    changeHandler={changeHandler}
                    showDetails={handleNemesisDetails}
                  />
                )
              }}
              changeHandler={handleNemesisChange}
            />
            <CheckboxList
              label="Mages"
              items={entitiesToItems(selectedMages)}
              Component={({ checked, item, label, changeHandler }) => {
                return (
                  <CheckboxWithDetails
                    id={item.id}
                    checked={checked}
                    item={item.id}
                    label={label}
                    changeHandler={changeHandler}
                    showDetails={handleMageDetails}
                  />
                )
              }}
              changeHandler={handleMageChange}
            />
            <CheckboxList
              label="Gems"
              items={entitiesToItems(selectedGems, true)}
              Component={({ checked, item, label, changeHandler }) => {
                return (
                  <CheckboxWithDetails
                    id={item.id}
                    checked={checked}
                    item={item.id}
                    label={label}
                    changeHandler={changeHandler}
                    showDetails={handleSupplyDetails}
                    keywords={item.entity.keywords}
                    type={item.entity.type}
                  />
                )
              }}
              changeHandler={handleCardChange}
            />
            <CheckboxList
              label="Relics"
              items={entitiesToItems(selectedRelics, true)}
              Component={({ checked, item, label, changeHandler }) => {
                return (
                  <CheckboxWithDetails
                    id={item.id}
                    checked={checked}
                    item={item.id}
                    label={label}
                    changeHandler={changeHandler}
                    showDetails={handleSupplyDetails}
                    keywords={item.entity.keywords}
                    type={item.entity.type}
                  />
                )
              }}
              changeHandler={handleCardChange}
            />
            <CheckboxList
              label="Spells"
              items={entitiesToItems(selectedSpells, true)}
              Component={({ checked, item, label, changeHandler }) => {
                return (
                  <CheckboxWithDetails
                    id={item.id}
                    checked={checked}
                    item={item.id}
                    label={label}
                    changeHandler={changeHandler}
                    showDetails={handleSupplyDetails}
                    keywords={item.entity.keywords}
                    type={item.entity.type}
                  />
                )
              }}
              changeHandler={handleCardChange}
            />
          </FormControl>
        </CardContent>
        <NemesisModal id={modalContentId} renderModal={renderNemesisModal} />
        <MageModal
          id={modalContentId}
          playerNumber={1}
          renderModal={renderMageModal}
        />
        <SupplyModal id={modalContentId} renderModal={renderCardModal} />
      </Card>
    )
  }
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContentCustomization)
