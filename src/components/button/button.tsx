import * as React from 'react'

interface Props {
  text: String
  onClick: () => void
}

export default function Button({ text, onClick }: Props) {
  return <button onClick={onClick}>{text}</button>
}
