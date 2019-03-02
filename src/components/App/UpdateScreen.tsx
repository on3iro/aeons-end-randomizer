import React from 'react'

import styled from 'styled-components/macro'

import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

const Wrapper = styled('div')`
  display: flex;
  justify-content: center;
  flex-flow: column nowrap;
  width: 100%;
`

const ButtonWrapper = styled('div')`
  text-align: center;
  width: 100%;

  .update-button {
    margin-top: 24px;
  }
`

const StyledHeadline = styled(Typography)`
  padding-bottom: 16px;
`

const StyledCard = styled(Card)`
  width: auto;
  max-width: 320px;
  margin: 56px auto 0;
  text-align: center;
`

const UpdateScreen = React.memo(({ newVersion }: {
  newVersion: string
}) => {
  return (
    <Wrapper>
      <StyledCard>
        <CardContent>
          <StyledHeadline variant="h6" component="h1">
            New Version: { newVersion }
          </StyledHeadline>
          <Typography paragraph>
            Good news, a new Version of Aeons End Randomizer is available :)
          </Typography>
          <Typography paragraph>
            <Link href="https://github.com/on3iro/aeons-end-randomizer/releases" target="_blank">Changelog</Link>
          </Typography>
          <ButtonWrapper>
            <Button
              onClick={() => window.location.reload(true)}
              variant="contained"
              color="secondary"
              className="update-button"
            >
              Update Now!
            </Button>
          </ButtonWrapper>
        </CardContent>
      </StyledCard>
    </Wrapper>
  )
})

export default UpdateScreen
