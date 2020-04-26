import styled from 'styled-components'
import { ResponsiveProps, responsiveCss } from '../../utils/layout-helpers'
import { BoxProps } from './types'

const Box = styled.div<BoxProps & ResponsiveProps>`
  ${responsiveCss}
`

export { Box }
