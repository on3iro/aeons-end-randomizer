import React, { useEffect } from 'react'
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
    languagesOfExpansions:
      selectors.Settings.Expansions.Languages.getLanguagesByExpansion(state),
    globalLang:
      selectors.Settings.Expansions.GlobalLanguage.getGlobalLanguageOfExpansions(
        state
      ),
    allExpansionContentSelected:
      selectors.Settings.Expansions.getAllContentOfExpansionSelected(state, {
        expansionId,
      }),
  }
}

const mapDispatchToProps = {
  // FIXME use available expansions instead
  selectLanguage: actions.Settings.Expansions.Languages.select,
  selectGlobalLanguage: actions.Settings.Expansions.GlobalLanguage.select,
  handleSelectAllExpansionContent:
    actions.Settings.Expansions.main.toggleAllExpansionContent,
}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps &
  OwnProps

const ContentCustomization = ({
  expansionId,
  lang,
  languagesOfExpansions,
  globalLang,
  allExpansionContentSelected,
  selectLanguage,
  selectGlobalLanguage,
  handleSelectAllExpansionContent,
}: Props) => {
  const handleCheckboxChange = () => {
    allExpansionContentSelected
      ? handleSelectAllExpansionContent(expansionId, 'deselect')
      : handleSelectAllExpansionContent(expansionId, 'select')
  }

  useEffect(() => {
    const languageOfExpansionsArray = Object.values(languagesOfExpansions)

    if (
      languageOfExpansionsArray.every(
        (lang) => lang === languageOfExpansionsArray[0]
      )
    ) {
      selectGlobalLanguage(languageOfExpansionsArray[0])
    }

    if (
      languageOfExpansionsArray.some(
        (lang) => lang !== languageOfExpansionsArray[0]
      )
    ) {
      selectGlobalLanguage('CUSTOM')
    }
  }, [languagesOfExpansions, globalLang, selectGlobalLanguage])

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
                    checked={allExpansionContentSelected}
                    onChange={handleCheckboxChange}
                    value={
                      allExpansionContentSelected
                        ? 'Deselect All'
                        : 'Select All'
                    }
                  />
                }
                label={
                  allExpansionContentSelected ? 'Deselect All' : 'Select All'
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
