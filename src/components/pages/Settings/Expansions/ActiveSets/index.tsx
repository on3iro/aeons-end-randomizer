import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { RootState, selectors, actions } from 'Redux/Store'
import { usePrompt } from 'hooks/useModal'

import {
  GlobalLanguageKey,
  LanguageKey,
  LANGUAGE_KEYS,
} from 'Redux/Store/Settings/Expansions/types'

import Checkbox from '@material-ui/core/Checkbox'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormGroup from '@material-ui/core/FormGroup'
import FormLabel from '@material-ui/core/FormLabel'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'

import Standalones from './Standalones'
import Mini from './Mini'
import Promos from './Promos'

import DeselectByKeyword  from './DeselectByKeyword'

import SelectWithTooltipWrapper from '../ContentCustomization/SelectWithTooltipWrapper'
import Tooltip from 'components/molecules/Tooltip'
import SelectField from 'components/atoms/SelectField'
import Wrapper from './Wrapper'
import H2 from 'components/atoms/H2'

const mapStateToProps = (state: RootState) => ({
  allSetsSelected:
    selectors.Settings.Expansions.Expansions.getAllExpansionsSelected(state),
  globalLang:
    selectors.Settings.Expansions.GlobalLanguage.getGlobalLanguageOfExpansions(
      state
    ),
  languagesOfExpansions:
    selectors.Settings.Expansions.Languages.getLanguagesByExpansion(state),
})

const mapDispatchToProps = {
  selectGlobalLanguage: actions.Settings.Expansions.GlobalLanguage.select,
  selectLanguageOfExpansion: actions.Settings.Expansions.Languages.select,
  handleSelectAll: actions.Settings.Expansions.Expansions.main.toggleAll,
  handleChange: actions.Settings.Expansions.Expansions.selected.toggleExpansion,
}

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps & {}

const ActiveSets = ({
  allSetsSelected,
  globalLang,
  languagesOfExpansions,
  selectGlobalLanguage,
  selectLanguageOfExpansion,
  handleSelectAll,
  handleChange,
}: Props) => {
  const [currentGlobalLanguage, setCurrentGlobalLanguage] =
    useState<GlobalLanguageKey>(globalLang)

  const changeGlobalLanguagePrompt = usePrompt()
  const openGlobalLanguageDialog = () => {
    changeGlobalLanguagePrompt.show()
  }
  const yesHandler = () => {
    selectGlobalLanguage(currentGlobalLanguage)
    Object.keys(languagesOfExpansions).forEach((expansionId) =>
      selectLanguageOfExpansion(
        expansionId,
        currentGlobalLanguage as LanguageKey
      )
    )

    changeGlobalLanguagePrompt.hide()
  }

  const changeGlobalLanguagePromptTitle = `You have individual language settings for some expansions. Changing the global language will reset those . Do you really want to continue?`

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
    <Wrapper>
      <FormControl component={'fieldset' as 'div'}>
        <SelectWithTooltipWrapper>
          <FormGroup style={{ minWidth: '50%' }}>
            <InputLabel shrink>Language</InputLabel>
            <SelectField
              key="globalLang"
              value={globalLang}
              onChange={(
                e: React.ChangeEvent<{
                  name?: string
                  value: GlobalLanguageKey
                }>
              ) => {
                if (globalLang === 'CUSTOM') {
                  setCurrentGlobalLanguage(e.target.value)
                  openGlobalLanguageDialog()
                } else {
                  selectGlobalLanguage(e.target.value)
                  Object.keys(languagesOfExpansions).forEach((expansionId) =>
                    selectLanguageOfExpansion(
                      expansionId,
                      e.target.value as LanguageKey
                    )
                  )
                }
              }}
              inputProps={{
                name: 'globalLang',
                id: `globalLang-${globalLang}`,
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
              <MenuItem
                key="CUSTOM"
                value="CUSTOM"
                data-test="select-type-menu-item"
                style={{ display: 'none' }}
              >
                Custom
              </MenuItem>
            </SelectField>
          </FormGroup>

          <Tooltip>
            <p>
              Change the language for all expansions. This will reset all
              individual expansion language settings.
              <br />
              <br />
              <b>CUSTOM:</b> One or more expansions have individual language
              settings.
            </p>
          </Tooltip>
        </SelectWithTooltipWrapper>
        <FormLabel />
        <FormGroup style={{ marginBottom: '20px' }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={allSetsSelected}
                onChange={handleSelectAll}
                value={allSetsSelected ? 'Deselect All' : 'Select All'}
              />
            }
            label={allSetsSelected ? 'Deselect All' : 'Select All'}
          />
        </FormGroup>
        <DeselectByKeyword></DeselectByKeyword>
        <Standalones handleChange={handleChange} />
        <Mini handleChange={handleChange} />
        <Promos handleChange={handleChange} />
      </FormControl>
      <changeGlobalLanguagePrompt.RenderPrompt
        titleColor="#333"
        titleLabel="Change global language"
        yesHandler={yesHandler}
        noHandler={changeGlobalLanguagePrompt.hide}
      >
        <H2>{changeGlobalLanguagePromptTitle}</H2>
      </changeGlobalLanguagePrompt.RenderPrompt>
    </Wrapper>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(ActiveSets))
