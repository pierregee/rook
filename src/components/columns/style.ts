import styled, { css } from 'styled-components'
import { ColumnsProps } from './types'
import { ResponsiveProps, responsiveCss } from '../../utils/layout-helpers'

const Columns = styled.ul<ColumnsProps & ResponsiveProps>`
  background-color: green;
  display: flex;
  flex-direction: row;
  flex-basis: auto;
  ${p =>
    p.gap &&
    css`
      li {
        margin-right: ${p.gap}px;
        :last-child {
          margin-right: 0;
        }
      }
    `}
  ${responsiveCss}
`

export { Columns }
