import Button from '@mui/material/Button';
import React from 'react'


const CommonButton = ({children, color, size, sx, variant, onClick, disabled}) => {
  return (
      <Button
          onClick={onClick}
          color={color}
          size={size}
          sx={sx}
          variant={variant}
          disabled={disabled}
      >
          {children}
      </Button>
  )
}

export default CommonButton;