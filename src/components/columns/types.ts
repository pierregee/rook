import * as React from 'react'

export interface ColumnProps {
  children: React.ReactNode
}

export interface ColumnsProps {
  justifyContent?: 'center' | 'flex-start' | 'right' | 'space-between' | 'space-around'
  gap?: number
  children: React.ReactElement<ColumnProps> | Array<React.ReactElement<ColumnProps>>
}
