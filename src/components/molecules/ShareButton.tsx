import React from 'react'
import IconButton from 'components/atoms/IconButton'
import ShareIcon from '@material-ui/icons/Share'

type Props = {
  onClick: (...args: any) => void
  className?: string
}

const ShareButton = ({ onClick, className, ...rest }: Props) => (
  <IconButton
    color="primary"
    aria-label="Delete"
    onClick={onClick}
    className={className}
    {...rest}
  >
    <ShareIcon />
  </IconButton>
)

export default React.memo(ShareButton)
