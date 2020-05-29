import React from 'react'
import { connect } from 'react-redux'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { FormGroup, MenuItem } from '@material-ui/core'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'

import BackLink from 'components/molecules/BackLink'

import Nemeses from './Nemeses'
import Mages from './Mages'
import Gems from './Gems'
import Relics from './Relics'
import Spells from './Spells'
import BasicNemesisCards from './BasicNemesisCards'
import UpgradedBasicNemesisCards from './UpgradedBasicNemesisCards'
import Treasures from './Treasures'
import SelectField from 'components/atoms/SelectField'
import { RootState, selectors, actions } from 'Redux/Store'
import {
  LANGUAGE_KEYS,
  LanguageKey,
} from 'Redux/Store/Settings/Expansions/types'

type OwnProps = { expansionId: string }

const mapStateToProps = (state: RootState, { expansionId }: OwnProps) => {
  return {
    lang: selectors.Settings.Expansions.Languages.getSelectedLanguageByExpansionId(
      state,
      { expansionId }
    ),
  }
}

const mapDispatchToProps = {
  // FIXME use available expansions instead
  selectLanguage: actions.Settings.Expansions.Languages.select,
}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps &
  OwnProps

const ContentCustomization = ({ expansionId, lang, selectLanguage }: Props) => (
  <Card>
    <CardContent>
      <BackLink to="/settings" label="Back to settings" />
      <FormControl component={'fieldset' as 'div'}>
        <FormGroup style={{ marginBottom: '20px' }}>
          <FormControlLabel
            label="Language"
            control={
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
                {LANGUAGE_KEYS.map(language => (
                  <MenuItem
                    key={language}
                    value={language}
                    data-test="select-type-menu-item"
                  >
                    {language}
                  </MenuItem>
                ))}
              </SelectField>
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
    </CardContent>
  </Card>
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(ContentCustomization))
