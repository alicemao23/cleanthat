import React from 'react'
import styled from 'styled-components'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  label: {
    color: theme.colors.commercial.primary
  },
  placeholder: {
    color: theme.colors.placeholder
  },
  root: {
    color: 'red'
  },
  formControl: {
    width: '100%',
    minWidth: 120,
    height: 42,
    marginBottom: '30px'
  },
  menuItem: {
    color: theme.colors.textPrimary,
    backgroundColor: theme.colors.primaryLight,
    whiteSpace: 'normal',
    '& .MuiSelect-selectMenu:focus': {
      backgroundColor: theme.colors.primaryLight
    },
    '&.Mui-selected': {
      backgroundColor: theme.colors.primaryLight
    }
  }
}))

const SelectContainer = styled.div`
  position: relative;
`
const StyledFormControl = styled(FormControl)`
  border-radius: 6px;
  height: max-content;
  .MuiSelect-selectMenu {
    white-space: normal;
  }
  ${({ theme }) => `
  .MuiInputBase-root {
      // background-color: ${theme.colors.inputBackground}
    }
    .MuiSelect-icon {
      fill: ${theme.colors.secondaryLight};
    }
    `};
`

const SelectField = ({
  id,
  selectOptions,
  placeholder,
  label,
  required,
  ...props
}) => {
  const classes = useStyles()
  return (
    <SelectContainer>
      <StyledFormControl className={classes.formControl} required={required}>
        <InputLabel shrink className={classes.label}>
          {label}
        </InputLabel>
        <Select
          label={label}
          // className={values[name] ? classes.menuItem : classes.placeholder}
          id={id}
          renderValue={(val) => val || 'Select one'}
          {...props}
        >
          {placeholder && (
            <MenuItem key="placeholder" value="" disabled>
              {placeholder}
            </MenuItem>
          )}
          {selectOptions.map((option, i) => (
            <MenuItem
              key={i}
              disableRipple
              className={classes.menuItem}
              value={option}
            >
              {option}
            </MenuItem>
          ))}
        </Select>
        {/* <FormikError name={name} /> */}
      </StyledFormControl>
    </SelectContainer>
  )
}

export default SelectField
