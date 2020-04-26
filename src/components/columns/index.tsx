import * as React from 'react'
import * as Style from './style'
import { ColumnsProps } from './types'
import { ResponsiveProps } from '../../utils/layout-helpers'

/* 
  This layout component will:
    a. display items horizontally 

  Requirements to use this component
    a. <Column /> component should be used as its children
*/
const Columns = ({ children, ...props }: ColumnsProps & ResponsiveProps) => (
  <Style.Columns {...props}>{children}</Style.Columns>
)

export default Columns
