import * as React from 'react'
import { render, getByText, fireEvent } from '@testing-library/react'
import Button from '../button'

describe('Button', () => {
  test('should display text', () => {
    const { container } = render(<Button onClick={() => {}}>Test</Button>)

    getByText(container, 'Test')
  })
})

describe('Button', () => {
  test('should handle click events', () => {
    const onClickMock = jest.fn()
    const { container } = render(<Button onClick={onClickMock}>Test</Button>)

    const component = container.firstChild
    fireEvent.click(component)

    expect(onClickMock).toBeCalled()
  })
})
