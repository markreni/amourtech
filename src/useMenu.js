import { useState } from 'react'

const useMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)

  return {
    handleClick,
    handleClose,
    open
  }
}

export default useMenu