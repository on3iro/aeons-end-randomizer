import React, { useState } from 'react'
import { connect } from 'react-redux'

import { RootState, selectors, actions } from 'Redux/Store'
import {
  LANGUAGE_KEYS,
  LanguageKey,
} from 'Redux/Store/Settings/Expansions/types'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { FormGroup, MenuItem, InputLabel } from '@material-ui/core'
import FormControl from '@material-ui/core/FormControl'
import Tooltip from '@material-ui/core/Tooltip'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import InfoIcon from '@material-ui/icons/Info'

import BackLink from 'components/molecules/BackLink'
import IconButton from 'components/atoms/IconButton'
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

const ContentCustomization = ({ expansionId, lang, selectLanguage }: Props) => {
  const [tooltipOpen, setTooltipOpen] = useState<boolean>(false)

  const handleTooltipClose = () => {
    setTooltipOpen(false)
  }

  const handleTooltipOpen = () => {
    setTooltipOpen(!tooltipOpen)
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
              </FormGroup>
              <ClickAwayListener onClickAway={handleTooltipClose}>
                <Tooltip
                  title="Note: Content without available translations will fallback to english!"
                  PopperProps={{
                    disablePortal: true,
                    modifiers: {
                      arrow: {
                        enabled: true,
                      },
                    },
                  }}
                  onClose={handleTooltipClose}
                  open={tooltipOpen}
                  disableFocusListener
                  disableHoverListener
                  disableTouchListener
                >
                  <IconButton
                    color="primary"
                    aria-label="Show language select info"
                    onClick={handleTooltipOpen}
                  >
                    <InfoIcon />
                  </IconButton>
                </Tooltip>
              </ClickAwayListener>
            </SelectWithTooltipWrapper>
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
