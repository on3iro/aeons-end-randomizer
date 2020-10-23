import React from 'react'
import { connect } from 'react-redux'

import { RootState, selectors, actions } from 'Redux/Store'
import {
  LANGUAGE_KEYS,
  LanguageKey,
} from 'Redux/Store/Settings/Expansions/types'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { FormGroup, MenuItem, InputLabel, Checkbox } from '@material-ui/core'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'

import BackLink from 'components/molecules/BackLink'
import SelectField from 'components/atoms/SelectField'

import Wrapper from './Wrapper'
import SelectWithTooltipWrapper from './SelectWithTooltipWrapper'
import Nemeses from './Nemeses'
import Mages from './Mages'
import Gems from './Gems'
import Relics from './Relics'
import Spells from './Spells'
import BasicNemesisCards from './BasicNemesisCards'
import UpgradedBasicNemesisCards from './UpgradedBasicNemesisCards'
import Treasures from './Treasures'
import Tooltip from 'components/molecules/Tooltip'

type OwnProps = { expansionId: string }

const mapStateToProps = (state: RootState, { expansionId }: OwnProps) => {
  return {
    lang: selectors.Settings.Expansions.Languages.getSelectedLanguageByExpansionId(
      state,
      { expansionId }
    ),
    allNemesesSelected: selectors.Settings.Expansions.Nemeses.getAllNemesesOfExpansionSelected(
      state,
      { expansionId }
    ),
    allMagesSelected: selectors.Settings.Expansions.Mages.getAllMagesOfExpansionSelected(
      state,
      { expansionId }
    ),
    allSupplyCardsSelected: selectors.Settings.Expansions.Cards.getAllCardsOfExpansionSelected(
      state,
      { expansionId }
    ),
    allTreasuresSelected: selectors.Settings.Expansions.Treasures.getAllTreasuresOfExpansionSelected(
      state,
      { expansionId }
    ),
    allBasicNemesisCardsSelected: selectors.Settings.Expansions.BasicNemesisCards.getAllBasicNemesisCardsOfExpansionSelected(
      state,
      { expansionId }
    ),
    allUpgradedBasicNemesisCardsSelected: selectors.Settings.Expansions.UpgradedBasicNemesisCards.getAllUpgradedBasicNemesisCardsOfExpansionSelected(
      state,
      { expansionId }
    ),
  }
}

const mapDispatchToProps = {
  // FIXME use available expansions instead
  selectLanguage: actions.Settings.Expansions.Languages.select,
  handleSelectAllExpansionContent:
    actions.Settings.Expansions.main.toggleAllExpansionContent,
}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps &
  OwnProps

const ContentCustomization = ({
  expansionId,
  lang,
  allNemesesSelected,
  allMagesSelected,
  allSupplyCardsSelected,
  allTreasuresSelected,
  allBasicNemesisCardsSelected,
  allUpgradedBasicNemesisCardsSelected,
  selectLanguage,
  handleSelectAllExpansionContent,
}: Props) => {
  const handleCheckboxChange = () => {
    if (
      allNemesesSelected &&
      allMagesSelected &&
      allSupplyCardsSelected &&
      allTreasuresSelected &&
      allBasicNemesisCardsSelected &&
      allUpgradedBasicNemesisCardsSelected
    ) {
      handleSelectAllExpansionContent(expansionId, 'deselect')
    } else {
      handleSelectAllExpansionContent(expansionId, 'select')
    }
  }

  return (
    <Card>
      <CardContent>
        <Wrapper>
          <BackLink to="/settings" label="Back to settings" />
          <FormControl component={'fieldset' as 'div'}>
            <SelectWithTooltipWrapper>
              <FormGroup style={{ minWidth: '50%' }}>
                <InputLabel shrink>Language</InputLabel>
                <SelectField
                  key="lang"
                  value={lang}
                  onChange={(
                    e: React.ChangeEvent<{ name?: string; value: LanguageKey }>
                  ) => {
                    selectLanguage(expansionId, e.target.value)
                  }}
                  inputProps={{
                    name: 'lang',
                    id: `lang-${lang}`,
                  }}
                  data-test="select-type"
                >
                  {LANGUAGE_KEYS.map((language) => (
                    <MenuItem
                      key={language}
                      value={language}
                      data-test="select-type-menu-item"
                    >
                      {language}
                    </MenuItem>
                  ))}
                </SelectField>
              </FormGroup>

              <Tooltip>
                Content without available translations will fallback to english!
              </Tooltip>
            </SelectWithTooltipWrapper>

            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={
                      allNemesesSelected &&
                      allMagesSelected &&
                      allSupplyCardsSelected &&
                      allTreasuresSelected &&
                      allBasicNemesisCardsSelected &&
                      allUpgradedBasicNemesisCardsSelected
                    }
                    onChange={handleCheckboxChange}
                    value={
                      allNemesesSelected &&
                      allMagesSelected &&
                      allSupplyCardsSelected &&
                      allTreasuresSelected &&
                      allBasicNemesisCardsSelected &&
                      allUpgradedBasicNemesisCardsSelected
                        ? 'Deselect All'
                        : 'Select All'
                    }
                  />
                }
                label={
                  allNemesesSelected &&
                  allMagesSelected &&
                  allSupplyCardsSelected &&
                  allTreasuresSelected &&
                  allBasicNemesisCardsSelected &&
                  allUpgradedBasicNemesisCardsSelected
                    ? 'Deselect All'
                    : 'Select All'
                }
              />
            </FormGroup>
            <Nemeses expansionId={expansionId} />
            <Mages expansionId={expansionId} />
            <Gems expansionId={expansionId} />
            <Relics expansionId={expansionId} />
            <Spells expansionId={expansionId} />
            <BasicNemesisCards expansionId={expansionId} />
            <UpgradedBasicNemesisCards expansionId={expansionId} />
            <Treasures expansionId={expansionId} />
          </FormControl>
        </Wrapper>
      </CardContent>
    </Card>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(ContentCustomization))
