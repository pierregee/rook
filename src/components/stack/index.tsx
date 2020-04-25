import * as React from 'react'
import styled from 'styled-components'

const StyledStack = styled.div`
  display: block;
  color: green;
  background-color: green;
  height: 200px;
  width: 200px;
`

const Stack = ({ children }) => <StyledStack>{children}</StyledStack>

export default Stack
