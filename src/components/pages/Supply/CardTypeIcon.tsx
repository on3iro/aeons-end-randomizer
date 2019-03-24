import React from 'react'

type Props = {
  type: string
  classes: any
}

const CardTypeIcon = React.memo(({ type, classes }: Props) => {
  const typeClass = classes[`${type}Icon`]

  switch (type) {
    case 'gem': {
      return (
        <i
          className={`ra ra-lg ra-crystals ${classes.cardIcon} ${typeClass}`}
        />
      )
    }
    case 'relic': {
      return (
        <i
          className={`ra ra-lg ra-crystal-wand ${
            classes.cardIcon
          } ${typeClass}`}
        />
      )
    }
    case 'spell': {
      return (
        <i
          className={`ra ra-lg ra-scroll-unfurled ${
            classes.cardIcon
          } ${typeClass}`}
        />
      )
    }
    default: {
      return null
    }
  }
})

export default CardTypeIcon
