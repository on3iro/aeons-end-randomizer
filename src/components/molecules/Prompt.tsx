import React from 'react'

const Prompt = React.memo(
  ({
    yesHandler,
    noHandler,
    children,
  }: {
    yesHandler: () => void
    noHandler: () => void
    children?: React.ReactChild
  }) => {
    return (
      <div>
        {children}
        <button onClick={yesHandler}>Yes</button>
        <button onClick={noHandler}>No</button>
      </div>
    )
  }
)

export default Prompt
