import React, { useState } from 'react'

import Typography from '@material-ui/core/Typography'
import { Loop, Publish, GetApp } from '@material-ui/icons'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import ShuffleButton from './ShuffleButton.jsx'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import DiscardTableCell from './DiscardTableCell.jsx'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'

import TURNORDERSETUPS from './turnOrderSetups.js'

const renderTurnOrderOptions = () => Object.values(TURNORDERSETUPS).map(setup => (
    <FormControlLabel
        key={setup.id}
        value={setup.id}
        control={<Radio />}
        label={setup.name} />
))

const createTurnOrderDeck = (turnOrderSetup) => {
    return turnOrderSetup.turnOrderCards.map((card, i) => {
        return (
            <Typography component='p' key={i}>
                {card.name}
            </Typography>
        )
    })
}


const getRandomTurnOrderCard = (deck) => {
    return deck[Math.floor(Math.random() * deck.length)]
}

const shuffleDeck = (deck) => {
    return deck.reduce(
        (acc, card, i) => {
            const newCard = getRandomTurnOrderCard(acc.currentDeck)
            const last = i === deck.length - 1

            if (last) {
                return [...acc.result, newCard]
            }

            const newDeck = acc.currentDeck.filter(card => card.id !== newCard.id)

            return {
               currentDeck: newDeck,
               result: [...acc.result, newCard]
            }
        }, {
            currentDeck: deck,
            result: []
        })
}

const TurnOrder = () => {

  // Turn order setup handling
  const [turnOrderSetup, setTurnOrderSetup] = useState(TURNORDERSETUPS['onePlayerThreeToc'])
  const handleTurnOrderSetup = (event) => {
    setTurnOrderSetup(TURNORDERSETUPS[event.target.value])
  }

  // Game state handling
  const [gameState, setGameState] = useState({
    started: false
  })

  const handleStartGame = () => {
    setGameState({
      started: true
    })
    setTurnOrderState({
        ...turnOrderState,
        deck: shuffleDeck(turnOrderSetup.turnOrderCards)
    })
  }

  const handleResetGame = () => {
    setGameState({
      started: false
    })
      setTurnOrderState({
          ...turnOrderState,
          discard: []
      })
  }

  // Turn order state handling
  const [turnOrderState, setTurnOrderState] = useState({
    deck: [],
    discard: []
  })

  const drawTurnOrderCard = (deck) => {
      if(deck.length === 0) return

      const cardDrawn = deck[deck.length - 1];

      setTurnOrderState({
          deck: deck.filter(card => card.id !== cardDrawn.id),
          discard: [...turnOrderState.discard, cardDrawn]
      })
  }

  const startNewRound = () => {
      setTurnOrderState({
          deck: shuffleDeck(turnOrderSetup.turnOrderCards),
          discard: []
      })
  }

  const addToTop = (cardId) => {
      const cardToAdd = turnOrderState.discard.find(card => card.id === cardId)

      setTurnOrderState({
          deck: [...turnOrderState.deck, cardToAdd],
          discard: turnOrderState.discard.filter(card => card.id !== cardId)
      })
  }

  const addToBottom = (cardId) => {
      const cardToAdd = turnOrderState.discard.find(card => card.id === cardId)

      setTurnOrderState({
          deck: [cardToAdd, ...turnOrderState.deck],
          discard: turnOrderState.discard.filter(card => card.id !== cardId)
      })
  }

    const shuffleIntoDeck = (cardId) => {
        const cardToShuffle = turnOrderState.discard.find(card => card.id === cardId)
        const newDeck = [...turnOrderState.deck, cardToShuffle]
        const shuffledDeck = shuffleDeck(newDeck)

        setTurnOrderState({
            deck: shuffledDeck,
            discard: turnOrderState.discard.filter(card => card.id !== cardId)
        })
    }

  return (
    <React.Fragment>
      {gameState.started
         ? (
         <React.Fragment>
             {turnOrderState.deck.length === 0
                 ? (<Button color='secondary' onClick={startNewRound}>New Round</Button>)
                 : (<Button color='secondary' onClick={() => drawTurnOrderCard(turnOrderState.deck)}>Draw a card</Button>)}
             <Table>
                 <TableBody>
            {turnOrderState.discard.map((card, i) => {
                return (

                <TableRow key={i}>
                    <DiscardTableCell>
                        <Typography component='p'>{card.name}</Typography>
                    </DiscardTableCell>
                    <DiscardTableCell align="center">
                        <IconButton aria-label="Add to top" title="Add to top" onClick={() => addToTop(card.id)}>
                            <Publish fontSize="small" />
                        </IconButton>
                    </DiscardTableCell>
                    <DiscardTableCell align="center">
                        <IconButton aria-label="Add to bottom" title="Add to bottom" onClick={() => addToBottom(card.id)}>
                            <GetApp fontSize="small" />
                        </IconButton>
                    </DiscardTableCell>
                    <DiscardTableCell align="center">
                        <IconButton aria-label="Shuffle into Turn Order Deck" title="Shuffle into Turn Order Deck" onClick={() => shuffleIntoDeck(card.id)}>
                            <Loop fontSize="small" />
                        </IconButton>
                    </DiscardTableCell>
                </TableRow>

            )})}
                 </TableBody>
             </Table>

            <ShuffleButton color='primary' variant='extended' onClick={handleResetGame}>
                Reset Game
            </ShuffleButton>
         </React.Fragment>
         )
         : (
         <React.Fragment>
           <RadioGroup
             aria-label='Players'
             name='turnOrderOptions'
             value={turnOrderSetup.id}
             onChange={handleTurnOrderSetup}>
             {renderTurnOrderOptions()}
           </RadioGroup>
           {createTurnOrderDeck(turnOrderSetup)}
           <ShuffleButton color='primary' variant='extended' onClick={handleStartGame}>
             Start Game
           </ShuffleButton>
         </React.Fragment>
         )}
    </React.Fragment>
  )
}

export default TurnOrder
