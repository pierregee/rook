import styled from 'styled-components'
import { ColumnProps } from '../types'
import { ResponsiveProps, responsiveCss } from '../../../utils/layout-helpers'

const Column = styled.li<ColumnProps & ResponsiveProps>`
  /* This should depend if columns uses equalWidth */
  flex-grow: 1;
  flex-basis: 0;
  position: ${p => p.position};
  ${responsiveCss}
`

export { Column }
