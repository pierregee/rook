import * as React from 'react'

interface Props {
  children: React.ReactNode
  onClick: () => void
}

export default function Button({ children, onClick }: Props) {
  return <button onClick={onClick}>{children}</button>
}
