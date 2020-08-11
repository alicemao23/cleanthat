import React from 'react'

import MuiTextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel'
import { withStyles } from '@material-ui/core/styles'

// import FormikError from '../Error'

const StyledTextField = withStyles((theme) => ({
  root: {
    width: '100%',
    marginBottom: '30px',
    '& .MuiTextField-root': {},
    '& .MuiInputLabel-root': {
      color: theme.colors.commercial.primary
    }
    //     '& input:disabled + fieldset': {
    //       borderColor: theme.colors.backgroundColor,
    //       borderWidth: 0,
    //       backgroundColor: 'transparent'
    //     },
    //     '&:focused input + fieldset': {
    //       border: `3px solid ${theme.colors.textSecondary}`
    //     },
    //     '&.Mui-focused input + fieldset': {
    //       border: `3px solid ${theme.colors.primaryLight}`
    //     }
    //   },
    //   '& .Mui-disabled': {
    //     backgroundColor: theme.colors.backgroundColor
    //   }
  }
}))(MuiTextField)

const TextField = ({ label, id, placeholder, classes, ...props }) => {
  const {
    field: { value, name },
    field,
    form: { touched, initialStatus, errors }
  } = props

  // const isTextFieldPrepopulated = name in initialStatus

  const onChange = (event) => {
    const {
      field: { name },
      form: { handleChange, setFieldTouched, touched }
    } = props

    if (!touched[name]) {
      setFieldTouched(name, true)
    }
    handleChange(event)
  }

  return (
    <div>
      <StyledTextField
        {...field}
        error={errors[name] && touched[name]}
        onChange={onChange}
        className={classes}
        label={label}
        InputLabelProps={{
          shrink: true
        }}
        value={value}
        placeholder={placeholder}
        // InputProps={{ disabled: isTextFieldPrepopulated }}
        colors="primary"
        {...props}
      />
      {/* <FormikError name={name} /> */}
    </div>
  )
}

export default TextField
