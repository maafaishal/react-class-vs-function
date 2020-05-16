import React from 'react'
import { render, getByPlaceholderText, fireEvent, act } from '@testing-library/react'

import WithStateHook from '../WithStateHook'

describe('WithStateHook', () => {
  it('renders properly', () => {
    const { container  } = render(<WithStateHook />)
    const placeholder = "Type anything text"
    const finalText = 'My Experiment'

    const inputComp = getByPlaceholderText(container, placeholder)

    act(() => {
      fireEvent.change(inputComp, {
        target: {
          value: finalText
        }
      })
    })

    expect(inputComp.value).toBe(finalText)
  })
})