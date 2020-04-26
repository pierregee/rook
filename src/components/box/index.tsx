import * as React from 'react'
import * as Style from './style'
import { ResponsiveProps } from '../../utils/layout-helpers'
import { BoxProps } from './types'

const Box = ({ children, ...props }: BoxProps & ResponsiveProps) => <Style.Box {...props}>{children}</Style.Box>

export default Box
