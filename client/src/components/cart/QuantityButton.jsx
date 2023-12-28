import styled from '@emotion/styled'
import { Box, Button, ButtonGroup } from '@mui/material'
import React from 'react'

const Component = styled(ButtonGroup)`
    margin-top:30px;
`

const StyledButton = styled(Button)`
    border-radius:50%
`



const QuantityButton = () => {
  return (
    <Component>
        <StyledButton>-</StyledButton>
        <Button disabled>1</Button>
        <StyledButton>+</StyledButton>
    </Component>
  )
}

export default QuantityButton
