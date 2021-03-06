import React from 'react'
import styled from 'styled-components'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  label: {
    fontFamily: theme.fonts.primary,
    color: theme.colors.commercial.primary,
    fontWeight: 'bold',
    letterSpacing: '0.1em',
    textTransform: 'uppercase'
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
  value,
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
          id={id}
          renderValue={(val) => {
            return val || 'Select one'
          }}
          value={value}
          {...props}
        >
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
      </StyledFormControl>
    </SelectContainer>
  )
}

export default SelectField
