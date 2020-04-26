import * as React from 'react'
import * as Style from './style'

const Stack = ({ children, ...props }: any) => <Style.Stack {...props}>{children}</Style.Stack>

export default Stack
