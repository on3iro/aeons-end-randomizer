import React, { useState, useCallback } from 'react'

import Ajv from 'ajv'

import * as types from 'aer-types/types'
import useExpandedHandling from 'hooks/useExpansionHandling'

import ExpansionPanel from 'components/molecules/ExpansionPanel'
import P from 'components/atoms/P'

import FormLabel from '../FormLabel'
import FormControl from '../../FormControl'

import ContentWrapper from './ContentWrapper'
import ConfigTextField from './ConfigTextField'
import FileUpload from './FileUpload'
import ImportButton from './ImportButton'
import { schema as expeditionJsonSchema } from './expeditionJsonSchema'
import Tooltip from 'components/molecules/Tooltip'

type Props = {
  configImportHandler: (config: types.ExpeditionConfig) => void
}

const ConfigImport = ({ configImportHandler }: Props) => {
  const { expanded, createExpansionHandler } = useExpandedHandling()
  const expansionKey = 'import'
  const expansionHandler = createExpansionHandler(expansionKey)

  const [expeditionJsonConfig, changeExpeditionJsonConfig] = useState<string>(
    ''
  )

  const [validationError, changeValidiationError] = useState<string>('')

  const expeditionJsonConfigHandler = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      changeExpeditionJsonConfig(e.currentTarget.value)
    },
    [changeExpeditionJsonConfig]
  )

  const handleConfigImport = useCallback(
    (e: React.ChangeEvent<any>) => {
      // TODO refactor and cleanup
      if (!!expeditionJsonConfig) {
        try {
          const config = JSON.parse(expeditionJsonConfig)

          const schemaValidator = new Ajv()

          if (schemaValidator.validate(expeditionJsonSchema, config)) {
            configImportHandler(config)
            changeValidiationError('')
            expansionHandler(e, false)
          } else {
            const firstError = (schemaValidator?.errors &&
              schemaValidator?.errors[0]) || {
              dataPath: '<unknown>',
              message: 'Unknown error',
            }
            const message = `${firstError.dataPath}: ${firstError.message}`
            changeValidiationError(message)
          }
        } catch (e) {
          changeValidiationError(e.message)
        }
      }
    },
    [expeditionJsonConfig, configImportHandler, expansionHandler]
  )

  const handleFileUpload = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const reader = new FileReader()
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          changeExpeditionJsonConfig(reader.result)
        }
      }

      if (e?.currentTarget?.files && e?.currentTarget?.files.length > 0) {
        const blob = e.currentTarget.files[0]
        reader.readAsText(blob)
      }
    },
    [changeExpeditionJsonConfig]
  )

  return (
    <FormControl component={'fieldset' as 'div'}>
      <FormLabel>Import</FormLabel>
      <ExpansionPanel
        expanded={expanded}
        expansionKey={expansionKey}
        summary="Expedition Import"
        expansionHandler={expansionHandler}
      >
        <ContentWrapper>
          <Tooltip>
            This allows you to import an existing expedition either by uploading
            a correctly formatted JSON-file or by directly pasting the
            JSON-configuration into the text field below. If you you don't
            change any of the expeditions parameters (variant, market setup or
            seed) you will experience the original expedition with the exact
            same random rolls. To get an idea of what a correctly formatted
            config looks like, simply press the share button on an existing
            expedition and either save the configuration to a file or paste it
            from your clipboard into a text editor.
          </Tooltip>
          <ImportButton
            color="primary"
            variant="outlined"
            onClick={handleConfigImport}
            disabled={expeditionJsonConfig.length <= 0}
          >
            Import
          </ImportButton>
          {!!validationError.length && (
            <P style={{ color: 'red' }}>
              The following error was encountered: <br />
              {validationError}
            </P>
          )}
          <ConfigTextField
            onChange={expeditionJsonConfigHandler}
            value={expeditionJsonConfig}
          />
          <FileUpload
            type="file"
            inputProps={{ accept: '.json' }}
            onChange={handleFileUpload}
          />
        </ContentWrapper>
      </ExpansionPanel>
    </FormControl>
  )
}

export default React.memo(ConfigImport)
