import React from 'react'

import MuiTextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'

const StyledTextField = withStyles((theme) => ({
  root: {
    width: '100%',
    marginBottom: '30px',
    '& .MuiTextField-root': {},
    '& .MuiInputLabel-root': {
      color: theme.colors.commercial.primary
    }
  }
}))(MuiTextField)

const TextField = ({ label, id, placeholder, classes, ...props }) => {
  return (
    <div>
      <StyledTextField
        className={classes}
        label={label}
        InputLabelProps={{
          shrink: true
        }}
        placeholder={placeholder}
        colors="primary"
        {...props}
      />
    </div>
  )
}

export default TextField
