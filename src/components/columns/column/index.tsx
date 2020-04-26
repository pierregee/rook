import * as React from 'react'
import * as Style from './style'
import { ResponsiveProps } from '../../../utils/layout-helpers'
import { ColumnProps } from '../types'

const Column = ({ children, position = 'relative', ...props }: ColumnProps & ResponsiveProps) => (
  <Style.Column {...{ ...props, position }}>{children}</Style.Column>
)

export default Column
